// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Sylfide.hx

import { Animator } from '../../../../display/Animator.js';
import { TFx, Tween } from '../../../../display/Tween.js';
import { fx_sylphide } from '../../../../gfx/fx/sylphide.js';
import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { SCENE_WIDTH } from '../../../IScene.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster summons fairies which kidnap the targets.
 */
export class GrSylfide extends GroupEffect {
	/**
	 * List of the fairies instantiated on the scene.
	 * @type {{target: Fighter, fairy: Animator}[]}
	 */
	_fairies = [];
	/**
	 * Number of fairies which have not finished their action yet.
	 * @type {number}
	 */
	_fairyActions = 0;

	/**
	 * The caster summons multiple fairies which remove the targets from the fight.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.addSkillAura(SkillType.Water);
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		for (const f of this._fairies) {
			f.fairy.update(timer.deltaTimeMS);
		}
		switch (this._step) {
			// Makes the fighter glow and prepare the fairies
			case 0:
				if (this._coef === 1) {
					this.nextStep();
					this._caster.playAnim('release');

					for (const t of this._targets) {
						t.fighter._lock = true;
						for (let i = 0; i < 25; ++i) {
							this._fairyActions++;
							const f = new Animator(false).loadAnimation(fx_sylphide);
							f.x = Math.random() * SCENE_WIDTH;
							f.y = -Math.random() * 30;

							const ox = 1.2 * (Math.random() * t.fighter.width - t.fighter.width / 2);
							const oy = -1.2 * (Math.random() * t.fighter.height - t.fighter.height / 4);
							// The fairy moves down. Once all the fairies are in position, go to the next step.
							this._scene.tm.addTween(
								new Tween(f, TFx.TLinear)
									.to(2, {
										x: t.fighter.getRootContainer().x + ox,
										y: t.fighter.getRootContainer().y + oy
									})
									.onComplete(() => {
										if (--this._fairyActions == 0) {
											this._coefSpeed = 0.5;
											this.nextStep();
										}
									})
							);
							this._scene.dm.addContainer(f, Layers.Scene.PARTS);
							this._fairies.push({
								target: t.fighter,
								fairy: f
							});
						}
					}
				}
				break;
			// Do nothing and wait for the fairies to finish their tween. Once they are all done, nextStep will be called.
			case 1:
				break;
			// Setup fairies to go back up with their victim.
			case 2:
				if (this._coef == 1) {
					this.nextStep();

					this._fairyActions = 0;
					for (const f of this._fairies) {
						this._fairyActions++;
						const tx = f.fairy.x > f.target.getRootContainer().x ? 20 : -20;
						// Fairy wobble left and right 5 times
						this._scene.tm.addTween(
							new Tween(f.fairy, TFx.TLoopEaseIn)
								.to(0.3 + Math.random() * 0.3, {
									x: f.fairy.x + (Math.floor(Math.random() * 2) * 2 - 1) * tx
								})
								.loop(5)
						);
						// Fairy goes up the screen
						this._scene.tm.addTween(
							new Tween(f.fairy)
								.to(2, { y: -20 - Math.random() * f.target.getRootContainer().height })
								.onComplete(() => {
									if (--this._fairyActions == 0) {
										this.nextStep();
									}
								})
						);
					}
					for (const t of this._targets) {
						t.fighter.autoUpdatePosition = false;
						// Move the fighter out of the scene.
						this._scene.tm.addTween(new Tween(t.fighter.getRootContainer()).to(2, { y: -40 }));
					}
				}
				break;
			// Wait for movements to resolve. Will next step once the fairies are gone.
			case 3:
				break;
			// Clean up
			case 4:
				for (const f of this._fairies) {
					this._scene.dm.removeContainer(f.fairy, Layers.Scene.PARTS);
				}
				for (const t of this._targets) {
					t.fighter.kill();
				}
				this._caster.backToDefault();
				this.end();
				break;
		}
	}
}
