// @ts-check

import { Container } from 'pixi.js';
import { Phys } from '../../../Phys.js';
import { IScene, SCENE_WIDTH } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { MeteorImpact } from './MeteorImpact.js';
import { Layers } from '../../../DepthManager.js';
import { FireWave } from './FireWave.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Animator } from '../../../../display/Animator.js';
import { fx_meteor_trail } from '../../../../gfx/fx/meteor_trail.js';
import { fx_meteor_fire } from '../../../../gfx/fx/meteor_fire.js';
import { GlowFilter } from '@pixi/filter-glow';

// GFX 823
/**
 * Creates a new meteor which falls from the given side to the opposite side.
 */
export class Meteor extends Phys {
	/**
	 * The external GlowFilter of the trail.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static OuterGlow;

	/**
	 * Rock part of the meteor. Rotates over time.
	 * @type {Asset}
	 */
	_rock;
	/**
	 * Animated trail part of the meteor.
	 * @type {Animator}
	 */
	_trail;
	/**
	 * Animated flaming part of the meteor.
	 * @type {Animator}
	 */
	_fire;

	/**
	 * Spawns in a new metor which falls from the given side.
	 * @param {IScene} scene The scene where the meteor is instantiated.
	 * @param {number} side The side from which the Meteor comes from (-1 left, 1 right).
	 */
	constructor(scene, side) {
		super(new Container(), scene);

		this._rock = new Asset(ref.fx.meteor.rock, 1, false);
		this._rock.anchor.set(0.5, 0.5);
		this._root.addChild(this._rock);

		const anim = new Container();
		this._trail = new Animator(false).loadAnimation(fx_meteor_trail);
		anim.addChild(this._trail);
		this._fire = new Animator(false).loadAnimation(fx_meteor_fire);
		anim.addChild(this._fire);
		this._root.addChild(anim);

		if (!Meteor.OuterGlow) {
			Meteor.OuterGlow = new GlowFilter({
				color: 0xff0000,
				quality: 0.6,
				distance: 7,
				outerStrength: 2,
				innerStrength: 0.7
			});
		}
		anim.filters = [Meteor.OuterGlow];

		this._x = SCENE_WIDTH * 0.5 - side * (20 + Math.random() * 150);
		this._y = this._scene.getRandomPYPos();
		this._z = -250;
		this._vx = side * (12 + Math.random() * 5);
		this._vz = 15 + Math.random() * 5;
		this._ray = 10;

		this._root.angle = Math.atan2(this._vz * 0.5, this._vx) / 0.0174;
		this.dropShadow();
		this.updatePos();
	}

	/**
	 * Update the meteor rotation over time and explode it once it reaches the ground.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._trail.update(timer.deltaTimeMS);
		this._fire.update(timer.deltaTimeMS);

		this._rock.angle += 8 * timer.tmod;
		if (this._z > -this._ray) {
			this._scene.dm.addSprite(new MeteorImpact(this._scene, this._x, this._y), Layers.Scene.FIGHTERS);
			this._scene.dm.addSprite(new FireWave(this._scene, this._x, this._y), Layers.Scene.SHADE);
			this.kill();
		}
	}
}
