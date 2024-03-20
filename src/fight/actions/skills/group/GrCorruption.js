// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/JumpAttack.hx
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Tremor.hx

import { Graphics } from 'pixi.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { GroupEffect } from '../GroupEffect.js';
import { SCENE_FULL_WIDTH, SCENE_HEIGHT, SCENE_WIDTH } from '../../../IScene.js';
import { Layers } from '../../../DepthManager.js';
import { DarkSmoke } from '../../../parts/smoke/DarkSmoke.js';

/**
 * Darkness fall upon the scene and clouds of dark dust rise from the ground.
 */
export class GrCorruption extends GroupEffect {
	/**
	 * Max opacity of the darkness screen. Defines how see-through the darkness effect will be.
	 * @type {number}
	 */
	static DARKNESS_MAX_OPACITY = 0.75;
	/**
	 * Determines how often a cloud of darkness is spawned.
	 * The lowest the fastest.
	 * @type {number}
	 */
	static DARKNESS_CLOUD_FREQUENCY = 0.5;
	/**
	 * Get the screen darker over time.
	 * @type {Graphics}
	 */
	_darkness;
	/**
	 * Timer used to spawn clouds of darkness.
	 * @type {number}
	 */
	_spawnTimer = 0;

	/**
	 * The caster invoke darkness upon the scene.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		caster.playAnim('release');
		this._coefSpeed = 0.02;
		this._darkness = new Graphics()
			.beginFill(0x000000)
			.drawRect(-100, -100, SCENE_FULL_WIDTH + 200, SCENE_HEIGHT + 200);
		this._darkness.alpha = 0;
		this._scene.dm.addContainer(this._darkness, Layers.Scene.INTER);
	}

	/**
	 * Update the skill.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Darkness falls upon the scene and clouds of darkness are spawned in.
			// Once done, the damages are applied and the caster goes back to stand.
			case 0:
				this._darkness.alpha = GrCorruption.DARKNESS_MAX_OPACITY * this._coef;
				this._spawnTimer += timer.tmod;
				while (this._spawnTimer > GrCorruption.DARKNESS_CLOUD_FREQUENCY) {
					DarkSmoke.spawn(this._scene, Math.random() * SCENE_WIDTH, this._scene.getRandomPYPos());
					this._spawnTimer -= GrCorruption.DARKNESS_CLOUD_FREQUENCY;
				}
				if (this._coef == 1) {
					this._caster.playAnim('stand');
					this._coefSpeed = 0.05;
					this.damageAll();
					this.nextStep();
				}
				break;
			// Darkness is quickly lifted. Once done, it is removed from the scene and the skill is done.
			case 1:
				this._darkness.alpha =
					GrCorruption.DARKNESS_MAX_OPACITY - this._coef * GrCorruption.DARKNESS_MAX_OPACITY;
				if (this._coef == 1) {
					this._scene.dm.removeContainer(this._darkness, Layers.Scene.INTER);
					this.end();
				}
				break;
		}
	}
}
