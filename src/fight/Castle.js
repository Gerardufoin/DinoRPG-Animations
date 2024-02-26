// @ts-check

import { ColorMatrixFilter, Container } from 'pixi.js';
import { Scene } from './Scene.js';
import { Slot } from './Slot.js';
import { Fighter } from './Fighter.js';
import { Timer } from './Timer.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { Animator } from '../display/Animator.js';
import { PartCastle } from './parts/castle/PartCastle.js';
import { Asset } from '../display/Asset.js';
import { ref } from '../gfx/references.js';

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

/**
 * The Castle appearing on the right side of the screen when fighting a clan battle.
 */
export class Castle {
	/**
	 * List of the reference keys for the armor assets.
	 * @type {string[]}
	 */
	static ARMOR_ASSETS = ['armor_1', 'armor_2', 'armor_3'];
	/**
	 * List of the reference keys for the ponds assets.
	 */
	static POND_ASSETS = ['ponds_1', 'ponds_2', 'ponds_3'];

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
	 * If the Castle blinking. Happens when taking damages.
	 * @type {boolean}
	 */
	_blinking = false;
	/**
	 * The amount of shaking affecting the Castle.
	 * @type {number}
	 */
	_shake = 0;

	/**
	 * The display of the Castle.
	 * @type {Container}
	 */
	_skin;
	/**
	 * Different states of destruction of the Castle.
	 * @type {Container[]}
	 */
	_states;
	/**
	 * The armor covering the Castle, if any.
	 * @type {Container}
	 */
	_armor;
	/**
	 * The goblin repairing the Castle, if any.
	 * @type {{skin: Animator, speed: number, frame: number}}
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
			this._scene.addContainer(
				new Asset(ref.castle[Castle.POND_ASSETS[infos.ground % Castle.POND_ASSETS.length]]),
				Scene.LAYERS.CASTLE
			);
		}

		this._skin = new Container();
		this._states = [
			new Asset(ref.castle.wall),
			new Asset(ref.castle.wall_dmg_1),
			new Asset(ref.castle.wall_dmg_2),
			new Asset(ref.castle.wall_destroyed)
		];
		for (const s of this._states) {
			this._skin.addChild(s);
			s.visible = false;
		}
		this._skin.x = Scene.WIDTH;
		this._scene.addContainer(this._skin, Scene.LAYERS.CASTLE);

		if (infos.enclos) {
			const enclos = new Asset(ref.castle.enclos);
			enclos.x = this._skin.x;
			this._scene.addContainer(enclos, Scene.LAYERS.CASTLE);
		}

		if (infos.repair) {
			// TODO worker
			this._repairMan = {
				skin: new Animator(false),
				speed: infos.repair,
				frame: 0
			};
			this._repairMan.skin.x = 392;
			this._repairMan.skin.y = 192;
		}

		if (infos.armor) {
			this._armor = new Asset(ref.castle[Castle.ARMOR_ASSETS[infos.armor % Castle.ARMOR_ASSETS.length]]);
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

		const portrait = new Asset(ref.castle.wall);
		portrait.x = 28;
		portrait.y = -15;
		portrait.scale.set(0.4);
		this._slot = new Slot(this._scene, this._life, this._maxLife, null, null, false, portrait);
		// Call incLife to set the Castle skin.
		this.incLife(0);
	}

	/**
	 * The given Fighter damages the Castle for the specified amount of damages.
	 * @param {number} damages The amount of damages.
	 * @param {Fighter} fighter The Fighter attacking the Castle.
	 */
	damage(damages, fighter) {
		this.incLife(-damages);
		this._shake = 30;
		this._blinking = true;

		for (let i = 0; i < 20; ++i) {
			const cy = Math.random() * 2 - 1;
			this._scene.addSprite(
				new PartCastle(
					this._scene,
					fighter.position.x + fighter.ray,
					fighter.position.y + cy * 5,
					-10 + Math.random() * 20,
					-Math.random() * 4,
					cy * 2,
					-Math.random() * 16
				),
				Scene.LAYERS.FIGHTERS
			);
		}

		this._slot.setLife(this._life / this._maxLife);
		this._slot.fxDamage();
	}

	/**
	 * Changes the life of the Castle and set its skin depending on the amount of life left.
	 * If the Castle is destroyed, spawn smoke and stone particles.
	 * @param {number} amount The amount of life to add or remove.
	 */
	incLife(amount) {
		this._life = PixiHelper.mm(0, amount, this._maxLife);
		const coef = 1 - this._life / this._maxLife;

		const curState = Math.floor(coef * (this._states.length - 1));
		for (const s of this._states) {
			s.visible = false;
		}
		this._states[curState].visible = true;
		if (this._states.length - 1 === curState) {
			if (this._armor) {
				this._armor.visible = false;
			}
		}

		for (let i = 0; i < 80; ++i) {
			this._scene.addSprite(
				new PartCastle(
					this._scene,
					300 + Math.random() * 80,
					Math.random() * 250 - 50,
					-Math.random() * 100,
					(Math.random() * 2 - 1) * 3,
					(Math.random() * 2 - 1) * 3,
					0
				),
				Scene.LAYERS.FIGHTERS
			);
		}

		for (let i = 0; i < 14; ++i) {
			// TODO fxCastleSmoke
		}
	}

	/**
	 * Update the shaking animation and the repairman.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		if (this._repairMan) {
			this._repairMan.skin.update(timer.deltaTimeMS);
		}

		if (this._shake) {
			this._shake *= 0.5;
			if (this._shake < 0.5) {
				this._shake = 0;
			}
		}
	}
}
