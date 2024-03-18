// @ts-check
// Mix both DamagesGroup and HFx from MT into a single action
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/DamagesGroup.hx
// getEffect from https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx
import { SkillList } from '../Enums.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Anim } from './skills/Anim.js';
import { Corruption } from './skills/group/Corruption.js';
import { DivineLight } from './skills/group/DivineLight.js';
import { JumpAttack } from './skills/group/JumpAttack.js';
import { Shower } from './skills/group/Shower.js';

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
			case SkillList.Shower:
				return new Shower(this._scene, () => this.end(), this._fighter, this._targets, this._details.type);
			case SkillList.Tremor:
			case SkillList.JumpAttack:
				return new JumpAttack(this._scene, () => this.end(), this._fighter, this._targets, this._details.fx);
			case SkillList.Anim:
				return new Anim(this._scene, () => this.end(), this._fighter, this._details.anim);
			case SkillList.Corruption:
				return new Corruption(this._scene, () => this.end(), this._fighter, this._targets);
			case SkillList.DivineLight:
				return new DivineLight(this._scene, () => this.end(), this._fighter, this._targets);
		}
		return null;
	}
}
