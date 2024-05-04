// @ts-check

import {
	Action,
	AuraType,
	DamagesEffect,
	EmoteBehaviour,
	EmoteList,
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
 * Static class allowing to convert enum from their number value to their string value, and conversely.
 */
export class EnumConverter {
	/**
	 * Converts a string/number to a number/string based on the given enum and the desired conversion direction.
	 * @param {string | number} value The value to convert.
	 * @param {{[id: string]: number}} enm An enum object, containing the mapping between key/value.
	 * @param {boolean} toStr If true, convert the value to string if it is not already one. If false, convert the value to a number if it is not already one.
	 * @returns {string | number | undefined} A string or a number based on the desired conversion. Undefined if the conversion is not known.
	 */
	static convert(value, enm, toStr) {
		// If the value is already the desired format, return the value
		if ((toStr && typeof value === 'string') || (!toStr && typeof value !== 'string') || value === undefined) {
			return value;
		}
		// If to number, get the enum value
		if (!toStr) {
			return enm[value];
		}
		// Otherwise, find which key has the value and return the key
		for (const k in enm) {
			if (enm[k] === value) {
				return k;
			}
		}
		// If nothing works, return undefined
		return undefined;
	}

	/**
	 * Check if a given key exists on an object. If the key exists, converts it using EnumConverter.convert and the given enum.
	 * @param {object} obj The object to check.
	 * @param {string} key The key to check.
	 * @param {{[id: string]: number}} enm An enum object, containing the mapping between key/value.
	 * @param {boolean} toStr If true, convert the value to string if it is not already one. If false, convert the value to a number if it is not already one.
	 */
	static checkDefinition(obj, key, enm, toStr) {
		if (obj !== undefined && obj[key] !== undefined) {
			obj[key] = EnumConverter.convert(obj[key], enm, toStr);
		}
	}

	/**
	 * Convert the enum of an action for the fight history.
	 * @param {object} action The action whose enum to convert. Return a copy of the action.
	 * @param {boolean} toStr If true, convert the enums to string if they are not already one. If false, convert the enums into numbers if they are not already one.
	 * @returns {object} A copy of the action object, with its enum converted to either a string or a number.
	 */
	static convertAction(action, toStr) {
		const na = JSON.parse(JSON.stringify(action));
		EnumConverter.checkDefinition(na, 'action', Action, toStr);
		// Add
		if (na.fighter) {
			if (na.fighter.props) {
				const np = [];
				for (const p of na.fighter.props) {
					np.push(EnumConverter.convert(p, FighterProperty, toStr));
				}
				na.fighter.props = np;
			}
			EnumConverter.checkDefinition(na.fighter, 'entrance', EntranceEffect, toStr);
		}
		EnumConverter.checkDefinition(na.lifeFx, 'fx', LifeEffect, toStr);
		EnumConverter.checkDefinition(na, 'status', FighterStatus, toStr);
		if (na.action === Action.Damages || na.action === 'Damages') {
			EnumConverter.checkDefinition(na, 'effect', DamagesEffect, toStr);
		}
		if (na.action === Action.Goto || na.action === 'Goto') {
			EnumConverter.checkDefinition(na, 'effect', GotoEffect, toStr);
		}
		EnumConverter.checkDefinition(na, 'skill', SkillList, toStr);
		if (na.details) {
			if ([SkillList.Shower, 'Shower', SkillList.Env, 'Env'].includes(na.skill)) {
				EnumConverter.checkDefinition(na.details, 'type', SkillType, toStr);
			}
			if (na.skill === SkillList.Aura || na.skill === 'Aura') {
				EnumConverter.checkDefinition(na.details, 'type', AuraType, toStr);
			}
		}
		// Finish
		EnumConverter.checkDefinition(na, 'left', EndBehaviour, toStr);
		EnumConverter.checkDefinition(na, 'right', EndBehaviour, toStr);
		// Notification
		EnumConverter.checkDefinition(na, 'notification', NotificationList, toStr);
		// Emote
		EnumConverter.checkDefinition(na, 'emote', EmoteList, toStr);
		EnumConverter.checkDefinition(na, 'behaviour', EmoteBehaviour, toStr);
		return na;
	}

	/**
	 * Convert every enum of a fight data into either string format of number format, based on the given parameters.
	 * Returns a copy of the data.
	 * @param {object} data The fight data whose enum to convert.
	 * @param {boolean} toStr If true, convert the enums to string if they are not already one. If false, convert the enums into numbers if they are not already one.
	 * @returns {object} A copy of the data object, with its enum converted to either a string or a number.
	 */
	static convertData(data, toStr) {
		const convData = JSON.parse(JSON.stringify(data));
		EnumConverter.checkDefinition(convData, 'ground', GroundType, toStr);
		if (convData.history) {
			const nh = [];
			for (const h of convData.history) {
				nh.push(EnumConverter.convertAction(h, toStr));
			}
			convData.history = nh;
		}
		return convData;
	}
}
