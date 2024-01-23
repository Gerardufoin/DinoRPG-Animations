// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Fighter.hx

import { Container, Graphics } from 'pixi.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { Animator } from '../display/Animator.js';
import { sdino } from '../sdino.js';
import { Phys } from './Phys.js';
import { State } from './State.js';
import { Scene } from './Scene.js';
import { Timer } from './Timer.js';
import { SimpleTween } from './SimpleTween.js';
import { Slot } from './Slot.js';
import { Score } from './parts/Score.js';
import { smonster } from '../smonster.js';
import { Title } from './parts/Title.js';
import { Sprite } from './Sprite.js';
import { Bolt } from './parts/Bolt.js';

export class Fighter extends Phys {
	static Mode = {
		Waiting: 0,
		Anim: 1,
		Dead: 2,
		Dodge: 3
	};
	static Props = {
		Static: 0,
		GroundOnly: 1,
		Dark: 2,
		Boss: 3
	};
	static MovementType = {
		Jump: 0,
		JumpAbove: 1,
		JumpDown: 2,
		Run: 3
	};
	static LifeEffect = {
		Normal: 0,
		Fire: 1,
		Wood: 2,
		Water: 3,
		Lightning: 4,
		Air: 5,
		Burn: 6,
		Heal: 7,
		Skull: 8,
		Acid: 9
	};
	static Status = {
		Sleep: 0,
		Flames: 1,
		Burn: 2,
		Intang: 3,
		Fly: 4,
		Slow: 5,
		Quick: 6,
		Stoned: 7,
		Bless: 8,
		Poison: 9,
		Shield: 10,
		Heal: 11,
		MonoElt: 12,
		Dazzled: 13,
		Stun: 14
	};
	static LAYERS = {
		DP_BACK: 0,
		DP_BODY: 1,
		DP_STATUS: 2,
		DP_FRONT: 3
	};
	/**
	 * Layers of the Fighters. Each keys of Fighter.LAYERS generate a layer at initialisation.
	 * @type {{container: Container, sprites: Sprite[]}[]}
	 */
	_layers = [];

	/**
	 * The PixiJS representation of the Fighter.
	 * @type {Animator}
	 */
	_animator;
	/**
	 * Body of the fighter. Add in the scene and contains the animator.
	 * @type {Container}
	 */
	body;
	/**
	 * Fighter id, used to determinate which fighter does which action.
	 * @type {number}
	 */
	id;
	/**
	 * Slot display of the Fighter.
	 * @type {Slot}
	 */
	_slot;

	_lock = false;
	/**
	 * Name of the Fighter.
	 * @type {string}
	 */
	_name;
	_isDino;
	_life;
	_maxLife;
	_energy = 100;
	_maxEnergy = 100;
	_size = 1;
	/**
	 * List of props attached to the Fighter, based on Fighter.Props.
	 * @type {number[]}
	 */
	_props = [];

	_side = true;
	_sens = 1;

	_defaultAnim = 'stand';
	_currentAnim = 'stand';
	_walkSpeed = 1.8;
	_runSpeed = 8;
	_range = 10;

	/**
	 * Height of the Fighter. Defined by the _box entity in MT.
	 * In this project, defined by the value returned by the entity collider.
	 * @type {number}
	 */
	_height;
	/**
	 * Width of the Fighter, defined by the value returned by the entity collider.
	 * @type {number}
	 */
	_width;

	/**
	 * Get the height of the fighter.
	 * @type {number}
	 */
	get height() {
		return this._height;
	}

	/**
	 * Get the running speed of the fighter.
	 * @type {number}
	 */
	get runSpeed() {
		return this._runSpeed;
	}

	/**
	 * Current status of the Fighter, list of Fighter.Status with their possible value.
	 * @type {{e: number, power?: number}[]}
	 */
	_status = [];

	/**
	 * The last registered coordinates of the Fighter.
	 * Used to send back the Fighter to this position via the return action.
	 * @type {{x: number, y: number} | null}
	 */
	_lastCoord = null;
	/**
	 * Walk path of the Fighter. Null if the Fighter is not currently walking.
	 * @type {{x: number, y: number, to: number} | null}
	 */
	_walkPath = null;
	/**
	 * Current movement of the Fighter. Null is the Fighter is not currently moving.
	 * @type {SimpleTween | null}
	 */
	_tweenMove = null;
	/**
	 * Current movement type associated with the movement Tween. Value of the enum Fighter.MovementType.
	 * @type {number | null}
	 */
	_moveType = null;

