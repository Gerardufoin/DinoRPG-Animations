// @ts-check

import {
	Action,
	DamagesEffect,
	EndBehaviour,
	EntranceEffect,
	FighterProperty,
	FighterStatus,
	GotoEffect,
	GroundType,
	LifeEffect,
	NotificationList,
	SkillList,
	SkillType
} from '../Enums.js';

/**
 * Convert MT fight data into DA fight data.
 */
export class DAConverter {
	/**
	 * Mapping between MT _History enum values and Action enum values.
	 */
	static HistoryToAction = {
		_HAdd: DAConverter.convertHAdd,
		_HAnnounce: DAConverter.convertHAnnounce,
		_HObject: DAConverter.convertHObject,
		_HLost: DAConverter.convertHLost,
		_HStatus: DAConverter.convertHStatus,
		_HNoStatus: DAConverter.convertHNoStatus,
		_HRegen: DAConverter.convertHRegen,
		_HDamages: DAConverter.convertHDamages,
		_HDamagesGroup: DAConverter.convertHDamagesGroup,
		_HFx: DAConverter.convertHFx,
		_HDead: DAConverter.convertHDead,
		_HGoto: DAConverter.convertHGoto,
		_HReturn: DAConverter.convertHReturn,
		_HPause: DAConverter.convertHPause,
		_HFinish: DAConverter.convertHFinish,
		_HAddCastle: DAConverter.convertHAddCastle,
		_HTimeLimit: DAConverter.convertHTimeLimit,
		_HCastleAttack: DAConverter.convertHCastleAttack,
		_HDisplay: DAConverter.convertHDisplay,
		_HText: DAConverter.convertHText,
		_HTalk: DAConverter.convertHTalk,
		_HEscape: DAConverter.convertHEscape,
		_HMoveTo: DAConverter.convertHMoveTo,
		_HFlip: DAConverter.convertHFlip,
		_SpawnToy: DAConverter.convertSpawnToy,
		_DestroyToy: DAConverter.convertDestroyToy,
		_HWait: DAConverter.convertHWait,
		_HLog: DAConverter.convertHLog,
		_HNotify: DAConverter.convertHNotify,
		_HEnergy: DAConverter.convertHEnergy,
		_HMaxEnergy: DAConverter.convertHMaxEnergy
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
			ground: DAConverter.getGroundType(mtData._ground),
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
			const match = bgRef.match(/(\w+)\.\w+$/);
			return match ? match[1] : undefined;
		}
		return undefined;
	}

	/**
	 * Convert the ground type value from MT into a GroupType enum value.
	 * @param {string} groundType The type of ground of the Scene.
	 * @returns {number} The GroupType enum value.
	 */
	static getGroundType(groundType) {
		const mapping = {
			dirt: GroundType.Dirt,
			water: GroundType.Water,
			rock: GroundType.Rock
		};
		return mapping[groundType] ?? GroundType.None;
	}

	/**
	 * Convert the fight history from MT version to Fight.js version.
	 * @param {object} mtData The fight data under its legacy format.
	 * @returns {object} An object containing the fight history with this project format.
	 */
	static convertHistory(mtData) {
		const history = [];
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
	 * Convert the _History._HAdd enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHAdd(args) {
		if (args.length !== 2) {
			console.error(`_HAdd arguments size different from 2: ${args.length}`);
		}
		const ret = {
			action: Action.Add,
			fighter: {
				props: args[0]._props.map((p) => DAConverter.convertProperty(p)),
				dino: args[0]._dino,
				life: args[0]._life,
				maxLife: args[0]._dino && args[0]._props.length == 0 ? args[0]._size : args[0]._life,
				name: args[0]._name,
				side: args[0]._side,
				scale: args[0]._size / 100,
				fid: args[0]._fid,
				gfx: args[0]._gfx,
				...DAConverter.convertEntranceEffect(args[1])
			}
		};
		return ret;
	}

	/**
	 * Convert a props from MT into a FighterProperty.
	 * @param {object} prop MT props object.
	 * @returns {number} The converted FighterProperty.
	 */
	static convertProperty(prop) {
		const mapping = {
			_PBoss: FighterProperty.Boss,
			_PStatic: FighterProperty.Static,
			_PGroundOnly: FighterProperty.GroundOnly,
			_PDark: FighterProperty.Dark,
			_PNothing: FighterProperty.Nothing
		};
		return mapping[prop.value] ?? FighterProperty.Nothing;
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
			case '_AFJump':
				obj.entrance = EntranceEffect.Jump;
				break;
			case '_AFRun':
				obj.entrance = EntranceEffect.Run;
				break;
			case '_AFGrow':
				obj.entrance = EntranceEffect.Grow;
				break;
			case '_AFFall':
				obj.entrance = EntranceEffect.Fall;
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
	 * Convert the _History._HEnergy enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHEnergy(args) {
		const ret = { action: Action.Energy, fighters: [] };
		for (let i = 0; i < args[0].length; ++i) {
			ret.fighters.push({
				fid: args[0][i],
				energy: args[1][i]
			});
		}
		return ret;
	}

	/**
	 * Convert the _History._HMaxEnergy enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHMaxEnergy(args) {
		const ret = { action: Action.MaxEnergy, fighters: [] };
		for (let i = 0; i < args[0].length; ++i) {
			ret.fighters.push({
				fid: args[0][i],
				maxEnergy: args[1][i]
			});
		}
		return ret;
	}

	/**
	 * Convert the _History._HPause enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHPause(args) {
		return { action: Action.Pause, time: args[0] };
	}

	/**
	 * Convert the _History._HAnnounce enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHAnnounce(args) {
		return { action: Action.Announce, fid: args[0], message: args[1] };
	}

	/**
	 * Convert the _History._HGoto enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHGoto(args) {
		return { action: Action.Goto, fid: args[0], tid: args[1], ...DAConverter.convertGotoEffect(args[2]) };
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
					col1: effect.args[0],
					col2: effect.args[1]
				};
				break;
			case '_GTodo':
				obj.entrance = GotoEffect.Todo;
				break;
		}
		return obj;
	}

	/**
	 * Convert the _History._HDamages enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHDamages(args) {
		return {
			action: Action.Damages,
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
	 * @returns {{fx: number, amount?: number, size?: number}} The corresponding LifeEffect with its arguments or undefined if none.
	 */
	static convertLifeEffect(obj) {
		const mapping = {
			_LNormal: LifeEffect.Normal,
			_LObject: LifeEffect.Object,
			_LSkull: LifeEffect.Skull,
			_LAcid: LifeEffect.Acid,
			_LPoison: LifeEffect.Poison,
			_LHeal: LifeEffect.Heal,
			_LExplode: LifeEffect.Explode,
			_LBurn: LifeEffect.Burn,
			_LFire: LifeEffect.Fire,
			_LWood: LifeEffect.Wood,
			_LWater: LifeEffect.Water,
			_LLightning: LifeEffect.Lightning,
			_LAir: LifeEffect.Air,
			_LGold: LifeEffect.Gold,
			_LTodo: LifeEffect.Todo
		};
		if (obj) {
			const ret = {
				fx: mapping[obj.value]
			};
			switch (ret.fx) {
				case LifeEffect.Burn:
					ret.amount = obj.args[0];
					break;
				case LifeEffect.Skull:
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
			_EBack: DamagesEffect.Back,
			_ECounter: DamagesEffect.Counter,
			_EDrop: DamagesEffect.Drop,
			_EEject: DamagesEffect.Eject,
			_EFlyCancel: DamagesEffect.FlyCancel,
			_EIntangCancel: DamagesEffect.IntangCancel,
			_EIntangBreak: DamagesEffect.IntangBreak,
			_EMissed: DamagesEffect.Missed
		};
		if (obj) {
			return mapping[obj.value];
		}
		return undefined;
	}

	/**
	 * Convert the _History._HReturn enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHReturn(args) {
		return { action: Action.Return, fid: args[0] };
	}

	/**
	 * Convert the _History._HDead enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHDead(args) {
		return { action: Action.Dead, fid: args[0] };
	}

	/**
	 * Convert the _History._HLost enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHLost(args) {
		return {
			action: Action.Lost,
			fid: args[0],
			amount: args[1],
			lifeFx: DAConverter.convertLifeEffect(args[2])
		};
	}

	/**
	 * Convert the _History._HFinish enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHFinish(args) {
		return {
			action: Action.Finish,
			left: DAConverter.convertEndBehaviour(args[0]),
			right: DAConverter.convertEndBehaviour(args[1])
		};
	}

	/**
	 * Convert an _EndBehaviour enum into a Finish.EndBehaviour.
	 * @param {object} obj The _EndBehaviour enum to convert.
	 * @returns {number} The Finish.EndBehaviour or undefined.
	 */
	static convertEndBehaviour(obj) {
		switch (obj.value) {
			case '_EBStand':
				return EndBehaviour.Stand;
			case '_EBRun':
				return EndBehaviour.Run;
			case '_EBEscape':
				return EndBehaviour.Escape;
			case '_EBGuard':
				return EndBehaviour.Guard;
		}
		return EndBehaviour.Stand;
	}

	/**
	 * Convert the _History._HRegen enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHRegen(args) {
		return {
			action: Action.Regen,
			fid: args[0],
			amount: args[1],
			lifeFx: DAConverter.convertLifeEffect(args[2])
		};
	}

	/**
	 * Convert the _History._HObject enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHObject(args) {
		return { action: Action.Object, fid: args[0], name: args[1], item: args[2] };
	}

	/**
	 * Convert the _History._HStatus enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHStatus(args) {
		return { action: Action.Status, fid: args[0], status: DAConverter.convertFighterStatus(args[1]) };
	}

	/**
	 * Convert the _History._HNoStatus enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHNoStatus(args) {
		return { action: Action.NoStatus, fid: args[0], status: DAConverter.convertFighterStatus(args[1]) };
	}

	/**
	 * Convert a _Status enum from from MT into a FighterStatus.
	 * @param {object} status MT _Status enum.
	 * @returns {number} The converted FighterStatus.
	 */
	static convertFighterStatus(status) {
		const mapping = {
			_SSleep: FighterStatus.Sleep,
			_SFlames: FighterStatus.Flames,
			_SIntang: FighterStatus.Intang,
			_SFly: FighterStatus.Fly,
			_SSlow: FighterStatus.Slow,
			_SQuick: FighterStatus.Quick,
			_SStoned: FighterStatus.Stoned,
			_SShield: FighterStatus.Shield,
			_SBless: FighterStatus.Bless,
			_SPoison: FighterStatus.Poison,
			_SHeal: FighterStatus.Heal,
			_SBurn: FighterStatus.Burn,
			_SMonoElt: FighterStatus.MonoElt,
			_SDazzled: FighterStatus.Dazzled,
			_SStun: FighterStatus.Stun
		};
		return mapping[status.value];
	}

	/**
	 * Convert the _History._HDamagesGroup enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHDamagesGroup(args) {
		const details = DAConverter.convertDamageSkill(args[2]);
		const skill = details.skill;
		details.skill = undefined;
		details.fid = args[0];
		details.targets = args[1].map((v) => {
			return { id: v._tid, life: v._life };
		});
		return {
			action: Action.Skill,
			skill: skill,
			details: details
		};
	}

	/**
	 * Convert a _GroupEffect from from MT into a Skill details.
	 * @param {object} skill MT skill object.
	 * @returns {object} The converted Skill details.
	 */
	static convertDamageSkill(skill) {
		const mapping = {
			_GrTodo: SkillList.Todo,
			_GrFireball: SkillList.Fireball,
			_GrBlow: SkillList.Blow,
			_GrLava: SkillList.Lava,
			_GrMeteor: SkillList.Meteor,
			_GrVigne: SkillList.Vigne,
			_GrWaterCanon: SkillList.WaterCanon,
			_GrShower: SkillList.Shower,
			_GrShower2: SkillList.Shower,
			_GrLevitRay: SkillList.LevitRay,
			_GrLightning: SkillList.Lightning,
			_GrCrepuscule: SkillList.Crepuscule,
			_GrMistral: SkillList.Mistral,
			_GrTornade: SkillList.Tornade,
			_GrDisc: SkillList.Disc,
			_GrHole: SkillList.Hole,
			_GrIce: SkillList.Ice,
			_GrProjectile: SkillList.Projectile,
			_GrTremor: SkillList.Tremor,
			_GrJumpAttack: SkillList.JumpAttack,
			_GrChainLightning: SkillList.ChainLightning,
			_GrHeal: SkillList.Heal,
			_GrCharge: SkillList.Charge,
			_GrAnim: SkillList.Anim,
			_GrInvoc: SkillList.Invoc,
			_GrSylfide: SkillList.Sylfide,
			_GrRafale: SkillList.Rafale,
			_GrDeluge: SkillList.Deluge
		};
		const obj = {
			skill: SkillList.Todo
		};
		if (!skill) return obj;

		obj.skill = mapping[skill.value];
		switch (obj.skill) {
			case SkillList.Shower:
				switch (skill.args[0]) {
					case 1:
						obj.type = SkillType.Fire;
						break;
					default:
						obj.type = SkillType.Water;
				}
				break;
			case SkillList.Projectile:
				obj.fx = skill.args[0]; //sand, gland, aiguillon, lame, rocher
				obj.anim = skill.args[1]; // string (anim)
				obj.speed = skill.args[2]; // float
				break;
			case SkillList.JumpAttack:
				obj.fx = skill.args[0]; //string (landing fx)
				break;
			case SkillList.Heal:
				obj.type = skill.args[0]; // 0-1, 0 = leaf fx, 1 = not
				break;
			case SkillList.Anim:
				obj.anim = skill.args[0]; // string
				break;
			case SkillList.Invoc:
				obj.anim = skill.args[0]; // string
				break;
			case SkillList.Rafale:
				//obj.fx = skill.args[0]; // string - only supposed to be partWind in the source, so ignored.
				obj.power = skill.args[1];
				obj.speed = skill.args[2];
				break;
		}
		return obj;
	}

	/**
	 * Convert the _History._HFx enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHFx(args) {
		const details = DAConverter.convertFXSkill(args[0]);
		const skill = details.skill;
		details.skill = undefined;
		return { action: Action.Skill, skill: skill, details: details };
	}

	/**
	 * Convert a _SuperEffect from from MT into a Skill.
	 * @param {object} effect MT _SuperEffect enum.
	 * @returns {{skill: number}} The converted Skill.
	 */
	static convertFXSkill(effect) {
		const mapping = {
			_SFEnv7: SkillList.Env7,
			_SFAura: SkillList.Aura,
			_SFAura2: SkillList.Aura,
			_SFSnow: SkillList.Snow,
			_SFSwamp: SkillList.Swamp,
			_SFCloud: SkillList.Cloud,
			_SFFocus: SkillList.Focus,
			_SFDefault: SkillList.Default,
			_SFAttach: SkillList.Attach,
			_SFAttachAnim: SkillList.AttachAnim,
			_SFAnim: SkillList.Anim,
			_SFHypnose: SkillList.Hypnose,
			_SFRay: SkillList.Ray,
			_SFSpeed: SkillList.Speed,
			_SFRandom: SkillList.HeadOrTail,
			_SFLeaf: SkillList.Resurrect,
			_SFMudWall: SkillList.MudWall,
			_SFBlink: SkillList.Blink,
			_SFGenerate: SkillList.Generate
		};
		const ret = {
			skill: mapping[effect.value]
		};
		switch (ret.skill) {
			case SkillList.Env7:
				ret.frame = effect.args[0]; // (number) -> string [cendre, abysse, amazon, stelme, ourano]
				ret.remove = effect.args[1]; //boolean
				break;
			case SkillList.Aura:
				ret.fid = effect.args[0]; // number
				ret.color = effect.args[1]; // number
				if (typeof effect.args[2] === 'number') {
					ret.type = effect.args[2] % 2;
				}
				if (effect.value === '_SFAura2') {
					ret.type = (effect.args[3] % 3) + 2;
				}
				break;
			case SkillList.Snow:
				ret.fid = effect.args[0]; // number
				ret.type = effect.args[1]; // number
				ret.color = effect.args[2]; // number
				ret.percent = effect.args[3]; // number
				break;
			case SkillList.Swamp:
			case SkillList.Default:
			case SkillList.Ray:
				ret.fid = effect.args[0]; // number
				break;
			case SkillList.Cloud:
				ret.fid = effect.args[0]; // number
				//ret.id = effect.args[1]; // number ignore, always 0 for cloud and 1 for deluge
				ret.color = effect.args[2]; // number
				break;
			case SkillList.Focus:
				ret.fid = effect.args[0]; // number
				ret.color = effect.args[1]; // number
				break;
			case SkillList.Anim:
			case SkillList.Attach:
				ret.fid = effect.args[0]; // number
				ret.fx = effect.args[1]; // string
				break;
			case SkillList.AttachAnim:
				ret.fid = effect.args[0]; // number
				switch (effect.args[1]) {
					case '_enduranceOn':
						ret.fx = 'fxEnduranceOn';
						break;
					case '_enduranceOff':
						ret.fx = 'fxEnduranceOff';
						break;
					case '_qigong':
						ret.fx = 'fxQigong';
						break;
					case '_receptacle':
						switch (effect.args[2]) {
							case 0:
								ret.fx = 'fxReceptacleFire';
								break;
							case 1:
								ret.fx = 'fxReceptacleWood';
								break;
							case 2:
								ret.fx = 'fxReceptacleWater';
								break;
							case 3:
								ret.fx = 'fxReceptacleThunder';
								break;
							case 4:
								ret.fx = 'fxReceptacleAir';
								break;
							default:
								ret.fx = 'fxReceptacleFire';
						}
						break;
					default:
						ret.fx = effect.args[1];
				}
				break;
			case SkillList.Hypnose:
				ret.fid = effect.args[0]; // number
				ret.targets = [{ id: effect.args[1] }]; // number
				break;
			case SkillList.Speed:
				ret.fid = effect.args[0]; // number
				ret.targets = (effect.args[1] ?? []).map((v) => {
					return { id: v };
				}); // number[]
				break;
			case SkillList.HeadOrTail:
				ret.fid = effect.args[0]; // number
				ret.fx = effect.args[1]; // number -> (type of card)
				ret.ok = effect.args[2]; // boolean
				break;
			case SkillList.Resurrect:
				ret.fid = effect.args[0]; // number
				if (effect.args[1] !== '_plume') {
					console.error(`[DAConverter]: _SFLeaf: Unexpected link '${effect.args[1]}'`);
				}
				break;
			case SkillList.MudWall:
				ret.fid = effect.args[0]; // number
				ret.remove = effect.args[1]; // boolean
				break;
			case SkillList.Blink:
				ret.fid = effect.args[0]; // number
				ret.color = effect.args[1]; // number
				ret.alpha = effect.args[2]; // number
				break;
			case SkillList.Generate:
				ret.fid = effect.args[0]; // number
				ret.color = effect.args[1]; // number
				ret.power = effect.args[2]; // number
				ret.radius = effect.args[3]; // number
				break;
		}
		return ret;
	}

	/**
	 * Convert the _History._HAddCastle enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHAddCastle(args) {
		return {
			action: Action.AddCastle,
			castle: {
				life: args[0]._life ?? 0,
				maxLife: args[0]._max ?? 100,
				enclos: args[0]._cage ? true : false,
				ground: args[0]._ground ?? 0,
				armor: args[0]._armor ?? 0,
				repair: args[0]._repair ?? 0,
				color: args[0]._color ?? 0,
				invisible: args[0]._invisible ?? false
			}
		};
	}

	/**
	 * Convert the _History._HCastleAttack enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHCastleAttack(args) {
		return { action: Action.AttackCastle, fid: args[0], damages: args[1] };
	}

	/**
	 * Convert the _History._HDisplay enum into a Action command.
	 * @param {Array} _args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHDisplay(_args) {
		return { action: Action.Display };
	}

	/**
	 * Convert the _History._HTimeLimit enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHTimeLimit(args) {
		return { action: Action.TimeLimit, time: args[0] };
	}

	/**
	 * Convert the _History._HTalk enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHTalk(args) {
		return { action: Action.Talk, fid: args[0], message: args[1] };
	}

	/**
	 * Convert the _History._HText enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHText(args) {
		return { action: Action.Text, message: args[0] };
	}

	/**
	 * Convert the _History._HEscape enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHEscape(args) {
		return { action: Action.Escape, fid: args[0] };
	}

	/**
	 * Convert the _History._HMoveTo enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHMoveTo(args) {
		return { action: Action.MoveTo, fid: args[0], x: args[1], y: args[2] };
	}

	/**
	 * Convert the _History._HFlip enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHFlip(args) {
		return { action: Action.Flip, fid: args[0] };
	}

	/**
	 * Convert the _History._SpawnToy enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertSpawnToy(args) {
		return {
			action: Action.SpawnToy,
			toy: DAConverter.convertToy(args[0]),
			x: args[1],
			y: args[2],
			z: args[3],
			vx: args[4],
			vy: args[5],
			vz: args[6]
		};
	}

	/**
	 * Convert the _History._DestroyToy enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertDestroyToy(args) {
		return { action: Action.DestroyToy, toy: DAConverter.convertToy(args[0]) };
	}

	/**
	 * Convert a toy id into an asset from the gfx/toys folder.
	 * @param {number} toyId The toy id used by MT to find the ressource in mcToys.
	 * @returns {string} The asset name from the gfx/toys folder, or unk if unknown.
	 */
	static convertToy(toyId) {
		const mapping = [
			'wcharm',
			'totem',
			'sylkey',
			'skull',
			'rasca',
			'potion',
			'pelle',
			'palmes',
			'nenuph',
			'medal4',
			'medal3',
			'matesc',
			'marais',
			'lantrn',
			'ice',
			'gshop',
			'gant',
			'fcharm',
			'cup3',
			'cup1',
			'book',
			'corail',
			'conts1',
			'ccard',
			'bouee',
			'bckpck',
			'basalt',
			'astone',
			'amulst',
			'wpure'
		];
		return mapping[toyId] ?? 'unk';
	}

	/**
	 * Convert the _History._HWait enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHWait(args) {
		return { action: Action.Wait, time: args[0] };
	}

	/**
	 * Convert the _History._HLog enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHLog(args) {
		return { action: Action.Log, msg: args[0] };
	}

	/**
	 * Convert the _History._HNotify enum into a Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {object} The converted action with its arguments.
	 */
	static convertHNotify(args) {
		return { action: Action.Notify, fids: args[0], notification: DAConverter.convertNotifications(args[1]) };
	}

	/**
	 * Convert a _Notification enum from from MT into a NotificationList enum.
	 * @param {object} notif MT _Notification enum.
	 * @returns {number} The converted NotificationList enum value.
	 */
	static convertNotifications(notif) {
		const mapping = {
			_NSlow: NotificationList.Slow,
			_NQuick: NotificationList.Quick,
			_NSilence: NotificationList.Silence,
			_NSharignan: NotificationList.Sharignan,
			_NNoUse: NotificationList.NoUse,
			_NDown: NotificationList.Down,
			_NUp: NotificationList.Up,
			_NFire: NotificationList.Fire,
			_NWood: NotificationList.Wood,
			_NWater: NotificationList.Water,
			_NThunder: NotificationList.Thunder,
			_NAir: NotificationList.Air,
			_NInitUp: NotificationList.InitUp,
			_NInitDown: NotificationList.InitDown,
			_NSnake: NotificationList.Snake,
			_NStrong: NotificationList.Strong,
			_NShield: NotificationList.Shield,
			_NMonoElt: NotificationList.MonoElt,
			_NTodo: NotificationList.Todo
		};
		return mapping[notif.value];
	}
}
