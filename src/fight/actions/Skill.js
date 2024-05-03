// @ts-check
// Mix both DamagesGroup and HFx from MT into a single action
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/DamagesGroup.hx
// getEffect from https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx
import { SkillList } from '../Enums.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { FxAnim } from './skills/fx/FxAnim.js';
import { FxAttach } from './skills/fx/FxAttach.js';
import { FxAttachAnim } from './skills/fx/FxAttachAnim.js';
import { FxAura } from './skills/fx/FxAura.js';
import { FxBlink } from './skills/fx/FxBlink.js';
import { FxCloud } from './skills/fx/FxCloud.js';
import { FxFocus } from './skills/fx/FxFocus.js';
import { FxMudWall } from './skills/fx/FxMudWall.js';
import { FxSnow } from './skills/fx/FxSnow.js';
import { FxSwamp } from './skills/fx/FxSwamp.js';
import { FxTwistingRay } from './skills/fx/FxTwistingRay.js';
import { GrBlackHole } from './skills/group/GrBlackHole.js';
import { GrChainLightning } from './skills/group/GrChainLightning.js';
import { GrCharge } from './skills/group/GrCharge.js';
import { GrCorruption } from './skills/group/GrCorruption.js';
import { GrCrepuscule } from './skills/group/GrCrepuscule.js';
import { GrDeluge } from './skills/group/GrDeluge.js';
import { GrDisc } from './skills/group/GrDisc.js';
import { GrDivineLight } from './skills/group/GrDivineLight.js';
import { GrFireBreath } from './skills/group/GrFireBreath.js';
import { GrFireball } from './skills/group/GrFireball.js';
import { GrHeal } from './skills/group/GrHeal.js';
import { GrHypnose } from './skills/group/GrHypnose.js';
import { GrIce } from './skills/group/GrIce.js';
import { GrJumpAttack } from './skills/group/GrJumpAttack.js';
import { GrLava } from './skills/group/GrLava.js';
import { GrLevitRay } from './skills/group/GrLevitRay.js';
import { GrLightning } from './skills/group/GrLightning.js';
import { GrMeteor } from './skills/group/GrMeteor.js';
import { GrMistral } from './skills/group/GrMistral.js';
import { GrProjectile } from './skills/group/GrProjectile.js';
import { GrRafale } from './skills/group/GrRafale.js';
import { GrShower } from './skills/group/GrShower.js';
import { GrSpeed } from './skills/group/GrSpeed.js';
import { GrSylfide } from './skills/group/GrSylfide.js';
import { GrTornado } from './skills/group/GrTornado.js';
import { GrVines } from './skills/group/GrVines.js';
import { GrWaterCanon } from './skills/group/GrWaterCanon.js';

/**
 * The parameters of a skill.
 * @typedef {{
 * 	fid?: number,
 * 	targets?: {id: number, life?: number}[],
 * 	type?: number,
 * 	fx?: string,
 * 	anim?: string,
 * 	speed?: number,
 * 	power?: number,
 *  color?: number,
 *  alpha?: number,
 *  remove?: boolean,
 *  percent?: number
 * }} SkillDetails
 */

/**
 * A skill is used based on the given skill type and details.
 */
export class Skill extends State {
	/**
	 * The Fighter using the skill if any.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The targets of the skill if any.
	 * @type {{fighter: Fighter, life?: number}[]}
	 */
	_targets;
	/**
	 * The skill being used, part of the SkillList enum.
	 * @type {number}
	 */
	_skill;
	/**
	 * The details of the skill.
	 * @type {SkillDetails}
	 */
	_details;

	/**
	 * A skill is used.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} skill The skill being used, part of the SkillList enum.
	 * @param {SkillDetails} details The parameters of the skill being used.
	 */
	constructor(scene, endCall, skill, details) {
		super(scene, endCall);
		this._skill = skill;
		this._details = details;

		if (details.fid !== undefined) {
			this._fighter = this._scene.getFighter(details.fid);
			if (!this._fighter) {
				this.kill();
				console.error(`Skill Error: Fighter with id ${details.fid} does not exist in the scene.`);
				return;
			}
			this.addActor(this._fighter);
		}

		if (details.targets) {
			this._targets = [];
			for (const t of details.targets) {
				const f = this._scene.getFighter(t.id);
				if (!f) {
					this.kill();
					console.error(`Skill Error: Target Fighter with id ${t.id} does not exist in the scene.`);
					return;
				}
				this._targets.push({ fighter: f, life: t.life });
				this.addActor(f);
			}
		}
	}

