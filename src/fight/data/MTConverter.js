// @ts-check

import { Fighter } from '../Fighter.js';
import { EntranceEffect } from '../actions/AddFighter.js';
import { DamagesEffect } from '../actions/Damages.js';
import { Skill } from '../actions/DamagesGroup.js';
import { EndBehaviour } from '../actions/Finish.js';
import { GotoEffect } from '../actions/GotoFighter.js';

/**
 * Convert the project fight data into MT fight data.
 */
export class MTConverter {
	/**
	 * Mapping between Fight.Action enum values and the corresponding conversion method.
	 */
	static ActionToHistory = [
		MTConverter.convertHAdd,
		MTConverter.convertHAddCastle,
		MTConverter.convertHMoveTo,
		MTConverter.convertHDamages,
		MTConverter.convertHDamagesGroup,
		MTConverter.convertHCastleAttack,
		MTConverter.convertHReturn,
		MTConverter.convertHDead,
		MTConverter.convertHLost,
		MTConverter.convertHEscape,
		MTConverter.convertHFinish,
		MTConverter.convertHEnergy,
		MTConverter.convertHMaxEnergy,
		MTConverter.convertHPause,
		MTConverter.convertHAnnounce,
		MTConverter.convertHGoto,
		MTConverter.convertHRegen,
		MTConverter.convertHObject,
		MTConverter.convertHFx,
		MTConverter.convertHStatus,
		MTConverter.convertHNoStatus,
		MTConverter.convertHDisplay,
		MTConverter.convertHTimeLimit,
		MTConverter.convertHTalk,
		MTConverter.convertHText,
		MTConverter.convertHFlip,
		MTConverter.convertSpawnToy,
		MTConverter.convertDestroyToy,
		MTConverter.convertHWait,
		MTConverter.convertHLog,
		MTConverter.convertHNotify
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
			_equip: '/img/icons/obj_::id::.gif',
			_sdino: '/swf/sdino.swf?v=33',
			_dino: '/swf/dino.swf?v=35',
			_dojo: null,
			_mtop: etData.top ?? 0,
			_bg: `/img/fight/${etData.bg}.jpg`,
			_ground: null,
			_debrief: `javascript:_.toggleFlash('debrief', -85)`,
			_history: MTConverter.convertHistory(etData),
			_smonster: '/swf/smonster.swf?v=26'
		};
		return data;
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
			args: []
		};
		ret.args.push({
			_props: obj.fighter.props,
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
	 * Convert an EntranceEffect into an entrance effect from MT.
	 * @param {object} fighter The fighter data from Add command.
	 * @returns {object} The converted _AddFighterEffect enum or null if none is defined.
	 */
	static convertEntranceEffect(fighter) {
		if (!fighter.x && !fighter.y && !fighter.entrance) {
			return null;
		}
		const ret = {
			enum: '_AddFighterEffect',
			value: '',
			args: []
		};
		switch (fighter.entrance) {
			case undefined:
				break;
			case EntranceEffect.Stand:
				ret.value = '_AFStand';
				break;
			case EntranceEffect.Grow:
				ret.value = '_AFGrow';
				break;
			case EntranceEffect.Fall:
				ret.value = '_AFFall';
				break;
			case EntranceEffect.Run:
				ret.value = '_AFRun';
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
				args: [fighter.x, fighter.y, fighter.entrance ? ret : null]
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
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertGotoEffect(obj) {
		if (!obj.effect) return null;

		const ret = {
			enum: '_GotoEffect',
			value: '_GNormal',
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
	 * Convert a Fighter.LifeEffect into a _LifeEffect enum.
	 * @param {{fx: number, amount?: number, size?: number}} lifeFx Fighter.LifeEffect enum.
	 * @returns {{enum: string, value: string, args: Array} | null} The corresponding _LifeEffect enum or null if none.
	 */
	static convertLifeEffect(lifeFx) {
		const mapping = {
			[Fighter.LifeEffect.Normal]: '_LNormal',
			[Fighter.LifeEffect.Fire]: '_LFire',
			[Fighter.LifeEffect.Wood]: '_LWood',
			[Fighter.LifeEffect.Water]: '_LWater',
			[Fighter.LifeEffect.Lightning]: '_LLightning',
			[Fighter.LifeEffect.Air]: '_LAir',
			[Fighter.LifeEffect.Burn]: '_LBurn',
			[Fighter.LifeEffect.Heal]: '_LHeal',
			[Fighter.LifeEffect.Skull]: '_LSkull',
			[Fighter.LifeEffect.Acid]: '_LAcid'
		};
		if (lifeFx !== undefined && mapping[lifeFx.fx]) {
			const ret = {
				enum: '_LifeEffect',
				value: mapping[lifeFx.fx],
				args: []
			};
			switch (lifeFx.fx) {
				case Fighter.LifeEffect.Burn:
					ret.args[lifeFx.amount];
					break;
				case Fighter.LifeEffect.Skull:
					ret.args[lifeFx.size];
					break;
			}
			return ret;
		}
		return null;
	}

	/**
	 * Convert a DamagesEffect enum into an _Effect enum.
	 * @param {number} effect DamagesEffect enum.
	 * @returns {{enum: string, value: string, args: Array} | null} The corresponding _Effect enum or null if none.
	 */
	static convertDamagesEffect(effect) {
		const mapping = {
			[DamagesEffect.Normal]: '_ENormal',
			[DamagesEffect.Drop]: '_EDrop',
			[DamagesEffect.Back]: '_EBack',
			[DamagesEffect.Eject]: '_EEject',
			[DamagesEffect.Counter]: '_ECounter'
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
		console.log('Conversion for "_HLost" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HFinish enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHFinish(obj) {
		return undefined;
		// Ruffle cannot play the Finish action.
		/*return {
			enum: '_History',
			value: '_HFinish',
			args: [MTConverter.convertEndBehavior(obj.left), MTConverter.convertEndBehavior(obj.right)]
		};*/
	}

	/**
	 * Convert a Finish.EndBehaviour into a _EndBehavior enum.
	 * @param {number} e The Finish.EndBehaviour enum to convert.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertEndBehavior(e) {
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
		console.log('Conversion for "_HObject" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HStatus enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHStatus(obj) {
		console.log('Conversion for "_HStatus" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HNoStatus enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHNoStatus(obj) {
		console.log('Conversion for "_HNoStatus" not done yet.');
		return undefined;
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
				obj.fid,
				obj.targets.map((t) => {
					return { _tid: t.id, _life: t.damages };
				}),
				MTConverter.convertDamageSkill(obj)
			]
		};
	}

	/**
	 * Convert a Skill enum into an _GroupEffect enum.
	 * @param {object} skill Fight.Action.DamagesGroup action to convert.
	 * @returns {{enum: string, value: string, args: Array}} The corresponding _GroupEffect enum or null if none.
	 */
	static convertDamageSkill(skill) {
		const mapping = {
			[Skill.Todo]: '_GrTodo',
			[Skill.Fireball]: '_GrFireball',
			[Skill.Blow]: '_GrBlow',
			[Skill.Lava]: '_GrLava',
			[Skill.Meteor]: '_GrMeteor',
			[Skill.Vigne]: '_GrVigne',
			[Skill.WaterCanon]: '_GrWaterCanon',
			[Skill.Shower]: '_GrShower',
			[Skill.Shower2]: '_GrShower2',
			[Skill.LevitRay]: '_GrLevitRay',
			[Skill.Lightning]: '_GrLightning',
			[Skill.Crepuscule]: '_GrCrepuscule',
			[Skill.Mistral]: '_GrMistral',
			[Skill.Tornade]: '_GrTornade',
			[Skill.Disc]: '_GrDisc',
			[Skill.Hole]: '_GrHole',
			[Skill.Ice]: '_GrIce',
			[Skill.Projectile]: '_GrProjectile',
			[Skill.Tremor]: '_GrTremor',
			[Skill.JumpAttack]: '_GrJumpAttack',
			[Skill.ChainLightning]: '_GrChainLightning',
			[Skill.Heal]: '_GrHeal',
			[Skill.Charge]: '_GrCharge',
			[Skill.Anim]: '_GrAnim',
			[Skill.Invoc]: '_GrInvoc',
			[Skill.Sylfide]: '_GrSylfide',
			[Skill.Rafale]: '_GrRafale',
			[Skill.Deluge]: '_GrDeluge'
		};
		const ret = {
			enum: '_GroupEffect',
			value: mapping[skill.skill],
			args: []
		};
		switch (skill.skill) {
			case Skill.Shower2:
				ret.args = [skill.type];
				break;
			case Skill.Projectile:
				ret.args = [skill.fx, skill.anim, skill.speed];
				break;
			case Skill.JumpAttack:
				ret.args = [skill.fx];
				break;
			case Skill.Heal:
				ret.args = [skill.type];
				break;
			case Skill.Anim:
				ret.args = [skill.anim];
				break;
			case Skill.Invoc:
				ret.args = [skill.anim];
				break;
			case Skill.Rafale:
				ret.args = [skill.fx, skill.power, skill.speed];
				break;
		}
		return ret;
	}

	/**
	 * Convert the action into an _History._HFx enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHFx(obj) {
		console.log('Conversion for "_HFx" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HAddCastle enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHAddCastle(obj) {
		console.log('Conversion for "_HAddCastle" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HCastleAttack enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHCastleAttack(obj) {
		console.log('Conversion for "_HCastleAttack" not done yet.');
		return undefined;
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
		console.log('Conversion for "_HTimeLimit" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HTalk enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHTalk(obj) {
		console.log('Conversion for "_HTalk" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HText enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHText(obj) {
		console.log('Conversion for "_HText" not done yet.');
		return undefined;
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
		console.log('Conversion for "_HFlip" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._SpawnToy enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertSpawnToy(obj) {
		console.log('Conversion for "_SpawnToy" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._DestroyToy enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertDestroyToy(obj) {
		console.log('Conversion for "_DestroyToy" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HWait enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHWait(obj) {
		console.log('Conversion for "_HWait" not done yet.');
		return undefined;
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
		console.log('Conversion for "_HNotify" not done yet.');
		return undefined;
	}
}