// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/SlotDinoz.hx

/**
 * Visual elements for the life display.
 * @typedef {{bar: Container, hit: Container}} LifeBar
 */

/**
 * Visual elements for the energy display.
 * @typedef {{bar: Container, hit: Container, max: Container, bg: Container}} EnergyBar
 */

import { ColorMatrixFilter, Container, Filter, Rectangle, SpriteMaskFilter, Texture } from 'pixi.js';
import { Asset } from '../display/Asset.js';
import { ref } from '../gfx/references.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { Timer } from './Timer.js';
import { Tween, TFx } from '../display/Tween.js';
import { GlowFilter } from '@pixi/filter-glow';
import { TweenManager } from './TweenManager.js';
import { Sprite } from '@pixi/picture';

/**
 * Creates a new Slot.
 *
 * The Slot contains a portrait, a life bar, and an energy bar, which can be changed as the entity linked to the slot gains/loses life/energy.
 */
export class Slot extends Container {
	/**
	 * Defines the scale of a Fighter's portrait.
	 * @type {number}
	 */
	static FIGHTER_PORTRAIT_SCALE = 1;
	/**
	 * Maximum amount of energy allowed in slots.
	 * @type {number}
	 */
	static MAX_ENERGY = 200;
	/**
	 * The GlowFilter of the border.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static BorderGlowFilter;
	/**
	 * The red ColorFilter of the portrait.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {ColorMatrixFilter}
	 */
	static PortraitDamageFilter;
	/**
	 * The red OffsetColorFilter of the life hit bar.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {Filter}
	 */
	static LifeBarColorFilter;
	/**
	 * The OffsetColorFilter for the background of the energy bar.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {Filter}
	 */
	static EnergyBarColorFilter;

	/**
	 * Life bar and its components.
	 * @type {LifeBar}
	 */
	_lifeBar;
	/**
	 * Energy bar and its components.
	 * @type {EnergyBar}
	 */
	_energyBar;
	/**
	 * Masked representation of the portrait.
	 */
	_portrait = new Container();
	/**
	 * Side of the slot.
	 * True for left, false for right.
	 */
	_side;
	/**
	 * Keep track of the shaking direction of the portrait when damages are received.
	 * @type {number}
	 */
	_shakeSens = 1;
	/**
	 * Timer for the effect when damages are received.
	 * @type {number}
	 */
	_damageTimer = 0;

	/**
	 * The Tween Manager of the Scene containing the Slot.
	 * @type {TweenManager}
	 */
	_tweenManager;

	/**
	 * Creates a new slot displaying the life, energy and portrait of an entity.
	 * The slot stays hidden until the portrait is set.
	 * @param {number} life The current life to display.
	 * @param {number} maxLife The maximum amount of life.
	 * @param {number | null} energy The current energy to display or null if there is no energy bar.
	 * @param {number | null} maxEnergy The maximum amount of energy.
	 * @param {boolean} side The side of the slot. True for left, false for right.
	 * @param {TweenManager} tm The Tween Manager of the Scene.
	 */
	constructor(life, maxLife, energy, maxEnergy, side, tm) {
		super();
		this._tweenManager = tm;
		this._side = side;

		this.createDisplay();

		if (!Slot.BorderGlowFilter) {
			Slot.BorderGlowFilter = new GlowFilter({
				distance: 6,
				color: 0x6a4f26,
				outerStrength: 2
			});
		}
		this.filters = [Slot.BorderGlowFilter];

		this.setLife(life / maxLife);
		this._lifeBar.hit.scale.y = this._lifeBar.bar.scale.y;

		if (energy !== null) {
			this.setMaxEnergy(maxEnergy);
			this.setEnergy(energy);
		} else {
			this.hideEnergyBar();
		}

		// Hides the slot until the portrait is set later on.
		this.visible = false;
	}

	/**
	 * Update the visual effect when damages are received.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		if (this._damageTimer > 0) {
			const prev = Math.floor(this._damageTimer);
			this._damageTimer -= timer.tmod;
			if (Math.floor(this._damageTimer) != prev) {
				this._shakeSens *= -1;
				this._portrait.x = Math.random() * this._damageTimer * this._shakeSens;
			}
			if (this._damageTimer < 5) {
				this._lifeBar.hit.scale.y += (this._lifeBar.bar.scale.y - this._lifeBar.hit.scale.y) * 0.5 * timer.tmod;
			}
			if (this._damageTimer <= 0) {
				this._lifeBar.hit.scale.y = this._lifeBar.bar.scale.y;
				this._portrait.x = 0;
				this._portrait.filters = [];
			}
		}
	}

	/**
	 * Set the scale of the life bar.
	 * @param {number} ratio The new scale of the bar.
	 */
	setLife(ratio) {
		ratio = PixiHelper.mm(0, ratio, 1);
		this._lifeBar.hit.scale.y = this._lifeBar.bar.scale.y;
		this._lifeBar.bar.scale.y = ratio;
	}

	/**
	 * Sets the max energy display of the Slot.
	 * @param {number} energy The maximum amount of energy.
	 */
	setMaxEnergy(energy) {
		energy = PixiHelper.mm(0, energy, Slot.MAX_ENERGY);
		this._tweenManager.addTween(
			new Tween(this._energyBar.max.scale, TFx.TEaseOut).to(0.5, { y: (Slot.MAX_ENERGY - energy) / 100 })
		);
	}

