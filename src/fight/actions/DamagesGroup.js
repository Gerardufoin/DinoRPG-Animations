// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/DamagesGroup.hx

import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

/**
 * A Fighter targets a group of Fighters with a skill from DamagesGroup.Skill.
 */
export class DamagesGroup extends State {
	static Skill = {
		Todo: 0,
		Fireball: 1,
		Blow: 2,
		Lava: 3,
		Meteor: 4,
		Vigne: 5,
		WaterCanon: 6,
		Shower: 7,
		Shower2: 8,
		LevitRay: 9,
		Lightning: 10,
		Crepuscule: 11,
		Mistral: 12,
		Tornade: 13,
		Disc: 14,
		Hole: 15,
		Ice: 16,
		Projectile: 17,
		Tremor: 18,
		JumpAttack: 19,
		ChainLightning: 20,
		Heal: 21,
		Charge: 22,
		Anim: 23,
		Invoc: 24,
		Sylfide: 25,
		Rafale: 26,
		Deluge: 27
	};

	/**
	 * The Fighter using the skill.
	 * @type {Fighter}
	 */
	_attacker;
	/**
	 * The targets of the skill.
	 * @type {{fighter: Fighter, damages: number}[]}
	 */
	_targets;
	/**
	 * The DamagesGroup.Skill being used and its parameters.
	 * @type {{skill: number, type?: number, fx?: string, anim?: string, speed?: number, power?: number}}
	 */
	_skill;

	/**
	 * A Fighter uses a skill on a group of targets.
	 * @param {Scene} scene The Scene where the action is happening.
	 * @param {number} fid The attacking Fighter's id.
	 * @param {{id: number, damages: number}[]} targets The targets of the skill.
	 * @param {{skill: number, type?: number, fx?: string, anim?: string, speed?: number, power?: number}} skill The skill to use and its parameters.
	 */
	constructor(scene, fid, targets, skill) {
		super(scene);
		this._attacker = this._scene.getFighter(fid);
		if (!this._attacker) {
			this.kill();
			console.error(`Damages Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}
		this.addActor(this._attacker);
		this._targets = [];
		for (const t of targets) {
			const f = this._scene.getFighter(t.id);
			if (!f) {
				this.kill();
				console.error(`Damages Error: Fighter with id ${t.id} does not exist in the scene.`);
				return;
			}
			this._targets.push({ fighter: f, damages: t.damages });
			this.addActor(f);
		}
		this._skill = skill;
	}

	/**
	 * Initialize the skill being used.
	 */
	init() {
		console.log(`Fighter ${this._attacker.id} uses skill ${Object.keys(DamagesGroup.Skill)[this._skill.skill]}`);
		// TODO
		this.end();
	}
}
