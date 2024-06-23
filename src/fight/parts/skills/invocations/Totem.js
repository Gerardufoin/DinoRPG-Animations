// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { invoc_totem_laser_composition } from '../../../../gfx/invocations/totem_laser_composition.js';
import { invoc_totem } from '../../../../gfx/invocations/totem.js';

/**
 * Invokes Totem upon the Scene.
 */
export class Totem extends Invocation {
	/**
	 * Number of frames taken by the lasers to go down on the scene.
	 * @type {number}
	 */
	static LASERS_TIMER = 7;
	/**
	 * Distance needed to hide the lasers offscreen.
	 * @type {number}
	 */
	static LASERS_OFFSET = 480;

	/**
	 * Animator for Totem's ship.
	 * @type {Animator}
	 */
	_ship;
	/**
	 * Animator for Totem's lasers.
	 * @type {Animator}
	 */
	_lasers;

	/**
	 * Timer for the lasers descent.
	 * @type {number | null}
	 */
	_lasersTimer = null;

	/**
	 * Invokes Totem upon the Scene.
	 * @param {IScene} scene The scene where Totem is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._lasers = new Animator(false).loadAnimation(invoc_totem_laser_composition);
		this._lasers.playing = false;
		this._lasers.visible = false;
		this._lasers.y = -Totem.LASERS_OFFSET;
		this._body.addChild(this._lasers);

		this._ship = new Animator(false).loadAnimation(invoc_totem);
		this._body.addChild(this._ship);

		this._body.x = -215;
		this._body.y = -285;
	}

	/**
	 * Start Totem lasers animation once descended.
	 */
	descended() {
		this._lasers.playing = true;
		this._lasers.visible = true;
		this._lasersTimer = 0;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._lasers.update(timer.deltaTimeMS);
		this._ship.update(timer.deltaTimeMS);
		if (this._lasersTimer !== null) {
			this._lasersTimer = Math.min(this._lasersTimer + timer.tmod, Totem.LASERS_TIMER);
			this._lasers.y = (1 - this._lasersTimer / Totem.LASERS_TIMER) * -Totem.LASERS_OFFSET;
		}
	}
}
