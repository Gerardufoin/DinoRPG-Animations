// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe2/mt/kiroukou/motion/Tween.hx

import { PixiHelper } from './PixiHelper.js';

/**
 * Type of movement for the Tween.
 */
export let TFx = {
	TLinear: 0, // linear between start and end
	TLoop: 1, // loop : initial value -> final value -> initial value
	TLoopEaseIn: 2, // loop with slow start
	TLoopEaseOut: 3, // loop with slow end
	TEase: 4, // slow start, slow end
	TEaseIn: 5, // slow start, linear end
	TEaseOut: 6, // linear start, slow end
	TBurn: 7, // fast start, slow middle, fast end
	TBurnIn: 8, // fast start, slow end
	TBurnOut: 9, // slow start, fast end
	TZigZag: 10, // osciallate back and forth until reaching end
	TRand: 11, // random progress before reaching the end. WARNING: The duration will not be respected (will be longer)
	TShake: 12, // random progress between start and end, then stops at start. Fast start.
	TShakeBoth: 13, // Like TShake but value can become negative.
	TJump: 14, // jump from start to finish
	TElasticEnd: 15, // slight overshoot at the end then goes to end.
	TCustom: 16 // custom progression function.
};

/**
 * Abstract class describing a Property capable of being updated by a Tween.
 * If you lost your way and want to use this project Tween class for some reason, you can add custom types of properties to Tween by extending this class.
 */
export class IProperty {
	/**
	 * Updates the property based on the given progress between 0 and 1.
	 * @param {number} p Current progress of the animation.
	 * @param {number} fx The TFx to use to update the property.
	 */
	update(p, fx) {}
	/**
	 * Initialize the linked property based on its initial value and if the animation plays in reverse or not.
	 * @param {boolean} reversed True if the animation plays backward.
	 */
	init(reversed) {}
}

/**
 * Define how a property is handled when said property is a number.
 */
export class NumberProperty extends IProperty {
	/**
	 * Getter of the property.
	 * @type {() => number}
	 */
	_get;
	/**
	 * Setter of the property.
	 * @type {(number) => number}
	 */
	_set;

	/**
	 * Initial position of the property.
	 * @type {number}
	 */
	_start;
	/**
	 * End position of the property.
	 * @type {number}
	 */
	_end;
	/**
	 * Delta between _start and _end.
	 * @type {number}
	 */
	_delta;

	/**
	 * Creates a new NumberProperty, managing a property of type number for a specific object.
	 * @param {() => number} get Function allowing to get the value of the property.
	 * @param {(number) => number} set Function allowing to set the value of the property and return said value.
	 * @param {number} end The end value which should be reached once update receives a coef of 1.
	 */
	constructor(get, set, end) {
		super();
		this._set = set;
		this._get = get;
		this._end = end;
	}

	/**
	 * Initialize the linked property.
	 * @param {boolean} reversed If true, the property is initialized with the end value.
	 */
	init(reversed) {
		if (reversed) {
			this._start = this._end;
			this._end = this._get();
			this._set(this._start);
		} else {
			this._start = this._get();
		}
		this._delta = this._end - this._start;
	}

	/**
	 * Update the linked property based on the progress of the animation.
	 * @param {number} p The current progress of the animation.
	 * @param {number} fx The type of Tween used for the update. If TShake or TShakeBoth, randomness is added to the property.
	 */
	update(p, fx) {
		switch (fx) {
			case TFx.TShake:
				this._set(this._start + Math.round(Math.random() * p * this._delta));
				break;
			case TFx.TShakeBoth:
				this._set(this._start + Math.round(Math.random() * p * this._delta)) *
					(Math.round(Math.random() * 2) * 2 - 1);
				break;
			default:
				this._set(this._start + this._delta * p);
		}
	}
}

/**
 * MotionTwin Tweening class.
 *
 * Used to create smooth animations with specific effects.
 *
 * Check the TFx enum for the list of effects.
 *
 * Probably overkill to recode the whole thing (minus cloning) just for DinoRPG and its 5-6 uses of the class, but oh well.
 */
