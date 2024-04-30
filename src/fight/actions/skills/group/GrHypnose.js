// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Hypnose.hx

import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Star } from '../../../parts/skills/Star.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster hypnotise the targets to make them join its side.
 */
export class GrHypnose extends GroupEffect {
	/**
	 * The paths taken by the targets to join the caster side.
	 * @type {{ sx: number, sy: number, ex: number, ey: number }[]}
	 */
	_paths = [];

	/**
	 * The caster hypnotise the targets and make them change to its side.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._coefSpeed = 0.05;
		this._caster.playAnim('release');
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Stars move toward the targets
			case 0:
				if (timer.frameElapsed) {
					for (const t of this._targets) {
						const x = this.getPos(this._caster.position.x, t.fighter.position.x, this._coef);
						const y = this.getPos(this._caster.position.y, t.fighter.position.y, this._coef);
						for (let i = 0; i < 2; ++i) {
							const star = new Star(
								this._scene,
								x + (Math.random() * 2 - 1) * 10,
								y + (Math.random() * 2 - 1) * 10,
								(Math.random() * 2 - 1) * 10 - 20
							);
							this._scene.dm.addSprite(star, Layers.Scene.FIGHTERS);
						}
					}
				}
				// Start the movement of the targets
				if (this._coef === 1) {
					this.nextStep();
					for (const t of this._targets) {
						t.fighter.playAnim('jump');
						this._paths.push({
							sx: t.fighter.position.x,
							sy: t.fighter.position.y,
							ex: this._caster.position.x,
							ey: this._scene.getRandomPYPos()
						});
					}
				}
				break;
			// The targets move to the caster side
			case 1:
				// Move the targets and spawn stars on them
				for (let i = 0; i < this._targets.length; ++i) {
					const t = this._targets[i].fighter;
					t._x = this.getPos(this._paths[i].sx, this._paths[i].ex, this._coef);
					t._y = this.getPos(this._paths[i].sy, this._paths[i].ey, this._coef);
					t._z = -Math.sin(this._coef * 3.14) * 120;
					// Spawn stars
					if (timer.frameElapsed) {
						for (let i = 0; i < 2; ++i) {
							const star = new Star(
								this._scene,
								t.position.x + (Math.random() * 2 - 1) * 10,
								t.position.y + (Math.random() * 2 - 1) * 10,
								t.position.z + (Math.random() * 2 - 1) * 10 - 20
							);
							this._scene.dm.addSprite(star, Layers.Scene.FIGHTERS);
						}
					}
				}

				// Change the side of the targets and spawn stars flying away
				if (this._coef == 1) {
					this.nextStep();
					for (const t of this._targets) {
						t.fighter.setSide(this._caster.side);
						t.fighter.setSens(true);
						t.fighter.playAnim('land');

						for (let i = 0; i < 36; ++i) {
							const star = new Star(
								this._scene,
								t.fighter.position.x + (Math.random() * 2 - 1) * 10,
								t.fighter.position.y + (Math.random() * 2 - 1) * 10,
								t.fighter.position.z + (Math.random() * 2 - 1) * 10 - 20,
								t.fighter
							);
							this._scene.dm.addSprite(star, Layers.Scene.FIGHTERS);
						}
					}
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}

	/**
	 * Get a point between two points based on the given coefficient.
	 * @param {number} from The starting point.
	 * @param {number} to The end point.
	 * @param {number} coef The coefficient between 0 and 1.
	 * @returns {number} The point inbetween from and to, based on the given coefficient.
	 */
	getPos(from, to, coef) {
		return from + (to - from) * coef;
	}
}
