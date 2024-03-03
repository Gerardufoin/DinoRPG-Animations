// @ts-check

import { ColorMatrixFilter, Container } from 'pixi.js';
import { Slot } from './Slot.js';
import { Fighter } from './Fighter.js';
import { Timer } from './Timer.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { PartCastle } from './parts/castle/PartCastle.js';
import { Asset } from '../display/Asset.js';
import { ref } from '../gfx/references.js';
import { Layers } from './DepthManager.js';
import { IScene, SCENE_WIDTH } from './IScene.js';
import { Worker } from './parts/castle/Worker.js';
import { Smoke } from './parts/castle/Smoke.js';

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
 * 	}} CastleDetails
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
	 * Reference to the Scene management.
	 * @type {IScene}
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
	 * The strength of the blinking affecting the Castle.
	 * Stronger blinking start with a higher percent of white and last longer.
	 * @type {number}
	 */
	_blinkStrength = 0;
	/**
	 * The blink timer. Every time it reaches one, inverse _blinking and update _blinkFilter.
	 * @type {number}
	 */
	_blinkTimer = 0;
	/**
	 * The Shake filter color.
	 * @type {ColorMatrixFilter}
	 */
	_blinkFilter = new ColorMatrixFilter();

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
	 * @type {Worker}
	 */
	_repairMan;

	/**
	 * The Slot of the Castle.
	 * @type {Slot}
	 */
	_slot;

	/**
	 * Creates a new Castle based on the information passed as parameters.
	 * @param {IScene} scene The scene Spawning the Castle.
	 * @param {CastleDetails} infos The information relative to the initialization of the Castle.
	 */
	constructor(scene, infos) {
		this._scene = scene;
		this._maxLife = infos.maxLife;
		this._life = infos.life;

		if (infos.ground > 0) {
			this._scene.dm.addContainer(
				new Asset(ref.castle[Castle.POND_ASSETS[(infos.ground - 1) % Castle.POND_ASSETS.length]]),
				Layers.Scene.CASTLE
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
		this._skin.x = SCENE_WIDTH - 167;
		this._scene.dm.addContainer(this._skin, Layers.Scene.CASTLE);
		this._skin.filters = [];

		if (infos.enclos) {
			const enclos = new Asset(ref.castle.enclos);
			enclos.x = SCENE_WIDTH - 82;
			this._scene.dm.addContainer(enclos, Layers.Scene.CASTLE);
		}

		if (infos.repair > 0) {
			this._repairMan = new Worker(392, 192, infos.repair);
			this._scene.dm.addContainer(this._repairMan, Layers.Scene.CASTLE);
		}

		if (infos.armor > 0) {
			// Armor 0 is skipped and apparently not used in MT code. You can reach it by giving armor 3
			this._armor = new Asset(ref.castle[Castle.ARMOR_ASSETS[infos.armor % Castle.ARMOR_ASSETS.length]]);
			this._armor.x = SCENE_WIDTH - 131;
			this._scene.dm.addContainer(this._armor, Layers.Scene.CASTLE);
			this._armor.alpha = infos.invisible ? 0.5 : 1;
		}

		if (infos.invisible) {
			this._skin.alpha = 0.5;
		}

		if (infos.color > 0) {
			/** @type {import('pixi.js').ColorMatrix[]} */
			const colors = [
				[1.2, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 1, 0],
				[0.7, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 1, 0]
			];
			const filter = new ColorMatrixFilter();
			filter.matrix = colors[(infos.color - 1) % colors.length];
			this._skin.filters.push(filter);
		}
		this._skin.filters.push(this._blinkFilter);

		const portrait = new Asset(ref.castle.wall);
		portrait.x = -25;
		portrait.scale.set(0.4);
		this._slot = new Slot(this._life, this._maxLife, null, null, portrait, this._scene.tm);
		this._scene.addSlot(this._slot, false);
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
		this._blinkStrength = 30;
		this._blinking = true;

		for (let i = 0; i < 20; ++i) {
			const cy = Math.random() * 2 - 1;
			this._scene.dm.addSprite(
				new PartCastle(
					this._scene,
					fighter.position.x + fighter.ray,
					fighter.position.y + cy * 5,
					-10 + Math.random() * 20,
					-Math.random() * 4,
					cy * 2,
					-Math.random() * 16
				),
				Layers.Scene.FIGHTERS
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
		this._life = PixiHelper.mm(0, this._life + amount, this._maxLife);
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
			if (this._repairMan) {
				this._repairMan.stopStriking = true;
			}
			this._skin.alpha = 1;

			for (let i = 0; i < 80; ++i) {
				this._scene.dm.addSprite(
					new PartCastle(
						this._scene,
						300 + Math.random() * 80,
						Math.random() * 250 - 50,
						-Math.random() * 100,
						(Math.random() * 2 - 1) * 3,
						(Math.random() * 2 - 1) * 3,
						0
					),
					Layers.Scene.FIGHTERS
				);
			}

			for (let i = 0; i < 14; ++i) {
				this._scene.dm.addSprite(
					new Smoke(this._scene, 300 + Math.random() * 80, Math.random() * 330 - 30, -Math.random() * 100),
					Layers.Scene.FIGHTERS
				);
			}
		}
	}

	/**
	 * Update the shaking animation and the repairman.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		this._slot.update(timer);
		if (this._repairMan) {
			this._repairMan.updateAnim(timer);
		}

		if (this._blinkStrength) {
			this._blinkTimer += timer.tmod;
			if (this._blinkTimer >= 1) {
				this._blinkTimer -= 1;
				this._blinkStrength *= 0.5;
				if (this._blinkStrength < 0.5) {
					this._blinkStrength = 0;
					this._blinkTimer = 0;
					this._blinking = false;
					PixiHelper.setPercentColor(this._blinkFilter, 0, 0xffffff);
				} else {
					PixiHelper.setPercentColor(
						this._blinkFilter,
						this._blinking ? 20 + this._blinkStrength : 0,
						0xffffff
					);
					this._blinking = !this._blinking;
				}
			}
		}
	}
}
