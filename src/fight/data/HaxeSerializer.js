// @ts-check

/**
 * Incomplete Haxe Serializer based on the project version of the Haxe Unserializer.
 * Not necessary for production, used to send custom fight data to fight.swf.
 * Only implements the needed instructions in this context.
 */
export class HaxeSerializer {
	/**
	 * The data to unserialize passed in the constructor.
	 * @type {string}
	 */
	_data;
	/**
	 * String cache used to serialize a string as reference ('R').
	 * @type {string[]}
	 */
	_scache = [];

	/**
	 * Load the Serializer with the object to serialize.
	 * @param {string} data The object to serialize.
	 */
	constructor(data) {
		this._data = data;
	}

	/**
	 * Serialize an object as a string.
	 * @param {object} data The object to serialize.
	 * @returns {string} The string representation of the object.
	 */
	serializeObject(data) {
		let str = 'o';
		for (const attr in data) {
			str += this.serializeString(attr);
			str += this.serializeData(data[attr], attr === '_history');
		}
		return str + 'g';
	}

	/**
	 * Serialize an Array as a list.
	 * @param {Array} data The array data to serialize.
	 * @returns {string} The string representation of the serialized list.
	 */
	serializeList(data) {
		let str = 'l';
		for (const d of data) {
			str += this.serializeData(d);
		}
		return str + 'h';
	}

	/**
	 * Serialize the given data as an array.
	 * @param {Array} data The array data to serialize.
	 * @returns {string} The string representation of the Array.
	 */
	serializeArray(data) {
		let str = 'a';
		for (let i = 0; i < data.length; ++i) {
			if (data[i] === null) {
				let j = 0;
				while (data[i + j] === null && i + j < data.length) {
					++j;
				}
				str += 'u' + j;
				i += j - 1;
			} else {
				str += this.serializeData(data[i]);
			}
		}
		return str + 'h';
	}

	/**
	 * Serialize the given data as an enum. Has to contain the keys 'enum', 'value' and 'args'.
	 * @param {{enum: string, value: string, args: Array}} data The object to serialize as an enum.
	 * @returns {string} The string representation of the serialized data.
	 */
	serializeEnum(data) {
		let str = 'w';
		str += this.serializeString(data.enum);
		str += this.serializeString(data.value);
		str += ':';
		str += data.args.length;
		for (const v of data.args) {
			str += this.serializeData(v, data.value === '_HDamagesGroup');
		}
		return str;
	}

	/**
	 * Returne the serialized representation of a string.
	 * Will be a string if it is the first time this data is met in the process, or a reference otherwise.
	 * @param {string} data The data to serialize.
	 * @returns {string} The serialized representation of the string.
	 */
	serializeString(data) {
		const refIdx = this._scache.indexOf(data);
		if (refIdx >= 0) {
			return 'R' + refIdx;
		}
		this._scache.push(data);
		// MT encodes '() as well, so here it is.
		data = encodeURIComponent(data).replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29');
		return 'y' + data.length + ':' + data;
	}

	/**
	 * Serialize the data passed as parameter and return a string representation of said data.
	 * @param {object} data Object to serialize.
	 * @param {boolean} forceList If the data is an array, serialize it as a list instead.
	 * @returns {string} A string representing the serialized data.
	 * @throws Throws an exception if the serialization process for a data type is unknown.
	 */
	serializeData(data, forceList = false) {
		if (data === null) {
			return 'n';
		}
		if (typeof data == 'boolean') {
			return data ? 't' : 'f';
		}
		if (data === 0) {
			return 'z';
		}
		if (Number.isNaN(data)) {
			return 'k';
		}
		if (typeof data == 'number') {
			if (data % 1 === 0) {
				return 'i' + data;
			} else {
				return 'd' + data;
			}
		}
		if (typeof data == 'string') {
			return this.serializeString(data);
		}
		if (data.enum && data.value && data.args) {
			return this.serializeEnum(data);
		}
		if (Array.isArray(data)) {
			if (forceList) {
				return this.serializeList(data);
			}
			return this.serializeArray(data);
		}
		if (typeof data == 'object') {
			return this.serializeObject(data);
		}
		throw `Unable to serializing the following data: '${data}'`;
	}

	/**
	 * Serialize the data passed to the constructor and return a string representation of said data.
	 * @returns {string} A string representing the serialized data.
	 */
	serialize() {
		return this.serializeData(this._data);
	}
}
