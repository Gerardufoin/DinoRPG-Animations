// @ts-check

import { Container } from 'pixi.js';
import { Fighter } from '../../../Fighter.js';
import { IScene } from '../../../IScene.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Timer } from '../../../Timer.js';
import { FighterStatus } from '../../../Enums.js';

/**
 * Creates a black hole which absorbs a target.
 */
export class BlackHole extends Container {
	/**
	 * The Fighter targeted by the black hole.
	 * @type {Fighter}
	 */
	_target;
	/**
	 * Final scale of the black hole.
	 * @type {number}
	 */
	_scale;

	/**
	 * The hole part of the black hole.
	 * @type {Container}
	 */
	_hole;
	/**
	 * Mask used to hide the Fighter falling in the hole.
	 * @type {Asset}
	 */
	_holeMask;
	/**
	 * The falling speed of the Fighter.
	 * @type {number}
	 */
	_fallSpeed = 0;

	/**
	 * Creates a black hole which sucks in a Fighter.
	 * @param {IScene} scene The Scene where the black hole is instantiated.
	 * @param {Fighter} target The target of the black hole.
	 */
	constructor(scene, target) {
		super();
		this._target = target;
		this._scale = Math.round((this._target.ray * 2 + 50) / 10) / 10;

		this._hole = new Container();
		this._hole.addChild(new Asset(ref.fx.black_hole, this._scale));
		this._hole.scale.set(1 / this._scale);
		const holeCont = new Container();
		holeCont.addChild(this._hole);
		holeCont.scale.set(1, 0.5);
		this.addChild(holeCont);

		this.x = this._target.position.x;
		this.y = scene.getY(this._target.position.y);
		this.scale.set(0);
	}

	/**
	 * Updates the black hole animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		this._hole.angle += 15 * timer.tmod;
		this._target.dm.y += this._fallSpeed * timer.tmod;
	}

	/**
	 * Sets how much the black hole is opened.
	 * @param {number} coef The coefficient of opening between 0 and 1.
	 */
	setOpeningCoef(coef) {
		this.scale.set(coef * this._scale);
	}

	/**
	 * Start the fall.
	 * Adds the mask to the target, set the fall speed, remove the shade and force of the target.
	 * @param {number} coefSpeed The speed of the coefficient, used to determine the falling speed.
	 */
	startFall(coefSpeed) {
		if (this._holeMask) return;
		// Create mask
		this._holeMask = new Asset(ref.parts.hole_mask, 1, false);
		this._holeMask.anchor.set(0.5, 1);
		this._holeMask.scale.set(this._scale * 1.1, this._scale);
		this._holeMask.y += 20 * this._scale;
		this.addChild(this._holeMask);
		this._target.getRootContainer().mask = this._holeMask;

		this._fallSpeed = this._target.height * coefSpeed;
		this._target.removeShadow();
		this._target.removeForce();
		this._target.removeStatus(FighterStatus.Fly);
		this._target.playAnim('fall');
	}

	/**
	 * Checks if the target has been completely sucked by the black hole.
	 * @returns {boolean} True if the target is absorbed, false otherwise.
	 */
	hasFallen() {
		return this._target.dm.y - this._target.height > this._holeMask.y;
	}

	/**
	 * Removes the target.
	 */
	kill() {
		this._target.kill();
	}
}
