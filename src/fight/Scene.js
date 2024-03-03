// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Scene.hx

import { Color, Container, Graphics, Renderer } from 'pixi.js';
import { ref as gfx } from '../gfx/references.js';
import { Asset } from '../display/Asset.js';
import { Fighter } from './Fighter.js';
import { Timer } from './Timer.js';
import { ContinueArrow } from './parts/ContinueArrow.js';
import { Castle } from './Castle.js';
import { DepthManager, Layers } from './DepthManager.js';
import { GroundType, IScene, SCENE_FULL_WIDTH, SCENE_HEIGHT, SCENE_MARGIN, SCENE_WIDTH } from './IScene.js';
import { LoadingScreen } from './parts/scene/LoadingScreen.js';
import { Phys } from './Phys.js';
import { GroundDirt } from './parts/scene/GroundDirt.js';
import { GroundStone } from './parts/scene/GroundStone.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { GroundWater } from './parts/scene/GroundWater.js';

/**
 * The fight scene containing all the different layers to display.
 *
 * Will contain every displayable elements needed to display the fight.
 */
export class Scene extends IScene {
	/**
	 * Contains all the fighters currently instantiated and contained in the fighters layer.
	 * @type {Fighter[]}
	 */
	_fighters = [];
	/**
	 * The Castle if any is instantiated.
	 * @type {Castle}
	 */
	_castle;

	/**
	 * The continue arrow showing up at the bottom right of the screen.
	 * @type {ContinueArrow}
	 */
	_continueArrow;

	/**
	 * The background pixels data, including the array of RGBA colors, the width and the height.
	 * @type {{width: number, height: number, pixels: Uint8Array}}
	 */
	_backgroundPixelData;

