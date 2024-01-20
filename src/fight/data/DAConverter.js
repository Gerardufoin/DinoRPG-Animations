// @ts-check

import { Fight } from '../Fight.js';
import { Fighter } from '../Fighter.js';
import { EntranceEffect } from '../actions/AddFighter.js';
import { DamagesEffect } from '../actions/Damages.js';
import { Skill } from '../actions/DamagesGroup.js';
import { EndBehaviour } from '../actions/Finish.js';
import { GotoEffect } from '../actions/GotoFighter.js';
import { FXEffect } from '../actions/Effect.js';

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
	 * Convert an entrance effect from MT into a EntranceEffect.
	 * @param {object} effect MT entrance effect object.
	 * @returns {{entrance: number, x?: number, y?: number, anim?: string}} The converted EntranceEffect.
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
				obj.entrance = EntranceEffect.Stand;
				break;
			case '_AFGrow':
				obj.entrance = EntranceEffect.Grow;
				break;
			case '_AFFall':
				obj.entrance = EntranceEffect.Fall;
				break;
			case '_AFRun':
				obj.entrance = EntranceEffect.Run;
				break;
			case '_AFGround':
				obj.entrance = EntranceEffect.Ground;
				break;
			case '_AFAnim':
				obj.entrance = EntranceEffect.Anim;
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
				obj.effect = GotoEffect.Normal;
				break;
			case '_GOver':
				obj.entrance = GotoEffect.Over;
				break;
			case '_GSpecial':
				obj.entrance = GotoEffect.Special;
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
	 * @returns {{fx: number, amount?: number, size?: number}} The corresponding Fighter.LifeEffect with its arguments or undefined if none.
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
			const ret = {
				fx: mapping[obj.value]
			};
			switch (ret.fx) {
				case Fighter.LifeEffect.Burn:
					ret.amount = obj.args[0];
					break;
				case Fighter.LifeEffect.Skull:
					ret.size = obj.args[0];
					break;
			}
			return ret;
		}
		return undefined;
	}

	/**
	 * Convert an _Effect enum into a DamagesEffect.
	 * @param {object} obj The _Effect enum to convert.
	 * @returns {number} The DamagesEffect or undefined.
	 */
	static convertDamagesEffect(obj) {
		const mapping = {
			_ENormal: DamagesEffect.Normal,
			_EDrop: DamagesEffect.Drop,
			_EBack: DamagesEffect.Back,
			_EEject: DamagesEffect.Eject,
			_ECounter: DamagesEffect.Counter
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
		return {
			action: Fight.Action.Finish,
			left: DAConverter.convertEndBehavior(args[0]),
			right: DAConverter.convertEndBehavior(args[1])
		};
	}

	/**
	 * Convert an _EndBehavior enum into a Finish.EndBehaviour.
	 * @param {object} obj The _EndBehavior enum to convert.
	 * @returns {number} The Finish.EndBehaviour or undefined.
	 */
	static convertEndBehavior(obj) {
		switch (obj.value) {
			case '_EBRun':
				return EndBehaviour.Run;
			case '_EBEscape':
				return EndBehaviour.Escape;
			case '_EBStand':
				return EndBehaviour.Stand;
			case '_EBGuard':
				return EndBehaviour.Guard;
		}
		return EndBehaviour.Stand;
	}

	/**
	 * Convert the _History._HRegen enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHRegen(args) {
		return {
			action: Fight.Action.Regen,
			fid: args[0],
			amount: args[1],
			lifeFx: DAConverter.convertLifeEffect(args[2])
		};
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
		return { action: Fight.Action.Status, fid: args[0], ...DAConverter.convertFighterStatus(args[1]) };
	}

	/**
	 * Convert the _History._HNoStatus enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHNoStatus(args) {
		return { action: Fight.Action.NoStatus, fid: args[0], ...DAConverter.convertFighterStatus(args[1]) };
	}

	/**
	 * Convert a _Status enum from from MT into a Fighter.Status.
	 * @param {object} status MT _Status enum.
	 * @returns {{status: number, power?: number}} The converted Fighter.Status.
	 */
	static convertFighterStatus(status) {
		const mapping = {
			_SSleep: Fighter.Status.Sleep,
			_SFlames: Fighter.Status.Flames,
			_SBurn: Fighter.Status.Burn,
			_SIntang: Fighter.Status.Intang,
			_SFly: Fighter.Status.Fly,
			_SSlow: Fighter.Status.Slow,
			_SQuick: Fighter.Status.Quick,
			_SStoned: Fighter.Status.Stoned,
			_SBless: Fighter.Status.Bless,
			_SPoison: Fighter.Status.Poison,
			_SShield: Fighter.Status.Shield,
			_SHeal: Fighter.Status.Heal,
			_SMonoElt: Fighter.Status.MonoElt,
			_SDazzled: Fighter.Status.Dazzled,
			_SStun: Fighter.Status.Stun
		};
		const ret = {
			status: mapping[status.value]
		};
		switch (ret.status) {
			case Fighter.Status.Burn:
			case Fighter.Status.Poison:
			case Fighter.Status.MonoElt:
			case Fighter.Status.Heal:
			case Fighter.Status.Dazzled:
				ret.power = status.args[0];
				break;
		}
		return ret;
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
	 * Convert a _GroupEffect from from MT into a Skill.
	 * @param {object} skill MT skill object.
	 * @returns {{skill: number, type?: number, fx?: number, anim?: string, speed?: number, power?: number}} The converted Skill.
	 */
	static convertDamageSkill(skill) {
		const mapping = {
			_GrTodo: Skill.Todo,
			_GrFireball: Skill.Fireball,
			_GrBlow: Skill.Blow,
			_GrLava: Skill.Lava,
			_GrMeteor: Skill.Meteor,
			_GrVigne: Skill.Vigne,
			_GrWaterCanon: Skill.WaterCanon,
			_GrShower: Skill.Shower,
			_GrShower2: Skill.Shower,
			_GrLevitRay: Skill.LevitRay,
			_GrLightning: Skill.Lightning,
			_GrCrepuscule: Skill.Crepuscule,
			_GrMistral: Skill.Mistral,
			_GrTornade: Skill.Tornade,
			_GrDisc: Skill.Disc,
			_GrHole: Skill.Hole,
			_GrIce: Skill.Ice,
			_GrProjectile: Skill.Projectile,
			_GrTremor: Skill.Tremor,
			_GrJumpAttack: Skill.JumpAttack,
			_GrChainLightning: Skill.ChainLightning,
			_GrHeal: Skill.Heal,
			_GrCharge: Skill.Charge,
			_GrAnim: Skill.Anim,
			_GrInvoc: Skill.Invoc,
			_GrSylfide: Skill.Sylfide,
			_GrRafale: Skill.Rafale,
			_GrDeluge: Skill.Deluge
		};
		const obj = {
			skill: Skill.Todo
		};
		if (!skill) return obj;

		obj.skill = mapping[skill.value];
		switch (obj.skill) {
			case Skill.Shower:
				if (skill.value === '_GrShower2') {
					obj.type = skill.args[0]; // int (not sure)
				}
				break;
			case Skill.Projectile:
				obj.fx = skill.args[0]; //sand, gland, aiguillon, lame, rocher
				obj.anim = skill.args[1]; // string (anim)
				obj.speed = skill.args[2]; // float
				break;
			case Skill.JumpAttack:
				obj.fx = skill.args[0]; //string (landing fx)
				break;
			case Skill.Heal:
				obj.type = skill.args[0]; // 0-1, 0 = leaf fx, 1 = not
				break;
			case Skill.Anim:
				obj.anim = skill.args[0]; // string
				break;
			case Skill.Invoc:
				obj.anim = skill.args[0]; // string
				break;
			case Skill.Rafale:
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
		return { action: Fight.Action.Fx, ...DAConverter.convertFXEffect(args[0]) };
	}

	/**
	 * Convert a _SuperEffect from from MT into a FXEffect.
	 * @param {object} effect MT _SuperEffect enum.
	 * @returns {{fx: number}} The converted Skill.
	 */
	static convertFXEffect(effect) {
		const mapping = {
			_SFEnv7: FXEffect.Env7,
			_SFAura: FXEffect.Aura,
			_SFAura2: FXEffect.Aura,
			_SFSnow: FXEffect.Snow,
			_SFSwamp: FXEffect.Swamp,
			_SFCloud: FXEffect.Cloud,
			_SFFocus: FXEffect.Focus,
			_SFDefault: FXEffect.Default,
			_SFAttach: FXEffect.Attach,
			_SFAttachAnim: FXEffect.AttachAnim,
			_SFAnim: FXEffect.Anim,
			_SFHypnose: FXEffect.Hypnose,
			_SFRay: FXEffect.Ray,
			_SFSpeed: FXEffect.Speed,
			_SFRandom: FXEffect.HeadOrTail,
			_SFLeaf: FXEffect.Leaf,
			_SFMudWall: FXEffect.MudWall,
			_SFBlink: FXEffect.Blink,
			_SFGenerate: FXEffect.Generate
		};
		const ret = {
			fx: mapping[effect.value]
		};
		switch (ret.fx) {
			case FXEffect.Env7:
				ret.frame = effect.args[0]; // (number) -> string [cendre, abysse, amazon, stelme, ourano]
				ret.remove = effect.args[1]; //boolean
				break;
			case FXEffect.Aura:
				ret.fid = effect.args[0]; // number
				ret.color = effect.args[1]; // number
				ret.id = effect.args[2]; // number
				if (effect.value === '_SFAura2') {
					ret.type = effect.args[3]; // number
				}
				break;
			case FXEffect.Snow:
				ret.fid = effect.args[0]; // number
				ret.id = effect.args[1]; // number
				ret.color = effect.args[2]; // number
				ret.rainbowPercent = effect.args[3]; // number
				break;
			case FXEffect.Swamp:
			case FXEffect.Default:
			case FXEffect.Ray:
				ret.fid = effect.args[0]; // number
				break;
			case FXEffect.Cloud:
				ret.fid = effect.args[0]; // number
				ret.id = effect.args[1]; // number
				ret.color = effect.args[2]; // number
				break;
			case FXEffect.Focus:
				ret.fid = effect.args[0]; // number
				ret.color = effect.args[1]; // number
				break;
			case FXEffect.Anim:
			case FXEffect.Attach:
				ret.fid = effect.args[0]; // number
				ret.link = effect.args[1]; // string
				break;
			case FXEffect.AttachAnim:
				ret.fid = effect.args[0]; // number
				ret.link = effect.args[1]; // string
				ret.frame = effect.args[2]; // string ?
				break;
			case FXEffect.Hypnose:
				ret.fid = effect.args[0]; // number
				ret.tid = effect.args[1]; // number
				break;
			case FXEffect.Speed:
				ret.fid = effect.args[0]; // number
				ret.tids = effect.args[1]; // number[]
				break;
			case FXEffect.HeadOrTail:
				ret.fid = effect.args[0]; // number
				ret.frame = effect.args[1]; // number -> (type of card)
				ret.result = effect.args[2]; // boolean
				break;
			case FXEffect.Leaf:
				ret.fid = effect.args[0]; // number
				ret.link = effect.args[1]; // string
				break;
			case FXEffect.MudWall:
				ret.fid = effect.args[0]; // number
				ret.remove = effect.args[1]; // boolean
				break;
			case FXEffect.Blink:
				ret.fid = effect.args[0]; // number
				ret.color = effect.args[1]; // number
				ret.alpha = effect.args[2]; // number
				break;
			case FXEffect.Generate:
				ret.fid = effect.args[0]; // number
				ret.color = effect.args[1]; // number
				ret.strength = effect.args[2]; // number
				ret.radius = effect.args[3]; // number
				break;
		}
		return ret;
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
		return { action: Fight.Action.Escape, fid: args[0] };
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
