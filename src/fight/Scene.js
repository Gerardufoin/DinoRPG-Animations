// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Scene.hx

import { Container, Graphics } from 'pixi.js';
import { ref as gfx } from '../gfx/references.js';
import { TextureManager } from '../display/TextureManager.js';
import { Asset } from '../display/Asset.js';
import { Fighter } from './Fighter.js';
import { Timer } from './Timer.js';
import { Slot } from './Slot.js';
import { Sprite } from './Sprite.js';

/**
 * The fight scene containing all the different layers to display.
 *
 * Will contain every displayable elements needed to display the fight.
 */
export class Scene extends Container {
	static MARGIN = 10;
	static WIDTH = 400;
	static HEIGHT = 300;
	static LAYERS = {
		BG: 0,
		SHADE: 1,
		CASTLE: 2,
		FIGHTERS: 3,
		EFFECTS: 4,
		PARTS: 5,
		BG_FRONT: 6,
		INTER: 7,
		COLUMNS: 8,
		LOADING: 9,
		DEBUG: 10
	};
	/**
	 * Layers of the Scene. Each keys of Scene.Layers generate a layer at initialisation.
	 * @type {{container: Container, sprites: Sprite[]}[]}
	 */
	_layers = [];
	/**
	 * If true, displays the debug parameters when instantiating entities.
	 */
	debugMode = false;
	/**
	 * Define the margins of the scene.
	 * Margins delimits the walking area of the scene.
	 */
	margins = {
		top: 0,
		bottom: 0,
		right: 0
	};
	/**
	 * Contains all the fighters currently instantiated and contained in the fighters layer.
	 * @type {Fighter[]}
	 */
	_fighters = [];

	/**
	 * Create a new scene where the fight will happen.
	 * @param {string} background The key to the background reference picture.
	 * @param {{top: number, bottom: number, right: number}} margins Set the margins for the walkable area.
	 * @param {boolean} debug If true, the scene starts in debug mode. False by default.
	 */
	constructor(background, margins, debug = false) {
		super();
		this.debugMode = debug;
		this.margins = margins;
		for (const k in Scene.LAYERS) {
			this._layers.push({
				container: new Container(),
				sprites: []
			});
			this.addChild(this._layers[Scene.LAYERS[k]].container);
		}
		this.setBackground(background);
		this.createColumns();
		// The zindex of the entities is managed by their computed z position.
		this._layers[Scene.LAYERS.FIGHTERS].container.sortableChildren = true;

		// DEBUG
		if (this.debugMode) {
			this.debugDrawMargins();
		}
	}

	/**
	 * Update all the elements related to the scene in the following order.
	 * - Castle.
	 * - Forces.
	 * - Fighters.
	 * - Slots.
	 * - Sceen shake.
	 * - Start walking.
	 * - Time bar.
	 * @param {Timer} timer The fight Timer containing the elasped time.
	 */
	update(timer) {
		// TODO
		//castle.update();
		//updateForce();
		this._layers.map((l) => {
			l.sprites = l.sprites.filter((s) => {
				s.update(timer);
				if (s.isDeleted) {
					l.container.removeChild(s.getRootContainer());
					return false;
				}
				return true;
			});
		});
		// SLOTS
		//updateSlots();
		// SHAKE
		//updateShake();
		this.updateWalk(timer);
		//updateTimeBar();
	}

	/**
	 * Determinates if a Fighter should start walking.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	updateWalk(timer) {
		if (Math.random() / timer.tmod < 0.025) {
			const a = this._fighters.filter((f) => f.isReadyToWalk());
			if (a.length) {
				a[Math.floor(Math.random() * a.length)].startWalk();
			}
		}
	}

	/**
	 * Set the scene background.
	 * @param {string} key The background key to use in gfx.background.
	 */
	setBackground(key) {
		if (key && gfx.background[key]) {
			const texture = TextureManager.getTextureFromCompressedReference(gfx.background[key]);
			const sprite = new Asset(texture);
			sprite.y = -Scene.MARGIN;
			sprite.onLoad(() => {
				sprite.x = 488 / 2 - sprite.width / 2;
			});
			this._layers[Scene.LAYERS.BG].container.addChild(sprite);
		}
	}

	/**
	 * Create the columns bordering the scenes.
	 */
	createColumns() {
		const texture = TextureManager.getTextureFromCompressedReference(gfx.scene.mcColumn);
		const colLeft = new Asset(texture);
		// Once the left column is loaded, move all the scene beside the background and the columns by the width of the column.
		// The x = 0 of the other scenes should be on the border of the left column.
		colLeft.onLoad(() => {
			for (const k in this._layers) {
				if (![Scene.LAYERS.BG, Scene.LAYERS.COLUMNS].includes(Number.parseInt(k))) {
					this._layers[k].container.x += colLeft.width;
				}
			}
		});
		this._layers[Scene.LAYERS.COLUMNS].container.addChild(colLeft);
		const colRight = new Asset(texture);
		colRight.onLoad(() => {
			colRight.x = 488 - colRight.width;
		});
		this._layers[Scene.LAYERS.COLUMNS].container.addChild(colRight);
	}