	/**
	 * Initialize the skill being used.
	 */
	init() {
		// Target with life set to null are dodging the skill.
		if (this._targets) {
			for (const t of this._targets ?? []) {
				if (t.life === null) {
					t.fighter.playAnim('special');
				}
			}
			this._targets = this._targets.filter((t) => t.life !== null);
		}
		const state = this.getSkill();
		if (state) {
			this._newStates.push(state);
			return;
		}

		// Temp
		if (this._fighter) {
			console.log(`Fighter ${this._fighter.id} uses skill ${Object.keys(SkillList)[this._skill]}`);
		} else {
			console.log(`Skill ${Object.keys(SkillList)[this._skill]} invoked.`);
		}
		for (const t of this._targets ?? []) {
			if (t.life) {
				if (this._skill === SkillList.Heal) {
					t.fighter.gainLife(t.life);
				} else {
					t.fighter.damages(t.life);
				}
			}
		}
		this.end();
	}

	/**
	 * Get the correct skill.
	 * @returns {State} The State corresponding to the skill.
	 */
	getSkill() {
		// TODO
		switch (this._skill) {
			case SkillList.Fireball:
				return new GrFireball(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Blow:
				return new GrFireBreath(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Lava:
				return new GrLava(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Meteor:
				return new GrMeteor(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Vigne:
				return new GrVines(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.WaterCanon:
				return new GrWaterCanon(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Shower:
				return new GrShower(this._scene, () => this.end(), this._fighter, this._targets, this._details.type);
			case SkillList.LevitRay:
				return new GrLevitRay(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Lightning:
				return new GrLightning(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Crepuscule:
				return new GrCrepuscule(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Mistral:
				return new GrMistral(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Tornade:
				return new GrTornado(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Disc:
				return new GrDisc(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Hole:
				return new GrBlackHole(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Ice:
				return new GrIce(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Projectile:
				return new GrProjectile(
					this._scene,
					() => this.end(),
					this._fighter,
					this._targets,
					this._details.fx,
					this._details.anim,
					this._details.speed
				);
			case SkillList.Tremor:
			case SkillList.JumpAttack:
				return new GrJumpAttack(this._scene, () => this.end(), this._fighter, this._targets, this._details.fx);
			case SkillList.ChainLightning:
				return new GrChainLightning(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Heal:
				return new GrHeal(this._scene, () => this.end(), this._fighter, this._targets, this._details.type);
			case SkillList.Charge:
				return new GrCharge(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Anim:
				return new FxAnim(this._scene, () => this.end(), this._fighter, this._details.anim);
			case SkillList.Sylfide:
				return new GrSylfide(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Rafale:
				return new GrRafale(
					this._scene,
					() => this.end(),
					this._fighter,
					this._targets,
					this._details.power,
					this._details.speed
				);
			case SkillList.Deluge:
				return new GrDeluge(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Aura:
				return new FxAura(
					this._scene,
					() => this.end(),
					this._fighter,
					this._details.color,
					this._details.type
				);
			case SkillList.Snow:
				return new FxSnow(
					this._scene,
					() => this.end(),
					this._fighter,
					this._details.type,
					this._details.color,
					this._details.percent
				);
			case SkillList.Swamp:
				return new FxSwamp(this._scene, () => this.end(), this._fighter);
			case SkillList.Cloud:
				return new FxCloud(this._scene, () => this.end(), this._fighter, this._details.color);
			case SkillList.Focus:
				return new FxFocus(this._scene, () => this.end(), this._fighter, this._details.color);
			case SkillList.Attach:
				return new FxAttach(this._scene, () => this.end(), this._fighter, this._details.fx);
			case SkillList.AttachAnim:
				return new FxAttachAnim(this._scene, () => this.end(), this._fighter, this._details.fx);
			case SkillList.Hypnose:
				return new GrHypnose(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.Ray:
				return new FxTwistingRay(this._scene, () => this.end(), this._fighter);
			case SkillList.Speed:
				return new GrSpeed(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.MudWall:
				return new FxMudWall(this._scene, () => this.end(), this._fighter, this._details.remove);
			case SkillList.Blink:
				return new FxBlink(
					this._scene,
					() => this.end(),
					this._fighter,
					this._details.color,
					this._details.alpha
				);
			case SkillList.Corruption:
				return new GrCorruption(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.DivineLight:
				return new GrDivineLight(this._scene, () => this.end(), this._fighter, this._targets);
		}
		return null;
	}
}