export class Tween {
	/**
	 * Object affect by the Tween.
	 * @type {object}
	 */
	_target;
	/**
	 * Properties of the target changing over time.
	 * @type {IProperty[]}
	 */
	_properties = [];
	/**
	 * Duration of the Tween.
	 * @type {number}
	 */
	_duration = 0;
	/**
	 * The actual duration of the Tween, which is _duration multiplied by _timeScale.
	 * @type {number}
	 */
	_cachedDuration;
	/**
	 * Has the Tween been initialized.
	 * @type {boolean}
	 */
	_initialized = false;

	/**
	 * Current progression of the Tween.
	 * @type {number}
	 */
	_ke;
	/**
	 * If true, the Tween start automatically. True by default at creation.
	 * @type {boolean}
	 */
	_autoStart;
	/**
	 * If true, the next Tween in the chain is the parent instead of next..
	 * @type {boolean}
	 */
	_backward = false;
	/**
	 * If true, the Tween start from the destination and goes to the start.
	 * @type {boolean}
	 */
	_reversed = false;
	/**
	 * Delay in seconds before the start of the Tween. 0 by default.
	 * @type {number}
	 */
	_delay = 0;
	/**
	 * The actual delay of the Tween, which is _delay multiplied by _timeScale.
	 * @type {number}
	 */
	_cachedDelay = 0;
	/**
	 * Scale the duration and delay of the Tween. A 1s Tween with a time scale of 2 will be the same Tween but done over 2s.
	 * @type {number}
	 */
	_timeScale = 1;
	/**
	 * Number of time the Tween has to repeat itself. 1 by default.
	 * @type {number}
	 */
	_loops = 1;
	/**
	 * Number of time the Tween has currently looped.
	 * @type {number}
	 */
	_count = 0;
	/**
	 * Current timer of the Tween animation.
	 * @type {number}
	 */
	_time = 0;

	/**
	 * The next Tween to play once this one is finished.
	 * @type {Tween}
	 */
	_next;
	/**
	 * The parent Tween which played before this one.
	 * @type {Tween}
	 */
	_parent;

	/**
	 * Current easing of the Tween, based on TFx values.
	 * @type {number}
	 */
	_fx = TFx.TLinear;
	/**
	 * Current easing callback for the Tween.
	 * @type {(number) => number}
	 */
	_ease;
	/**
	 * Custom easing function in case of a TCustom fx.
	 * @type {(number) => number}
	 */
	_customEase;
	/**
	 * Probability for TFx.TRand easing.
	 * @type {number}
	 */
	_randomEaseProba = 1;

	/**
	 * Has the Tween started.
	 * @type {boolean}
	 */
	_started = false;
	/**
	 * Has the Tween finished.
	 * @type {boolean}
	 */
	_finished = false;
	/**
	 * Is the Tween currently paused.
	 * @type {boolean}
	 */
	_paused = false;
	/**
	 * Is the Tween locked.
	 * A locked Tween will create a new Tween when "from" or "to" is called.
	 */
	_locked = false;
	/**
	 * Should the Tween be disposed of.
	 * @type {boolean}
	 */
	_disposed = false;
	/**
	 * Can the Tween be set to be disposed of?
	 * While false, the Tween cannot be set to be disposed.
	 * @type {boolean}
	 */
	_canDispose = true;
	/**
	 * On start callback. Fires when the Tween is starting.
	 * Receives the Tween as parameter.
	 * @type {(Tween) => void}
	 */
	_onStart;
	/**
	 * On update callback. Fires every time the Tween is updated.
	 * Receives the Tween and current progress (0-1) as parameter.
	 * @type {(Tween, number) => void}
	 */
	_onUpdate;
	/**
	 * On complete callback. Fires once the Tween is finished.
	 * Receives the Tween as parameter.
	 * @type {(Tween) => void}
	 */
	_onComplete;

	/**
	 * Creates a new Tween for the given target.
	 * The easing function can be specified now or set later.
	 * If autostart is not set, the Tween will start automatically at the next update.
	 * @param {object} target The target to be animated by the Tween.
	 * @param {number} tfx The chosen easing function based on TFx values.
	 * @param {boolean} autoStart Choose if the Tween starts automatically after creation.
	 */
	constructor(target, tfx = TFx.TLinear, autoStart = true) {
		this._target = target;
		this._autoStart = autoStart;
		this.fx(tfx);
	}

