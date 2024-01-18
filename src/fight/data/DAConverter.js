// @ts-check

import { Fight } from '../Fight.js';
import { Fighter } from '../Fighter.js';
import { AddFighter } from '../actions/AddFighter.js';
import { Damages } from '../actions/Damages.js';
import { DamagesGroup } from '../actions/DamagesGroup.js';
import { GotoFighter } from '../actions/GotoFighter.js';

/**
 * Convert MT fight data into DA fight data.
 */
export class DAConverter {
	/**
	 * Mapping between MT _History enum values and Fight.Action enum values.
	 */
	static HistoryToAction = {
		_HAdd: DAConverter.convertHAdd,
		_HAddCastle: DAConverter.convertHAddCastle,
		_HMoveTo: DAConverter.convertHMoveTo,
		_HDamages: DAConverter.convertHDamages,
		_HDamagesGroup: DAConverter.convertHDamagesGroup,
		_HCastleAttack: DAConverter.convertHCastleAttack,
		_HReturn: DAConverter.convertHReturn,
		_HDead: DAConverter.convertHDead,
		_HLost: DAConverter.convertHLost,
		_HEscape: DAConverter.convertHEscape,
		_HFinish: DAConverter.convertHFinish,
		_HEnergy: DAConverter.convertHEnergy,
		_HMaxEnergy: DAConverter.convertHMaxEnergy,
		_HPause: DAConverter.convertHPause,
		_HAnnounce: DAConverter.convertHAnnounce,
		_HGoto: DAConverter.convertHGoto,
		_HRegen: DAConverter.convertHRegen,
		_HObject: DAConverter.convertHObject,
		_HFx: DAConverter.convertHFx,
		_HStatus: DAConverter.convertHStatus,
		_HNoStatus: DAConverter.convertHNoStatus,
		_HDisplay: DAConverter.convertHDisplay,
		_HTimeLimit: DAConverter.convertHTimeLimit,
		_HTalk: DAConverter.convertHTalk,
		_HText: DAConverter.convertHText,
		_HFlip: DAConverter.convertHFlip,
		_SpawnToy: DAConverter.convertSpawnToy,
		_DestroyToy: DAConverter.convertDestroyToy,
		_HWait: DAConverter.convertHWait,
		_HLog: DAConverter.convertHLog,
		_HNotify: DAConverter.convertHNotify
	};

	/**
	 * Convert the fight data unserialized using HaxeUnserializer into the format used by this project.
	 * @param {object} mtData Data unserialized from MT legacy format.
	 * @returns {{bg?:string, history: Array}} An object containing the fight data converted to the format used for this project.
	 */
	static convert(mtData) {
		const data = {
			bg: DAConverter.getBackground(mtData),
			top: mtData._mtop ?? 0,
			bottom: mtData._mbottom ?? 0,
			right: mtData._mright ?? 0,
			history: DAConverter.convertHistory(mtData)
		};
		return data;
	}

	/**
	 * Get the background as a string which can be used as a key for gfx.background.
	 * @param {object} mtData The fight data under its legacy format.
	 * @returns {string | undefined} The key to use to get the correct background.
	 */
	static getBackground(mtData) {
		let bgRef = mtData._dojo ? mtData._dojo : mtData._bg;
		if (bgRef) {
			const match = bgRef.match(/(\w+)\./);
			return match ? match[1] : undefined;
		}
		return undefined;
	}

	/**
	 * Convert the fight history from MT version to Fight.js version.
	 * @param {object} mtData The fight data under its legacy format.
	 * @returns {object} An object containing the fight history with this project format.
	 */
	static convertHistory(mtData) {
		const history = [];
		console.log(JSON.stringify(mtData._history, null, '\t'));
		for (const h of mtData._history) {
			if (DAConverter.HistoryToAction[h.value]) {
				history.push(DAConverter.HistoryToAction[h.value](h.args));
			} else {
				console.error(`Error while converting history: Unknown action '${h.value}'.`);
			}
		}
		return history;
	}

