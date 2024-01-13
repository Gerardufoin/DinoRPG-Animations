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

export class Fighter extends Phys {
	static Mode = {
		Waiting: 0,
		Anim: 1,
		Dead: 2,
		Dodge: 3
	};
	static MovementType = {
		Jump: 0,
		JumpAbove: 1,
		JumpDown: 2,
		Run: 3
	};

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

	_lock = false;
	_name;
	_isDino;
	_life;
	_maxLife;
	_energy = 100;
	_maxEnergy = 100;
	_size = 1;
	_props = [];

	_side = true;
	_sens = 1;

	_defaultAnim = 'stand';
	_currentAnim = 'stand';
	_walkSpeed = 1.8;
	_runSpeed = 8;
	_range = 10;
	_height = 36;

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
	 * The last registered coordinates of the Fighter.
	 * Used to send back the Fighter to this position via the return action.
	 * @type {{x: number, y: number}}
	 */
	_lastCoord = null;
	/**
	 * Walk path of the Fighter. Null if the Fighter is not currently walking.
	 * @type {{x: number, y: number, to: number} | null}
	 */
	_walkPath = null;
	/**
	 * Current movement of the Fighter. Null is the Fighter is not currently moving.
	 * @type {SimpleTween}
	 */
	_tweenMove = null;
	/**
	 * Current movement type associated with the movement Tween. Value of the enum Fighter.MovementType.
	 * @type {number}
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

		this.body = body;
		this._animator = new sdino({
			data: fInfos.gfx,
			autoUpdate: false,
			pflag: true
		});
		this.body.addChild(this._animator);
		this.setSide(fInfos.side);

		this.id = fInfos.fid;
		this._isDino = fInfos.dino;
		this._name = fInfos.name;
		this._props = fInfos.props;
		this._life = fInfos.life;
		this._maxLife = this._isDino && this._props.length == 0 ? fInfos.size : fInfos.life;
		this._size = Math.pow(fInfos.size / 100, 0.65);

		this._ray = 10;
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
		this._friction = 0.9;

		if (this._scene.debugMode) {
			this.debugShowOrigin();
		}
	}

	/**
	 * TODO.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._animator.update(timer.deltaTimeMS);
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
				//updateDodge();
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
	 * Check if the Fighter is still in the scene area.
	 * If the Fighter is getting out of bound, guide it back into the Scene.
	 * @param {Timer} timer Fight timer containing the elapsed time.
	 */
	checkBounds(timer) {
		// if (haveProp(_PStatic)) return; TODO
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
	 * Display the Fighter name temporarily.
	 */
	showName() {
		//TODO
	}

	/**
	 * Adds a red dot at the center of the Fighter.
	 * Debug purposes only.
	 */
	debugShowOrigin() {
		const origin = new Graphics();
		origin.beginFill(0xff0000).drawCircle(0, 0, 2).endFill();
		this.body.addChild(origin);
	}
}
