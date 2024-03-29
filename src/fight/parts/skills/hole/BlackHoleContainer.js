// @ts-check

import { Container } from 'pixi.js';
import { Sprite } from '../../../Sprite.js';
import { IScene } from '../../../IScene.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { Timer } from '../../../Timer.js';
import { BlackHole } from './BlackHole.js';
import { Fighter } from '../../../Fighter.js';

/**
 * A black hole container contains multiple black hole and allow to merge them on display.
 */
export class BlackHoleContainer extends Sprite {
	/**
	 * First glow of the black hole.
	 * @type {Partial<import('@pixi/filter-glow').GlowFilterOptions>}
	 */
	static FirstGlowOptions = {
		distance: 1,
		color: 0x6a0099,
		quality: 0.5,
		outerStrength: 2
	};
	/**
	 * First glow of the black hole.
	 * @type {Partial<import('@pixi/filter-glow').GlowFilterOptions>}
	 */
	static SecondGlowOptions = {
		distance: 20,
		color: 0x6a0099,
		quality: 0.5,
		outerStrength: 2
	};

	/**
	 * The Scene where the container exists.
	 * @type {IScene}
	 */
	_scene;
	/**
	 * The black holes existing in the container.
	 * @type {BlackHole[]}
	 */
	_holes = [];

	/**
	 * Creates a black hole container which can instantiate new black holes.
	 * @param {IScene} scene The Scene where the black hole is instantiated.
	 */
	constructor(scene) {
		super(new Container());
		this._scene = scene;
		this._root.filters = [
			ConstantShaderManager.getGlowFilter(BlackHoleContainer.FirstGlowOptions),
			ConstantShaderManager.getGlowFilter(BlackHoleContainer.SecondGlowOptions)
		];
	}

	/**
	 * Updates the black hole animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		for (const b of this._holes) {
			b.update(timer);
		}
	}

	/**
	 * Adds a new Black Hole to the container.
	 * @param {Fighter} target The target of the black hole.
	 */
	addBlackHole(target) {
		const bh = new BlackHole(this._scene, target);
		this._holes.push(bh);
		this._root.addChild(bh);
	}

	/**
	 * Sets how much the black holes are opened.
	 * @param {number} coef The coefficient of opening between 0 and 1.
	 */
	setOpeningCoef(coef) {
		this._holes.map((h) => h.setOpeningCoef(coef));
	}

	/**
	 * Start the falling action for all black holes.
	 * @param {number} coefSpeed The speed of the coefficient, used to determine the falling speed.
	 */
	startFall(coefSpeed) {
		this._holes.map((h) => h.startFall(coefSpeed));
	}

	/**
	 * Checks if every target has been completely sucked by the black holes.
	 * @returns {boolean} True if the targets are absorbed, false otherwise.
	 */
	haveFallen() {
		return this._holes.every((h) => h.hasFallen());
		//return this._target.getRootContainer().y + this._target.dm.y - this._target.height > this._root.y;
	}

	/**
	 * Removes the black holes.
	 */
	kill() {
		super.kill();
		this._holes.map((h) => h.kill());
	}
}
