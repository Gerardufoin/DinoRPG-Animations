// @ts-check
// https://github.com/motion-twin/haxe/blob/development/std/haxe/Unserializer.hx

/**
 * Incomplete Haxe Unserializer.
 * Only implements the instructions useful to deserialize DinoRPG fight data.
 */
export class HaxeUnserializer {
	/**
	 * The data to unserialize passed in the constructor.
	 * @type {string}
	 */
	_data;
	/**
	 * Current position of the unserializing process.
	 * @type {number}
	 */
	_position = 0;
	/**
	 * Total length of the data to unserialize (shortcut for this._data.length).
	 * @type {number}
	 */
	_length = 0;
	/**
	 * String cache used to unserialize the string reference ('R') command.
	 * @type {string[]}
	 */
	_scache = [];

	/**
	 * Load the Unserializer with the string to unserialize.
	 * @param {string} data The serialized data as a string.
	 */
	constructor(data) {
		this._data = data;
		this._length = data.length;
	}

	/**
	 * Get a character of the data string at the specified position and return it as a string of length 1.
	 * @param {number} pos The index of the character to get.
	 * @returns {string} The character of the data to parse at the given position.
	 * @throws An exception if the position is outside the data string.
	 */
	get(pos) {
		if (pos >= this._length) {
			throw 'Unserializer reached beyond the length of the serialized data.';
		}
		return this._data.charAt(pos);
	}

	/**
	 * Deserialize an integer from the current position of the unserializing process.
	 * @returns {number} The resulting integer.
	 */
	getInt() {
		let pos = this._position;
		while (pos < this._length && '-0123456789'.includes(this.get(pos))) {
			pos++;
		}
		const v = Number.parseInt(this._data.substring(this._position, pos));
		this._position = pos;
		return v;
	}

	/**
	 * Deserialize a float from the current position of the unserializing process.
	 * @returns {number} The resulting float.
	 */
	getFloat() {
		let pos = this._position;
		while (pos < this._length && '+-.,0123456789eE'.includes(this.get(pos))) {
			pos++;
		}
		const v = Number.parseFloat(this._data.substring(this._position, pos));
		this._position = pos;
		return v;
	}

	/**
	 * Deserialize an object from the current position of the unserializing process.
	 * @returns {object} The resulting object.
	 * @throws An exception if a key value is not a string.
	 */
	getObject() {
		const obj = {};
		while (this.get(this._position) !== 'g') {
			const k = this.unserialize();
			if (typeof k !== 'string') {
				throw 'Invalid object key obtained while deserializing object.';
			}
			const v = this.unserialize();
			obj[k] = v;
		}
		this._position++;
		return obj;
	}

	/**
	 * Deserialize a string from the current position of the unserializing process.
	 * @returns {string} The resulting string.
	 * @throws Am exception if the expected string length is larger than the data left to parse.
	 */
	getString() {
		const len = this.getInt();
		if (this.get(this._position++) !== ':' || this._length - this._position < len) {
			throw 'Invalid length obtained while deserializing string.';
		}
		let v = decodeURIComponent(this._data.substring(this._position, (this._position += len)));
		this._scache.push(v);
		return v;
	}

	/**
	 * Deserialize a list from the current position of the unserializing process.
	 * @returns {object[]} The resulting list.
	 */
	getList() {
		const l = [];
		while (this.get(this._position) !== 'h') {
			l.push(this.unserialize());
		}
		this._position++;
		return l;
	}

	/**
	 * Deserialize an array from the current position of the unserializing process.
	 * Similar to getList in this context.
	 * @returns {object[]} The resulting array.
	 */
	getArray() {
		const a = [];
		while (this.get(this._position) !== 'h') {
			if (this.get(this._position) === 'u') {
				this._position++;
				const len = this.getInt();
				while (a.length < len) {
					a.push(null);
				}
			} else {
				a.push(this.unserialize());
			}
		}
		this._position++;
		return a;
	}

	/**
	 * Deserialize an array attached to an enum instance from the current position of the unserializing process.
	 * @returns {{enum: string, value: string, args: object[]}} The resulting object containing the parsed enum data.
	 * @throws An exception when the parsed data does not follow the enum serialized representation.
	 */
	getEnum() {
		const e = {
			enum: this.unserialize(),
			value: this.unserialize(),
			args: []
		};
		if (this.get(this._position++) !== ':') {
			throw 'Invalid format while deserializing enum.';
		}
		let nargs = this.getInt();
		while (nargs-- > 0) {
			e.args.push(this.unserialize());
		}
		return e;
	}

	/**
	 * Deserialize a reference to a previously parsed string from the current position of the unserializing process.
	 * @returns {string} The referenced string.
	 * @throws An exception if the index of the referenced string does not exist in the cache.
	 */
	getReference() {
		const i = this.getInt();
		if (i < 0 || i >= this._scache.length) {
			throw 'Invalid index while deserializing string reference.';
		}
		return this._scache[i];
	}

	/**
	 * Unserialize the data passed to the constructor and return an object containing said data.
	 * @returns {object} An object containing the unserialized data.
	 * @throws Throws an exception if the unserialization method for the character at the current index is unknown.
	 */
	unserialize() {
		switch (this.get(this._position++)) {
			case 'n':
				return null;
			case 't':
				return true;
			case 'f':
				return false;
			case 'z':
				return 0;
			case 'i':
				return this.getInt();
			case 'd':
				return this.getFloat();
			case 'y':
				return this.getString();
			case 'k':
				return NaN;
			case 'a':
				return this.getArray();
			case 'o':
				return this.getObject();
			case 'R':
				return this.getReference();
			case 'w':
				return this.getEnum();
			case 'l':
				return this.getList();
			default:
				throw `Unable to deserializing character '${this.get(--this._position)}'`;
		}
	}
}
