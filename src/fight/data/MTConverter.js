// @ts-check

import { Fighter } from '../Fighter.js';
import { EntranceEffect } from '../actions/AddFighter.js';
import { DamagesEffect } from '../actions/Damages.js';
import { Skill } from '../actions/DamagesGroup.js';
import { EndBehaviour } from '../actions/Finish.js';
import { GotoEffect } from '../actions/GotoFighter.js';
import { Notifications } from '../actions/Notification.js';

/**
 * Convert the project fight data into MT fight data.
 */
export class MTConverter {
	/**
	 * Mapping between Fight.Action enum values and the corresponding conversion method.
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
		MTConverter.convertHDamagesGroup,
		MTConverter.convertHFx,
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
			_ground: null,
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
	 * Convert a Fighter.Property into a _Property enum from MT.
	 * @param {number} prop The Fighter.Property value.
	 * @returns {object} The _Property enum.
	 */
	static convertProperty(prop) {
		const mapping = {
			[Fighter.Property.Boss]: '_PBoss',
			[Fighter.Property.Static]: '_PStatic',
			[Fighter.Property.GroundOnly]: '_PGroundOnly',
			[Fighter.Property.Dark]: '_PDark',
			[Fighter.Property.Nothing]: '_PNothing'
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
	 * Convert a Fighter.LifeEffect into a _LifeEffect enum.
	 * @param {{fx: number, amount?: number, size?: number}} lifeFx Fighter.LifeEffect enum.
	 * @returns {{enum: string, value: string, args: Array} | null} The corresponding _LifeEffect enum or null if none.
	 */
	static convertLifeEffect(lifeFx) {
		const mapping = {
			[Fighter.LifeEffect.Normal]: '_LNormal',
			[Fighter.LifeEffect.Object]: '_LObject',
			[Fighter.LifeEffect.Skull]: '_LSkull',
			[Fighter.LifeEffect.Acid]: '_LAcid',
			[Fighter.LifeEffect.Poison]: '_LPoison',
			[Fighter.LifeEffect.Heal]: '_LHeal',
			[Fighter.LifeEffect.Explode]: '_LExplode',
			[Fighter.LifeEffect.Burn]: '_LBurn',
			[Fighter.LifeEffect.Fire]: '_LFire',
			[Fighter.LifeEffect.Wood]: '_LWood',
			[Fighter.LifeEffect.Water]: '_LWater',
			[Fighter.LifeEffect.Lightning]: '_LLightning',
			[Fighter.LifeEffect.Air]: '_LAir',
			[Fighter.LifeEffect.Gold]: '_LGold',
			[Fighter.LifeEffect.Todo]: '_LTodo'
		};
		if (lifeFx !== undefined && mapping[lifeFx.fx]) {
			const ret = {
				enum: '_LifeEffect',
				value: mapping[lifeFx.fx],
				args: []
			};
			switch (lifeFx.fx) {
				case Fighter.LifeEffect.Burn:
					ret.args = [lifeFx.amount ?? 1];
					break;
				case Fighter.LifeEffect.Skull:
					ret.args = [lifeFx.size ?? 1];
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
	 * Convert a Fighter.Status enum into an MT _Status enum.
	 * @param {object} status Fight.Action.Status/NoStatus to convert.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertFighterStatus(status) {
		const mapping = {
			[Fighter.Status.Sleep]: '_SSleep',
			[Fighter.Status.Flames]: '_SFlames',
			[Fighter.Status.Intang]: '_SIntang',
			[Fighter.Status.Fly]: '_SFly',
			[Fighter.Status.Slow]: '_SSlow',
			[Fighter.Status.Quick]: '_SQuick',
			[Fighter.Status.Stoned]: '_SStoned',
			[Fighter.Status.Shield]: '_SShield',
			[Fighter.Status.Bless]: '_SBless',
			[Fighter.Status.Poison]: '_SPoison',
			[Fighter.Status.Heal]: '_SHeal',
			[Fighter.Status.Burn]: '_SBurn',
			[Fighter.Status.MonoElt]: '_SMonoElt',
			[Fighter.Status.Dazzled]: '_SDazzled',
			[Fighter.Status.Stun]: '_SStun'
		};
		const ret = {
			enum: '_Status',
			value: mapping[status.status],
			args: []
		};
		switch (status.status) {
			// Those statuses need an argument but it is not used in the display of the fight.
			case Fighter.Status.Burn:
			case Fighter.Status.Poison:
			case Fighter.Status.MonoElt:
			case Fighter.Status.Heal:
			case Fighter.Status.Dazzled:
				ret.args.push(1);
				break;
		}
		return ret;
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
			case Skill.Shower:
				if (skill.type) {
					ret.value = '_GrShower2';
					ret.args = [skill.type];
				}
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
	 * Convert a Notifications enum into an _Notification enum.
	 * @param {number} notif Notifications enum.
	 * @returns {{enum: string, value: string, args: Array} | null} The corresponding _Notification enum or null if none.
	 */
	static convertNotification(notif) {
		const mapping = {
			[Notifications.Slow]: '_NSlow',
			[Notifications.Quick]: '_NQuick',
			[Notifications.Silence]: '_NSilence',
			[Notifications.Sharignan]: '_NSharignan',
			[Notifications.NoUse]: '_NNoUse',
			[Notifications.Down]: '_NDown',
			[Notifications.Up]: '_NUp',
			[Notifications.Fire]: '_NFire',
			[Notifications.Wood]: '_NWood',
			[Notifications.Water]: '_NWater',
			[Notifications.Thunder]: '_NThunder',
			[Notifications.Air]: '_NAir',
			[Notifications.InitUp]: '_NInitUp',
			[Notifications.InitDown]: '_NInitDown',
			[Notifications.Snake]: '_NSnake',
			[Notifications.Strong]: '_NStrong',
			[Notifications.Shield]: '_NShield',
			[Notifications.MonoElt]: '_NMonoElt',
			[Notifications.Todo]: '_NTodo'
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