	_mode = Fighter.Mode.Waiting;

	/**
	 * Current State using the Fighter for an action. Null if the Fighter does not have a state.
	 * @type {State | null}
	 */
	_focus = null;
	/**
	 * While this number is greater than 0, the Fighter cannot participate in a new action.
	 * @type {number}
	 */
	_lockTimer = 0;

	constructor(fInfos, scene) {
		const body = new Container();
		super(body, scene);

		this.id = fInfos.fid;
		this._isDino = fInfos.dino;
		this._name = fInfos.name;
		this._props = fInfos.props;
		this._life = fInfos.life;
		this._maxLife = fInfos.maxLife ?? fInfos.life;
		this._size = Math.pow(fInfos.scale ?? 1, 0.65);

		this.body = body;
		for (const k in Fighter.LAYERS) {
			this._layers.push({
				container: new Container(),
				sprites: []
			});
			this.body.addChild(this._layers[Fighter.LAYERS[k]].container);
		}

		if (this.isDino) {
			const dino = new sdino({
				data: fInfos.gfx,
				autoUpdate: false,
				pflag: true,
				scale: this._size
			});
			this._height = dino.collider.height * this._size;
			this._width = dino.collider.width * this._size;
			this._animator = dino;
		} else {
			const monster = new smonster({
				type: fInfos.gfx,
				autoUpdate: false,
				pflag: true,
				scale: this._size
			});
			this._height = monster.collider.height * this._size;
			this._width = monster.collider.width * this._size;
			this._animator = monster;
		}
		this._layers[Fighter.LAYERS.DP_BODY].container.addChild(this._animator);
		this.setSide(fInfos.side);

		this._ray = this._width * 0.5 * this._size;
		this.setForce(10 * this._size);

		// TODO
		/*if( haveProp(_PStatic) ) {
			flFreeze = true;
			force = Math.NaN;
		}*/

		/* Notes:
		skin._x = intSide* 20 ;
		skin._y = -31 ;
		skin._xscale = -intSide * 100 ;
		skin._yscale = 100 ;
		if(haveProp(_PDark)) skinDark(); ?

		*/

		/*
		dropShadow() ;

		// BIND FX FUNC
		Reflect.setField( skin,"_fxAttach",fxAttach );
		Reflect.setField( skin,"_fxAttachInside",fxAttachInside );
		Reflect.setField( skin,"_fxAttachScene",fxAttachScene );


		switch(Scene.me.groundType) {
			case "water":
				var h = -5;
				mcOndeFront = bdm.attach("mcWaterOnde",DP_FRONT);
				mcOndeFront._xscale = ray*2;
				mcOndeFront._yscale = ray;
				mcOndeFront._y = h;
				mcOndeBack = bdm.attach("mcWaterOnde",DP_BACK);
				mcOndeBack._xscale = mcOndeFront._xscale;
				mcOndeBack._yscale = -mcOndeFront._yscale;
				mcOndeBack._y = h;

			default:

		}
		fxJump();
		*/

		this._friction = 0.9;

		if (this._isDino) {
			this._slot = new Slot(this);
			this._scene.addSlot(this._slot);
		}

		if (this._scene.debugMode) {
			this.debugShowOrigin();
		}
	}

	/**
	 * Adds a Sprite to the specific layer.
	 * The Sprite will then be updated when the Fighter will be updated.
	 * @param {Sprite} sprite The Sprite to add.
	 * @param {number} layer The Fighter.LAYERS where to add the Sprite.
	 */
	addSprite(sprite, layer) {
		this._layers[layer].container.addChild(sprite.getRootContainer());
		this._layers[layer].sprites.push(sprite);
	}

