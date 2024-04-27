// @ts-check

import { Animator } from '../../display/Animator.js';
import { shadow, shadow_fire } from '../../gfx/parts/shadow.js';

/**
 * Possible type of Shadow to instantiate.
 * - Normal is a normal blackish shadow.
 * - Fire is a bright yellow "shadow" for fire entities.
 */
export const ShadowType = {
	Normal: 0,
	Fire: 1
};

/**
 * Instantiate a shadow at the given coordinates.
 *
 * The shadow will change depending on its given ShadowType.
 */
export class Shadow extends Animator {
	/**
	 * Instantiate a shadow at the given coordinates.
	 * @param {number} shadowType Type of shadow to instantiate.
	 */
	constructor(shadowType) {
		super(false);
		this.loadAnimation(shadowType == ShadowType.Fire ? shadow_fire : shadow);
		this.playing = shadowType != ShadowType.Normal;
	}
}