	/**
	 * Bezier function, transforming a point t based on the given control points.
	 * @param {number} t Value to transform.
	 * @param {number} p0 First control point.
	 * @param {number} p1 Second control point.
	 * @param {number} p2 Third control point.
	 * @param {number} p3 Fourth control point.
	 * @returns {number} The value t modified by the bezier.
	 */
	static bezier(t, p0, p1, p2, p3) {
		const dt = 1 - t;
		const dt2 = dt * dt;
		const dt3 = dt * dt2;
		const t2 = t * t;
		const t3 = t * t2;
		return dt3 * p0 + 3 * t * dt2 * p1 + 3 * t2 * dt * p2 + t3 * p3;
	}

	/**
	 * Sets the on start callback, which will be fired once the Tween starts.
	 * @param {(Tween) => void} cb The callback to call once the Tween starts.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	onStart(cb) {
		this._onStart = cb;
		return this;
	}

	/**
	 * Sets the on update callback, which will be fired every time the Tween updates.
	 * @param {(Tween, number) => void} cb The callback to call at every update.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	onUpdate(cb) {
		this._onUpdate = cb;
		return this;
	}

	/**
	 * Sets the on complete callback, which will be fired once the Tween finishes.
	 * @param {(Tween) => void} cb The callback to call once the Tween finishes.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	onComplete(cb) {
		this._onComplete = cb;
		return this;
	}

	/**
	 * Sets the number of time the Tween has to loop.
	 * @param {number} n The number of time to loop.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	loop(n) {
		this._loops = n;
		return this;
	}

	/**
	 * Sets the delay in seconds before the start of the Tween.
	 * @param {number} t The new delay.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	delay(t) {
		this._delay = t;
		return this;
	}

	/**
	 * Scale the duration and delay of the Tween over time.
	 * @param {number} n The new scale of the Tween.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	scale(n) {
		this._timeScale = n;
		this._cachedDuration = this._timeScale * this._duration;
		this._cachedDelay = this._timeScale * this._delay;
		return this;
	}

	/**
	 * Initialize the current Tween.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	apply() {
		this.init();
		return this;
	}

	/**
	 * Set the adequate ease function depending on the chose TFx.
	 * @param {number} e The TFx effect to use.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	fx(e) {
		this._fx = e;
		switch (e) {
			case TFx.TLinear:
				this._ease = (v) => v;
				break;
			case TFx.TRand:
				this._ease = (v) => (v === 0 || v === 1 || Math.random() < this._randomEaseProba ? v : this._ke);
				break;
			case TFx.TEase:
				this._ease = (v) => Tween.bezier(v, 0, 0, 1, 1);
				break;
			case TFx.TEaseIn:
				this._ease = (v) => Tween.bezier(v, 0, 0, 0.5, 1);
				break;
			case TFx.TEaseOut:
				this._ease = (v) => Tween.bezier(v, 0, 0.5, 1, 1);
				break;
			case TFx.TBurn:
				this._ease = (v) => Tween.bezier(v, 0, 1, 0, 1);
				break;
			case TFx.TBurnIn:
				this._ease = (v) => Tween.bezier(v, 0, 1, 1, 1);
				break;
			case TFx.TBurnOut:
				this._ease = (v) => Tween.bezier(v, 0, 0, 0, 1);
				break;
			case TFx.TZigZag:
				this._ease = (v) => Tween.bezier(v, 0, 2.5, -1.5, 1);
				break;
			case TFx.TLoop:
				this._ease = (v) => Tween.bezier(v, 0, 1.33, 1.33, 0);
				break;
			case TFx.TLoopEaseIn:
				this._ease = (v) => Tween.bezier(v, 0, 0, 2.25, 0);
				break;
			case TFx.TLoopEaseOut:
				this._ease = (v) => Tween.bezier(v, 0, 2.25, 0, 0);
				break;
			case TFx.TShake:
				this._ease = (v) => Tween.bezier(v, 0.5, 1.22, 1.25, 0);
				break;
			case TFx.TShakeBoth:
				this._ease = (v) => Tween.bezier(v, 0.5, 1.22, 1.25, 0);
				break;
			case TFx.TJump:
				this._ease = (v) => Tween.bezier(v, 0, 2, 2.79, 1);
				break;
			case TFx.TElasticEnd:
				this._ease = (v) => Tween.bezier(v, 0, 0.7, 1.5, 1);
				break;
			case TFx.TCustom:
				this._ease = this._customEase;
				break;
		}
		return this;
	}

	/**
	 * Set the easing function to a custom function. The TFx used will be TCustom.
	 * @param {(number) => number} e The custom easing function to use.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	ease(e) {
		this._customEase = e;
		return this.fx(TFx.TCustom);
	}

	/**
	 * Set the easing function to TRand and set the probability.
	 * @param {number} n The probability of the random, between 0 and 1.
	 * @returns {Tween} This Tween for chaining calls.
	 */
	rand(n) {
		this._randomEaseProba = n;
		return this.fx(TFx.TRand);
	}

