// @ts-check

import { Container, SpriteMaskFilter } from 'pixi.js';
import { IScene } from '../../../IScene.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { StaticVine } from './StaticVine.js';
import { Part } from '../../../Part.js';
import { Timer } from '../../../Timer.js';
import { Animator } from '../../../../display/Animator.js';
import { fx_vine_shadow } from '../../../../gfx/fx/vine_shadow.js';

// TODO Correct the vine part sticking out of ground when it shouldn't once the animation is done.
// GFX 19
/**
 * Creates a moving vine.
 */
export class MovingVine extends Part {
	/**
	 * Amount of time needed for the mask to do a full rotation.
	 * @type {number}
	 */
	static MASK_DURATION = 25;

	/**
	 * Direction from which the vine is moving.
	 * @type {number}
	 */
	_side;
	/**
	 * Mask for the vine.
	 * @type {Asset}
	 */
	_mask;
	/**
	 * Shadow animation.
	 * @type {Animator}
	 */
	_shadow;
	/**
	 * Timer to animate the movement.
	 * @type {number}
	 */
	_animTimer = 0;

	/**
	 * Creates a vine which will gradually show through a mask and then vanish.
	 * @param {IScene} scene The Scene where the vine is instantiated.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} side The side of the fighter creating the vine (-1 left, 1 right).
	 */
	constructor(scene, x, y, side) {
		super(new Container(), scene);
		this._side = side;

		const vine = new Container();
		this._shadow = new Animator(false).loadAnimation(fx_vine_shadow);
		vine.addChild(this._shadow);

		const vineBody = new Container();
		vineBody.addChild(new Asset(ref.fx.vine[`mv_${Math.floor(Math.random() * 4) + 1}`]));
		this._mask = new Asset(ref.fx.vine.mask, 1, false);
		this._mask.anchor.set(0.5, 1);
		this._mask.y += 2;
		vineBody.addChild(this._mask);
		vineBody.filters = [StaticVine.GlowFilter, new SpriteMaskFilter(this._mask)];
		vine.addChild(vineBody);

		vine.scale.y = 0.5 + Math.random() * 0.5;
		vine.scale.x = vine.scale.y * this._side;
		this._root.addChild(vine);

		this._x = x + (Math.random() * 2 - 1) * 10;
		this._y = y + (Math.random() * 2 - 1) * 10;
		this.updatePos();

		this._fadeoutTimer = 35;
		this._fadeLimit = 0;
	}

	/**
	 * Update the movement animation.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._shadow.update(timer.deltaTimeMS);

		if (this._animTimer < MovingVine.MASK_DURATION) {
			this._animTimer = Math.min(this._animTimer + timer.tmod, MovingVine.MASK_DURATION);
			const coef = this._animTimer / MovingVine.MASK_DURATION;
			this._mask.angle = 180 + 360 * coef;
		}
	}
}
