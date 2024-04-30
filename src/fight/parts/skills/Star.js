// @ts-check

import { Container } from 'pixi.js';
import { Part } from '../../Part.js';
import { Animator } from '../../../display/Animator.js';
import { fx_star } from '../../../gfx/fx/star.js';
import { IScene } from '../../IScene.js';
import { Sprite } from '../../Sprite.js';

/**
 * Creates a star animation at the given coordinates.
 */
export class Star extends Part {
	/**
	 * Creates a star animation at the given coordinates.
	 * @param {IScene} scene The Scene where the Star is instantiated.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 * @param {Sprite} awayFrom If defined, the Star fly away in a random direction from the given Sprite.
	 */
	constructor(scene, x, y, z, awayFrom = undefined) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(fx_star);
		this._root.addChild(this._animator);

		this._x = x;
		this._y = y;
		this._z = z;

		this._fadeoutTimer = 10 + Math.random() * 10;
		this._fadeScale = true;
		this._weight = -(0.1 + Math.random() * 0.2);
		this._root.angle = Math.random() * 360;
		this._animator.setFrame(Math.floor(Math.random() * (this._animator.getCurrentAnimationLength() - 1)));

		// If awayFrom is defined, the star fly away in a random direction away from the target
		if (awayFrom) {
			const dx = this._x - awayFrom._x;
			const dy = this._y - awayFrom._y;
			const a = Math.atan2(dy, dx);
			const dist = Math.sqrt(dx * dx + dy * dy);
			this._vx = Math.cos(a) * dist * 0.4;
			this._vy = Math.sin(a) * dist * 0.4;
			this._vz = dist - 10;
		}

		this.updatePos();
	}
}