	/**
	 * Chain the current Tween with a new Tween once it is done.
	 * @param {object} target The target of the new Tween. If empty, same target as the current Tween.
	 * @returns {Tween} The new Tween created to chain calls.
	 */
	chain(target = undefined) {
		const t = target ?? this._target;
		const tween = new Tween(t);
		this._next = tween;
		tween._parent = this;
		return tween;
	}

	/**
	 * Start the Tween, setting the target properties to their initial value and resetting all Tween properties.
	 * @returns {Tween} This Tween to chain calls.
	 */
	start() {
		if (!this._started || this._finished) {
			this._started = true;
			this._finished = false;
			this.init();
			this._time = 0;
			this._count = 0;
			this._ke = 0;
			this._cachedDuration = this._duration * this._timeScale;
			this._cachedDelay = this._delay * this._timeScale;
			if (this._onStart) {
				this._onStart(this);
			}
			this._disposed = false;
		}
		return this;
	}

	/**
	 * Get the current interpolation of the Tween animation.
	 * @returns {number} The current interpolation.
	 */
	getInterpolation() {
		return this._ke;
	}

	/**
	 * Stop the Tween.
	 * @returns {Tween} This Tween to chain calls.
	 */
	stop() {
		if (this._started) {
			this._started = false;
			this._finished = true;
		}
		return this;
	}

	/**
	 * Replay the Tween from the start once this Tween is completed.
	 */
	replay() {
		this._canDispose = false;
		/** @type {Tween} */
		let head = this;
		while (head._parent) {
			head = head._parent;
		}
		if (this._finished) {
			head.start();
		} else {
			this.delay(0);
			this.onComplete((t) => head.start());
		}
	}

	/**
	 * Set the Tween to be played in reverse from the current position.
	 * @returns {Tween} This Tween to chain calls.
	 */
	reverse() {
		this._canDispose = false;
		const isBackward = !this._backward;
		/** @type {Tween} */
		let n = this;
		while (n) {
			n._backward = !n._backward;
			n = isBackward ? n._parent : n._next;
		}
		return this.start();
	}

	/**
	 * Pause the animation of the Tween.
	 * @returns {Tween} This Tween to chain calls.
	 */
	pause() {
		if (!this._paused && !this._finished) {
			this._paused = true;
		}
		return this;
	}

	/**
	 * Resume the Tween if it was paused.
	 * @returns {Tween} This Tween to chain calls.
	 */
	resume() {
		this._paused = false;
		return this;
	}

	/**
	 * Initialize the Tween if it was not already initialized.
	 */
	init() {
		if (!this._initialized) {
			this._properties.map((p) => p.init(this._reversed));
			this._initialized = true;
		}
	}

	/**
	 * Reset the current Tween animation to the begining.
	 */
	reset() {
		this._properties.map((p) => p.update(0, this._fx));
	}

	/**
	 * Configure the Tween with the given properties.
	 * Once configured, the current Tween is locked and any call to "from" and "to" will create a new Tween in the chain.
	 * @param {IProperty[]} inf The list of properties influenced by the Tween.
	 * @param {number} duration The duration of the Tween.
	 * @param {boolean} reversed If the Tween plays in reverse or not. This is the case if the configure was called by "from".
	 */
	configure(inf, duration, reversed) {
		this._properties = inf;
		this._duration = duration;
		this._reversed = reversed;
		this._locked = true;
	}

