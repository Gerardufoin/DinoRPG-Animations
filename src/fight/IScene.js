// @ts-check
// Part of https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Scene.hx

import { Container } from 'pixi.js';
import { Sprite } from './Sprite.js';
import { DepthManager, Layers } from './DepthManager.js';
import { TweenManager } from './TweenManager.js';
import { LoadingScreen } from './parts/scene/LoadingScreen.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { Timer } from './Timer.js';
import { TimeBar } from './parts/scene/TimeBar.js';
import { GroundType } from './Enums.js';
import { Settings } from './settings/Settings.js';

export const SCENE_MARGIN = 10;
export const SCENE_WIDTH = 400;
export const SCENE_FULL_WIDTH = 488;
export const SCENE_HEIGHT = 300;
export const FONT_SCALE = 3;

/**
 * Interface for the Scene, containing the Depth Manager, Tween Manager and margins.
 *
 * Split from the Scene to prevent circular dependencies.
 */
export class IScene extends Container {
	/**
	 * The Fight's settings, allowing to change the different fight's options (speed, text size, ...).
	 * @type {Settings}
	 */
	_settings;
	/**
	 * Get the Fight's settings.
	 * @type {Settings}
	 */
	get settings() {
		return this._settings;
	}

	/**
	 * The loading screen of the Scene.
	 * @type {LoadingScreen}
	 */
	_loadingScreen;
	/**
	 * The time bar for timed fights.
	 * @type {TimeBar}
	 */
	_timeBar;

	/**
	 * Scene DepthManager, containing all the different layers.
	 * @type {DepthManager}
	 */
	_depthManager;
	/**
	 * Access the Scene depth manager in order to add new Containers and Sprites.
	 * @type {DepthManager}
	 */
	get dm() {
		return this._depthManager;
	}
	/**
	 * Define the margins of the scene.
	 * Margins delimits the walking area of the scene.
	 * @type {{top: number, bottom: number, right: number}}
	 */
	margins = {
		top: 0,
		bottom: 0,
		right: 0
	};
	/**
	 * Type of ground of the Scene.
	 * Value of the GroundType enum.
	 * @type {number}
	 */
	_groundType = GroundType.None;
	/**
	 * Get the ground type of the IScene.
	 * @type {number}
	 */
	get groundType() {
		return this._groundType;
	}
	/**
	 * Offset from the right side of the Scene.
	 * 132 if there is a Castle in the Scene, otherwise 0.
	 */
	_castleOffset = 0;
	/**
	 * The actual width of the scene. Changes if there is a Castle.
	 * @type {number}
	 */
	get width() {
		return SCENE_WIDTH - this.margins.right - this._castleOffset;
	}
	/**
	 * Contains the slot for both side of the fight.
	 * @type {Container[]}
	 */
	_slots = [new Container(), new Container()];

	/**
	 * List of the toys spawned in the scene.
	 * @type {{toy: Sprite, name: string}[]}
	 */
	_toys = [];
	/**
	 * Contains the Tweens created in the Scene.
	 * @type {TweenManager}
	 */
	_tweenManager = new TweenManager();
	/**
	 * Get the Scene's Tween Manager.
	 * @type {TweenManager}
	 */
	get tm() {
		return this._tweenManager;
	}

	/**
	 * Current shaking of the Scene.
	 * The force impacts how much the Scene is displaced. Once below 1, the shaking stops.
	 * The friction reduces the force over time.
	 * The speed impacts how fast the scene shakes, between 0 and 1.
	 * The timer keeps track of the time, increasing with the speed over tmod.
	 * @type {{force: number, friction: number, speed: number, timer: number}}
	 */
	_shake = {
		force: 0,
		friction: 0,
		speed: 0,
		timer: 0
	};

	/**
	 * Slowly remove the loading screen and display the slots.
	 * Return true as long as the loading screen is not completely fadeout.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 * @returns {boolean} True if the loading screen is still fading out, false otherwise.
	 */
	endLoading(timer) {
		this._loadingScreen.alpha = PixiHelper.mm(0, this._loadingScreen.alpha - 0.05 * timer.tmod, 1);
		for (const s of this._slots) {
			s.alpha = 1 - this._loadingScreen.alpha;
		}
		this._loadingScreen.visible = this._loadingScreen.alpha != 0;
		return this._loadingScreen.alpha === 0;
	}

	/**
	 * Initialize the time bar with the expected duration in frames.
	 * @param {number} duration The duration of the time bar in frames.
	 */
	initTimeBar(duration) {
		if (!this._timeBar) {
			this._timeBar = new TimeBar(duration);
			this._timeBar.x = 8;
			this._timeBar.y = 4;
			this.dm.addContainer(this._timeBar, Layers.Scene.INTER);
		}
	}

	/**
	 * Increase the elapsed time, decreasing the size of the time bar.
	 * @param {number} time The time to add, in frame number.
	 */
	reduceTimeBar(time) {
		if (this._timeBar) {
			this._timeBar.decreaseTime(time);
		}
	}

	/**
	 * Adds a Toy to the scene.
	 * @param {Sprite} toy The toy to add.
	 * @param {string} name The type of toy being added. Used to remove them later on.
	 */
	addToy(toy, name) {
		this._toys.push({
			toy: toy,
			name: name
		});
		this.dm.addSprite(toy, Layers.Scene.FIGHTERS);
	}

	/**
	 * Remove all the toys with the given name from the scene.
	 * @param {string} name The type of toy being removed.
	 */
	removeToy(name) {
		this._toys.map((t) => {
			if (t.name === name) {
				t.toy.kill();
			}
		});
		this._toys = this._toys.filter((t) => t.name !== name);
	}

	/**
	 * Add a created Slot to the display.
	 * @param {Container} slot The slot to add to a column.
	 * @param {boolean} side The side on which to add the slot.
	 */
	addSlot(slot, side) {
		const idx = side ? 0 : 1;
		slot.x = side ? 3 : -10;
		slot.y = 3 + 40 * this._slots[idx].children.length;
		this._slots[idx].addChild(slot);
	}

	/**
	 * Makes the Scene shake.
	 * @param {number} force The strength of the Scene displacement.
	 * @param {number} frict The friction of the shaking, reducing the strength over time. Capped between 0 and 0.95.
	 * @param {number} speed The speed of the shaking, impacting how often the shake happens.
	 */
	fxShake(force = 8, frict = 0.75, speed = 1) {
		if (this._loadingScreen.visible) return;
		this._shake = {
			force: force,
			friction: PixiHelper.mm(0, frict, 0.95),
			speed: speed,
			timer: 0
		};
	}

	/**
	 * Generate a particle based on the type of terrain of the current scene.
	 * Defined in the Scene object.
	 * @param {number} x The x coordinate of the spawned particle.
	 * @param {number} y The y coordinate of the spawned particle.
	 * @param {number} vx The initial x velocity of the particle.
	 * @param {number} vy The initial y velocity of the particle.
	 * @param {number} vz The initial z velocity of the particle.
	 * @param {boolean} flJump Dunno yet. Related to jumping.
	 */
	genGroundPart(x, y, vx = 0, vy = 0, vz = 0, flJump = false) {}

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
		return (SCENE_HEIGHT - (this.margins.top + this.margins.bottom)) * 2;
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
}
