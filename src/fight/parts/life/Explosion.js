// @ts-check
import { Animator } from '../../../display/Animator.js';
import { Scene } from '../../Scene.js';
import { Phys2D } from '../Phys2D.js';
import { fx_explosion } from '../../../gfx/fx/explosion.js';
import { BlurFilter, Container } from 'pixi.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../sdino/references.js';

/**
 * Creates an explosion at the desired position.
 */
export class Explosion extends Phys2D {
	/**
	 * The BlurFilter of the smoke.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {BlurFilter}
	 */
	static BlurFilter;

	/**
	 * Instantiate a new explosion at the given coordinates.
	 * @param {Scene} scene The Scene where the Bolt is spawned.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(fx_explosion);
		const smoke = new Container();
		const smokeSprite = new Asset(ref.fx.dust);
		smoke.addChild(smokeSprite);
		smokeSprite.tint = 0x000000;
		if (!Explosion.BlurFilter) {
			Explosion.BlurFilter = new BlurFilter(10);
		}
		smoke.filters = [Explosion.BlurFilter];
		smoke.angle = Math.random() * 360;
		smoke.scale.set(1.4);

		this._root.addChild(smoke);
		this._root.addChild(this._animator);

		this._x = x;
		this._y = y;
		this._root.scale.set(0.5 + Math.random() * 0.5);

		this.sleep(Math.random() * 12);
		this._fadeoutTimer = 13;
		this._fadeLimit = 5;
		this.updatePos();
	}
}
