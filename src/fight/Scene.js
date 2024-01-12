// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Scene.hx

import { Container, Graphics } from 'pixi.js';
import { ref as gfx } from '../gfx/references.js';
import { TextureManager } from '../display/TextureManager.js';
import { Asset } from '../display/Asset.js';
import { Fighter } from './Fighter.js';
import { Timer } from './Timer.js';

/**
 * The fight scene containing all the different layers to display.
 *
 * Will contain every displayable elements needed to display the fight.
 */
export class Scene extends Container {
	static MARGIN = 10;
	static WIDTH = 400;
	static HEIGHT = 300;
	_layers = {
		bg: new Container(),
		shade: new Container(),
		castle: new Container(),
		fighters: new Container(),
		effects: new Container(),
		parts: new Container(),
		bgFront: new Container(),
		inter: new Container(),
		columns: new Container(),
		loading: new Container(),
		debug: new Container()
	};
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
		for (const k in this._layers) {
			this.addChild(this._layers[k]);
		}
		this.setBackground(background);
		this.createColumns();
		// The zindex of the entities is managed by their computed z position.
		this._layers.fighters.sortableChildren = true;

		// DEBUG
		if (this.debugMode) {
			this.debugDrawMargins();
		}
	}

	/**
	 *
	 * @param {Timer} timer
	 */
	update(timer) {
		//castle.update();
		//updateForce();
		this._fighters.map((f) => f.update(timer));
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
			this._layers.bg.addChild(sprite);
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
			for (const l in this._layers) {
				if (!['bg', 'columns'].includes(l)) {
					this._layers[l].x += colLeft.width;
				}
			}
		});
		this._layers.columns.addChild(colLeft);
		const colRight = new Asset(texture);
		colRight.onLoad(() => {
			colRight.x = 488 - colRight.width;
		});
		this._layers.columns.addChild(colRight);
	}

	/**
	 * Add a fighter to the scene.
	 * @param {Fighter} fighter The figter to add.
	 */
	addFighter(fighter) {
		this._fighters.push(fighter);
		this._layers.fighters.addChild(fighter.body);
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
		console.log(from, to);
		const line = new Graphics();
		this._layers.debug.addChild(line);
		line.lineStyle(2, 0xff0000).moveTo(from.x, from.y).lineTo(to.x, to.y);
	}
}
