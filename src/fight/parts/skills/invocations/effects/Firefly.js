// @ts-check
import { Container } from 'pixi.js';
import { IScene, SCENE_WIDTH } from '../../../../IScene.js';
import { Part } from '../../../../Part.js';
import { Wind } from '../../../life/Wind.js';
import { Asset } from '../../../../../display/Asset.js';
import { ref } from '../../../../../gfx/references.js';
import { Timer } from '../../../../Timer.js';

// GFX 752 (fairy version)
/**
 * Creates a firefly particle at the given coordinates.
 * Invoked by the Fairies invocation.
 */
export class Firefly extends Part {
	/**
	 * Time taken (in frames) for the particle to grow from 0 to 1.
	 * @type {number}
	 */
	static GROWTH_TIME = 7;

	/**
	 * Grow the firefly particle over time.
	 * @type {number}
	 */
	_growTimer = 0;

	/**
	 * Creates a Firefly particle which hangs around a random part of the scene before vanishing.
	 * @param {IScene} scene The Scene where the particle is spawned in.
	 */
	constructor(scene) {
		super(new Container(), scene);

		const light = new Asset(ref.fx.light, Math.round(Math.random() * 5) / 10 + 3.5);
		const offset = new Container();
		offset.addChild(light);
		offset.x = 10 + Math.random() * 30;
		this._root.addChild(offset);
		this._root.filters = [Wind.GlowFilter];

		this._x = Math.random() * SCENE_WIDTH;
		this._y = scene.getRandomPYPos();

		this._fadeoutTimer = 60 + Math.random() * 20;

		this._vr = (Math.random() * 2 - 1) * 20;
		this._root.angle = Math.random() * 360;

		this.sleep(Math.random() * 40);
		this.updatePos();
	}

	/**
	 * Update the size of the firefly particle.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._sleep <= 0 && this._growTimer < Wind.GROWTH_TIME) {
			this._growTimer += timer.tmod;
			this._root.scale.set(Math.min(this._growTimer / Wind.GROWTH_TIME, 1));
		}
	}
}
