// @ts-check

import { Container, TilingSprite, WRAP_MODES } from 'pixi.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';
import { Sprite } from '../../Sprite.js';
import { Animator } from '../../../display/Animator.js';
import { fx_lava_end } from '../../../gfx/fx/lava_end.js';
import { TextureManager } from '../../../display/TextureManager.js';

/**
 * A pillar of lava which can be closed.
 */
export class Lava extends Sprite {
	/**
	 * Time (in frames) taken for the lava pillar to open or close.
	 * @type {number}
	 */
	static TRANSITION_TIME = 12;
	/**
	 * The start position of the pillar.
	 * @type {number}
	 */
	static START_Y = -100;

	/**
	 * The pillar part of the lava.
	 * @type {TilingSprite}
	 */
	_pillar;
	/**
	 * The animation of the end part of the lava.
	 * @type {Animator}
	 */
	_bottom;
	/**
	 * Is the pillar opening or closing.
	 * @type {boolean}
	 */
	_closing = false;
	/**
	 * Timer used for the transition animations.
	 * @type {number}
	 */
	_timer = 0;

	/**
	 * Creates a pillar of lava.
	 */
	constructor() {
		super(new Container());

		const tex = TextureManager.getTextureFromCompressedReference(ref.fx.lava);
		tex.baseTexture.wrapMode = WRAP_MODES.REPEAT;
		this._pillar = new TilingSprite(tex, 36, 300);
		this._pillar.anchor.set(0.5, 1);
		this._pillar.y = Lava.START_Y;
		this._root.addChild(this._pillar);

		this._bottom = new Animator(false).loadAnimation(fx_lava_end);
		this._root.addChild(this._bottom);
	}

	/**
	 * Update the lava end animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._pillar.tilePosition.y += timer.tmod * 5;

		this._bottom.update(timer.deltaTimeMS);
		if (this._timer < Lava.TRANSITION_TIME) {
			this._timer = Math.min(this._timer + timer.tmod, Lava.TRANSITION_TIME);
			const coef = this._timer / Lava.TRANSITION_TIME;
			const d = 1 / 4;
			if (this._closing) {
				// Pillar scales down until it reaches 0.15
				const scale = Math.max(1 - coef, 0.15);
				this._pillar.scale.x = scale;
				this._bottom.scale.set(scale);
				// Pillar shrinks down over the last 1/4 of the transition
				this._pillar.scale.y = 1 - Math.max(0, (coef - (1 - d)) / d);
				if (coef == 1) {
					this.kill();
				}
			} else {
				// Drop the pillar to the ground over the first 1/4 of the transition.
				this._pillar.y = (1 - Math.min(coef / d, 1)) * Lava.START_Y;
				// Scale the pillar over the last 3/4 of the transition (min scale 0.15)
				const scale = 0.15 + (Math.max(coef - d, 0) / (1 - d)) * 0.85;
				this._pillar.scale.x = scale;
				if (this._pillar.y == 0) {
					this._bottom.visible = true;
					this._bottom.scale.set(scale);
				} else {
					this._bottom.visible = false;
				}
			}
		}
	}

	/**
	 * Close the lava pillar.
	 */
	close() {
		this._closing = true;
		this._timer = 0;
		this._bottom.visible = true;
		this._pillar.y = 0;
	}
}
