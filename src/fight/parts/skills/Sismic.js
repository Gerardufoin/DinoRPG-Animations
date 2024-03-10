// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';
import { IScene } from '../../IScene.js';

// GFX 233
/**
 * Creates a shockwave composed of three waves.
 */
export class Sismic extends Phys2D {
	/**
	 * Total duration of the shockwave before deletion.
	 * @type {number}
	 */
	static SHOCKWAVE_TIMER = 32;
	/**
	 * Information about each individual shockwave.
	 * @type {{start: number, end: number, scale: number, scaleInc: number}[]}
	 */
	static WavesInfos = [
		{
			start: 0,
			end: 5,
			scale: 1.4,
			scaleInc: 5.6
		},
		{
			start: 0,
			end: 9,
			scale: 1,
			scaleInc: 7
		},
		{
			start: 1,
			end: 30,
			scale: 1,
			scaleInc: 9.3
		}
	];
	/**
	 * Waves of the shockwave.
	 * @type {Container[]}
	 */
	_waves = [];
	/**
	 * Current timer of the shockwave.
	 * @type {number}
	 */
	_timer = 0;

	/**
	 * Creates a shockwave at the given coordinates.
	 * @param {IScene} scene The Scene containing the shockwave.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} yScale The y scale of the shockwave. Use it to angle it with the ground.
	 */
	constructor(scene, x, y, yScale) {
		super(new Container(), scene);
		for (let i = 0; i < Sismic.WavesInfos.length; ++i) {
			this._waves.push(new Container());
			this._waves[i].addChild(new Asset(ref.fx.shockwave));
			this._waves[i].visible = false;
			this._root.addChild(this._waves[i]);
		}
		this._x = x;
		this._y = y;
		this._root.scale.set(1, yScale);
	}

	/**
	 * Update the shockwave position.
	 * @param {Timer} timer The fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._timer += timer.tmod;
		for (const i in Sismic.WavesInfos) {
			const info = Sismic.WavesInfos[i];
			if (this._timer >= info.start && this._timer <= info.end) {
				this._waves[i].visible = true;
				const c = (this._timer - info.start) / (info.end - info.start);
				this._waves[i].scale.set(info.scale + info.scaleInc * c);
				this._waves[i].alpha = 1 - c;
			} else {
				this._waves[i].visible = false;
			}
		}
		if (this._timer >= Sismic.SHOCKWAVE_TIMER) {
			this.kill();
		}
	}
}
