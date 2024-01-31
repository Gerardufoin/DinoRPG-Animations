// @ts-check

import { BLEND_MODES, Container } from 'pixi.js';
import { Fighter } from './Fighter.js';
import { Asset } from '../display/Asset.js';
import { ref } from '../gfx/references.js';
import { GlowFilter } from '@pixi/filter-glow';

// GFX 850
/**
 * Contains the status icons for a Fighter and will display the necessary ones.
 *
 * Note: There is a blob icon in GFX but it does not seem used anywhere. The assets are already in the project if needed.
 */
export class StatusDisplay extends Container {
	/**
	 * The GlowFilter for the slow icon.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static SlowFilter;
	/**
	 * The GlowFilter for the quick icon.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static QuickFilter;
	/**
	 * The GlowFilter for the blessed icon.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static BlessedFilter;
	_statusIcons = {};

	/**
	 * Create the container for all the status icons.
	 */
	constructor() {
		super();

		this.y = -40;
		this._statusIcons[Fighter.Status.Sleep] = this.createBasicIcon(ref.status.sleep);
		this._statusIcons[Fighter.Status.Intang] = this.createBasicIcon(ref.status.intang);
		this._statusIcons[Fighter.Status.Slow] = this.createSlowIcon();
		this._statusIcons[Fighter.Status.Quick] = this.createQuickIcon();
		this._statusIcons[Fighter.Status.Stoned] = this.createBasicIcon(ref.status.petrified);
		this._statusIcons[Fighter.Status.Bless] = this.createBlessedIcon();
		this._statusIcons[Fighter.Status.Poison] = this.createBasicIcon(ref.status.poison);
		this._statusIcons[Fighter.Status.MonoElt] = this.createBasicIcon(ref.status.lock, 1.85, 0.85);
		this._statusIcons[Fighter.Status.Dazzled] = this.createBasicIcon(ref.status.dazzled);
		this._statusIcons[Fighter.Status.Stun] = this.createBasicIcon(ref.status.stun);
	}

	/**
	 * Display the icons for the list of status given in parameters.
	 * @param {{e: number, power?: number}[]} status The list of status whose icons have to be displayed.
	 */
	showIcons(status) {
		const keys = Object.keys(this._statusIcons);
		for (const k of keys) {
			this._statusIcons[k].visible = false;
		}

		const icons = status.map((s) => s.e.toString()).filter((s) => keys.includes(s));
		const max = icons.length;
		const size = 12;
		const ec = 2;
		const sx = -(max * (size + ec) - ec) * 0.5;
		for (let i = 0; i < max; ++i) {
			this._statusIcons[icons[i]].visible = true;
			this._statusIcons[icons[i]].x = sx + i * (size + ec);
		}
	}

	/**
	 * Create a standard icon with a background and an image.
	 * @param {any} imageRef The compressed reference of the icon's image.
	 * @param {number} offsetX The x offset if any. 0 by default.
	 * @param {number} offsetY The y offset if any. 0 by default.
	 * @returns {Container} The created icon.
	 */
	createBasicIcon(imageRef, offsetX = 0, offsetY = 0) {
		const icon = new Container();
		const img = new Asset(imageRef);
		img.x += offsetX;
		img.y += offsetY;
		icon.addChild(new Asset(ref.status.background));
		icon.addChild(img);
		icon.visible = false;
		return this.addChild(icon);
	}

	/**
	 * Create an icon for the slow status.
	 * @returns {Container} The created icon.
	 */
	createSlowIcon() {
		const icon = new Container();
		icon.addChild(new Asset(ref.status.background));
		const slow = new Asset(ref.status.slow, 1.25);
		slow.x += 6.0;
		slow.y += 5.6;
		if (!StatusDisplay.SlowFilter) {
			StatusDisplay.SlowFilter = new GlowFilter({
				distance: 1,
				color: 0xffffff,
				outerStrength: 4,
				quality: 0.5
			});
		}
		slow.filters = [StatusDisplay.SlowFilter];
		icon.addChild(slow);
		icon.visible = false;
		return this.addChild(icon);
	}

	/**
	 * Create an icon for the quick status.
	 * @returns {Container} The created icon.
	 */
	createQuickIcon() {
		const icon = new Container();
		icon.addChild(new Asset(ref.status.background));
		const quick = new Asset(ref.status.quick, 1.1);
		if (!StatusDisplay.QuickFilter) {
			StatusDisplay.QuickFilter = new GlowFilter({
				distance: 5,
				color: 0xffff00,
				outerStrength: 1
			});
		}
		quick.filters = [StatusDisplay.QuickFilter];
		quick.x += 6.2;
		quick.y += 5.65;
		quick.blendMode = BLEND_MODES.ADD;
		icon.addChild(quick);
		icon.visible = false;
		return this.addChild(icon);
	}

	/**
	 * Create an icon for the blessed status.
	 * @returns {Container} The created icon.
	 */
	createBlessedIcon() {
		const icon = new Container();
		icon.addChild(new Asset(ref.status.background));
		const blessed = new Asset(ref.status.blessed);
		blessed.x += 6.0;
		blessed.y += 5.95;
		if (!StatusDisplay.BlessedFilter) {
			StatusDisplay.BlessedFilter = new GlowFilter({
				distance: 4,
				color: 0xffffff,
				outerStrength: 1
			});
		}
		blessed.filters = [StatusDisplay.BlessedFilter];
		blessed.blendMode = BLEND_MODES.ADD;
		icon.addChild(blessed);
		icon.visible = false;
		return this.addChild(icon);
	}
}
