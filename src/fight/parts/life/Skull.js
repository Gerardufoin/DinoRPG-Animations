// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Acid.hx + _LAcid in Fighter

import { BLEND_MODES, BlurFilter, Container } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';
import { Scene } from '../../Scene.js';

// GFX 774
/**
 * Instantiate a skull particle, which grows and become blurry over time before fading out.
 */
export class Skull extends Phys2D {
	/**
	 * Length of the skull animation.
	 * @type {number}
	 */
	static ANIMATION_LENGTH = 13;
	/**
	 * The blur filter of the skull, getting blurrier over time.
	 * @type {BlurFilter}
	 */
	_blurFilter;
	/**
	 * Animation timer, controlling the growth the the ball/smoke asset.
	 * @type {number}
	 */
	_animTimer = 0;

	/**
	 * Create a skull at the given coordinates with the given size.
	 * @param {Scene} scene The Scene where the acid is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} size The initial size of the skull. 1 by default.
	 */
	constructor(scene, x, y, size = 1) {
		super(new Container(), scene);
		const skull = new Asset(ref.fx.skull, size);
		this._root.addChild(skull);
		this._x = x;
		this._y = y;

		this._fadeoutTimer = Skull.ANIMATION_LENGTH;
		this._blurFilter = new BlurFilter(0);
		this._root.filters = [this._blurFilter];
		skull.blendMode = BLEND_MODES.ADD;
	}

	/**
	 * Update the size of the acid particle and change it from ball to smoke once it reaches the target destination.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._animTimer += timer.tmod;
		this._root.scale.x = this._root.scale.y = 1 + Math.min((this._animTimer / Skull.ANIMATION_LENGTH) * 0.5, 0.5);
		this._blurFilter.blur = Math.min((this._animTimer / Skull.ANIMATION_LENGTH) * 1, 1);
	}
}
