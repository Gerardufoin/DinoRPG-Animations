// @ts-check

import { BLEND_MODES, Container } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { IScene } from '../../IScene.js';

// GFX 707
/**
 * Creates a pacticle of light at the given coordinates with the given velocity.
 */
export class Light extends Phys2D {
	/**
	 * Creates a particle of light at the given coordinates with the given velocity.
	 * @param {IScene} scene The Scene where the particle is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vy The initial y velocity.
	 * @param {number} timer The fadeout timer if any. Otherwise the particle does not fade out.
	 * @param {boolean} rainbow If true, the Light is assigned a random rainbow color. False by default.
	 */
	constructor(scene, x, y, vx, vy, timer = 0, rainbow = false) {
		super(new Container(), scene);
		const light = new Asset(ref.fx.light);
		this._root.addChild(light);

		this._x = x;
		this._y = y;
		this._vx = vx;
		this._vy = vy;

		this._fadeoutTimer = timer;

		if (rainbow) {
			light.tint = PixiHelper.getRainbow();
			light.blendMode = BLEND_MODES.ADD;
		}
	}
}
