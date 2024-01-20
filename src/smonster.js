// @ts-check
import { Animator } from './display/Animator.js';
import { monsters, error } from './smonster/monsters.js';
import { PartManager } from './display/PartManager.js';

/**
 * Conversion of the smonstger.swf file of the web game "Dino RPG".
 * Allows you to instantiate a monster.
 */
export class smonster extends Animator {
	/**
	 * Object containing all the information relative to a smonster (name, parts, animations, etc).
	 * @type {object}
	 */
	_monsterInfos;

	/**
	 * The collider of the monster.
	 * @type {{width: number, height: number}}
	 */
	get collider() {
		return {
			width: 36 * (this._monsterInfos?.width ?? 1),
			height: 39 * (this._monsterInfos?.height ?? 1)
		};
	}

	/**
	 * Create the monster passed as parameter.
	 * @param {{type: string, autoUpdate?: boolean, pflag?: boolean, scale?: number, flip?: boolean}} data Data of the monster to instantiate.
	 */
	constructor(data) {
		super(data.autoUpdate ?? true);
		this.init(data.type, data.pflag, data.scale);
		this.flip(data.flip);
	}

	/**
	 * Initialize the monster based on its type.
	 * @param {string} type Type of monster to instantiate.
	 * @param {boolean} pflag If false, the monster will not play its animation and stay at frame 0 of the "stand" animation.
	 * @param {number} scale Scale of the monster. Needed to correctly load the SVG.
	 */
	init(type, pflag = false, scale = 1) {
		this._body._scale = scale;
		this._monsterInfos = monsters[type] ?? error;

		for (let pName in this._monsterInfos.parts) {
			let part = PartManager.createPart(
				this._monsterInfos.parts[pName],
				[],
				[],
				`smonster/${this._monsterInfos.name}/`,
				this._body._scale
			);
			if (part) {
				this.addPart(pName, part);
			}
		}
		if (this._monsterInfos.shadow) {
			var shadow = PartManager.getSubPart(this._monsterInfos.shadow, [], [], 'smonster/', this._body._scale);
			if (shadow) this.addChildAt(shadow, 0);
		}
		if (this._monsterInfos.transforms) {
			this.setBodyTransforms(this._monsterInfos.transforms, []);
		}
		if (this._monsterInfos.glow) {
			this.setBodyGlow(this._monsterInfos.glow);
		}
		this.setAnimations(this._monsterInfos.animations);
		this.playAnim('stand');
		this.playing = pflag;
	}
}
