// @ts-check

import { ColorMatrixFilter, Container } from 'pixi.js';
import { Scene } from './Scene.js';
import { Slot } from './Slot.js';
import { Fighter } from './Fighter.js';
import { Timer } from './Timer.js';

/**
 * Information relative to the castle.
 * @typedef {{
 * 		life: number,
 * 		maxLife: number,
 * 		enclos: boolean,
 * 		ground: number,
 * 		armor: number,
 * 		repair: number,
 * 		color: number,
 * 		invisible: boolean
 * 	}} CastleInfos
 */

export class Castle {
	/**
	 * The Scene where the Castle is instantiated.
	 * @type {Scene}
	 */
	_scene;
	/**
	 * The maximum amount of life of the Castle.
	 * @type {number}
	 */
	_maxLife;
	/**
	 * The current life of the Castle.
	 * @type {number}
	 */
	_life;

	/**
	 * The display of the Castle.
	 * @type {Container}
	 */
	_skin;
	/**
	 * The armor covering the Castle, if any.
	 * @type {Container}
	 */
	_armor;
	/**
	 * The goblin repairing the Castle, if any.
	 * @type {{skin: Container, speed: number, frame: number}}
	 */
	_repairMan;

	/**
	 * The Slot of the Castle.
	 * @type {Slot}
	 */
	_slot;

	/**
	 * Creates a new Castle based on the information passed as parameters.
	 * @param {Scene} scene The Scene where the Castle is instantiated.
	 * @param {CastleInfos} infos The information relative to the initialization of the Castle.
	 */
	constructor(scene, infos) {
		this._scene = scene;
		this._maxLife = infos.maxLife;
		this._life = infos.life;

		if (infos.ground > 0) {
			// TODO mcPond
			this._scene.addContainer(new Container(), Scene.LAYERS.CASTLE);
		}

		// TODO mcCastle
		this._skin = new Container();
		this._skin.x = Scene.WIDTH;
		this._scene.addContainer(this._skin, Scene.LAYERS.CASTLE);

		if (infos.enclos) {
			// TODO mcEnclos
			const enclos = new Container();
			enclos.x = this._skin.x;
			this._scene.addContainer(enclos, Scene.LAYERS.CASTLE);
		}

		if (infos.repair) {
			// TODO worker
			this._repairMan = {
				skin: new Container(),
				speed: infos.repair,
				frame: 0
			};
			this._repairMan.skin.x = 392;
			this._repairMan.skin.y = 192;
		}

		if (infos.armor) {
			// TODO mcCastleArmor
			this._armor = new Container();
			this._armor.x = this._skin.x;
			this._scene.addContainer(this._armor, Scene.LAYERS.CASTLE);
		}

		if (infos.invisible) {
			this._skin.alpha = 0.5;
		}

		if (infos.color) {
			/** @type {import('pixi.js').ColorMatrix[]} */
			const colors = [
				[1.2, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 1, 0],
				[0.7, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 1, 0]
			];
			const filter = new ColorMatrixFilter();
			filter.matrix = colors[infos.color % colors.length];
			this._skin.filters = [filter];
		}

		//this._slot = new Slot(); TODO
	}

	/**
	 *
	 * @param {number} n
	 * @param {Fighter} f
	 */
	damage(n, f) {}

	/**
	 *
	 * @param {number} n
	 */
	incLife(n) {}

	getStone() {}

	/**
	 *
	 * @param {Timer} timer
	 */
	update(timer) {}
}
