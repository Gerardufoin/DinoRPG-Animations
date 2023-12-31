// @ts-check

import { Fight } from '../Fight.js';
import { AddFighter } from '../actions/AddFighter.js';

/**
 * Convert MT fight data into ET fight data.
 */
export class ETConverter {
	/**
	 * Mapping between MT _History enum values and Fight.Action enum values.
	 */
	static HistoryToAction = {
		_HAdd: ETConverter.convertHAdd,
		_HAddCastle: ETConverter.convertHAddCastle,
		_HMoveTo: ETConverter.convertHMoveTo,
		_HDamages: ETConverter.convertHDamages,
		_HDamagesGroup: ETConverter.convertHDamagesGroup,
		_HCastleAttack: ETConverter.convertHCastleAttack,
		_HReturn: ETConverter.convertHReturn,
		_HDead: ETConverter.convertHDead,
		_HLost: ETConverter.convertHLost,
		_HEscape: ETConverter.convertHEscape,
		_HFinish: ETConverter.convertHFinish,
		_HEnergy: ETConverter.convertHEnergy,
		_HMaxEnergy: ETConverter.convertHMaxEnergy,
		_HPause: ETConverter.convertHPause,
		_HAnnounce: ETConverter.convertHAnnounce,
		_HGoto: ETConverter.convertHGoto,
		_HRegen: ETConverter.convertHRegen,
		_HObject: ETConverter.convertHObject,
		_HFx: ETConverter.convertHFx,
		_HStatus: ETConverter.convertHStatus,
		_HNoStatus: ETConverter.convertHNoStatus,
		_HDisplay: ETConverter.convertHDisplay,
		_HTimeLimit: ETConverter.convertHTimeLimit,
		_HTalk: ETConverter.convertHTalk,
		_HText: ETConverter.convertHText,
		_HFlip: ETConverter.convertHFlip,
		_SpawnToy: ETConverter.convertSpawnToy,
		_DestroyToy: ETConverter.convertDestroyToy,
		_HWait: ETConverter.convertHWait,
		_HLog: ETConverter.convertHLog,
		_HNotify: ETConverter.convertHNotify
	};

	/**
	 * Convert the fight data unserialized using HaxeUnserializer into the format used by ET.
	 * @param {object} mtData Data unserialized from MT legacy format.
	 * @returns {{bg?:string, history: Array}} An object containing the fight data converted to the format used for this project.
	 */
	static convert(mtData) {
		const data = {
			bg: ETConverter.getBackground(mtData),
			top: mtData._mtop ?? 0,
			bottom: mtData._mbottom ?? 0,
			history: ETConverter.convertHistory(mtData)
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
			if (ETConverter.HistoryToAction[h.value]) {
				history.push(ETConverter.HistoryToAction[h.value](h.args));
			} else {
				console.error(`Error while converting history: Unknown action '${h.value}'.`);
			}
		}
		return history;
	}

