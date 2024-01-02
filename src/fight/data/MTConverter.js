// @ts-check

import { AddFighter } from '../actions/AddFighter.js';

/**
 * Convert ET fight data into MT fight data.
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
	 * Convert the fight data in ET format into the format used by MT for fight.swf.
	 * @param {object} etData ET fight data to convert.
	 * @returns {object} An object containing the fight data converted to the format used by MT.
	 */
	static convert(etData) {
		const data = {
			_check: '/user/check?id=yYC6L',
			_debug: '/tools/debugFight?sk=3GHQD1Sk',
			_mbottom: 20,
			_mright: 0,
			_equip: '/img/icons/obj_::id::.gif',
			_sdino: '/swf/sdino.swf?v=33',
			_dino: '/swf/dino.swf?v=35',
			_dojo: null,
			_mtop: 120,
			_bg: `/img/fight/${etData.bg}.jpg`,
			_ground: null,
			_debrief: `javascript:_.toggleFlash('debrief', -85)`,
			_history: MTConverter.convertHistory(etData),
			_smonster: '/swf/smonster.swf?v=26'
		};
		return data;
	}

	/**
	 * Convert the fight history from ET version to MT version.
	 * @param {object} etData The fight data under ET format.
	 * @returns {object} An object containing the fight history ready to be serialized.
	 */
	static convertHistory(etData) {
		const history = [];
		for (const h of etData.history) {
			if (MTConverter.ActionToHistory[h.action]) {
				const cmd = MTConverter.ActionToHistory[h.action](h.args);
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
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHAdd(args) {
		const ret = {
			enum: '_History',
			value: '_HAdd',
			args: []
		};
		ret.args.push({
			_props: args[0].props,
			_dino: args[0].dino,
			_life: args[0].life,
			_name: args[0].name,
			_side: args[0].side,
			_size: args[0].size,
			_fid: args[0].fid,
			_gfx: args[0].gfx
		});
		ret.args.push(MTConverter.convertEntranceEffect(args[0]));
		return ret;
	}

	/**
	 * Convert an AddFighter.EntranceEffect into an entrance effect from MT.
	 * @param {object} fighter The fighter data from ET Add command.
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
				args: [fighter.x, fighter.y, ret]
			};
		}
		return ret;
	}

	/**
	 * Convert the ET action into an _History._HEnergy enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHEnergy(args) {
		console.log('Conversion for "_HEnergy" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HMaxEnergy enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHMaxEnergy(args) {
		console.log('Conversion for "_HMaxEnergy" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HPause enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHPause(args) {
		console.log('Conversion for "_HPause" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HAnnounce enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHAnnounce(args) {
		console.log('Conversion for "_HAnnounce" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HGoto enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHGoto(args) {
		console.log('Conversion for "_HGoto" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HDamages enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDamages(args) {
		console.log('Conversion for "_HDamages" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HReturn enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHReturn(args) {
		console.log('Conversion for "_HReturn" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HDead enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDead(args) {
		console.log('Conversion for "_HDead" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HLost enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHLost(args) {
		console.log('Conversion for "_HLost" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HFinish enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHFinish(args) {
		console.log('Conversion for "_HFinish" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HRegen enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHRegen(args) {
		console.log('Conversion for "_HRegen" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HObject enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHObject(args) {
		console.log('Conversion for "_HObject" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HStatus enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHStatus(args) {
		console.log('Conversion for "_HStatus" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HNoStatus enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHNoStatus(args) {
		console.log('Conversion for "_HNoStatus" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HDamagesGroup enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHDamagesGroup(args) {
		console.log('Conversion for "_HDamagesGroup" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HFx enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHFx(args) {
		console.log('Conversion for "_HFx" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HAddCastle enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHAddCastle(args) {
		console.log('Conversion for "_HAddCastle" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HCastleAttack enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHCastleAttack(args) {
		console.log('Conversion for "_HCastleAttack" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HDisplay enum.
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
	 * Convert the ET action into an _History._HTimeLimit enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHTimeLimit(args) {
		console.log('Conversion for "_HTimeLimit" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HTalk enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHTalk(args) {
		console.log('Conversion for "_HTalk" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HText enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHText(args) {
		console.log('Conversion for "_HText" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HEscape enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHEscape(args) {
		console.log('Conversion for "_HEscape" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HMoveTo enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHMoveTo(args) {
		console.log('Conversion for "_HMoveTo" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HFlip enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHFlip(args) {
		console.log('Conversion for "_HFlip" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._SpawnToy enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertSpawnToy(args) {
		console.log('Conversion for "_SpawnToy" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._DestroyToy enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertDestroyToy(args) {
		console.log('Conversion for "_DestroyToy" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HWait enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHWait(args) {
		console.log('Conversion for "_HWait" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HLog enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHLog(args) {
		console.log('Conversion for "_HLog" not done yet.');
		return undefined;
	}

	/**
	 * Convert the ET action into an _History._HNotify enum.
	 * @param {Array} args Arguments of the action.
	 * @returns {{enum: string, value: string, args: Array}} The converted enum with its arguments.
	 */
	static convertHNotify(args) {
		console.log('Conversion for "_HNotify" not done yet.');
		return undefined;
	}
}
