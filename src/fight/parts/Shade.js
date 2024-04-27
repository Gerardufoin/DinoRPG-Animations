// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Shade.hx
import { Color, Container, Filter, Matrix, RenderTexture, Sprite } from 'pixi.js';
import { Part } from '../Part.js';
import { IScene } from '../IScene.js';
import { Timer } from '../Timer.js';
import { PixiHelper } from '../../display/PixiHelper.js';
import { Layers } from '../DepthManager.js';
import { Fighter } from '../Fighter.js';

/**
 * Creates a bitmap copy of the given Fighter at its current position.
 * The image will transition from the first color to the second color before vanishing.
 */
export class Shade extends Part {
	/**
	 * Duration of the Shade in frames.
	 * @type {number}
	 */
	static DURATION = 7;

	/**
	 * The color shader of the shade.
	 * @type {Filter}
	 */
	_colorShader;
	/**
	 * The starting color of the shade.
	 * @type {Color}
	 */
	_startColor;
	/**
	 * The end color of the shade.
	 * @type {Color}
	 */
	_endColor;
	/**
	 * The texture where the container has been rendered.
	 * @type {RenderTexture}
	 */
	_renderTexture;

	/**
	 * Creates a shade of the given container. The shade stays in place and transition from col1 to col2 over time, before vanishing.
	 * @param {IScene} scene The Scene where the shade is instantiated.
	 * @param {Fighter} fighter The Fighter to copy as a Shade.
	 * @param {Color} col1 The initial color of the Shade.
	 * @param {Color} col2 The color the Shade transition to.
	 */
	constructor(scene, fighter, col1, col2) {
		super(new Container(), scene);
		this._startColor = col1;
		this._endColor = col2;

		const offset = this._scene.dm.getLayer(Layers.Scene.FIGHTERS).x;
		const b = fighter.getRootContainer().getBounds();
		this._renderTexture = RenderTexture.create({
			width: b.width,
			height: b.height
		});
		const m = new Matrix();
		m.translate(-b.x + offset, -b.y);
		this._scene.renderer.render(fighter.getRootContainer(), {
			renderTexture: this._renderTexture,
			transform: m
		});
		this._root.addChild(new Sprite(this._renderTexture));

		this._colorShader = PixiHelper.colorOffsetFilter(0, 0, 0);
		this._root.filters = [this._colorShader];
		this.computeColor(0);

		this._x = b.x - offset;
		this._y = this._scene.getGY(b.y);
		this.updatePos();

		this._fadeoutTimer = Shade.DURATION;
		this._fadeLimit = 0;
	}

	/**
	 * Updates the color of the Shade.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this.computeColor(this._fadeoutTimer / Shade.DURATION);
	}

	/**
	 * Compute the current color of the Shade based on the coefficient between 0 and 1.
	 * @param {number} coef The coefficient between the two colors, between 0 (first color) and 1 (second color).
	 */
	computeColor(coef) {
		if (this._colorShader) {
			PixiHelper.setPercentColor(
				this._colorShader,
				50,
				PixiHelper.mergeCol(this._startColor, this._endColor, coef)
			);
		}
	}

	/**
	 * Destroy the texture and the shader.
	 */
	kill() {
		this._colorShader.destroy();
		this._colorShader = undefined;
		this._renderTexture.destroy();
		this._renderTexture = undefined;
		this._root.filters = [];
		super.kill();
	}
}
