// @ts-check

import { Container } from 'pixi.js';
import { IScene, SCENE_WIDTH } from '../../IScene.js';
import { Part } from '../../Part.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Wind } from '../life/Wind.js';
import { Timer } from '../../Timer.js';

/**
 * Creates a particle of wind for the Mistral skill, rishing from one end of the screen toward the other one.
 */
export class MistralFx extends Part {
	/**
	 * Timer for the particle growth animation.
	 * @type {number}
	 */
	_growTimer = 0;

	/**
	 * Creates a wind particle for the mistral skill.
	 * @param {IScene} scene The Scene where the particle is instantiated.
	 * @param {number} side The side of the caster of the skill.
	 */
	constructor(scene, side) {
		super(new Container(), scene);

		const wind = new Container();
		wind.addChild(new Asset(ref.fx.light));
		wind.filters = [Wind.GlowFilter];
		wind.x = Math.random() * 40;
		wind.scale.set(1 + Math.random() * 0.5);
		this._root.addChild(wind);

		this._x = SCENE_WIDTH * 0.5 + (Math.random() * 150 - 100) * side;
		this._y = this._scene.getRandomPYPos();
		this._z = -15;
		this._vx = (9 + Math.random() * 9) * side;
		this._vr = (Math.random() * 2 - 1) * 20;
		this._root.angle = Math.random() * 360;
		this._fadeoutTimer = 10 + Math.random() * 20;
		this.updatePos();
	}

	/**
	 * Updates the growth animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._growTimer < Wind.GROWTH_TIME) {
			this._growTimer += timer.tmod;
			this._root.scale.set(Math.min(this._growTimer / Wind.GROWTH_TIME, 1));
		}
	}
}
