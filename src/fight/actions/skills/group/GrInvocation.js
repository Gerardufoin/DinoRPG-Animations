// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Invoc.hx

import { Layers } from '../../../DepthManager.js';
import { LifeEffect, SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { BlueWhale } from '../../../parts/skills/invocations/BlueWhale.js';
import { Buddah } from '../../../parts/skills/invocations/Buddah.js';
import { Djinn } from '../../../parts/skills/invocations/Djinn.js';
import { Fairies } from '../../../parts/skills/invocations/Fairies.js';
import { Fujin } from '../../../parts/skills/invocations/Fujin.js';
import { Golem } from '../../../parts/skills/invocations/Golem.js';
import { Hades } from '../../../parts/skills/invocations/Hades.js';
import { Ifrit } from '../../../parts/skills/invocations/Ifrit.js';
import { Invocation } from '../../../parts/skills/invocations/Invocation.js';
import { Leviathan } from '../../../parts/skills/invocations/Leviathan.js';
import { Ondine } from '../../../parts/skills/invocations/Ondine.js';
import { Raijin } from '../../../parts/skills/invocations/Raijin.js';
import { Salamander } from '../../../parts/skills/invocations/Salamander.js';
import { Totem } from '../../../parts/skills/invocations/Totem.js';
import { Vulcan } from '../../../parts/skills/invocations/Vulcan.js';
import { Werewolf } from '../../../parts/skills/invocations/Werewolf.js';
import { Yggdrasil } from '../../../parts/skills/invocations/Yggdrasil.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster summons a god which appears on the field and damages the targets.
 */
export class GrInvocation extends GroupEffect {
	/**
	 * The invocation being summoned.
	 * @type {Invocation}
	 */
	_invoc;

	/**
	 * The caster casters summons a god upon the scene and damages the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 * @param {string} anim The god to summon.
	 */
	constructor(scene, endCall, caster, targets, anim) {
		super(scene, endCall, caster, targets);
		this._coefSpeed = 0.05;

		switch (anim) {
			case 'vulcan':
				this._invoc = new Vulcan(this._scene);
				break;
			case 'ifrit':
				this._invoc = new Ifrit(this._scene);
				break;
			case 'bluewh':
				this._invoc = new BlueWhale(this._scene);
				break;
			case 'raijin':
				this._invoc = new Raijin(this._scene);
				break;
			case 'louga':
				this._invoc = new Werewolf(this._scene);
				break;
			case 'golem':
				this._invoc = new Golem(this._scene);
				break;
			case 'djinn':
				this._invoc = new Djinn(this._scene);
				break;
			case 'fujin':
				this._invoc = new Fujin(this._scene);
				break;
			case 'ondine':
				this._invoc = new Ondine(this._scene);
				break;
			case 'boudda':
				this._invoc = new Buddah(this._scene);
				break;
			case 'fairy':
				this._invoc = new Fairies(this._scene);
				break;
			case 'yggdra':
				this._invoc = new Yggdrasil(this._scene);
				break;
			case 'hades':
				this._invoc = new Hades(this._scene);
				break;
			case 'salama':
				this._invoc = new Salamander(this._scene);
				break;
			case 'totem':
				this._invoc = new Totem(this._scene);
				break;
			case 'leviat':
				this._invoc = new Leviathan(this._scene);
				break;
			case 'goku':
				break;
			case 'quetza':
				break;
			case 'reiruc':
				break;
			case 'herco':
				break;
			case 'bigma':
				break;
			default:
				console.error(`[GrInvocation] Invocation '${anim} unknown.'`);
		}
		if (!this._invoc) {
			this.end();
			return;
		}
		this._scene.dm.addSprite(this._invoc, Layers.Scene.BG_FRONT);
		this.addSkillAura(SkillType.Air);
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// The caster summons the invocation.
			case 0:
				if (this._coef === 1) {
					this._manualAura = true;
					this.nextStep();
					this._coefSpeed = 0.02;
					this._scene.fxShake(4, 1, 0.5);
					this._invoc.spawnParts();
				}
				break;
			// The summon descends upon the Scene.
			case 1:
				this._invoc.descend(this._coef);
				/* TODO
				for( i in 0...10 ) {
					var x =  invoc.x;
					var y =  Scene.getY(invoc.y);
					var p = Scene.me.genGroundPart(x, y);
					var s = (10 + coef * 10);
					var s2 = (2 + coef * 5);
					p.vx = (Math.random() * 2 - 1) * s;
					p.vz = (Math.random() * 2 - 1) * s;
					p.z  = -Math.random() * (20 + coef * 80) ;
					p.vr = (Math.random() * 2 - 1) * s2;
					p.timer += Math.random() * 5;
					p.friction = 0.97;
					p.setScale(p.scale * 1.5);
				}
				*/
				if (this._coef === 1) {
					this._manualAura = false;
					this.nextStep();
					this._coefSpeed = 0.035;
					this._scene.fxShake(4, 0.8, 0.5);
					this._invoc.descended();
					this._invoc.addAura(SkillType.Air);
				}
				break;
			// Updates the invocation aura and damages the targets once the step ends.
			case 2:
				this._invoc.updateAura(this._coef);
				if (this._coef === 1) {
					this.nextStep();
					this.damageAll({ fx: LifeEffect.Lightning });
					this._coefSpeed = 0.1;
				}
				break;
			// The invocation fades to white.
			case 3:
				this._invoc.fade(this._coef);
				if (this._coef === 1) {
					this.nextStep();
					this._coefSpeed = 0.5;
				}
				break;
			// The invocation fades out and is removed.
			case 4:
				this._invoc.fadeOut(this._coef);
				if (this._coef === 1) {
					this._invoc.kill();
					this.end();
				}
				break;
		}
	}
}