	/**
	 * Convert the _History._HAdd enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHAdd(args) {
		if (args.length !== 2) {
			console.error(`_HAdd arguments size different from 2: ${args.length}`);
		}
		const ret = {
			action: Fight.Action.Add,
			fighter: {
				props: args[0]._props,
				dino: args[0]._dino,
				life: args[0]._life,
				name: args[0]._name,
				side: args[0]._side,
				scale: args[0]._size / 100,
				fid: args[0]._fid,
				gfx: args[0]._gfx,
				...DAConverter.convertEntranceEffect(args[1])
			}
		};
		ret.maxLife = ret.dino && ret.props.length == 0 ? args[0]._size : args[0]._life;
		return ret;
	}

	/**
	 * Convert an entrance effect from MT into a AddFighter.EntranceEffect.
	 * @param {object} effect MT entrance effect object.
	 * @returns {{entrance: number, x?: number, y?: number, anim?: string}} The converted AddFighter.EntranceEffect.
	 */
	static convertEntranceEffect(effect) {
		const obj = {};
		if (!effect) return obj;
		if (effect.value === '_AFPos') {
			obj.x = effect.args[0];
			obj.y = effect.args[1];
			effect = effect.args[2];
		}
		switch (effect.value) {
			case '_AFStand':
				obj.entrance = AddFighter.EntranceEffect.Stand;
				break;
			case '_AFGrow':
				obj.entrance = AddFighter.EntranceEffect.Grow;
				break;
			case '_AFFall':
				obj.entrance = AddFighter.EntranceEffect.Fall;
				break;
			case '_AFRun':
				obj.entrance = AddFighter.EntranceEffect.Run;
				break;
			case '_AFGround':
				obj.entrance = AddFighter.EntranceEffect.Ground;
				break;
			case '_AFAnim':
				obj.entrance = AddFighter.EntranceEffect.Anim;
				obj.anim = effect.args[0];
				break;
			default:
				console.error(`Unknown entrance effect '${effect.value}'`);
		}
		return obj;
	}

	/**
	 * Convert the _History._HEnergy enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHEnergy(args) {
		const ret = { action: Fight.Action.Energy, fighters: [] };
		for (let i = 0; i < args[0].length; ++i) {
			ret.fighters.push({
				fid: args[0][i],
				energy: args[1][i]
			});
		}
		return ret;
	}

	/**
	 * Convert the _History._HMaxEnergy enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHMaxEnergy(args) {
		const ret = { action: Fight.Action.MaxEnergy, fighters: [] };
		for (let i = 0; i < args[0].length; ++i) {
			ret.fighters.push({
				fid: args[0][i],
				maxEnergy: args[1][i]
			});
		}
		return ret;
	}

	/**
	 * Convert the _History._HPause enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHPause(args) {
		return { action: Fight.Action.Pause, time: args[0] };
	}

	/**
	 * Convert the _History._HAnnounce enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHAnnounce(args) {
		return { action: Fight.Action.Announce, fid: args[0], message: args[1] };
	}

	/**
	 * Convert the _History._HGoto enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHGoto(args) {
		return { action: Fight.Action.Goto, fid: args[0], tid: args[1], ...DAConverter.convertGotoEffect(args[2]) };
	}

	/**
	 * Convert a Goto effect from MT into a GotoFighter.Effect.
	 * @param {object} effect MT Goto effect object.
	 * @returns {{effect?: number, shadeColor?: {col1?:number, col2?: number}}} The converted GotoFighter.Effect.
	 */
	static convertGotoEffect(effect) {
		const obj = {};
		if (!effect) return obj;

		switch (effect.value) {
			case '_Normal':
				obj.effect = GotoFighter.Effect.Normal;
				break;
			case '_GOver':
				obj.entrance = GotoFighter.Effect.Over;
				break;
			case '_GSpecial':
				obj.entrance = GotoFighter.Effect.Special;
				obj.shadeColor = {
					col1: obj.args[0],
					col2: obj.args[1]
				};
				break;
		}
		return obj;
	}

	/**
	 * Convert the _History._HDamages enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHDamages(args) {
		return {
			action: Fight.Action.Damages,
			fid: args[0],
			tid: args[1],
			damages: args[2],
			lifeFx: DAConverter.convertLifeEffect(args[3]),
			effect: DAConverter.convertDamagesEffect(args[4])
		};
	}

	/**
	 * Convert a _LifeEffect into a Fighter.LifeEffet.
	 * @param {object} obj _LifeEffect enum.
	 * @returns {number} The corresponding Fighter.LeftEffect or undefined if none.
	 */
	static convertLifeEffect(obj) {
		const mapping = {
			_LNormal: Fighter.LifeEffect.Normal,
			_LFire: Fighter.LifeEffect.Fire,
			_LWood: Fighter.LifeEffect.Wood,
			_LWater: Fighter.LifeEffect.Water,
			_LLightning: Fighter.LifeEffect.Lightning,
			_LAir: Fighter.LifeEffect.Air,
			_LBurn: Fighter.LifeEffect.Burn,
			_LHeal: Fighter.LifeEffect.Heal,
			_LSkull: Fighter.LifeEffect.Skull,
			_LAcid: Fighter.LifeEffect.Acid
		};
		if (obj) {
			return mapping[obj.value];
		}
		return undefined;
	}

