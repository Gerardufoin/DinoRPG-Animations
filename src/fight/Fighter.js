// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Fighter.hx

import { Container, Ticker } from 'pixi.js';
import { sdino } from '../sdino.js';
import { Phys } from './Phys.js';
import { Animator } from '../display/Animator.js';
import { State } from './State.js';

export class Fighter extends Phys {
	static Mode = {
		Waiting: 0,
		Anim: 1,
		Dead: 2,
		Dodge: 3
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

	_intSide = 1;
	_side = true;
	_sens = 1;

	_defaultAnim = 'stand';
	_currentAnim = 'stand';
	_walkSpeed = 1.8;
	_runSpeed = 8;
	_range = 10;
	_height = 36;

	_mode = Fighter.Mode.Waiting;

	/**
	 * Current State using the Fighter for an action.
	 * @type {State}
	 */
	_focus;
	/**
	 * While this number is greater than 0, the Fighter cannot participate in a new action.
	 * @type {number}
	 */
	_lockTimer = 0;

	constructor(fInfos, scene) {
		const body = new Container();
		super(body, scene);

		this.body = body;
		this.animator = new sdino({
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
	}

	update() {
		super.update();
		this._animator.update();
		if (this._lockTimer > 0) {
			this._lockTimer -= Ticker.shared.elapsedMS;
		}
		switch (this._mode) {
			case Fighter.Mode.Waiting:
				if (this._focus === undefined && this._lockTimer > 0) {
					//updateWait();
				}
				//checkBounds();
				break;
			case Fighter.Mode.Anim:
				/*var mc = skin._p0._p1._anim._sub;
				if (mc._currentframe >= mc._totalframes) {
					setWaiting();
					// NEED _SUB for all anim
				}*/
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
	 * Set the side of the fighter.
	 * @param {boolean} side The side of the fighter. True for left side (facing right), False for right side (facing left).
	 */
	setSide(side) {
		this._side = side;
		this._intSide = side ? 1 : -1;
		this._animator.flip(side);
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

	backToDefault() {
		this.setSens(true);
		if (this._currentAnim !== 'land') {
			this.playAnim(this._defaultAnim);
		}
	}

	/**
	 * Switch the current animation being played by the Fighter's Animator.
	 * @param {string} anim The animation to play.
	 */
	playAnim(anim) {
		/*if(flFly) {
			if(a == "run" || a == "walk") {
				return;
			}
		}*/
		this._currentAnim = anim;
		this._animator.playAnim(anim);
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

		//wp = null;
		if (this._focus === undefined) {
			this.backToDefault();
			this._focus = state;
			this._vx = 0;
			this._vy = 0;
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
		this._focus = undefined;
		//if(!Number.isNaN(this._force))
		this._force /= 1000;
	}

	/**
	 * Set the current lock timer for the Fighter.
	 * @param {number} lt The new lock timer.
	 */
	setLockTimer(lt) {
		this._lockTimer = lt;
	}
}