	/**
	 * Add a new animation and call configure.
	 * If the current Tween is finished or locked, a new Tween is created and configured by calling "chain".
	 * @param {IProperty[]} inf The list of properties influenced by the Tween.
	 * @param {number} duration The duration of the Tween.
	 * @param {boolean} reverse If the Tween plays in reverse or not. This is the case if the add function was called by "from".
	 * @returns {Tween} This Tween to chain calls.
	 */
	add(inf, duration, reverse = false) {
		if (this._finished || this._locked) {
			return this.chain().add(inf, duration, reverse);
		}
		this.configure(inf, duration, reverse);
		if (this._autoStart) {
			this.start();
		}
		return this;
	}

	/**
	 * Create the IProperty linked with the Tween target, which will allow to modify it over time.
	 * @param {object} p The list of property of the target to modify with the expected final value.
	 * @returns {IProperty[]} The converted list of properties.
	 */
	convertProperties(p) {
		const properties = [];
		for (const k of Object.keys(p)) {
			const type = typeof this._target[k];
			if (type === 'number') {
				properties.push(
					new NumberProperty(
						() => this._target[k],
						(v) => {
							this._target[k] = v;
							return this._target[k];
						},
						p[k]
					)
				);
			} else {
				console.error(`Tween: Unable to convert given target property: '${type}' not managed.`);
			}
		}
		return properties;
	}

	/**
	 * Creates an animation starting from the given properties and ending at the current target properties.
	 * @param {number} duration The duration of the animation.
	 * @param {object} properties The list of properties to impact.
	 * @returns {Tween} This Tween to chain calls.
	 */
	from(duration, properties) {
		return this.add(this.convertProperties(properties), duration, true);
	}

	/**
	 * Creates an animation ending at the given properties based on the current target properties.
	 * @param {number} duration The duration of the animation.
	 * @param {object} properties The list of properties to impact.
	 * @returns {Tween} This Tween to chain calls.
	 */
	to(duration, properties) {
		return this.add(this.convertProperties(properties), duration);
	}

	/**
	 * Update the animation of the Tween, based on the given elapsed time.
	 * @param {number} tickTime The elasped time since the last udpate.
	 */
	update(tickTime) {
		if (this._started && !this._finished && !this._paused) {
			this._time += tickTime;
			if (this._time > this._cachedDelay) {
				const realTime = this._time - this._cachedDelay;
				let k = PixiHelper.mm(0, realTime / this._cachedDuration, 1);

				if (this._backward) {
					k = 1.0 - k;
				}
				this._ke = this._ease(k);
				this._properties.map((p) => p.update(this._ke, this._fx));
				if (this._onUpdate) {
					this._onUpdate(this, k);
				}
				if ((!this._backward && k == 1.0) || (this._backward && k == 0.0)) {
					this.stop();
					if (++this._count < this._loops) {
						const n = this._count;
						this.start();
						this._count = n;
					} else {
						if (this._onComplete) {
							this._onComplete(this);
						}
						// MT: petit hack, mais si le onComplete relance le tween (replay, reverse) alors le flag started sera reinitialisé
						if (this._started) return;
						// MT: on lance le complete avant, pour permettre de faire un reverse, un replay etc. et ainsi couper le dispose automatique des ressources
						if (this._backward) {
							if (this._parent) {
								this._parent.start();
							} else if (this._canDispose) {
								this.getHead()._disposed = true;
							}
						} else {
							if (this._next) {
								this._next.start();
							} else if (this._canDispose) {
								this.getHead()._disposed = true;
							}
						}
					}
				}
			}
		}
		if (this._next) {
			this._next.update(tickTime);
		}
	}

	/**
	 * Get the top parent in the chain of Tweens.
	 * @returns {Tween} The top parent of the chain.
	 */
	getHead() {
		/** @type {Tween} */
		let h = this;
		while (h._parent) {
			h = h._parent;
		}
		return h;
	}
}
