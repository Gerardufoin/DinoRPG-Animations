// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Ashes2.hx

import { Container } from 'pixi.js';
import { Part } from '../../../../Part.js';
import { Animator } from '../../../../../display/Animator.js';
import { env_fire_ash } from '../../../../../gfx/fx/env/fire/ash.js';
import { IScene, SCENE_WIDTH } from '../../../../IScene.js';
import { Timer } from '../../../../Timer.js';

/**
 * Creates a particle of ash which goes up and vanish.
 * The particle refreshes itself automatically until killed.
 */
export class Ashes extends Part {
	/**
	 * Creates a particle of ash which floats up and vanish.
	 * The particle then respawn somewhere else in the scene, until killed.
	 * @param {IScene} scene The Scene where the particle of ash is instantiated.
	 */
	constructor(scene) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(env_fire_ash);
		this._root.addChild(this._animator);

		this._vr = 0;
		this.bounceFrict = 0;
		this.groundFrict = 0;
		this._sleep = Math.random() * 20;

		this.init();
	}

	/**
	 * Initialize the ash particle parameters.
	 */
	init() {
		this._x = Math.random() * SCENE_WIDTH;
		this._y = this._scene.getRandomPYPos();
		this._z = 0;

		this._root.angle = -Math.random() * 30;
		this._animator.setFrame(0);
		this._fadeoutTimer = this._animator.getCurrentAnimationLength() + Math.random() * 20;
		this._root.alpha = 1;
		this.updatePos();
	}

	/**
	 * If the timer is about to end, reset the ash.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		if (this._fadeoutTimer - timer.tmod <= 0) {
			this.init();
			this._fadeoutTimer += timer.tmod;
		}
		super.update(timer);
	}
}
