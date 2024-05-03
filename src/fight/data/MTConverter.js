// @ts-check

import {
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
 * Convert the project fight data into MT fight data.
 */
export class MTConverter {
	/**
	 * Mapping between Action enum values and the corresponding conversion method.
	 */
	static ActionToHistory = [
		MTConverter.convertHAdd,
		MTConverter.convertHAnnounce,
		MTConverter.convertHObject,
		MTConverter.convertHLost,
		MTConverter.convertHStatus,
		MTConverter.convertHNoStatus,
		MTConverter.convertHRegen,
		MTConverter.convertHDamages,
		MTConverter.convertSkill,
		MTConverter.convertHDead,
		MTConverter.convertHGoto,
		MTConverter.convertHReturn,
		MTConverter.convertHPause,
		MTConverter.convertHFinish,
		MTConverter.convertHAddCastle,
		MTConverter.convertHTimeLimit,
		MTConverter.convertHCastleAttack,
		MTConverter.convertHDisplay,
		MTConverter.convertHText,
		MTConverter.convertHTalk,
		MTConverter.convertHEscape,
		MTConverter.convertHMoveTo,
		MTConverter.convertHFlip,
		MTConverter.convertSpawnToy,
		MTConverter.convertDestroyToy,
		MTConverter.convertHWait,
		MTConverter.convertHLog,
		MTConverter.convertHNotify,
		MTConverter.convertHEnergy,
		MTConverter.convertHMaxEnergy
	];

	/**
	 * Convert the fight data into the format used by MT for fight.swf.
	 * @param {object} etData Project fight data to convert.
	 * @returns {object} An object containing the fight data converted to the format used by MT.
	 */
	static convert(etData) {
		const data = {
			_check: '/user/check?id=yYC6L',
			_debug: '/tools/debugFight?sk=3GHQD1Sk',
			_mbottom: etData.bottom ?? 0,
			_mright: etData.right ?? 0,
			_equip: '/img/icons/::id::.gif',
			_sdino: '/swf/sdino.swf?v=33',
			_dino: '/swf/dino.swf?v=35',
			_dojo: null,
			_mtop: etData.top ?? 0,
			_bg: `/img/fight/${etData.bg}.jpg`,
			_ground: MTConverter.getGroundType(etData.ground),
			_debrief: `javascript:_.toggleFlash('debrief', -85)`,
			_history: MTConverter.convertHistory(etData),
			_smonster: '/swf/smonster.swf?v=26'
		};
		if (data._history.filter((a) => a.value == '_HDisplay') == 0) {
			data._history.unshift(MTConverter.convertHDisplay([]));
		}
		return data;
	}

	/**
	 * Convert a GroupType enum value into a valid ground value for MT data.
	 * @param {number} type The type of ground of the Scene.
	 * @returns {string} The corresponding MT ground type.
	 */
	static getGroundType(type) {
		const mapping = {
			[GroundType.Dirt]: 'dirt',
			[GroundType.Water]: 'water',
			[GroundType.Rock]: 'rock'
		};
		return mapping[type] ?? null;
	}

	/**
	 * Convert the fight history to MT version.
	 * @param {object} etData The fight data under this project version.
	 * @returns {object} An object containing the fight history ready to be serialized.
	 */
	static convertHistory(etData) {
		const history = [];
		for (const h of etData.history) {
			if (MTConverter.ActionToHistory[h.action]) {
				const cmd = MTConverter.ActionToHistory[h.action](h);
				if (cmd) {
					history.push(cmd);
				}
			} else {
				console.error(`Error while converting history: Unknown action '${h.action}'.`);
			}
		}
		return history;
	}

	/**
	 * Convert the Add action into an _History._HAdd enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHAdd(obj) {
		const ret = {
			enum: '_History',
			value: '_HAdd',
			/** @type {object[]} */
			args: []
		};
		ret.args.push({
			_props: obj.fighter.props.map((p) => MTConverter.convertProperty(p)),
			_dino: obj.fighter.dino,
			_life: obj.fighter.life,
			_name: obj.fighter.name,
			_side: obj.fighter.side,
			_size: obj.fighter.scale * 100,
			_fid: obj.fighter.fid,
			_gfx: obj.fighter.gfx
		});
		ret.args.push(MTConverter.convertEntranceEffect(obj.fighter));
		return ret;
	}

	/**
	 * Convert a FighterProperty into a _Property enum from MT.
	 * @param {number} prop The FighterProperty value.
	 * @returns {object} The _Property enum.
	 */
	static convertProperty(prop) {
		const mapping = {
			[FighterProperty.Boss]: '_PBoss',
			[FighterProperty.Static]: '_PStatic',
			[FighterProperty.GroundOnly]: '_PGroundOnly',
			[FighterProperty.Dark]: '_PDark',
			[FighterProperty.Nothing]: '_PNothing'
		};
		return {
			enum: '_Property',
			value: mapping[prop],
			args: []
		};
	}

	/**
	 * Convert an EntranceEffect into an entrance effect from MT.
	 * @param {object} fighter The fighter data from Add command.
	 * @returns {object} The converted _AddFighterEffect enum or null if none is defined.
	 */
	static convertEntranceEffect(fighter) {
		if (fighter.x === undefined && fighter.y === undefined && fighter.entrance === undefined) {
			return null;
		}
		const ret = {
			enum: '_AddFighterEffect',
			value: '',
			/** @type {object[]} */
			args: []
		};
		switch (fighter.entrance) {
			case undefined:
				break;
			case EntranceEffect.Stand:
				ret.value = '_AFStand';
				break;
			case EntranceEffect.Jump:
				ret.value = '_AFJump';
				break;
			case EntranceEffect.Run:
				ret.value = '_AFRun';
				break;
			case EntranceEffect.Grow:
				ret.value = '_AFGrow';
				break;
			case EntranceEffect.Fall:
				ret.value = '_AFFall';
				break;
			case EntranceEffect.Ground:
				ret.value = '_AFGround';
				break;
			case EntranceEffect.Anim:
				ret.value = '_AFAnim';
				ret.args.push(fighter.anim);
				break;
			default:
				console.error(`Unknown entrance effect '${fighter.entrance}'`);
		}
		if (fighter.x !== undefined || fighter.y !== undefined) {
			return {
				enum: '_AddFighterEffect',
				value: '_AFPos',
				args: [fighter.x, fighter.y, fighter.entrance !== undefined ? ret : null]
			};
		}
		return ret;
	}

	/**
	 * Convert the action into an _History._HEnergy enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHEnergy(obj) {
		const ret = {
			enum: '_History',
			value: '_HEnergy',
			/** @type {object[]} */
			args: [[], []]
		};
		for (const f of obj.fighters) {
			ret.args[0].push(f.fid);
			ret.args[1].push(f.energy);
		}
		return ret;
	}

	/**
	 * Convert the action into an _History._HMaxEnergy enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHMaxEnergy(obj) {
		const ret = {
			enum: '_History',
			value: '_HMaxEnergy',
			/** @type {object[]} */
			args: [[], []]
		};
		for (const f of obj.fighters) {
			ret.args[0].push(f.fid);
			ret.args[1].push(f.maxEnergy);
		}
		return ret;
	}

	/**
	 * Convert the action into an _History._HPause enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHPause(obj) {
		return {
			enum: '_History',
			value: '_HPause',
			args: [obj.time]
		};
	}

	/**
	 * Convert the action into an _History._HAnnounce enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHAnnounce(obj) {
		return {
			enum: '_History',
			value: '_HAnnounce',
			args: [obj.fid, obj.message]
		};
	}

	/**
	 * Convert the action into an _History._HGoto enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHGoto(obj) {
		return {
			enum: '_History',
			value: '_HGoto',
			args: [obj.fid, obj.tid, MTConverter.convertGotoEffect(obj)]
		};
	}

	/**
	 * Convert a GotoFighter.Effect into a _GotoEffect.
	 * @param {object} obj DA object containing the data.
	 * @returns {{enum: string, value: string, args: Array} | null} The converted enum with its arguments.
	 */
	static convertGotoEffect(obj) {
		if (!obj.effect) return null;

		const ret = {
			enum: '_GotoEffect',
			value: '_GNormal',
			/** @type {object[]} */
			args: []
		};
		switch (obj.effect) {
			case GotoEffect.Normal:
				ret.value = '_GNormal';
				break;
			case GotoEffect.Over:
				ret.value = '_GOver';
				break;
			case GotoEffect.Special:
				ret.value = '_GSpecial';
				ret.args = [obj.shadeColor.col1 ?? 0, obj.shadeColor.col2 ?? 0];
				break;
			case GotoEffect.Todo:
				ret.value = '_GTodo';
				break;
		}
		return ret;
	}

	/**
	 * Convert the action into an _History._HDamages enum.
	 * @param {{fid: number, tid: number, damages: number, lifeFx?: {fx: number, amount?: number, size?: number}, effect?: number}} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDamages(obj) {
		return {
			enum: '_History',
			value: '_HDamages',
			args: [
				obj.fid,
				obj.tid,
				obj.damages,
				MTConverter.convertLifeEffect(obj.lifeFx),
				MTConverter.convertDamagesEffect(obj.effect)
			]
		};
	}

	/**
	 * Convert a LifeEffect into a _LifeEffect enum.
	 * @param {{fx: number, amount?: number, size?: number} | undefined} lifeFx LifeEffect enum.
	 * @returns {{enum: string, value: string, args: Array} | null} The corresponding _LifeEffect enum or null if none.
	 */
	static convertLifeEffect(lifeFx) {
		const mapping = {
			[LifeEffect.Normal]: '_LNormal',
			[LifeEffect.Object]: '_LObject',
			[LifeEffect.Skull]: '_LSkull',
			[LifeEffect.Acid]: '_LAcid',
			[LifeEffect.Poison]: '_LPoison',
			[LifeEffect.Heal]: '_LHeal',
			[LifeEffect.Explode]: '_LExplode',
			[LifeEffect.Burn]: '_LBurn',
			[LifeEffect.Fire]: '_LFire',
			[LifeEffect.Wood]: '_LWood',
			[LifeEffect.Water]: '_LWater',
			[LifeEffect.Lightning]: '_LLightning',
			[LifeEffect.Air]: '_LAir',
			[LifeEffect.Gold]: '_LGold',
			[LifeEffect.Todo]: '_LTodo'
		};
		if (lifeFx !== undefined && mapping[lifeFx.fx]) {
			const ret = {
				enum: '_LifeEffect',
				value: mapping[lifeFx.fx],
				/** @type {object[]} */
				args: []
			};
			switch (lifeFx.fx) {
				case LifeEffect.Burn:
					ret.args = [lifeFx.amount ?? 1];
					break;
				case LifeEffect.Skull:
					ret.args = [lifeFx.size ?? 1];
					break;
			}
			return ret;
		}
		return null;
	}

	/**
	 * Convert a DamagesEffect enum into an _Effect enum.
	 * @param {number | undefined} effect DamagesEffect enum.
	 * @returns {{enum: string, value: string, args: Array} | null} The corresponding _Effect enum or null if none.
	 */
	static convertDamagesEffect(effect) {
		const mapping = {
			[DamagesEffect.Normal]: '_ENormal',
			[DamagesEffect.Back]: '_EBack',
			[DamagesEffect.Counter]: '_ECounter',
			[DamagesEffect.Drop]: '_EDrop',
			[DamagesEffect.Eject]: '_EEject',
			[DamagesEffect.FlyCancel]: '_EFlyCancel',
			[DamagesEffect.IntangCancel]: '_EIntangCancel',
			[DamagesEffect.IntangBreak]: '_EIntangBreak',
			[DamagesEffect.Missed]: '_EMissed'
		};
		if (effect !== undefined && mapping[effect]) {
			return {
				enum: '_Effect',
				value: mapping[effect],
				args: []
			};
		}
		return null;
	}

	/**
	 * Convert the action into an _History._HReturn enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHReturn(obj) {
		return {
			enum: '_History',
			value: '_HReturn',
			args: [obj.fid]
		};
	}

	/**
	 * Convert the action into an _History._HDead enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDead(obj) {
		return {
			enum: '_History',
			value: '_HDead',
			args: [obj.fid]
		};
	}

	/**
	 * Convert the action into an _History._HLost enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHLost(obj) {
		return {
			enum: '_History',
			value: '_HLost',
			args: [obj.fid, obj.amount, MTConverter.convertLifeEffect(obj.lifeFx)]
		};
	}

	/**
	 * Convert the action into an _History._HFinish enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array} | undefined} The converted enum with its arguments.
	 */
	static convertHFinish(obj) {
		return undefined;
		// Ruffle cannot play the Finish action.
		/*return {
			enum: '_History',
			value: '_HFinish',
			args: [MTConverter.convertEndBehaviour(obj.left), MTConverter.convertEndBehaviour(obj.right)]
		};*/
	}

	/**
	 * Convert a Finish.EndBehaviour into a _EndBehaviour enum.
	 * @param {number} e The Finish.EndBehaviour enum to convert.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertEndBehaviour(e) {
		const ret = {
			enum: '',
			value: '',
			args: []
		};
		switch (e) {
			case EndBehaviour.Run:
				ret.value = '_EBRun';
				break;
			case EndBehaviour.Escape:
				ret.value = '_EBEscape';
				break;
			case EndBehaviour.Guard:
				ret.value = '_EBGuard';
				break;
			default:
				ret.value = '_EBStand';
		}
		return ret;
	}

	/**
	 * Convert the action into an _History._HRegen enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHRegen(obj) {
		return {
			enum: '_History',
			value: '_HRegen',
			args: [obj.fid, obj.amount, MTConverter.convertLifeEffect(obj.lifeFx)]
		};
	}

	/**
	 * Convert the action into an _History._HObject enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHObject(obj) {
		return {
			enum: '_History',
			value: '_HObject',
			args: [obj.fid, obj.name, obj.item]
		};
	}

	/**
	 * Convert the action into an _History._HStatus enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHStatus(obj) {
		return {
			enum: '_History',
			value: '_HStatus',
			args: [obj.fid, MTConverter.convertFighterStatus(obj)]
		};
	}

	/**
	 * Convert the action into an _History._HNoStatus enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHNoStatus(obj) {
		return {
			enum: '_History',
			value: '_HNoStatus',
			args: [obj.fid, MTConverter.convertFighterStatus(obj)]
		};
	}

	/**
	 * Convert a FighterStatus enum into an MT _Status enum.
	 * @param {object} status Action.Status/NoStatus to convert.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertFighterStatus(status) {
		const mapping = {
			[FighterStatus.Sleep]: '_SSleep',
			[FighterStatus.Flames]: '_SFlames',
			[FighterStatus.Intang]: '_SIntang',
			[FighterStatus.Fly]: '_SFly',
			[FighterStatus.Slow]: '_SSlow',
			[FighterStatus.Quick]: '_SQuick',
			[FighterStatus.Stoned]: '_SStoned',
			[FighterStatus.Shield]: '_SShield',
			[FighterStatus.Bless]: '_SBless',
			[FighterStatus.Poison]: '_SPoison',
			[FighterStatus.Heal]: '_SHeal',
			[FighterStatus.Burn]: '_SBurn',
			[FighterStatus.MonoElt]: '_SMonoElt',
			[FighterStatus.Dazzled]: '_SDazzled',
			[FighterStatus.Stun]: '_SStun'
		};
		const ret = {
			enum: '_Status',
			value: mapping[status.status],
			/** @type {object[]} */
			args: []
		};
		switch (status.status) {
			// Those statuses need an argument but it is not used in the display of the fight.
			case FighterStatus.Burn:
			case FighterStatus.Poison:
			case FighterStatus.MonoElt:
			case FighterStatus.Heal:
			case FighterStatus.Dazzled:
				ret.args.push(1);
				break;
		}
		return ret;
	}

	/**
	 * Convert a Skill action into either a _HDamagesGroup or _HFx enum.
	 * @param {object} obj The object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertSkill(obj) {
		if (
			(obj.skill == SkillList.Anim && !obj.details.targets) ||
			[
				SkillList.Env7,
				SkillList.Aura,
				SkillList.Snow,
				SkillList.Swamp,
				SkillList.Cloud,
				SkillList.Focus,
				SkillList.Default,
				SkillList.Attach,
				SkillList.AttachAnim,
				SkillList.Hypnose,
				SkillList.Ray,
				SkillList.Speed,
				SkillList.HeadOrTail,
				SkillList.Leaf,
				SkillList.MudWall,
				SkillList.Blink,
				SkillList.Generate
			].includes(obj.skill)
		) {
			return MTConverter.convertHFx(obj);
		}
		return MTConverter.convertHDamagesGroup(obj);
	}

	/**
	 * Convert the action into an _History._HDamagesGroup enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDamagesGroup(obj) {
		return {
			enum: '_History',
			value: '_HDamagesGroup',
			args: [
				obj.details.fid,
				obj.details.targets.map((t) => {
					return { _tid: t.id, _life: t.life };
				}),
				MTConverter.convertDamageSkill(obj)
			]
		};
	}

	/**
	 * Convert a Skill action into an _GroupEffect enum.
	 * @param {object} skill Action.Skill action to convert.
	 * @returns {{enum: string, value: string, args: Array}} The corresponding _GroupEffect enum or null if none.
	 */
	static convertDamageSkill(skill) {
		const mapping = {
			[SkillList.Todo]: '_GrTodo',
			[SkillList.Fireball]: '_GrFireball',
			[SkillList.Blow]: '_GrBlow',
			[SkillList.Lava]: '_GrLava',
			[SkillList.Meteor]: '_GrMeteor',
			[SkillList.Vigne]: '_GrVigne',
			[SkillList.WaterCanon]: '_GrWaterCanon',
			[SkillList.Shower]: '_GrShower',
			[SkillList.LevitRay]: '_GrLevitRay',
			[SkillList.Lightning]: '_GrLightning',
			[SkillList.Crepuscule]: '_GrCrepuscule',
			[SkillList.Mistral]: '_GrMistral',
			[SkillList.Tornade]: '_GrTornade',
			[SkillList.Disc]: '_GrDisc',
			[SkillList.Hole]: '_GrHole',
			[SkillList.Ice]: '_GrIce',
			[SkillList.Projectile]: '_GrProjectile',
			[SkillList.Tremor]: '_GrTremor',
			[SkillList.JumpAttack]: '_GrJumpAttack',
			[SkillList.ChainLightning]: '_GrChainLightning',
			[SkillList.Heal]: '_GrHeal',
			[SkillList.Charge]: '_GrCharge',
			[SkillList.Anim]: '_GrAnim',
			[SkillList.Invoc]: '_GrInvoc',
			[SkillList.Sylfide]: '_GrSylfide',
			[SkillList.Rafale]: '_GrRafale',
			[SkillList.Deluge]: '_GrDeluge'
		};
		const ret = {
			enum: '_GroupEffect',
			value: mapping[skill.skill],
			/** @type {object[]} */
			args: []
		};
		switch (skill.skill) {
			case SkillList.Shower:
				if (skill.details.type === SkillType.Fire) {
					ret.value = '_GrShower2';
					ret.args = [1];
				}
				break;
			case SkillList.Projectile:
				ret.args = [skill.details.fx, skill.details.anim, skill.details.speed];
				break;
			case SkillList.JumpAttack:
				ret.args = [skill.details.fx];
				break;
			case SkillList.Heal:
				ret.args = [skill.details.type ?? 0];
				break;
			case SkillList.Anim:
				ret.args = [skill.details.anim];
				break;
			case SkillList.Invoc:
				ret.args = [skill.details.anim];
				break;
			case SkillList.Rafale:
				ret.args = [skill.details.fx ?? 'partWind', skill.details.power ?? 10, skill.details.speed ?? 2.5];
				break;
		}
		return ret;
	}

	/**
	 * Convert the Skill action into an _History._HFx enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHFx(obj) {
		return {
			enum: '_History',
			value: '_HFx',
			args: [MTConverter.convertFXEffect(obj)]
		};
	}

	/**
	 * Convert an Skill action into a _SuperEffect from MT.
	 * @param {object} skill The skill action to convert.
	 * @returns {{enum: string, value: string, args: Array}} The corresponding _SuperEffect enum.
	 */
	static convertFXEffect(skill) {
		const mapping = {
			[SkillList.Env7]: '_SFEnv7',
			[SkillList.Aura]: '_SFAura',
			[SkillList.Snow]: '_SFSnow',
			[SkillList.Swamp]: '_SFSwamp',
			[SkillList.Cloud]: '_SFCloud',
			[SkillList.Focus]: '_SFFocus',
			[SkillList.Default]: '_SFDefault',
			[SkillList.Attach]: '_SFAttach',
			[SkillList.AttachAnim]: '_SFAttachAnim',
			[SkillList.Anim]: '_SFAnim',
			[SkillList.Hypnose]: '_SFHypnose',
			[SkillList.Ray]: '_SFRay',
			[SkillList.Speed]: '_SFSpeed',
			[SkillList.HeadOrTail]: '_SFRandom',
			[SkillList.Leaf]: '_SFLeaf',
			[SkillList.MudWall]: '_SFMudWall',
			[SkillList.Blink]: '_SFBlink',
			[SkillList.Generate]: '_SFGenerate'
		};
		const ret = {
			enum: '_SuperEffect',
			value: mapping[skill.skill],
			/** @type {object[]} */
			args: []
		};
		switch (skill.skill) {
			case SkillList.Env7:
				ret.args.push(skill.details.frame);
				ret.args.push(skill.details.remove);
				break;
			case SkillList.Aura:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.color);
				ret.args.push(skill.details.type < 2 ? skill.details.type : null);
				if (skill.details.type >= 2) {
					ret.value = '_SFAura2';
					ret.args.push(skill.details.type - 2);
				}
				break;
			case SkillList.Snow:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.type);
				ret.args.push(skill.details.color);
				ret.args.push(skill.details.percent);
				break;
			case SkillList.Swamp:
			case SkillList.Default:
			case SkillList.Ray:
				ret.args.push(skill.details.fid);
				break;
			case SkillList.Cloud:
				ret.args.push(skill.details.fid);
				ret.args.push(0); // cloud is always 0, 1 is for deluge which is another enum
				ret.args.push(skill.details.color);
				break;
			case SkillList.Focus:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.color);
				break;
			case SkillList.Anim:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.anim);
				break;
			case SkillList.Attach:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.fx);
				break;
			case SkillList.AttachAnim:
				ret.args.push(skill.details.fid);
				switch (skill.details.fx) {
					case 'fxEnduranceOn':
						ret.args.push('_enduranceOn');
						break;
					case 'fxEnduranceOff':
						ret.args.push('_enduranceOff');
						break;
					case 'fxQigong':
						ret.args.push('_qigong');
						break;
					case 'fxReceptacleFire':
						ret.args.push('_receptacle');
						ret.args.push('fire');
						break;
					case 'fxReceptacleWood':
						ret.args.push('_receptacle');
						ret.args.push('wood');
						break;
					case 'fxReceptacleWater':
						ret.args.push('_receptacle');
						ret.args.push('water');
						break;
					case 'fxReceptacleThunder':
						ret.args.push('_receptacle');
						ret.args.push('thunder');
						break;
					case 'fxReceptacleAir':
						ret.args.push('_receptacle');
						ret.args.push('air');
						break;
					default:
						ret.args.push(skill.details.fx);
				}
				if (ret.args.length < 3) {
					ret.args.push(null);
				}
				break;
			case SkillList.Hypnose:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.targets[0]?.id);
				break;
			case SkillList.Speed:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.targets.map((v) => v.id));
				break;
			case SkillList.HeadOrTail:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.fx);
				ret.args.push(skill.details.ok);
				break;
			case SkillList.Leaf:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.fx);
				break;
			case SkillList.MudWall:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.remove);
				break;
			case SkillList.Blink:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.color);
				ret.args.push(skill.details.alpha);
				break;
			case SkillList.Generate:
				ret.args.push(skill.details.fid);
				ret.args.push(skill.details.color);
				ret.args.push(skill.details.strength);
				ret.args.push(skill.details.radius);
				break;
		}
		return ret;
	}

	/**
	 * Convert the action into an _History._HAddCastle enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHAddCastle(obj) {
		return {
			enum: '_History',
			value: '_HAddCastle',
			args: [
				{
					_life: obj.castle.life,
					_max: obj.castle.maxLife,
					_cage: obj.castle.enclos ? 'str' : null,
					_ground: obj.castle.ground,
					_armor: obj.castle.armor,
					_repair: obj.castle.repair,
					_color: obj.castle.color,
					_invisible: obj.castle.invisible
				}
			]
		};
	}

	/**
	 * Convert the action into an _History._HCastleAttack enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHCastleAttack(obj) {
		return {
			enum: '_History',
			value: '_HCastleAttack',
			args: [obj.fid, obj.damages, null]
		};
	}

	/**
	 * Convert the action into an _History._HDisplay enum.
	 * @param {Array} _args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDisplay(_args) {
		return {
			enum: '_History',
			value: '_HDisplay',
			args: [null]
		};
	}

	/**
	 * Convert the action into an _History._HTimeLimit enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHTimeLimit(obj) {
		return {
			enum: '_History',
			value: '_HTimeLimit',
			args: [obj.time]
		};
	}

	/**
	 * Convert the action into an _History._HTalk enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHTalk(obj) {
		return {
			enum: '_History',
			value: '_HTalk',
			args: [obj.fid, obj.message]
		};
	}

	/**
	 * Convert the action into an _History._HText enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHText(obj) {
		return {
			enum: '_History',
			value: '_HText',
			args: [obj.message]
		};
	}

	/**
	 * Convert the action into an _History._HEscape enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHEscape(obj) {
		return {
			enum: '_History',
			value: '_HEscape',
			args: [obj.fid]
		};
	}

	/**
	 * Convert the action into an _History._HMoveTo enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHMoveTo(obj) {
		return {
			enum: '_History',
			value: '_HMoveTo',
			args: [obj.fid, obj.x, obj.y]
		};
	}

	/**
	 * Convert the action into an _History._HFlip enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHFlip(obj) {
		return {
			enum: '_History',
			value: '_HFlip',
			args: [obj.fid]
		};
	}

	/**
	 * Convert the action into an _History._SpawnToy enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertSpawnToy(obj) {
		return {
			enum: '_History',
			value: '_SpawnToy',
			args: [MTConverter.convertToy(obj.toy), obj.x, obj.y, obj.z, obj.vx, obj.vy, obj.vz]
		};
	}

	/**
	 * Convert the action into an _History._DestroyToy enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertDestroyToy(obj) {
		return {
			enum: '_History',
			value: '_DestroyToy',
			args: [MTConverter.convertToy(obj.toy)]
		};
	}

	/**
	 * Convert a toy asset into the toy id used for mcToys.
	 * @param {string} toy The toy asset name to convert.
	 * @returns {number} The index of the toy in mcToys.
	 */
	static convertToy(toy) {
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
		const idx = mapping.indexOf(toy);
		return idx < 0 ? 0 : idx;
	}

	/**
	 * Convert the action into an _History._HWait enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHWait(obj) {
		return {
			enum: '_History',
			value: '_HWait',
			args: [obj.time]
		};
	}

	/**
	 * Convert the action into an _History._HLog enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHLog(obj) {
		return {
			enum: '_History',
			value: '_HLog',
			args: [obj.msg]
		};
	}

	/**
	 * Convert the action into an _History._HNotify enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHNotify(obj) {
		return {
			enum: '_History',
			value: '_HNotify',
			args: [obj.fids, MTConverter.convertNotification(obj.notification)]
		};
	}

	/**
	 * Convert a NotificationList enum into an _Notification enum.
	 * @param {number} notif NotificationList enum.
	 * @returns {{enum: string, value: string, args: Array} | null} The corresponding _Notification enum or null if none.
	 */
	static convertNotification(notif) {
		const mapping = {
			[NotificationList.Slow]: '_NSlow',
			[NotificationList.Quick]: '_NQuick',
			[NotificationList.Silence]: '_NSilence',
			[NotificationList.Sharignan]: '_NSharignan',
			[NotificationList.NoUse]: '_NNoUse',
			[NotificationList.Down]: '_NDown',
			[NotificationList.Up]: '_NUp',
			[NotificationList.Fire]: '_NFire',
			[NotificationList.Wood]: '_NWood',
			[NotificationList.Water]: '_NWater',
			[NotificationList.Thunder]: '_NThunder',
			[NotificationList.Air]: '_NAir',
			[NotificationList.InitUp]: '_NInitUp',
			[NotificationList.InitDown]: '_NInitDown',
			[NotificationList.Snake]: '_NSnake',
			[NotificationList.Strong]: '_NStrong',
			[NotificationList.Shield]: '_NShield',
			[NotificationList.MonoElt]: '_NMonoElt',
			[NotificationList.Todo]: '_NTodo'
		};
		if (notif !== undefined && mapping[notif]) {
			return {
				enum: '_Notification',
				value: mapping[notif],
				args: []
			};
		}
		return null;
	}
}
