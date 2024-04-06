// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';

// GFX 704 mcIceBlock
/**
 * The front of back part of an ice block.
 */
export class IceBlock extends Container {
	/**
	 * The glow parameters for the highlight of the IceBlock.
	 * @type {Partial<import('@pixi/filter-glow').GlowFilterOptions>}
	 */
	static HighlightGlowOptions = {
		distance: 4,
		color: 0xffffff,
		quality: 0.5,
		outerStrength: 2
	};

	/**
	 * Creates the requested part of an ice block with the given scale.
	 * @param {number} scaleX The x scale.
	 * @param {number} scaleY The y scale.
	 * @param {boolean} back Defines if the front or the back part of the ice block is instantiated. True by default.
	 */
	constructor(scaleX, scaleY, back = true) {
		super();
		if (back) {
			this.addChild(new Asset(ref.fx.ice.back));
		} else {
			this.addChild(new Asset(ref.fx.ice.front));
			const hl = new Asset(ref.fx.ice.front_highlight);
			hl.x -= 3.05;
			hl.y -= 27.7;
			hl.filters = [ConstantShaderManager.getGlowFilter(IceBlock.HighlightGlowOptions)];
			this.addChild(hl);
		}
		this.scale.x = scaleX;
		this.scale.y = scaleY;
	}
}
