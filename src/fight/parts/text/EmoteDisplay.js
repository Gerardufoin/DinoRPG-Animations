// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Score.hx

import { Phys2D } from '../Phys2D.js';
import { Timer } from '../../Timer.js';
import { IScene } from '../../IScene.js';
import { Container } from 'pixi.js';
import { EmoteBehaviour, EmoteList } from '../../Enums.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';

/**
 * Instantiate an emote which will fadeout over time.
 */
export class EmoteDisplay extends Phys2D {
	/**
	 * How the emote behaves, based on the EmoteBehaviour enum.
	 * @type {number}
	 */
	_behaviour;
	/**
	 * Y limit for the Score.
	 * @type {number}
	 */
	_limitY;
	/**
	 * Timer of the emote behaviours.
	 * @type {number}
	 */
	_timer = 0;

	/**
	 * Create an emote at the given coordinate. The emote will spawn depending on the display type given.
	 * @param {IScene} scene The Scene where the Score will be spawned.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 * @param {number} emote The emote to display.
	 * @param {number} behaviour The way the emote behaves in the Scene.
	 */
	constructor(scene, x, y, emote, behaviour) {
		super(new Container(), scene);

		let bubble;
		switch (emote) {
			case EmoteList.Angry:
				bubble = new Asset(ref.emotes.angry);
				break;
			case EmoteList.Surprise:
				bubble = new Asset(ref.emotes.surprise);
				break;
			case EmoteList.Question:
				bubble = new Asset(ref.emotes.question);
				break;
			case EmoteList.Love:
				bubble = new Asset(ref.emotes.love);
				break;
		}
		if (bubble) {
			bubble.anchor.set(0.5);
			this._root.addChild(bubble);
		}

		this._x = x;
		this._y = y;
		this._root.visible = false;
		this._sleep = Math.random() * 5;

		this._behaviour = behaviour;
		this._fadeoutTimer = 40;

		switch (behaviour) {
			case EmoteBehaviour.Bounce:
				this._vy = -8;
				this._weight = 0.8;
				this._limitY = y - 25;
				break;
			case EmoteBehaviour.Float:
				this._vy = -1.5;
				this._friction = 0.95;
				break;
		}
	}

	/**
	 * Update the Score position and checks if the Y limit is not crossed.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._timer += timer.tmod;
		// Bounce - Invert the velocity if the entity reaches the Y limit.
		if (this._limitY !== undefined && this._vy > 0 && this._y > this._limitY) {
			this._y = this._limitY;
			this._vy *= -0.8;
		}
		if (this._behaviour == EmoteBehaviour.Grow) {
			this.setScale(0.8 + Math.sin(((this._timer % 10) / 10) * Math.PI) * 0.2);
		}
	}
}
