// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { Animator } from '../../../display/Animator.js';
import { fx_head_or_tail } from '../../../gfx/fx/head_or_tail.js';
import { Timer } from '../../Timer.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { IScene } from '../../IScene.js';
import { Fighter } from '../../Fighter.js';

/**
 * Creates a rotating card which can be stopped on either side.
 */
export class HeadOrTail extends Phys2D {
	/**
	 * Is the card fading out.
	 * @type {boolean}
	 */
	fade = false;

	/**
	 * Creates a rotating card at the given coordinates.
	 * @param {IScene} scene The Scene where the card is instantiated.
	 * @param {Fighter} caster The Fighter creating the card.
	 * @param {string} type The type of card to create.
	 */
	constructor(scene, caster, type) {
		super(new Container(), scene);

		let id = 0;
		switch (type) {
			case 'face':
				id = 0;
				break;
			case 'joker':
				id = 1;
				break;
		}
		this._animator = new Animator(false).loadAnimation(fx_head_or_tail, 1, [id]);
		this._root.addChild(this._animator);

		this._x = -8;
		this._y = -caster.height - 48;
	}

	/**
	 * Stop the animation on either the success face or the failed face.
	 * @param {boolean} success If true, stops the animation on the success face. Otherwise stops it on the failed face.
	 */
	stop(success) {
		this._animator.playing = false;
		this._animator.setFrame(success ? 8 : 0);
	}

	/**
	 * If the card has stopped, moves it up and fade it out over time.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this.fade) {
			this._y += -2 * timer.tmod;
			this._root.alpha = PixiHelper.mm(0, this._root.alpha - 0.07 * timer.tmod, 1);
		}
	}
}
