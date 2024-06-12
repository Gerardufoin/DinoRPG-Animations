// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { invoc_wind } from '../../../../gfx/invocations/wind.js';
import { invoc_fujin_gust } from '../../../../gfx/invocations/fujin_gusts.js';
import { invoc_fujin_veil } from '../../../../gfx/invocations/fujin_veil.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { invoc_fujin_hair } from '../../../../gfx/invocations/fujin_hair.js';

/**
 * Invokes Fujin upon the Scene.
 */
export class Fujin extends Invocation {
	/**
	 * Animator for Fujin's hair.
	 * @type {Animator}
	 */
	_hair;
	/**
	 * Animator for Fujin's wind.
	 * @type {Animator}
	 */
	_wind;
	/**
	 * Animator for Fujin's gusts.
	 * @type {Animator}
	 */
	_gusts;
	/**
	 * Animator for Fujin's veil.
	 * @type {Animator}
	 */
	_veil;

	/**
	 * Invokes Fujin upon the Scene.
	 * @param {IScene} scene The scene where Fujin is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._wind = new Animator(false).loadAnimation(invoc_wind);
		this._wind.x = -6;
		this._wind.y = 10;
		this._wind.alpha = 0.44;
		this._wind.playing = false;
		this._wind.visible = false;
		this._body.addChild(this._wind);

		this._gusts = new Animator(false).loadAnimation(invoc_fujin_gust);
		this._gusts.x = -51;
		this._gusts.y = 100;
		this._gusts.playing = false;
		this._gusts.visible = false;
		this._body.addChild(this._gusts);

		this._veil = new Animator(false).loadAnimation(invoc_fujin_veil);
		this._veil.x = 114;
		this._veil.y = 34;
		this._veil.playing = false;
		this._body.addChild(this._veil);

		this._body.addChild(new Asset(ref.invocations.fujin.body));

		this._hair = new Animator(false).loadAnimation(invoc_fujin_hair);
		this._hair.x = 217;
		this._hair.y = 77;
		this._body.addChild(this._hair);

		this._body.x = -215;
		this._body.y = -300;
	}

	/**
	 * Start Fujin wind related animations once descended.
	 */
	descended() {
		this._wind.playing = true;
		this._wind.visible = true;
		this._gusts.playing = true;
		this._gusts.visible = true;
		this._veil.playing = true;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._hair.update(timer.deltaTimeMS);
		this._veil.update(timer.deltaTimeMS);
		this._wind.update(timer.deltaTimeMS);
		this._gusts.update(timer.deltaTimeMS);
	}
}