	/**
	 * Set the current amount of energy of the Slot.
	 * @param {number} energy The current amount of energy.
	 */
	setEnergy(energy) {
		energy = PixiHelper.mm(0, energy, Slot.MAX_ENERGY);
		this._energyBar.hit.scale.y = this._energyBar.bar.scale.y;
		this._tweenManager.addTween(new Tween(this._energyBar.hit.scale, TFx.TEaseOut).to(0.5, { y: energy / 100 }));
		this._energyBar.bar.scale.y = energy / 100;
	}

	/**
	 * Hides the display of the energy bar.
	 */
	hideEnergyBar() {
		this._energyBar.bar.visible = false;
		this._energyBar.max.visible = false;
		this._energyBar.hit.visible = false;
		this._energyBar.bg.visible = false;
	}

	/**
	 * Set the damage timer to make the portrait shake in red and reduce the life hit bar.
	 */
	fxDamage() {
		this._damageTimer = 15;
		if (!Slot.PortraitDamageFilter) {
			Slot.PortraitDamageFilter = new ColorMatrixFilter();
			// Remove green
			Slot.PortraitDamageFilter.matrix[6] = 0;
			// Remove blue
			Slot.PortraitDamageFilter.matrix[12] = 0;
		}
		this._portrait.filters = [Slot.PortraitDamageFilter];
	}

	/**
	 * Creates the slot background and its bars.
	 */
	createDisplay() {
		this.addChild(new Asset(ref.scene.slot_bg));

		this._lifeBar = {
			bar: this.createBarDisplay(ref.scene.slot_bar),
			hit: this.createBarDisplay(ref.scene.slot_bar)
		};
		this._lifeBar.hit.x += 39.5;
		this._lifeBar.hit.y += 34;
		if (!Slot.LifeBarColorFilter) {
			Slot.LifeBarColorFilter = PixiHelper.colorOffsetFilter(247, 0, 0, 0.03, 0.03, 0.03);
		}
		this._lifeBar.hit.filters = [Slot.LifeBarColorFilter];
		this.addChild(this._lifeBar.hit);
		this._lifeBar.bar.x += 39.5;
		this._lifeBar.bar.y += 34;
		this.addChild(this._lifeBar.bar);

		this.addChild(new Asset(ref.scene.slot_border));

		this._energyBar = {
			bar: this.createBarDisplay(ref.scene.slot_energy),
			hit: this.createBarDisplay(ref.scene.slot_hit),
			max: new Asset(ref.scene.slot_max_energy),
			bg: new Asset(ref.scene.slot_bar)
		};
		this._energyBar.bg.x += 47.4;
		this._energyBar.bg.y += 34;
		if (!Slot.EnergyBarColorFilter) {
			Slot.EnergyBarColorFilter = PixiHelper.colorOffsetFilter(10, 53, 78, 0.03, 0.03, 0.03);
		}
		this._energyBar.bg.filters = [Slot.EnergyBarColorFilter];
		this.addChild(this._energyBar.bg);

		this.addChild(new Asset(ref.scene.slot_energy_border));

		this._energyBar.max.x += 44.9;
		this._energyBar.max.y += 2;
		this.addChild(this._energyBar.max);

		this._energyBar.hit.x += 44.9;
		this._energyBar.hit.y += 33.95;
		this.addChild(this._energyBar.hit);

		this._energyBar.bar.x += 44.9;
		this._energyBar.bar.y += 33.95;
		this.addChild(this._energyBar.bar);

		const masked = new Container();
		const mask = new Asset(ref.scene.slot_mask);
		masked.addChild(this._portrait);
		masked.addChild(mask);
		masked.filters = [new SpriteMaskFilter(mask)];
		this.addChild(masked);
	}

	/**
	 * Sets the slot's portrait once the big dino render texture has finish generating and makes the slot visible.
	 * @param {Texture} tex The texture of the portrait to set.
	 * @param {Rectangle} textureBounds The texture of the portrait to set.
	 * @param {Rectangle} viewBounds The texture of the portrait to set.
	 */
	setPortrait(tex, textureBounds, viewBounds) {
		this._portrait.removeChildren();
		const portrait = new Sprite(tex);
		const scale = 36 / (viewBounds.width == 0 ? 36 : viewBounds.width);
		// Invert the sprite if on left side
		if (this._side) {
			portrait.x = Math.round((viewBounds.x - textureBounds.x + viewBounds.width) * scale);
		} else {
			portrait.x = Math.round((textureBounds.x - viewBounds.x) * scale);
		}
		portrait.y = Math.round((textureBounds.y - viewBounds.y) * scale);
		portrait.scale.set(scale * (this._side ? -1 : 1), scale);
		this._portrait.addChild(portrait);

		// Reveal the slot.
		this.visible = true;
	}

	/**
	 * Use an asset to create a bar display which will scale from top to bottom.
	 * @param {object} reference The reference to the texture to use.
	 * @returns {Asset} The created Asset.
	 */
	createBarDisplay(reference) {
		const bar = new Asset(reference);
		bar.anchor.set(0, 1);
		bar.onLoad = () => {
			bar.y += bar.height / bar.scale.y;
		};
		return bar;
	}
}