	/**
	 * Create a new scene where the fight will happen.
	 * @param {string} background The key to the background reference picture.
	 * @param {{top: number, bottom: number, right: number}} margins Set the margins for the walkable area.
	 * @param {number} ground The type of ground for the Scene.
	 * @param {Renderer} renderer The renderer which will render the Scene. Used to get the Background colors.
	 * @param {boolean} debug If true, the scene starts in debug mode. False by default.
	 */
	constructor(background, margins, ground, renderer, debug = false) {
		super();
		this.debugMode = debug;
		this.margins = margins;
		this._groundType = ground;
		this._depthManager = new DepthManager(Object.keys(Layers.Scene).length);
		this.addChild(this._depthManager);
		this.setBackground(background, renderer);
		this.createColumns();
		// The zindex of the entities is managed by their computed z position.
		this.dm.setSortableLayer(Layers.Scene.FIGHTERS);

		this._continueArrow = new ContinueArrow(SCENE_WIDTH + 18, SCENE_HEIGHT - 15);
		this.dm.addContainer(this._continueArrow, Layers.Scene.LOADING);
		this._continueArrow.visible = false;

		this._loadingScreen = new LoadingScreen();
		this.dm.addContainer(this._loadingScreen, Layers.Scene.LOADING);
		this._slots.map((s) => (s.alpha = 0));

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
	 * - Sceen shake.
	 * - Start walking.
	 * - Time bar.
	 * @param {Timer} timer The fight Timer containing the elasped time.
	 */
	update(timer) {
		if (this._loadingScreen.visible) {
			this._loadingScreen.update(timer);
		}
		this._tweenManager.update(timer);
		if (this._castle) {
			this._castle.update(timer);
		}
		this.updateForces();
		this.dm.update(timer);
		this.updateShake(timer);
		this.updateWalk(timer);
		if (this._timeBar) {
			this._timeBar.update(timer);
		}
		if (this._continueArrow.visible) {
			this._continueArrow.update(timer);
		}
		// Filter the deleted Fighters.
		this._fighters = this._fighters.filter((f) => !f.isDeleted);
	}

	/**
	 * Update the shaking of the Scene.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	updateShake(timer) {
		if (this._shake.force != 0) {
			this._shake.timer += this._shake.speed * timer.tmod;
			if (this._shake.timer > 1) {
				this._shake.timer--;
				this._shake.force *= -this._shake.friction;
				if (Math.abs(this._shake.force) < 1) {
					this._shake.force = 0;
				}
				this.y = this._shake.force;
			}
		}
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
	 * @param {Renderer} renderer The Renderer of the application, used to get the background colors.
	 */
	setBackground(key, renderer) {
		if (key && gfx.background[key]) {
			const sprite = new Asset(gfx.background[key]);
			sprite.y = -SCENE_MARGIN;
			sprite.onLoad(() => {
				sprite.x = SCENE_FULL_WIDTH / 2 - sprite.width / 2;
				this._backgroundPixelData = {
					width: sprite.width,
					height: sprite.height,
					pixels: renderer.extract.pixels(sprite)
				};
			});
			this.dm.addContainer(sprite, Layers.Scene.BG);
		}
	}

	/**
	 * Create the columns bordering the scenes.
	 */
	createColumns() {
		const colLeftContainer = new Container();
		const colLeft = new Asset(gfx.scene.column);
		const colLeftTop = new Asset(gfx.scene.column);
		const colLeftBottom = new Asset(gfx.scene.column);
		// Once the left column is loaded, move all the scene beside the background and the columns by the width of the column.
		// The x = 0 of the other scenes should be on the border of the left column.
		colLeft.onLoad(() => {
			for (const k in Layers.Scene) {
				if (![Layers.Scene.BG, Layers.Scene.COLUMNS].includes(Layers.Scene[k])) {
					this.dm.offsetLayer(colLeft.width, 0, Layers.Scene[k]);
				}
			}
			colLeftTop.y = -colLeft.height;
			colLeftBottom.y = colLeft.height;
		});
		this.dm.addContainer(colLeftContainer, Layers.Scene.COLUMNS);
		colLeftContainer.addChild(colLeft, colLeftTop, colLeftBottom, this._slots[0]);

		const colRightContainer = new Container();
		const colRight = new Asset(gfx.scene.column);
		const colRightTop = new Asset(gfx.scene.column);
		const colRightBottom = new Asset(gfx.scene.column);
		colRight.onLoad(() => {
			colRightContainer.x = SCENE_FULL_WIDTH - colRight.width;
			colRightTop.y = -colRight.height;
			colRightBottom.y = colRight.height;
		});
		this.dm.addContainer(colRightContainer, Layers.Scene.COLUMNS);
		colRightContainer.addChild(colRight, colRightTop, colRightBottom, this._slots[1]);
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
	 * Creates a new Castle in the Scene if none already exists.
	 * @param {import('./Castle.js').CastleInfos} infos Information relative to the Castle.
	 */
	createCastle(infos) {
		if (!this._castle) {
			this._castle = new Castle(this, infos);
			this._castleOffset = 132;
		} else {
			console.error(`[AddCastle]: A Castle already exists in the Scene.`);
		}
	}

	/**
	 * Return the color of the background at the given position.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @returns {Color} The color of the background.
	 */
	getBGPixel(x, y) {
		if (!this._backgroundPixelData) return new Color();
		x = PixiHelper.mm(0, x + SCENE_MARGIN, this._backgroundPixelData.width);
		y = PixiHelper.mm(0, y + SCENE_MARGIN, this._backgroundPixelData.width);

		const pos = (Math.floor(x) + Math.floor(y) * this._backgroundPixelData.width) * 4;
		return new Color({
			r: this._backgroundPixelData.pixels[pos],
			g: this._backgroundPixelData.pixels[pos + 1],
			b: this._backgroundPixelData.pixels[pos + 2]
		});
	}

	/**
	 * Generate a particle based on the type of ground of the current scene and if the caller is jumping or not.
	 * @param {number} x The x coordinate of the spawned particle.
	 * @param {number} y The y coordinate of the spawned particle.
	 * @param {number} vx The initial x velocity of the particle.
	 * @param {number} vy The initial y velocity of the particle.
	 * @param {number} vz The initial z velocity of the particle.
	 * @param {boolean} flJump Is the call related to a jump action? Used for spawning rocks.
	 * @returns {Phys} The ground part generated.
	 */
	genGroundPart(x, y, vx = 0, vy = 0, vz = 0, flJump = false) {
		switch (this._groundType) {
			case GroundType.Dirt:
				if (Math.random() <= 0.5) {
					const dirt = new GroundDirt(this, x, y, -2, vx, vy, vz, this.getBGPixel(x, this.getY(y)));
					this.dm.addSprite(dirt, Layers.Scene.FIGHTERS);
					return dirt;
				}
				break;
			case GroundType.Water:
				if (Math.random() <= 0.5) {
					const drop = new GroundWater(this, x, y, -2, 0, 0, -(2 + Math.random() * 5));
					this.dm.addSprite(drop, Layers.Scene.SHADE);
					return drop;
				}
				break;
			case GroundType.Rock:
				if (flJump && Math.random() < 0.25) {
					const stone = new GroundStone(
						this,
						x,
						y,
						-2,
						vx,
						vy,
						-(2 + Math.random() * 3),
						this.getBGPixel(x, this.getY(y))
					);
					this.dm.addSprite(stone, Layers.Scene.FIGHTERS);
					return stone;
				}
				break;
		}
		return null;
	}

	/**
	 * Set a click callback when clicking on the Scene, and change the cursor to a hand when hovering the scene.
	 * When a click is done, the given callback will be called.
	 * @param {() => void} callback The callback to call when a click is done.
	 * @param {boolean} unique If true, the callback will only work once. False by default.
	 * @param {boolean} arrow If true, display an arrow at the bottom left of the screen. False by default.
	 */
	setClick(callback, unique = false, arrow = false) {
		let clickCb = callback;
		if (unique) {
			/**
			 * If not unique, call the click callback and then remove the onclick from the container.
			 */
			clickCb = () => {
				callback();
				this.removeClick();
			};
		}
		this.onclick = clickCb;
		this.eventMode = 'static';
		this.cursor = 'pointer';
		if (arrow) {
			this._continueArrow.visible = true;
		}
	}

	/**
	 * Remove the click callback from the Scene and reset the cursor when hovering.
	 */
	removeClick() {
		this.eventMode = 'none';
		this.cursor = 'default';
		this.onclick = undefined;
		this._continueArrow.visible = false;
	}

	/**
	 * Update all the Fighters having a force.
	 * Each Fighter with a force will push against each others.
	 */
	updateForces() {
		const forces = this._fighters.filter((f) => f.force !== null);
		for (let i = 0; i < forces.length; ++i) {
			const s1 = forces[i];
			for (let j = i + 1; j < forces.length; ++j) {
				const s2 = forces[j];
				if (Math.abs(s1.position.z - s2.position.z) < 20) {
					const dist = s1.getDist(s2.position);
					const lim = s1.ray + s2.ray;
					if (dist < lim) {
						const a = s1.getAng(s2.position);
						const d = lim - dist;
						const ca = Math.cos(a);
						const sa = Math.sin(a);
						const fc = s1.force / (s2.force + s1.force);

						s1._x += ca * d * (1 - fc);
						s1._y += sa * d * (1 - fc);
						s2._x -= ca * d * fc;
						s2._y -= sa * d * fc;
					}
				}
			}
		}
	}

	/**
	 * Debug function. Draws the scene's given margins.
	 */
	debugDrawMargins() {
		this.debugAddLine({ x: 0, y: this.margins.top }, { x: SCENE_WIDTH, y: this.margins.top });
		this.debugAddLine(
			{ x: 0, y: SCENE_HEIGHT - this.margins.bottom },
			{ x: SCENE_WIDTH, y: SCENE_HEIGHT - this.margins.bottom }
		);
		this.debugAddLine({ x: this.width, y: 0 }, { x: this.width, y: SCENE_HEIGHT });
	}

	/**
	 * Add a line to the debug layer.
	 * The line starts from "from" and ends to "to".
	 * @param {{x: number, y: number}} from Coordinates of the start of the line.
	 * @param {{x: number, y: number}} to Coordinates of the end of the line.
	 */
	debugAddLine(from, to) {
		const line = new Graphics();
		this.dm.addContainer(line, Layers.Scene.DEBUG);
		line.lineStyle(2, 0xff0000).moveTo(from.x, from.y).lineTo(to.x, to.y);
	}
}
