// @ts-check
// 646+647

import { BlurFilter, Container } from 'pixi.js';
import { Dust } from './Dust.js';
import { Timer } from '../../Timer.js';
import { Scene } from '../../Scene.js';

/**
 * Spawn in a blurry Dust part rotating over time.
 */
export class Dirt extends Dust {
	/**
	 * Number of frames needed for the Dirt to do a full rotation.
	 * @type {number}
	 */
	static LOOP_TIME = 70;
	/**
	 * The parent Dust particle.
	 * @type {Container}
	 */
	_dust;
	/**
	 * Current rotation time in frames, from 0 to LOOP_TIME.
	 * @type {number}
	 */
	_rotationTimer = 0;

	/**
	 * Spawn a Dirt part at the given xy coordinates, following the given direction vector.
	 * @param {Scene} scene The Scene the part is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vz The initial z velocity.
	 */
	constructor(scene, x, y, vx, vz) {
		super(scene, x, y);
		this._dust = this._root;
		this._root = new Container();
		this._root.addChild(this._dust);

		this._dust.filters = [new BlurFilter(7)];
		this._vx = vx;
		this._vz = vz;
	}

	/**
	 * Update the rotation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._rotationTimer = (this._rotationTimer + timer.tmod) % Dirt.LOOP_TIME;
		this._dust.angle = (this._rotationTimer / Dirt.LOOP_TIME) * 360;
	}
}
