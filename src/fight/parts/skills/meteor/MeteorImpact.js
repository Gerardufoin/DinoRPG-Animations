// @ts-check

import { Container } from 'pixi.js';
import { Part } from '../../../Part.js';
import { IScene } from '../../../IScene.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Timer } from '../../../Timer.js';

// GFX 800
/**
 * A meteor impact which grows and fades out over time.
 */
export class MeteorImpact extends Part {
	static IMPACT_DURACTION = 22;
	static IMPACT_BASE_SCALE = 0.7;

	/**
	 * Instantes a meteor impact at the given coordinates.
	 * @param {IScene} scene The Scene where the impact is instantiated.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		this._root.addChild(new Asset(ref.fx.meteor_impact));
		this._x = x;
		this._y = y;

		this._fadeoutTimer = MeteorImpact.IMPACT_DURACTION;
		this._fadeLimit = this._fadeoutTimer - 5;
	}

	/**
	 * Update the impact size.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		const coef = 1 - this._fadeoutTimer / MeteorImpact.IMPACT_DURACTION;
		this._root.scale.set(MeteorImpact.IMPACT_BASE_SCALE + coef);
	}
}
