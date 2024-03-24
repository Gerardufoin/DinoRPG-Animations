// @ts-check

import { AlphaFilter, Container } from 'pixi.js';
import { Sprite } from '../../../Sprite.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Timer } from '../../../Timer.js';

// GFX 777
/**
 * Create puddles on the ground. Puddles merge together and can be added over time.
 */
export class Puddles extends Sprite {
	/**
	 * The GlowFilter of the puddle.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;
	/**
	 * The transparency filter of the puddle.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {AlphaFilter}
	 */
	static AlphaFilter;

	/**
	 * The container where the puddles are instantiated.
	 * @type {Container}
	 */
	_puddleContainer;
	/**
	 * Reference to all the currently existing puddles.
	 * @type {{c: Container, timer: number}[]}
	 */
	_puddles = [];

	/**
	 * Instantiate the puddles container.
	 */
	constructor() {
		super(new Container());

		this._puddleContainer = new Container();
		if (!Puddles.GlowFilter) {
			Puddles.GlowFilter = new GlowFilter({
				quality: 0.5,
				color: 0xffffff,
				distance: 1,
				outerStrength: 8
			});
		}
		if (!Puddles.AlphaFilter) {
			Puddles.AlphaFilter = new AlphaFilter(0.3);
		}
		this._puddleContainer.filters = [Puddles.GlowFilter, Puddles.AlphaFilter];
		this._root.addChild(this._puddleContainer);
	}

	/**
	 * Add a new puddle.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 */
	addPuddle(x, y) {
		if (!this._discarded) {
			const puddle = new Container();
			puddle.addChild(new Asset(ref.fx.water.puddle));
			puddle.x = x + (Math.random() * 2 - 1) * 15;
			puddle.y = y + (Math.random() * 2 - 1) * 15;
			puddle.scale.set(0.5 + Math.random());
			this._puddles.push({
				c: puddle,
				timer: 0
			});
			this._puddleContainer.addChild(puddle);
		}
	}

	/**
	 * Will kill the entity once all the puddles are gone.
	 */
	discard() {
		this._discarded = true;
	}

	/**
	 * Update the puddles over time.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		for (const p of this._puddles) {
			p.timer += timer.tmod;
			let scale = 1.4;
			if (p.timer <= 12) {
				// grows before 12 frames
				scale = 1 + (p.timer / 12) * 0.4;
			} else if (p.timer >= 28) {
				// shrinks between 28 and 48 frames
				scale = 1.4 * (1 - Math.min(1, (p.timer - 28) / 20));
			}
			p.c.scale.set(scale);
		}
		// Remove puddles which have finished their animation.
		this._puddles = this._puddles.filter((p) => {
			if (p.timer >= 48) {
				this._puddleContainer.removeChild(p.c);
				return false;
			}
			return true;
		});
		if (this._discarded && this._puddles.length == 0) {
			this.kill();
		}
	}
}