	/**
	 * Adds a Sprite to the specific layer.
	 * The Sprite will then be updated when the Scene will be updated.
	 * @param {Sprite} sprite The Sprite to add.
	 * @param {number} layer The Scene.LAYERS where to add the Sprite.
	 */
	addSprite(sprite, layer) {
		this._layers[layer].container.addChild(sprite.getRootContainer());
		this._layers[layer].sprites.push(sprite);
	}

	/**
	 * Adds a PixiJS Container to a specific layer.
	 * @param {Container} cont The Container to add to the layer.
	 * @param {number} layer The layer where to add the Container.
	 */
	addContainer(cont, layer) {
		this._layers[layer].container.addChild(cont);
	}

	/**
	 * Removes a PixiJS Container from a specific layer.
	 * @param {Container} cont The Container to remove from the layer.
	 * @param {number} layer The layer from which to remove the Container.
	 */
	removeContainer(cont, layer) {
		this._layers[layer].container.removeChild(cont);
	}

	/**
	 * Register a new fighter to the scene.
	 * @param {Fighter} fighter The figter to register.
	 */
	addFighter(fighter) {
		this._fighters.push(fighter);
	}

	/**
	 * Stops a Fighter from being accessed from the Scene.
	 * Will not remove the Fighter visually, kill the Fighter instead.
	 * @param {Fighter} fighter The Fighter to remove.
	 */
	removeFighter(fighter) {
		this._fighters = this._fighters.filter((f) => {
			f.id !== fighter.id;
		});
	}

	/**
	 * Get the Fighter with the corresponding id.
	 * @param {number} fid The id of the desired fighter.
	 * @returns {Fighter} The Fighter with the corresponding id, or undefined if it does not exists.
	 */
	getFighter(fid) {
		return this._fighters.find((f) => fid === f.id);
	}

	/**
	 * Get all the Fighters alive in the Scene.
	 * @returns {Fighter[]} The list of the Fighters alive.
	 */
	getFighters() {
		return this._fighters.filter((f) => f.alive);
	}

	/**
	 * Add a created Slot to the display.
	 * @param {Slot} slot The slot to add to a column.
	 */
	addSlot(slot) {
		// @ts-ignore
		this._layers[Scene.LAYERS.COLUMNS].container.getChildAt(slot.side ? 0 : 1).addChild(slot);
	}

	/**
	 * Generate a particle based on the type of terrain of the current scene.
	 * @param {number} x The x coordinate of the spawned particle.
	 * @param {number} y The y coordinate of the spawned particle.
	 * @param {number} vx The initial x velocity of the particle.
	 * @param {number} vy The initial y velocity of the particle.
	 * @param {number} vz The initial z velocity of the particle.
	 * @param {boolean} flJump Dunno yet. Related to jumping.
	 */
	genGroundPart(x, y, vx = 0, vy = 0, vz = 0, flJump = false) {
		// TODO
	}

	/**
	 * Convert a global y coordinate into a scene y coordinate.
	 * @param {number} y The global y value.
	 * @returns {number} The global y value converted into scene coordinate.
	 */
	getY(y) {
		return this.margins.top + y * 0.5;
	}

	/**
	 * Convert a scene y coordinate into a global coordinate.
	 * @param {number} y The scene y coordinate.
	 * @returns {number} The global y coordinate converted from the scene coordinate.
	 */
	getGY(y) {
		return (y - this.margins.top) * 2;
	}

	/**
	 * Get the PY size. Not sure what the PY is...
	 * @returns {number} The height of the scene, minus the top and bottom margin, multiplied by 2.
	 */
	getPYSize() {
		return (Scene.HEIGHT - (this.margins.top + this.margins.bottom)) * 2;
	}

	/**
	 * Get the middle point of the PY size.
	 * @returns {number} PYSize / 2.
	 */
	getPYMiddle() {
		return this.getPYSize() * 0.5;
	}

	/**
	 * Get a random Y coordinate comprised in the PY size.
	 * @returns {number} A random y coordinate between 0 and PY size.
	 */
	getRandomPYPos() {
		return Math.random() * this.getPYSize();
	}

	/**
	 * Debug function. Draws the scene's given margins.
	 */
	debugDrawMargins() {
		this.debugAddLine({ x: 0, y: this.margins.top }, { x: Scene.WIDTH, y: this.margins.top });
		this.debugAddLine(
			{ x: 0, y: Scene.HEIGHT - this.margins.bottom },
			{ x: Scene.WIDTH, y: Scene.HEIGHT - this.margins.bottom }
		);
		this.debugAddLine(
			{ x: Scene.WIDTH - this.margins.right, y: 0 },
			{ x: Scene.WIDTH - this.margins.right, y: Scene.HEIGHT }
		);
	}

	/**
	 * Add a line to the debug layer.
	 * The line starts from "from" and ends to "to".
	 * @param {{x: number, y: number}} from Coordinates of the start of the line.
	 * @param {{x: number, y: number}} to Coordinates of the end of the line.
	 */
	debugAddLine(from, to) {
		const line = new Graphics();
		this._layers[Scene.LAYERS.DEBUG].container.addChild(line);
		line.lineStyle(2, 0xff0000).moveTo(from.x, from.y).lineTo(to.x, to.y);
	}
}
