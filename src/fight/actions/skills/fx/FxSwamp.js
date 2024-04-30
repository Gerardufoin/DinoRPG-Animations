// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Anim.hx

import { AlphaFilter, BlurFilter } from 'pixi.js';
import { DepthManager, Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { Swamp } from '../../../parts/skills/Swamp.js';
import { SCENE_WIDTH } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';

/**
 * A swamp is invoked on the opposite side of the field.
 */
export class FxSwamp extends State {
	/**
	 * Swamp alpha filter.
	 * Stored to prevent WebGL to recreate it each time.
	 * @type {AlphaFilter}
	 */
	static AlphaFilter;
	/**
	 * Swamp blur filter.
	 * Stored to prevent WebGL to recreate it each time.
	 * @type {BlurFilter}
	 */
	static BlurFilter;

	/**
	 * The Fighter invoking the swamp.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * The depth manager containing the swamp puddles.
	 * @type {DepthManager}
	 */
	_swamp;

	/**
	 * A Fighter invokes a swamp at the opposite side of the field.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The Fighter playing the animation.
	 */
	constructor(scene, endCall, fighter) {
		super(scene, endCall);
		// As the state is called from Skill, the fighter is already ready, do not add to the cast.
		this._caster = fighter;
		this._coefSpeed = 0.015;

		this._caster.playAnim('release');

		// Create the swamp body
		this._swamp = new DepthManager(1);
		this._scene.dm.addContainer(this._swamp, Layers.Scene.SHADE);
		if (!FxSwamp.AlphaFilter) {
			FxSwamp.AlphaFilter = new AlphaFilter(0.5);
		}
		if (!FxSwamp.BlurFilter) {
			FxSwamp.BlurFilter = new BlurFilter(3);
		}
		this._swamp.filters = [FxSwamp.BlurFilter, FxSwamp.AlphaFilter];

		// Add the puddles
		const w = SCENE_WIDTH * 0.5;
		for (let i = 0; i < 42; i++) {
			const swp = new Swamp(
				this._scene,
				w + Math.random() * w * this._caster.intSide,
				this._scene.getRandomPYPos()
			);
			this._swamp.addSprite(swp, 0);
		}
	}

	/**
	 * Update the depth manager and ends the state once all the puddles are gone.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._swamp.update(timer);
		if (this._coef === 1 && this._swamp.getLayer(0).children.length === 0) {
			this._caster.backToDefault();
			this._scene.dm.removeContainer(this._swamp, Layers.Scene.SHADE);
			this.end();
		}
	}
}