	/**
	 * TODO.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._animator.update(timer.deltaTimeMS);
		this._layers.map((l) => {
			l.sprites = l.sprites.filter((s) => {
				s.update(timer);
				if (s.isDeleted) {
					l.container.removeChild(s.getRootContainer());
					return false;
				}
				return true;
			});
		});
		if (this._lockTimer > 0) {
			this._lockTimer -= timer.tmod;
		}
		switch (this._mode) {
			case Fighter.Mode.Waiting:
				if (this._focus == null && this._lockTimer <= 0) {
					this.updateWait(timer);
				}
				this.checkBounds(timer);
				break;
			case Fighter.Mode.Anim:
				if (this._animator.hasAnimEnded) {
					this.setWaiting();
				}
				break;
			case Fighter.Mode.Dead:
				break;
			case Fighter.Mode.Dodge:
				this.updateDodge();
				break;
		}
		/*
		updateFx();
		updateStatus();*/
	}

	/**
	 * Check if the Fighter is available to start walking.
	 *
	 * To start walking, a Fighter must be waiting, not have a current state, not be locked, not be frozen, and not currently walking.
	 * @returns {boolean} True if the Fighter is ready to walk, false otherwise.
	 */
	isReadyToWalk() {
		return (
			this._mode == Fighter.Mode.Waiting && this._focus == null && this._lockTimer <= 0 && this._walkPath == null
		); //TODO && flFreeze != true ;
	}

	/**
	 * Update the waiting mode the of the Fighter.
	 *
	 * In this mode, the Fighter can only walk around if not frozwn or static.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	updateWait(timer) {
		//TODO if( flFreeze || haveProp(_PStatic) ) return;
		if (this._walkPath != null) {
			const a = this.getAng(this._walkPath);
			const d = this.getDist(this._walkPath);
			this._vx = -Math.cos(a) * this._walkSpeed * 0.5;
			this._vy = -Math.sin(a) * this._walkSpeed * 0.5;
			this._walkPath.to -= timer.tmod;
			if (d < this._walkSpeed * 2 || this._walkPath.to <= 0) {
				this.stopWalk();
			}
			// TODO Play animation in reverse if Fighter is moving backward.
			/*if(this._vx * this._intSide < 0 ) {
					var m:flash.MovieClip = skin._p0._p1._anim._sub;
					m.stop();
					m.onEnterFrame = function() {
						if( m._currentframe <= 1 )
							m.gotoAndStop(m._totalframes - 1);
						m.prevFrame();
					}
				}*/
		}
	}

	/**
	 * Set a random destination and make the Fighter walk toward it.
	 */
	startWalk() {
		this._animator.playAnim('walk');
		const w = Scene.WIDTH * 0.5;
		this._walkPath = {
			x: w - this.intSide * (20 + Math.random() * (w - 80)),
			y: PixiHelper.mm(
				this._ray,
				this._y + (Math.random() * 2 - 1) * 20,
				this._scene.getPYSize() - 2 * this._ray
			),
			to: 150.0
		};
	}

	/**
	 * Stop the current walk animation of the Fighter.
	 */
	stopWalk() {
		this._animator.playAnim(this._defaultAnim);
		this._walkPath = null;
		this._vx = 0;
		this._vy = 0;
	}

	/**
	 * Set the side of the fighter.
	 * @param {boolean} side The side of the fighter. True for left side (facing right), False for right side (facing left).
	 */
	setSide(side) {
		this._side = side;
		this._animator.flip(side);
	}

	/**
	 * Return the side of the Fighter as an integer.
	 * @returns {number} 1 for left side, -1 for right side.
	 */
	get intSide() {
		return this._side ? 1 : -1;
	}

	/**
	 * Check if the Fighter is a dino or not.
	 * @returns {boolean} True if the Fighter is a dino, false otherwise.
	 */
	get isDino() {
		return this._isDino;
	}

	/**
	 * Returns the side of the Fighter.
	 * @returns {boolean} True if the Fighter is on the left side, false otherwise.
	 */
	get side() {
		return this._side;
	}

	/**
	 * Set the current direction of the Fighter.
	 * Different from side, where side is the global direction, while sens is the temporary one (if the Fighter is moving backward for example).
	 * @param {boolean} sens The direction the Fighter will be facing. True for the default direction, False for the opposite direction.
	 */
	setSens(sens) {
		this._sens = sens ? 1 : -1;
		this.body.scale.x = this._sens;
	}

	/**
	 * Get the coordinates where the Fighter needs to be to physically attack another Fighter.
	 * @param {Fighter} target Target of the attack.
	 * @param {number} sens Direction of the attack.
	 * @returns {{x: number, y: number}} The xy coordinates where the Fighter has to go.
	 */
	getBrawlPos(target, sens = 1) {
		return { x: target._x + (this._range + this._ray + target._ray) * target.intSide * sens, y: target._y + 2 };
	}

	/**
	 * Checks if the Fighter is in attack range of another Figther.
	 * @param {Fighter} target The Fighter to attack.
	 * @returns {boolean} True if the Fighter is in attack range, false otherwise.
	 */
	atRange(target) {
		return this.getDist({ x: target._x, y: target._y }) <= this._range + this._ray + target._ray;
	}

	/**
	 * Reset the direction of the Fighter to their default (based on their side).
	 * Set the animation to the current default animation except if they are currently landing.
	 */
	backToDefault() {
		this.setSens(true);
		if (this._currentAnim !== 'land') {
			this.playAnim(this._defaultAnim);
		}
	}

	/**
	 * Prepare the Fighter to go back to its last saved coordinate, using the desired movement type passed as parameter.
	 * @param {number} moveType A value from the Fighter.MoveType enum.
	 * @returns {number} The ratio between the Fighter's running speed and the expected distance to cover.
	 */
	initReturn(moveType) {
		if (!this._lastCoord) return 0;
		const rec = 40;
		const p = this._lastCoord;
		this._lastCoord = null;
		if (Math.abs(Scene.WIDTH * 0.5 - p.x) > this._ray + rec + 20) {
			p.x += rec * this.intSide;
		}
		const c = 0.25;
		p.y = p.y * (1 - c) + p.y * c;
		this.moveTo(p.x, p.y, moveType);
		this.setSens(false);
		return this._runSpeed / this.getDist(p);
	}

	/**
	 * Check if the Fighter is still in the scene area.
	 * If the Fighter is getting out of bound, guide it back into the Scene.
	 * @param {Timer} timer Fight timer containing the elapsed time.
	 */
	checkBounds(timer) {
		if (this.haveProp(Fighter.Props.Static)) return;
		const m = 4;
		const wmod = 10;
		if (this._x < m + this._ray || this._x > Scene.WIDTH - (this._ray + m + this._scene.margins.right)) {
			const dx = PixiHelper.mm(m + this._ray + wmod, this._x, Scene.WIDTH - (m + this._ray + wmod)) - this._x;
			this._x += dx * 0.3 * timer.tmod;
			this._vx = 0;
		}
		const up = this._ray * 0.5;
		const down = this._scene.getPYSize() - this._ray;
		if (this._y < up || this._y > down) {
			this._y = PixiHelper.mm(up, this._y, down);
			this._vy = 0;
		}
	}

	/**
	 * Save the current coordinates of the Fighter for a futur return action.
	 * If there are already saved coordinates, does nothing.
	 * @returns {void}
	 */
	saveCurrentCoords() {
		if (this._lastCoord) {
			return;
		}
		this._lastCoord = {
			x: this._x,
			y: this._y
		};
	}

	/**
	 * Adds the desired Fighter.Status to the status of the Fighter.
	 * @param {number} status The Fighter.Status enum indicating which status to add.
	 * @param {number | undefined} power The power of the status if applicable.
	 */
	addStatus(status, power) {
		this._status.push({ e: status, power: power });
		this.displayStatus();
	}

	/**
	 * Removes the selected status from the Fighter if it has it.
	 * If null is passed, remove all the status.
	 * @param {number | null} status A Fighter.Status enum value.
	 */
	removeStatus(status = null) {
		this._status = this._status.filter((s) => {
			if (status === null || s.e === status) {
				switch (s.e) {
					case Fighter.Status.Fly:
						//flLand = true; TODO
						break;
					case Fighter.Status.Poison:
					//colt.colorTransform = new flash.geom.ColorTransform(1,1,1,1,0,0,0,0); TODO
				}
				return false;
			}
			return true;
		});
		this.displayStatus();
	}

	/**
	 * Check if the Fighter has the current status applied.
	 * @param {number} status The Fighter.Status value to check for.
	 * @returns {boolean} True if the Fighter has the given status, false otherwise.
	 */
	haveStatus(status) {
		return this._status.find((s) => s.e === status) !== undefined;
	}

	/**
	 * Display the status of the Fighter.
	 */
	displayStatus() {
		// TODO
	}

	/**
	 * Switch the current animation being played by the Fighter's Animator.
	 * @param {string} anim The animation to play.
	 */
	playAnim(anim) {
		// TODO
		/*if(flFly) {
			if(a == "run" || a == "walk") {
				return;
			}
		}*/
		this._currentAnim = anim;
		this._animator.playAnim(anim);
	}

	/**
	 * Dodge the attack of another Fighter.
	 * @param {Fighter} attacker The Fighter attacking.
	 */
	dodge(attacker) {
		this.playAnim('dodge');
		const angle = this.getAng(attacker.position) + 0.75 * (Math.random() * 4 - 1);
		const sp = 7;
		this._vz = -15;
		this._vx = Math.cos(angle) * sp;
		this._vy = Math.sin(angle) * sp;
		this._weight = 1.5;
		this._mode = Fighter.Mode.Dodge;
	}

	/**
	 * Stops the dodge animation of the Fighter once it reaches the ground.
	 */
	updateDodge() {
		if (this._z == 0) {
			this._weight = 0;
			this._vx = 0;
			this._vy = 0;
			this._vz = 0;
			this.backToDefault();
			this._mode = Fighter.Mode.Waiting;
		}
	}

	/**
	 * The Fighter gets hit by another Fighter, losing [damages] health with the [lifeFx] effect.
	 * @param {Fighter} attacker The Fighter attacking this one.
	 * @param {number} damages The damages inflicted. If 0, the guard animation is played.
	 * @param {{fx: number, amount?: number, size?: number}} lifeFx The life gain/loss effect to play, based on Fighter.LifeEffect.
	 * @returns {void}
	 */
	hit(attacker, damages, lifeFx) {
		if (damages == 0) {
			this.playAnim('guard');
			return;
		}
		if (!this.haveProp(Fighter.Props.Static)) {
			var angle = this.getAng(attacker.position);
			const sp = 3;
			this._vx = Math.cos(angle) * sp;
			this._vy = Math.sin(angle) * sp;
		}
		this.damages(damages, 6, lifeFx);
	}

	/**
	 * The Fighter takes damages.
	 * @param {number} damages The amount of damages taken.
	 * @param {number} stunDuration The stun duration following the damage. 50 by default.
	 * @param {{fx: number, amount?: number, size?: number} | null} lifeFx The Fighter.LifeEffect effect to play while receiving the damages, or null if none.
	 */
	damages(damages, stunDuration = 50, lifeFx = null) {
		this.playAnim('hit');
		this._life = Math.max(0, this._life - damages);
		if (this._slot) {
			this._slot.setLife(this._life / this._maxLife);
			this._slot.fxDamage();
		}

		this.showDamages(damages);
		this._lockTimer = stunDuration;
		this._shake = 30;

		if (lifeFx !== null) {
			this.lifeEffect(lifeFx);
		}
	}

	/**
	 * The Fighter regenerates the given amount of life.
	 * If a LifeEffect is given, it will be played.
	 * @param {number} amount The amount of health to regenerate.
	 * @param {{fx: number, amount?: number, size?: number} | null} lifeFx The Fighter.LifeEffect to play. Null by default.
	 */
	gainLife(amount, lifeFx = null) {
		this._life += amount;
		if (this._slot) {
			this._slot.setLife(this._life / this._maxLife);
		}
		this.showDamages(amount, false);
		this._lockTimer = 5;
		if (lifeFx !== null) {
			this.lifeEffect(lifeFx);
		}
	}

	/**
	 * Display the damage received above the Fighter by spawning a new Score object.
	 * @param {number} damages The number to display.
	 * @param {boolean} hurt If true, the number is red, otherwise it is green. True by default.
	 */
	showDamages(damages, hurt = true) {
		if (damages <= 0) return;
		const dmg = new Score(
			this._scene,
			this._x,
			this._scene.getY(this._y) + (this._z - this._height) * 0.5,
			damages,
			hurt
		);
		this._scene.addSprite(dmg, Scene.LAYERS.INTER);
	}

	/**
	 * Change the Fighter into waiting mode, setting its current animation to the current default one.
	 */
	setWaiting() {
		this._mode = Fighter.Mode.Waiting;
		this.playAnim(this._defaultAnim);
	}

	/**
	 * Try to lock a Fighter to do a specific action (State). If the Fighter is unavailable, return false.
	 * @param {State} state The state the Fighter has to focus on.
	 * @returns {boolean} False if the Fighter is unavailable, true otherwise.
	 */
	setFocus(state) {
		if (this._lockTimer > 0 || this._mode != Fighter.Mode.Waiting /*|| flLand*/) {
			return false;
		}

		this._walkPath = null;
		if (this._focus == null) {
			this.backToDefault();
			this._focus = state;
			this._vx = 0;
			this._vy = 0;
			// TODO
			//if (!Number.isNaN(this._force))
			this._force *= 1000;
			return true;
		} else {
			return this._focus.id === state.id;
		}
	}

	/**
	 * Unset the current State the Fighter is focusing on.
	 */
	unfocus() {
		this._focus = null;
		// TODO
		//if(!Number.isNaN(this._force))
		this._force /= 1000;
	}

	/**
	 * Move the Fighter to the desired position over time.
	 *
	 * The type of movement can be chosend based on Fighter.MovementType.
	 * @param {number} dx The x coordinate of the destination.
	 * @param {number} dy The y coordinate of the destination.
	 * @param {number} moveType A value from the Fighter.MovementType enum. Null by default.
	 */
	moveTo(dx, dy, moveType = null) {
		if ((dx - this._x) * this.intSide < 0) {
			this.setSens(false);
		}
		this._tweenMove = new SimpleTween(this, { x: this._x, y: this._y }, { x: dx, y: dy });
		this._moveType = moveType;
		switch (this._moveType) {
			case Fighter.MovementType.Jump:
			case Fighter.MovementType.JumpAbove:
				this.playAnim('jump');
				this.fxJump();
				break;
			case Fighter.MovementType.JumpDown:
				this.playAnim('jumpDown');
				this.fxJump();
				break;
			default:
				this.playAnim('run');
		}
	}

	/**
	 * Set the position of the current Tween movement by a coefficience between 0 and 1.
	 * The coefficient is the current linear progression of the tween (0 = start position, 1 = end position).
	 * @param {number} coeff The current progression of the Tween movement between 0 and 1.
	 */
	updateMove(coeff) {
		if (!this._tweenMove) return;
		this._tweenMove.update(coeff);
		switch (this._moveType) {
			case Fighter.MovementType.Jump:
				this._z = -Math.sin(coeff * 3.14) * 120;
				if (coeff == 1) {
					this.fxLand(12);
				}
				break;
			case Fighter.MovementType.JumpAbove:
				this._z = -Math.sin(coeff * 1.57) * 160;
				break;
			case Fighter.MovementType.JumpDown:
				this._z = -Math.sin(1.57 + coeff * 1.57) * 160;
				if (coeff == 1) {
					this.fxLand(12);
				}
				break;
			default:
				this._scene.genGroundPart(
					this._x + (Math.random() * 2 - 1) * this._ray,
					this._y + (Math.random() * 2 - 1) * this._ray * 0.5
				);
		}
	}

	/**
	 * Set the current lock timer for the Fighter.
	 * @param {number} lt The new lock timer.
	 */
	setLockTimer(lt) {
		this._lockTimer = lt;
	}

	// FX SECTION

	/**
	 * Adds bolts particles to the Fighter.
	 * @param {number} max Number of bolts particles to spawn in.
	 */
	fxLightning(max) {
		for (let i = 0; i < max; ++i) {
			const bolt = new Bolt(this._scene, (Math.random() * 2 - 1) * this._ray, -Math.random() * this._height);
			console.log('Lightning !!!!!!!!!!!!!!!!!');
			this.addSprite(bolt, Fighter.LAYERS.DP_FRONT);
		}
	}

	/**
	 * Play the given Fighter.LifeEffect effect.
	 * @param {{fx: number, amount?: number, size?: number}} effect The Fighter.LifeEffect to play.
	 */
	lifeEffect(effect) {
		// TODO
		switch (effect.fx) {
			case Fighter.LifeEffect.Lightning:
				this.fxLightning(16);
				break;
		}
	}

	/**
	 * Management of the FX related to jumping.
	 * Disable the water rings around the Fighter.
	 */
	fxJump() {
		// TODO
		//mcOndeFront._visible = false;
		//mcOndeBack._visible = false;
	}

	/**
	 * Management of the animation related to landing.
	 * @param {number} max Maximum number of particles generated by the landing.
	 * @param {number} speed Speed of the particles. 3 by default.
	 * @param {number} cr Radius of the particle spawn area. 8 by default.
	 */
	fxLand(max, speed = 3, cr = 8) {
		this.playAnim('land');
		this._mode = Fighter.Mode.Anim;
		//mcOndeFront._visible = true;
		//mcOndeBack._visible = true;
		for (let i = 0; i < max; ++i) {
			const a = ((i + Math.random()) / max) * 6.28;
			const ca = Math.cos(a);
			const sa = Math.sin(a);
			const sp = 0.5 + Math.random() * speed;
			this._scene.genGroundPart(this._x + ca * sp * cr, this._y + sa * sp * cr, ca * sp, sa * sp, null, true);
		}
	}

	/**
	 * The Figther resurrect from the dead. Like Jesus, but without waiting 3 days.
	 * @returns {void}
	 */
	resurrect() {
		if (this._mode !== Fighter.Mode.Dead) return;
		this._mode = Fighter.Mode.Waiting;
		this.backToDefault();
	}

	/**
	 * Display the Fighter name temporarily.
	 */
	showName() {
		const name = new Title(
			this._scene,
			this._x,
			this._scene.getY(this._y) - this._height,
			this._name.toUpperCase()
		);
		this._scene.addSprite(name, Scene.LAYERS.INTER);
	}

	/**
	 * Sets the energy level of the Fighter.
	 * @param {number} e The new energy level.
	 */
	setEnergy(e) {
		this._energy = e;
		console.log(`Fighter ${this.id}: Set energy to ${e}.`);
		if (this._slot) {
			this._slot.setEnergy(this._energy);
		}
	}

	/**
	 * Sets the maximum energy of the Fighter.
	 * @param {number} e The new maximum energy level.
	 */
	setMaxEnergy(e) {
		this._maxEnergy = e;
		console.log(`Fighter ${this.id}: Set max energy to ${e}.`);
		if (this._slot) {
			this._slot.setMaxEnergy(this._maxEnergy);
		}
	}

	/**
	 * Checks if the Fighter has a specific prop.
	 * @param {number} prop The Fighter.Props to check.
	 * @returns {boolean} True if the Fighter has the given props, false otherwise.
	 */
	haveProp(prop) {
		return this._props.includes(prop);
	}

	/**
	 * Register a new callback for the Animator.
	 * The callback will be triggered if a frame has registered a callback of the same name.
	 * @param {string} name Name of the callback to register.
	 * @param {*} callback Function called when the callback is triggered. Will receive the animation triggering the callback
	 * as well as an array as parameter if any arguments are passed along.
	 */
	registerCallback(name, callback) {
		this._animator.registerCallback(name, callback);
	}

	/**
	 * Remove all callbacks registered under the given name.
	 * @param {string} name Name of the callback to clear.
	 */
	clearCallback(name) {
		this._animator.clearCallback(name);
	}

	/**
	 * Remove the status, the shadow, the force, and set the mode to Dead.
	 */
	die() {
		this.removeStatus();
		this.playAnim('dead');
		this._mode = Fighter.Mode.Dead;
		//f.shade.removeMovieClip() ; TODO
		//Sprite.forceList.remove(f);
	}

	/**
	 * True if a Fighter is not dead.
	 * @type {boolean}
	 */
	get alive() {
		return this._mode !== Fighter.Mode.Dead;
	}

	/**
	 * Remove the Fighter from the scene.
	 * If you want the Fighter to appear dead instead, use die().
	 */
	kill() {
		this._scene.removeFighter(this);
		super.kill();
	}

	/**
	 * Adds a red dot at the center of the Fighter.
	 * Debug purposes only.
	 */
	debugShowOrigin() {
		const origin = new Graphics();
		origin.beginFill(0xff0000).drawCircle(0, 0, 2).endFill();
		this.body.addChild(origin);
		// Collider
		this.body.addChild(
			new Graphics()
				.lineStyle(2, 0xff0000)
				.drawRect(-this._width / 2, -this._height / 2, this._width, this._height)
		);
	}
}
