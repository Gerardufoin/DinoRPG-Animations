// @ts-check

import { Animator } from '../../display/Animator.js';
import { shade, shade_fire } from '../../gfx/parts/shade.js';

/**
 * Possible type of Shade to instantiate.
 * - Normal is a normal blackish shadow.
 * - Fire is a bright yellow "shadow" for fire entities.
 */
export const ShadeType = {
	Normal: 0,
	Fire: 1
};

/**
 * Instantiate a shadow at the given coordinates.
 *
 * The shadow will change depending on its given ShadeType.
 */
export class Shade extends Animator {
	/**
	 * Instantiate a shadow at the given coordinates.
	 * @param {number} shadeType Type of shadow to instantiate.
	 */
	constructor(shadeType) {
		super(false);
		this.loadAnimation(shadeType == ShadeType.Fire ? shade_fire : shade);
		this.playing = shadeType != ShadeType.Normal;
	}
}
