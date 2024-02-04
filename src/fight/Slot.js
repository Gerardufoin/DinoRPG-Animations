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

import { ColorMatrixFilter, Container, Filter } from 'pixi.js';
import { Fighter } from './Fighter.js';
import { Asset } from '../display/Asset.js';
import { ref } from '../gfx/references.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { Timer } from './Timer.js';
import { Scene } from './Scene.js';
import { Tween, TFx } from '../display/Tween.js';
import { sdino } from '../sdino.js';
import { GlowFilter } from '@pixi/filter-glow';

/**
 * Creates a new Slot for the given Fighter.
 *
 * The Slot contains a portrait, a life bar, and an energy bar, which can be changed as the Fighter gain/lose life/energy.
 */
export class Slot extends Container {
	/**
	 * Defines the scale of a Fighter's portrait.
	 * @type {number}
	 */
	static FIGHTER_PORTRAIT_SCALE = 1;
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
	 * Masked representation of the Fighter's portrait.
	 */
	_portrait = new Container();
	/**
	 * Keep track of the shaking direction of the portrait when the Fighter takes damage.
	 * @type {number}
	 */
	_shakeSens = 1;
	/**
	 * Timer for the effect when the Fighter gets hit.
	 * @type {number}
	 */
	_damageTimer = 0;

	/**
	 * The Scene where the Slot exists.
	 * @type {Scene}
	 */
	_scene;
	/**
	 * The slot's Fighter.
	 * @type {Fighter}
	 */
	_fighter;

	/**
	 * Return the side of the Slot's Fighter.
	 * @type {boolean}
	 */
	get side() {
		return this._fighter.side;
	}

	/**
	 * Creates a new slot linked to a specific Fighter.
	 * @param {Scene} scene The Scene where the slot is added.
	 * @param {Fighter} fighter The Fighter creating the slot.
	 * @param {sdino} portrait Visual of the Fighter in the Slot.
	 */
	constructor(scene, fighter, portrait) {
		super();
		this._fighter = fighter;
		this._scene = scene;

		this.createDisplay(portrait);

		if (!Slot.BorderGlowFilter) {
			Slot.BorderGlowFilter = new GlowFilter({
				distance: 6,
				color: 0x6a4f26,
				outerStrength: 2
			});
		}
		this.filters = [Slot.BorderGlowFilter];
		// TODO CASTLE
		/*if(f == null) {
			setLife( Main.me.castle.life / Main.me.castle.max );
			var mc = new mt.DepthManager(root.skin).attach("mcCastle", 0);
			mc._x = 28;
			mc._y = -15;
			mc._xscale = mc._yscale = 40;
			var mc:flash.MovieClip = cast(mc).wall;
			mc.stop();
			return;
		}*/

		this.setLife(this._fighter._life / this._fighter._maxLife);
		this._lifeBar.hit.scale.y = this._lifeBar.bar.scale.y;
		if (this._fighter._energy) {
			this.setMaxEnergy(this._fighter._maxEnergy);
			this.setEnergy(this._fighter._energy);
		} else {
			this.hideEnergyBar();
		}
	}

	/**
	 * Update the visual effect when the Fighter gets hurt.
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
		this._lifeBar.hit.scale.y = this._lifeBar.bar.scale.y;
		this._lifeBar.bar.scale.y = ratio;
	}

	/**
	 * Sets the max energy display of the Slot.
	 * @param {number} energy The maximum amount of energy.
	 */
	setMaxEnergy(energy) {
		this._scene.addTween(new Tween(this._energyBar.max.scale, TFx.TEaseOut).to(0.5, { y: 2 - energy / 100 }));
	}

	/**
	 * Set the current amount of energy of the Slot.
	 * @param {number} energy The current amount of energy.
	 */
	setEnergy(energy) {
		this._energyBar.hit.scale.y = this._energyBar.bar.scale.y;
		this._scene.addTween(new Tween(this._energyBar.hit.scale, TFx.TEaseOut).to(0.5, { y: energy / 100 }));
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
	 * Create the slot background and its bars.
	 * @param {sdino} portrait Visual of the Fighter.
	 */
	createDisplay(portrait) {
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

		portrait.x = 18;
		portrait.y = 33;
		this._portrait.addChild(portrait);
		const mask = new Asset(ref.scene.slot_mask);
		this._portrait.addChild(mask);
		this._portrait.mask = mask;
		this.addChild(this._portrait);
	}

	/**
	 * Use an asset to create a bar display which will scale from top to bottom.
	 * @param {object} reference The reference to the texture to use.
	 * @returns {Asset} The created Asset.
	 */
	createBarDisplay(reference) {
		const bar = new Asset(reference);
		bar.anchor.set(0, 1);
		bar.onLoad(() => {
			bar.y += bar.height;
		});
		return bar;
	}
}
