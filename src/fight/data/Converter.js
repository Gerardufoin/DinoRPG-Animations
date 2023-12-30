// @ts-check

/**
 * Convert MT fight data into the format used by Fight.js.
 */
export class Converter {
	/**
	 * Convert the fight data unserialized using HaxeUnserializer and convert it into the format used by the project.
	 * @param {object} mtData Data unserialized from MT legacy format.
	 * @returns {{bg?:string, history: Array}} An object containing the fight data converted to the format used for this project.
	 */
	static convert(mtData) {
		const data = {
			bg: Converter.getBackground(mtData),
			history: []
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
}
