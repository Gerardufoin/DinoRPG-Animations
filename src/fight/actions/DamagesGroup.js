// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/DamagesGroup.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

export const Skill = {
	Todo: 0,
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
	Deluge: 26
};

/**
 * A Fighter targets a group of Fighters with a skill from DamagesGroup.Skill.
 */
export class DamagesGroup extends State {
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
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The attacking Fighter's id.
	 * @param {{id: number, damages: number}[]} targets The targets of the skill.
	 * @param {{skill: number, type?: number, fx?: string, anim?: string, speed?: number, power?: number}} skill The skill to use and its parameters.
	 */
	constructor(scene, endCall, fid, targets, skill) {
		super(scene, endCall);
		this._attacker = this._scene.getFighter(fid);
		if (!this._attacker) {
			this.kill();
			console.error(`DamagesGroup Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}
		this.addActor(this._attacker);
		this._targets = [];
		for (const t of targets) {
			const f = this._scene.getFighter(t.id);
			if (!f) {
				this.kill();
				console.error(`DamagesGroup Error: Fighter with id ${t.id} does not exist in the scene.`);
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
		console.log(`Fighter ${this._attacker.id} uses skill ${Object.keys(Skill)[this._skill.skill]}`);
		// TODO
		// Temp
		for (const t of this._targets) {
			if (this._skill.skill === Skill.Heal) {
				t.fighter.gainLife(t.damages);
			} else if (this._skill.skill !== Skill.Vigne) {
				t.fighter.damages(t.damages);
			}
		}
		this.end();
	}
}