	/**
	 * Convert an _Effect enum into a Damages.Effect.
	 * @param {object} obj The _Effect enum to convert.
	 * @returns {number} The Damages.Effect or undefined.
	 */
	static convertDamagesEffect(obj) {
		const mapping = {
			_ENormal: Damages.Effect.Normal,
			_EDrop: Damages.Effect.Drop,
			_EBack: Damages.Effect.Back,
			_EEject: Damages.Effect.Eject,
			_ECounter: Damages.Effect.Counter
		};
		if (obj) {
			return mapping[obj.value];
		}
		return undefined;
	}

	/**
	 * Convert the _History._HReturn enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHReturn(args) {
		return { action: Fight.Action.Return, fid: args[0] };
	}

	/**
	 * Convert the _History._HDead enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHDead(args) {
		return { action: Fight.Action.Dead, fid: args[0] };
	}

	/**
	 * Convert the _History._HLost enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHLost(args) {
		console.log('Conversion for "_HLost" not done yet.');
		return { action: Fight.Action.Lost };
	}

	/**
	 * Convert the _History._HFinish enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHFinish(args) {
		console.log('Conversion for "_HFinish" not done yet.');
		return { action: Fight.Action.Finish };
	}

	/**
	 * Convert the _History._HRegen enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHRegen(args) {
		console.log('Conversion for "_HRegen" not done yet.');
		return { action: Fight.Action.Regen };
	}

	/**
	 * Convert the _History._HObject enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHObject(args) {
		console.log('Conversion for "_HObject" not done yet.');
		return { action: Fight.Action.Object };
	}

	/**
	 * Convert the _History._HStatus enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHStatus(args) {
		console.log('Conversion for "_HStatus" not done yet.');
		return { action: Fight.Action.Status };
	}

	/**
	 * Convert the _History._HNoStatus enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHNoStatus(args) {
		console.log('Conversion for "_HNoStatus" not done yet.');
		return { action: Fight.Action.NoStatus };
	}

	/**
	 * Convert the _History._HDamagesGroup enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHDamagesGroup(args) {
		return {
			action: Fight.Action.DamagesGroup,
			fid: args[0],
			targets: args[1].map((v) => {
				return { id: v._tid, damages: v._life };
			}),
			...DAConverter.convertDamageSkill(args[2])
		};
	}

	/**
	 * Convert a _GroupEffect from from MT into a DamagesGroup.Skill.
	 * @param {object} skill MT skill object.
	 * @returns {{skill: number}} The converted DamagesGroup.Skill.
	 */
	static convertDamageSkill(skill) {
		const mapping = {
			_GrTodo: DamagesGroup.Skill.Todo,
			_GrFireball: DamagesGroup.Skill.Fireball,
			_GrBlow: DamagesGroup.Skill.Blow,
			_GrLava: DamagesGroup.Skill.Lava,
			_GrMeteor: DamagesGroup.Skill.Meteor,
			_GrVigne: DamagesGroup.Skill.Vigne,
			_GrWaterCanon: DamagesGroup.Skill.WaterCanon,
			_GrShower: DamagesGroup.Skill.Shower,
			_GrShower2: DamagesGroup.Skill.Shower2,
			_GrLevitRay: DamagesGroup.Skill.LevitRay,
			_GrLightning: DamagesGroup.Skill.Lightning,
			_GrCrepuscule: DamagesGroup.Skill.Crepuscule,
			_GrMistral: DamagesGroup.Skill.Mistral,
			_GrTornade: DamagesGroup.Skill.Tornade,
			_GrDisc: DamagesGroup.Skill.Disc,
			_GrHole: DamagesGroup.Skill.Hole,
			_GrIce: DamagesGroup.Skill.Ice,
			_GrProjectile: DamagesGroup.Skill.Projectile,
			_GrTremor: DamagesGroup.Skill.Tremor,
			_GrJumpAttack: DamagesGroup.Skill.JumpAttack,
			_GrChainLightning: DamagesGroup.Skill.ChainLightning,
			_GrHeal: DamagesGroup.Skill.Heal,
			_GrCharge: DamagesGroup.Skill.Charge,
			_GrAnim: DamagesGroup.Skill.Anim,
			_GrInvoc: DamagesGroup.Skill.Invoc,
			_GrSylfide: DamagesGroup.Skill.Sylfide,
			_GrRafale: DamagesGroup.Skill.Rafale,
			_GrDeluge: DamagesGroup.Skill.Deluge
		};
		const obj = {
			skill: DamagesGroup.Skill.Todo
		};
		if (!skill) return obj;

		obj.skill = mapping[skill.value];
		switch (obj.skill) {
			case DamagesGroup.Skill.Shower2:
				obj.type = skill.args[0]; // int (not sure)
				break;
			case DamagesGroup.Skill.Projectile:
				obj.fx = skill.args[0]; //sand, gland, aiguillon, lame, rocher
				obj.anim = skill.args[1]; // string (anim)
				obj.speed = skill.args[2]; // float
				break;
			case DamagesGroup.Skill.JumpAttack:
				obj.fx = skill.args[0]; //string (landing fx)
				break;
			case DamagesGroup.Skill.Heal:
				obj.type = skill.args[0]; // 0-1, 0 = leaf fx, 1 = not
				break;
			case DamagesGroup.Skill.Anim:
				obj.anim = skill.args[0]; // string
				break;
			case DamagesGroup.Skill.Invoc:
				obj.anim = skill.args[0]; // string
				break;
			case DamagesGroup.Skill.Rafale:
				obj.fx = skill.args[0]; // string - fx droplets of water
				obj.power = skill.args[0];
				obj.speed = skill.args[0];
				break;
		}
		return obj;
	}

