// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Leaf.hx

import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Feather } from '../../../parts/skills/Feather.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The given Fighter dies and then resurrect amongst a bunch a feathers.
 */
export class FxResurrect extends GroupEffect {
	/**
	 * All the feathers instantiated in the Scene.
	 * @type {Feather[]}
	 */
	_feathers = [];

	/**
	 * A Fighter dies, spawns multiple falling feathers, and then resurrect.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The Fighter playing the animation.
	 */
	constructor(scene, endCall, fighter) {
		super(scene, endCall, fighter, []);
		this._coefSpeed = 0.01;
		this._caster._mode = Fighter.Mode.Dead;
		this._caster.playAnim('dead');
	}

	/**
	 * Update the skill until completion.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Spawns feather and waits for them to reach the ground.
			case 0:
				if (this._coef < 0.35 && PixiHelper.tmodRandom(0.5, timer.tmod)) {
					const feather = new Feather(this._scene, this._caster.position.x, this._caster.position.y - 20);
					this._scene.dm.addSprite(feather, Layers.Scene.FIGHTERS);
					this._feathers.push(feather);
				}
				// Once all the feathers have fallen
				if (this._coef === 1 && this._feathers.filter((f) => !f.fallen).length === 0) {
					this.nextStep();
					this._coefSpeed = 0.025;
					this._feathers.map((f) => f.dispose());
				}
				break;
			// Wait for the end, then resurrect the Fighter and ends the state.
			case 1:
				if (this._coef === 1) {
					this._caster.resurrect();
					this.end();
				}
				break;
		}
	}
}
