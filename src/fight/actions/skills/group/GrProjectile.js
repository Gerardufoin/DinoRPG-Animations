// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Ice.hx

import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { AProjectile } from '../../../parts/skills/projectile/AProjectile.js';
import { Acorn } from '../../../parts/skills/projectile/Acorn.js';
import { Blades } from '../../../parts/skills/projectile/Blades.js';
import { Rock } from '../../../parts/skills/projectile/Rock.js';
import { Sand } from '../../../parts/skills/projectile/Sand.js';
import { Stinger } from '../../../parts/skills/projectile/Stinger.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster fires the given projectile towards the targets, damaging them.
 */
export class GrProjectile extends GroupEffect {
	_fx;
	_projectiles = [];

	/**
	 * The caster fires the given projectile towards the targets and damages them.
	 * If an animation is given, the fighter plays the given animation while launching the attack.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 * @param {string} fx The type of projectile to fire.
	 * @param {string} anim The animation to play while firing. Defaults to "shoot".
	 * @param {number} speed The speed of the projectile, between 0 and 1. Defaults to 0.1.
	 */
	constructor(scene, endCall, caster, targets, fx, anim = 'shoot', speed = 0.1) {
		super(scene, endCall, caster, targets);
		this._fx = fx;

		this._caster.playAnim(anim);
		this._coefSpeed = speed;
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Instantiate the particles after the animation had time to play.
			case 0:
				if (this._coef === 1) {
					for (const t of this._targets) {
						const p = this.createProjectile(t.fighter);
						this._projectiles.push(p);
						this._scene.dm.addSprite(p, Layers.Scene.FIGHTERS);
					}
					this.nextStep();
				}
				break;
			// Updates the particles. Once done, damages the targets and wraps up.
			case 1:
				for (const p of this._projectiles) {
					p.setCoefficient(this._coef);
				}
				if (this._coef == 1) {
					this.damageAll();
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}

	/**
	 * Creates a projectile going toward the given target.
	 * @param {Fighter} target The target of the projectile.
	 * @returns {AProjectile} The projectile.
	 */
	createProjectile(target) {
		const x = this._caster.position.x;
		const y = this._caster.position.y;
		const z = this._caster.position.z - this._caster.height * 0.5;
		switch (this._fx) {
			case 'sand':
				return new Sand(this._scene, x, y, z, this._caster.intSide, target);
			case 'gland':
				return new Acorn(this._scene, x, y, z, this._caster.intSide, target);
			case 'aiguillon':
				return new Stinger(this._scene, x, y, z, this._caster.intSide, target);
			case 'lame':
				return new Blades(this._scene, x, y, z, this._caster.intSide, target);
			case 'rocher':
				return new Rock(this._scene, x, y, z, this._caster.intSide, target);
		}
		console.error(
			`[GrProjectile]: Unknown fx ${this._fx}. Expected values are 'sand', 'gland', 'aiguillon', 'lame', or 'rocher'.`
		);
		return new AProjectile(this._scene, x, y, z, this._caster.intSide, target);
	}
}