	/**
	 * Convert the _History._HFx enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHFx(args) {
		console.log('Conversion for "_HFx" not done yet.');
		return { action: Fight.Action.Fx };
	}

	/**
	 * Convert the _History._HAddCastle enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHAddCastle(args) {
		console.log('Conversion for "_HAddCastle" not done yet.');
		return { action: Fight.Action.AddCastle };
	}

	/**
	 * Convert the _History._HCastleAttack enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHCastleAttack(args) {
		console.log('Conversion for "_HCastleAttack" not done yet.');
		return { action: Fight.Action.CastleAttack };
	}

	/**
	 * Convert the _History._HDisplay enum into a Fight.Action command.
	 * @param {Array} _args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHDisplay(_args) {
		return { action: Fight.Action.Display };
	}

	/**
	 * Convert the _History._HTimeLimit enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHTimeLimit(args) {
		console.log('Conversion for "_HTimeLimit" not done yet.');
		return { action: Fight.Action.TimeLimit };
	}

	/**
	 * Convert the _History._HTalk enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHTalk(args) {
		console.log('Conversion for "_HTalk" not done yet.');
		return { action: Fight.Action.Talk };
	}

	/**
	 * Convert the _History._HText enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHText(args) {
		console.log('Conversion for "_HText" not done yet.');
		return { action: Fight.Action.Text };
	}

	/**
	 * Convert the _History._HEscape enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHEscape(args) {
		console.log('Conversion for "_HEscape" not done yet.');
		return { action: Fight.Action.Escape };
	}

	/**
	 * Convert the _History._HMoveTo enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHMoveTo(args) {
		return { action: Fight.Action.MoveTo, fid: args[0], x: args[1], y: args[2] };
	}

	/**
	 * Convert the _History._HFlip enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHFlip(args) {
		console.log('Conversion for "_HFlip" not done yet.');
		return { action: Fight.Action.Flip };
	}

	/**
	 * Convert the _History._SpawnToy enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertSpawnToy(args) {
		console.log('Conversion for "_SpawnToy" not done yet.');
		return { action: Fight.Action.SpawnToy };
	}

	/**
	 * Convert the _History._DestroyToy enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertDestroyToy(args) {
		console.log('Conversion for "_DestroyToy" not done yet.');
		return { action: Fight.Action.DestroyToy };
	}

	/**
	 * Convert the _History._HWait enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHWait(args) {
		console.log('Conversion for "_HWait" not done yet.');
		return { action: Fight.Action.Wait };
	}

	/**
	 * Convert the _History._HLog enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHLog(args) {
		return { action: Fight.Action.Log, msg: args[0] };
	}

	/**
	 * Convert the _History._HNotify enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHNotify(args) {
		console.log('Conversion for "_HNotify" not done yet.');
		return { action: Fight.Action.Notify };
	}
}