	/**
	 * Convert the _History._HAdd enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHAdd(args) {
		const nArgs = [];
		if (args.length !== 2) {
			console.error(`_HAdd arguments size different from 2: ${args.length}`);
		}
		nArgs.push({
			props: args[0]._props,
			dino: args[0]._dino,
			life: args[0]._life,
			name: args[0]._name,
			side: args[0]._side,
			size: args[0]._size,
			fid: args[0]._fid,
			gfx: args[0]._gfx,
			...ETConverter.convertEntranceEffect(args[1])
		});
		return { action: Fight.Action.Add, args: nArgs };
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
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHEnergy(args) {
		console.log('Conversion for "_HEnergy" not done yet.');
		return { action: Fight.Action.Energy };
	}

	/**
	 * Convert the _History._HMaxEnergy enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHMaxEnergy(args) {
		console.log('Conversion for "_HMaxEnergy" not done yet.');
		return { action: Fight.Action.MaxEnergy };
	}

	/**
	 * Convert the _History._HPause enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHPause(args) {
		console.log('Conversion for "_HPause" not done yet.');
		return { action: Fight.Action.Pause };
	}

	/**
	 * Convert the _History._HAnnounce enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHAnnounce(args) {
		console.log('Conversion for "_HAnnounce" not done yet.');
		return { action: Fight.Action.Announce };
	}

	/**
	 * Convert the _History._HGoto enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHGoto(args) {
		console.log('Conversion for "_HGoto" not done yet.');
		return { action: Fight.Action.Goto };
	}

	/**
	 * Convert the _History._HDamages enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHDamages(args) {
		console.log('Conversion for "_HDamages" not done yet.');
		return { action: Fight.Action.Damages };
	}

	/**
	 * Convert the _History._HReturn enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHReturn(args) {
		console.log('Conversion for "_HReturn" not done yet.');
		return { action: Fight.Action.Return };
	}

	/**
	 * Convert the _History._HDead enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHDead(args) {
		console.log('Conversion for "_HDead" not done yet.');
		return { action: Fight.Action.Dead };
	}

	/**
	 * Convert the _History._HLost enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHLost(args) {
		console.log('Conversion for "_HLost" not done yet.');
		return { action: Fight.Action.Lost };
	}

	/**
	 * Convert the _History._HFinish enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHFinish(args) {
		console.log('Conversion for "_HFinish" not done yet.');
		return { action: Fight.Action.Finish };
	}

	/**
	 * Convert the _History._HRegen enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHRegen(args) {
		console.log('Conversion for "_HRegen" not done yet.');
		return { action: Fight.Action.Regen };
	}

	/**
	 * Convert the _History._HObject enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHObject(args) {
		console.log('Conversion for "_HObject" not done yet.');
		return { action: Fight.Action.Object };
	}

	/**
	 * Convert the _History._HStatus enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHStatus(args) {
		console.log('Conversion for "_HStatus" not done yet.');
		return { action: Fight.Action.Status };
	}

	/**
	 * Convert the _History._HNoStatus enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHNoStatus(args) {
		console.log('Conversion for "_HNoStatus" not done yet.');
		return { action: Fight.Action.NoStatus };
	}

	/**
	 * Convert the _History._HDamagesGroup enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHDamagesGroup(args) {
		console.log('Conversion for "_HDamagesGroup" not done yet.');
		return { action: Fight.Action.DamagesGroup };
	}

	/**
	 * Convert the _History._HFx enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHFx(args) {
		console.log('Conversion for "_HFx" not done yet.');
		return { action: Fight.Action.Fx };
	}

	/**
	 * Convert the _History._HAddCastle enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHAddCastle(args) {
		console.log('Conversion for "_HAddCastle" not done yet.');
		return { action: Fight.Action.AddCastle };
	}

	/**
	 * Convert the _History._HCastleAttack enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHCastleAttack(args) {
		console.log('Conversion for "_HCastleAttack" not done yet.');
		return { action: Fight.Action.CastleAttack };
	}

	/**
	 * Convert the _History._HDisplay enum into a Fight.Action command.
	 * @param {Array} _args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHDisplay(_args) {
		return { action: Fight.Action.Display };
	}

	/**
	 * Convert the _History._HTimeLimit enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHTimeLimit(args) {
		console.log('Conversion for "_HTimeLimit" not done yet.');
		return { action: Fight.Action.TimeLimit };
	}

	/**
	 * Convert the _History._HTalk enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHTalk(args) {
		console.log('Conversion for "_HTalk" not done yet.');
		return { action: Fight.Action.Talk };
	}

	/**
	 * Convert the _History._HText enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHText(args) {
		console.log('Conversion for "_HText" not done yet.');
		return { action: Fight.Action.Text };
	}

	/**
	 * Convert the _History._HEscape enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHEscape(args) {
		console.log('Conversion for "_HEscape" not done yet.');
		return { action: Fight.Action.Escape };
	}

	/**
	 * Convert the _History._HMoveTo enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHMoveTo(args) {
		console.log('Conversion for "_HMoveTo" not done yet.');
		return { action: Fight.Action.MoveTo };
	}

	/**
	 * Convert the _History._HFlip enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHFlip(args) {
		console.log('Conversion for "_HFlip" not done yet.');
		return { action: Fight.Action.Flip };
	}

	/**
	 * Convert the _History._SpawnToy enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertSpawnToy(args) {
		console.log('Conversion for "_SpawnToy" not done yet.');
		return { action: Fight.Action.SpawnToy };
	}

	/**
	 * Convert the _History._DestroyToy enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertDestroyToy(args) {
		console.log('Conversion for "_DestroyToy" not done yet.');
		return { action: Fight.Action.DestroyToy };
	}

	/**
	 * Convert the _History._HWait enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHWait(args) {
		console.log('Conversion for "_HWait" not done yet.');
		return { action: Fight.Action.Wait };
	}

	/**
	 * Convert the _History._HLog enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHLog(args) {
		console.log('Conversion for "_HLog" not done yet.');
		return { action: Fight.Action.Log };
	}

	/**
	 * Convert the _History._HNotify enum into a Fight.Action command.
	 * @param {Array} args Arguments of the action.
	 * @returns {{action: number, args?: Array}} The converted action with its arguments.
	 */
	static convertHNotify(args) {
		console.log('Conversion for "_HNotify" not done yet.');
		return { action: Fight.Action.Notify };
	}
}
