// @ts-check

import { ARain } from './ARain.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { IScene } from '../../../IScene.js';
import { Animator } from '../../../../display/Animator.js';
import { fx_braise_ploc } from '../../../../gfx/fx/braise_ploc.js';
import { Timer } from '../../../Timer.js';

// GFX 65
/**
 * A single drop of fire falling from the sky and exploding on contact with the ground.
 */
export class FireRain extends ARain {
	/**
	 * Create a single drop of fire from the sky with a randomized skin.
	 * @param {IScene} scene The Scene where the drop is instantiated.
	 * @param {number} side The side of the Scene where the drop shall fall.
	 */
	constructor(scene, side) {
		super(scene, side);

		this._trail = new Asset(ref.fx.braise_trail, 1, false);
		this._trail.anchor.set(1, 0.5);
		this._trail.scale.set(0.2 + Math.random() * 0.1, 1);
		this._root.addChild(this._trail);
		this._root.addChild(new Asset(ref.fx[`braise_${Math.floor(Math.random() * 5) + 1}`]));

		this._animator = new Animator(false).loadAnimation(fx_braise_ploc);
		this._animator.alpha = 0;
		this._animator.playing = false;
	}

	/**
	 * Hide the drop and show the explosion animation.
	 */
	landed() {
		for (let i = this._root.children.length - 1; i >= 0; --i) {
			this._root.removeChildAt(i);
		}
		this._root.addChild(this._animator);
		this._animator.playing = true;
		this._animator.alpha = 1;
	}

	/**
	 * Check if the animation has ended and the entity should be removed.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._animator.hasAnimEnded) {
			this.kill();
		}
	}
}
