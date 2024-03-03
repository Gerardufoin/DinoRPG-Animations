// @ts-check
// Mix both DamagesGroup and HFx from MT into a single action
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/DamagesGroup.hx
// getEffect from https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

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

export const SkillList = {
	Todo: 0,
	// _DamagesGroup
	Fireball: 1,
	Blow: 2,
	Lava: 3,
	Meteor: 4,
	Vigne: 5,
	WaterCanon: 6,
	Shower: 7,
	LevitRay: 8,
	Lightning: 9,
	Crepuscule: 10,
	Mistral: 11,
	Tornade: 12,
	Disc: 13,
	Hole: 14,
	Ice: 15,
	Projectile: 16,
	Tremor: 17,
	JumpAttack: 18,
	ChainLightning: 19,
	Heal: 20,
	Charge: 21,
	Anim: 22,
	Invoc: 23,
	Sylfide: 24,
	Rafale: 25,
	Deluge: 26,
	// FX
	Env7: 27,
	Aura: 28,
	Snow: 29,
	Swamp: 30,
	Cloud: 31,
	Focus: 32,
	Default: 33,
	Attach: 34,
	AttachAnim: 35,
	Hypnose: 36,
	Ray: 37,
	Speed: 38,
	HeadOrTail: 39,
	Leaf: 40,
	MudWall: 41,
	Blink: 42,
	Generate: 43
};

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

		if (details.fid) {
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
		if (this._fighter) {
			console.log(`Fighter ${this._fighter.id} uses skill ${Object.keys(SkillList)[this._skill]}`);
		} else {
			console.log(`Skill ${Object.keys(SkillList)[this._skill]} invoked.`);
		}
		// TODO
		// Temp
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
}
