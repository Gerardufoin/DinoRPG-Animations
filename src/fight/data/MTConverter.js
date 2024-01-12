// @ts-check

import { AddFighter } from '../actions/AddFighter.js';

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
			_size: obj.fighter.size,
			_fid: obj.fighter.fid,
			_gfx: obj.fighter.gfx
		});
		ret.args.push(MTConverter.convertEntranceEffect(obj.fighter));
		return ret;
	}

	/**
	 * Convert an AddFighter.EntranceEffect into an entrance effect from MT.
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
			case AddFighter.EntranceEffect.Stand:
				ret.value = '_AFStand';
				break;
			case AddFighter.EntranceEffect.Grow:
				ret.value = '_AFGrow';
				break;
			case AddFighter.EntranceEffect.Fall:
				ret.value = '_AFFall';
				break;
			case AddFighter.EntranceEffect.Run:
				ret.value = '_AFRun';
				break;
			case AddFighter.EntranceEffect.Ground:
				ret.value = '_AFGround';
				break;
			case AddFighter.EntranceEffect.Anim:
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
		console.log('Conversion for "_HEnergy" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HMaxEnergy enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHMaxEnergy(obj) {
		console.log('Conversion for "_HMaxEnergy" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HPause enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHPause(obj) {
		console.log('Conversion for "_HPause" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HAnnounce enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHAnnounce(obj) {
		console.log('Conversion for "_HAnnounce" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HGoto enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHGoto(obj) {
		console.log('Conversion for "_HGoto" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HDamages enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDamages(obj) {
		console.log('Conversion for "_HDamages" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HReturn enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHReturn(obj) {
		console.log('Conversion for "_HReturn" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HDead enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDead(obj) {
		console.log('Conversion for "_HDead" not done yet.');
		return undefined;
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
		console.log('Conversion for "_HFinish" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HRegen enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHRegen(obj) {
		console.log('Conversion for "_HRegen" not done yet.');
		return undefined;
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
		console.log('Conversion for "_HDamagesGroup" not done yet.');
		return undefined;
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
		console.log('Conversion for "_HEscape" not done yet.');
		return undefined;
	}

	/**
	 * Convert the action into an _History._HMoveTo enum.
	 * @param {object} obj Object containing the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHMoveTo(obj) {
		console.log('Conversion for "_HMoveTo" not done yet.');
		return undefined;
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
		console.log('Conversion for "_HLog" not done yet.');
		return undefined;
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
