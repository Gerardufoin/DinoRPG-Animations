// @ts-check
// Mix both DamagesGroup and HFx from MT into a single action
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/DamagesGroup.hx
// getEffect from https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx
import { SkillList } from '../Enums.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { FxAnim } from './skills/fx/FxAnim.js';
import { GrCorruption } from './skills/group/GrCorruption.js';
import { GrDivineLight } from './skills/group/GrDivineLight.js';
import { GrFireBreath } from './skills/group/GrFireBreath.js';
import { GrFireball } from './skills/group/GrFireball.js';
import { GrJumpAttack } from './skills/group/GrJumpAttack.js';
import { GrLava } from './skills/group/GrLava.js';
import { GrMeteor } from './skills/group/GrMeteor.js';
import { GrShower } from './skills/group/GrShower.js';
import { GrVines } from './skills/group/GrVines.js';

/**
 * The parameters of a skill.
 * @typedef {{
 * 	fid?: number,
 * 	targets?: {id: number, life?: number}[],
 * 	type?: number,
 * 	fx?: string,
 * 	anim?: string,
 * 	speed?: number,
 * 	power?: number
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
		// Target without life are dodging the skill.
		if (this._targets) {
			for (const t of this._targets ?? []) {
				if (t.life === undefined) {
					t.fighter.playAnim('special');
				}
			}
			this._targets = this._targets.filter((t) => t.life !== undefined);
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
			case SkillList.Shower:
				return new GrShower(this._scene, () => this.end(), this._fighter, this._targets, this._details.type);
			case SkillList.Tremor:
			case SkillList.JumpAttack:
				return new GrJumpAttack(this._scene, () => this.end(), this._fighter, this._targets, this._details.fx);
			case SkillList.Anim:
				return new FxAnim(this._scene, () => this.end(), this._fighter, this._details.anim);
			case SkillList.Corruption:
				return new GrCorruption(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.DivineLight:
				return new GrDivineLight(this._scene, () => this.end(), this._fighter, this._targets);
		}
		return null;
	}
}
