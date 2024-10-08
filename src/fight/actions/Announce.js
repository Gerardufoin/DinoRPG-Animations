// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Announce.hx
import { Container } from 'pixi.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { Asset } from '../../display/Asset.js';
import { ref } from '../../gfx/references.js';
import { AnnounceText } from '../parts/text/AnnounceText.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Tween } from '../../display/Tween.js';
import { Layers } from '../DepthManager.js';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../IScene.js';
import { Sprite } from '@pixi/picture';
import { PixiHelper } from '../../display/PixiHelper.js';

/**
 * Visual element for the announce, containing the PixiJS Container, the start and end position of the Tween.
 * @typedef {{slider: Container, tx: number, bx: number}} AnnouncePart
 */

/**
 * A Fighter announces an attack. Or something else. Like what it did today or how is the weather. Who knows really.
 */
export class Announce extends State {
	/**
	 * Scale of the portrait. Only applicable to dino and not sdino.
	 * @type {number}
	 */
	static PORTRAIT_SCALE = 0.7;
	/**
	 * The GlowFilter of the Fighter.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * The Fighter making the announce.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The announce to make.
	 * @type {string}
	 */
	_message;
	/**
	 * Visual elements of the announce.
	 * @type {Container}
	 */
	_box = new Container();
	/**
	 * Portrait of the Fighter doing the announce.
	 * @type {AnnouncePart}
	 */
	_portrait;
	/**
	 * Text of the announce.
	 * @type {AnnouncePart}
	 */
	_text;
	/**
	 * Background of the announce.
	 * @type {AnnouncePart}
	 */
	_bg;
	/**
	 * Glow timer of the Fighter.
	 * @type {number}
	 */
	_glowTimer = 0;
	/**
	 * Time before the text start showing on screen.
	 * @type {number}
	 */
	_textDelay = 8;

	/**
	 * Get the Fighter doing the announce.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The Fighter's id.
	 * @param {string} message The announce to make.
	 */
	constructor(scene, endCall, fid, message = '') {
		super(scene, endCall);
		this._message = message;
		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			this.kill();
			console.error(`Announce Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}
		this.addActor(this._fighter);
		// Change the speed depending on the message length, so longer messages stay for longer on screen.
		this._coefSpeed = 0.035 - 0.007 * PixiHelper.mm(1, message.length / 15, 3);

		this._scene.dm.addContainer(this._box, Layers.Scene.INTER);

		if (!Announce.GlowFilter) {
			Announce.GlowFilter = new GlowFilter({
				distance: 2,
				color: 0xffffff,
				outerStrength: 4,
				quality: 0.5
			});
		}
	}

	/**
	 * Once the casting is free, initialize the background, the portrait and the text.
	 */
	init() {
		if (this._castingWait) return;

		const w = SCENE_WIDTH * 0.5;

		// Background
		const bg = new Asset(ref.scene.announce);
		this._bg = {
			slider: new Container(),
			bx: w - this._fighter.intSide * (w + 160),
			tx: w - this._fighter.intSide * w
		};
		this._bg.slider.addChild(bg);
		this._box.addChild(this._bg.slider);
		this._bg.slider.x = this._bg.bx;
		this._bg.slider.y = SCENE_HEIGHT;
		this._bg.slider.scale.x = this._fighter.intSide;
		bg.onLoad = () => {
			bg.y -= bg.height;
			bg.x -= bg.width;
		};

		// Portrait
		if (this._fighter.announcePortrait) {
			const portrait = new Sprite(this._fighter.announcePortrait);
			portrait.anchor.set(1, 1);
			portrait.scale.y = Announce.PORTRAIT_SCALE;
			portrait.scale.x = -this._fighter.intSide * Announce.PORTRAIT_SCALE;
			this._portrait = {
				slider: portrait,
				bx: w - this._fighter.intSide * (w + this._fighter._portraitFrame.width * Announce.PORTRAIT_SCALE),
				tx: w - this._fighter.intSide * w
			};
			this._box.addChild(portrait);
			portrait.x = this._portrait.bx;
			portrait.y = SCENE_HEIGHT;
		}

		// Text
		this._text = {
			slider: new AnnounceText(w - this._fighter.intSide * w, SCENE_HEIGHT, this._message.toUpperCase()),
			bx: 0,
			tx: 0
		};
		this._box.addChild(this._text.slider);
		this._text.bx = this._text.slider.x;
		const tw = this._text.slider.width + 8;
		const dx = tw + (this._portrait ? 60 : 10);
		this._text.tx = w - this._fighter.intSide * (w - dx);
		if (this._fighter.side) {
			this._text.slider.x -= tw;
			this._text.tx -= tw;
		}

		bg.x += tw + 8;
		if (this._portrait) {
			bg.x += 60;
		}
	}

	/**
	 * Update the position of the background, portrait, and text.
	 *
	 * Once the State ends, create a Tween for each component to drag them back to their starting position.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		if (this._portrait) {
			this._portrait.slider.x += (this._portrait.tx - this._portrait.slider.x) * 0.3 * timer.tmod;
		}
		this._bg.slider.x += (this._bg.tx - this._bg.slider.x) * 0.5 * timer.tmod;
		this._textDelay -= timer.tmod;
		if (this._textDelay <= 0) {
			this._text.slider.x += (this._text.tx - this._text.slider.x) * 0.4 * timer.tmod;
		}
		// Make Fighter glow
		this._glowTimer += timer.tmod;
		if (this._coef < 1 && this._glowTimer >= 1) {
			this._glowTimer -= 1;
			if (this._fighter.skin.filters.length == 0) {
				this._fighter.skin.filters = [Announce.GlowFilter];
			} else {
				this._fighter.skin.filters = [];
			}
		}

		if (this._coef === 1) {
			this._fighter.skin.filters = [];
			this._scene.tm.addTween(
				new Tween(this._text.slider).to(0.2, {
					x: this._text.bx - this._fighter.intSide * this._text.slider.width
				})
			);
			if (this._portrait) {
				this._scene.tm.addTween(new Tween(this._portrait.slider).to(0.2, { x: this._portrait.bx }));
			}
			this._scene.tm.addTween(
				new Tween(this._bg.slider).to(0.2, { x: this._bg.bx }).onComplete((t) => {
					this._scene.dm.removeContainer(this._box, Layers.Scene.INTER);
				})
			);
			this.end();
		}
	}
}
