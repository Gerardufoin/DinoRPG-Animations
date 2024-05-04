//@ts-check

import { BlurFilter, Container, Graphics } from 'pixi.js';
import { Faller } from '../effects/Faller.js';
import { IScene } from '../../IScene.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';

// GFX 729
/**
 * Creates a burst of water which creates a ripple when hitting the ground.
 */
export class GroundWater extends Faller {
	/**
	 * The BlurFilter of the water droplets.
	 * Storing it to prevent WebGL from creating a new shader every time.
	 * @type {BlurFilter}
	 */
	static BlurFilter;
	static DROPLETS_TIMER = 10;
	static RIPPLE_TIMER = 7;
	static DROPLETS_SCALE_REDUCTION = 0.8;

	_timer = 0;

	_droplets = [new Container(), new Container(), new Container(), new Container()];
	_ripple = new Graphics();

	/**
	 * Creates a small burst of water at the given coordinate with the given velocity. Once it reaches the ground, it creates a ripple.
	 * @param {IScene} scene The Scene where the cloud is spawned.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vy The initial y velocity.
	 * @param {number} vz The initial z velocity.
	 */
	constructor(scene, x, y, z, vx, vy, vz) {
		super(new Container(), scene);
		this._root.addChild(this._droplets[0]);
		this._droplets[0].addChild(this.createDrop(-5.8, -3.55, 0.53));
		this._root.addChild(this._droplets[1]);
		this._droplets[1].addChild(this.createDrop(2.6, 0.25, 1.93));
		this._root.addChild(this._droplets[2]);
		this._droplets[2].addChild(this.createDrop(1.1, -5.75, 1.34));
		this._root.addChild(this._droplets[3]);
		this._droplets[3].addChild(this.createDrop(-4.15, 2.2, 1));
		this._root.addChild(this._ripple);
		this._ripple.visible = false;

		this._x = x;
		this._y = y;
		this._z = z;
		this._vx = vx;
		this._vy = vy;
		this._vz = vz;

		this._weight = 0.6 + Math.random() * 0.3;
		this._vr = (Math.random() * 2 - 1) * 10;
		this.setScale(0.5 + Math.random() * 0.5);
		this._root.angle = Math.random() * 360;
		this.updatePos();

		if (!GroundWater.BlurFilter) {
			GroundWater.BlurFilter = new BlurFilter(0.5);
		}
		this._root.filters = [GroundWater.BlurFilter];
	}

	/**
	 * Once the droplets land, remove the weight, hide the droplets and show the ripple.
	 * The timer is reset so the ripple can grow.
	 */
	landed() {
		this._fadeoutTimer = GroundWater.RIPPLE_TIMER;
		this._weight = 0;
		this._vr = 0;
		this._root.angle = 0;
		for (const d of this._droplets) {
			d.visible = false;
		}
		this._ripple.visible = true;
		this._timer = 0;
	}

	/**
	 * Update the droplets and ripple size.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._timer += timer.tmod;
		if (this._droplets[0].visible) {
			const coef = Math.min(this._timer / GroundWater.DROPLETS_TIMER, 1);
			for (const d of this._droplets) {
				d.scale.set(1 - GroundWater.DROPLETS_SCALE_REDUCTION * coef);
			}
		}
		if (this._ripple.visible) {
			const coef = Math.min(this._timer / GroundWater.RIPPLE_TIMER, 1);
			this._ripple.clear();
			this._ripple.lineStyle(1, 0xffffff);
			this._ripple.drawEllipse(0, 0, coef * 5 + 3, coef * 4 + 1);
		}
	}

	/**
	 * Creates a new droplet of water at the given coordinates, with the given scale.
	 * The rotation is randomized at creation.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} scale The scale of the droplet.
	 * @returns {Asset} The created droplet.
	 */
	createDrop(x, y, scale) {
		const droplet = new Asset(ref.fx.star);
		droplet.x += x;
		droplet.y += y;
		droplet.scale.set(scale);
		droplet.angle = 360 * Math.random();
		return droplet;
	}
}
