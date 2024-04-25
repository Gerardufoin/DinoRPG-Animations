// @ts-check

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
		if ((toStr && typeof value === 'string') || (!toStr && typeof value !== 'string')) {
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
}
