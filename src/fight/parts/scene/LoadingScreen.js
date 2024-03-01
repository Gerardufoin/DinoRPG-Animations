// @ts-check

import { BLEND_MODES, Container } from 'pixi.js';
import { Timer } from '../../Timer.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { DropShadowFilter } from '@pixi/filter-drop-shadow';

/**
 * The loading screen, displayed at the beginning of a fight.
 */
export class LoadingScreen extends Container {
	/**
	 * The DropShadowFilter of the loading circle.
	 * Storing it to prevent WebGL from creating a new shader every time.
	 * @type {DropShadowFilter}
	 */
	static DropShadowFilter;
	/**
	 * Loading circle, rotating over time.
	 * @type {Container}
	 */
	_circle = new Container();

	/**
	 * Creates the loading screen, consisting of a gradient background and a circle rotating over time.
	 */
	constructor() {
		super();
		this.addChild(new Asset(ref.scene.loading_bg));
		const circle = new Asset(ref.scene.loading);
		circle.x = circle.y = 0;
		circle.anchor.set(0.5);
		circle.blendMode = BLEND_MODES.OVERLAY;
		this._circle.addChild(circle);
		this._circle.x = 198;
		this._circle.y = 158;
		if (!LoadingScreen.DropShadowFilter) {
			LoadingScreen.DropShadowFilter = new DropShadowFilter({
				offset: { x: 4, y: 4 },
				color: 0x6a441e,
				blur: 1,
				alpha: 0.3
			});
		}
		this._circle.filters = [LoadingScreen.DropShadowFilter];
		this.addChild(this._circle);
	}

	/**
	 * Rotates the loading circle.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		this._circle.angle += 3 * timer.tmod;
	}
}
