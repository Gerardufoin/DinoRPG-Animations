// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Spirit.hx

import { Container, Graphics } from 'pixi.js';
import { ref as gfx } from '../../gfx/references.js';
import { Part } from '../Part.js';
import { Timer } from '../Timer.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Asset } from '../../display/Asset.js';
import { IScene } from '../IScene.js';

/**
 * Instantiate a Spirit in the Scene.
 * The Spirit will gradually move up and then disappear.
 */
export class Spirit extends Part {
	/**
	 * Width of the Spirit's tail.
	 * @type {number}
	 */
	static TAIL_WIDTH = 100;
	/**
	 * Height of the Spirit's tail.
	 * @type {number}
	 */
	static TAIL_HEIGHT = 12;
	/**
	 * Fadeout timer for the Spirit's tail.
	 * @type {number}
	 */
	static TAIL_FADEOUT_FRAMES = 10;
	/**
	 * How often a new tail is instantiated (1 would be 1 each tmod).
	 * @type {number}
	 */
	static TAIL_FREQUENCY = 0.75;
	/**
	 * Vertical speed of the Spirit.
	 * @type {number}
	 */
	static SPEED_Y = 1.5;
	/**
	 * Horizontal speed of the Spirit.
	 * @type {number}
	 */
	static SPEED_X = 0.2;
	/**
	 * The width of the horizontal back and forth of the spirit.
	 * @type {number}
	 */
	static MOVEMENT_WIDTH = 12;

	/**
	 * The head part of the Spirit.
	 * @type {Container}
	 */
	_head = new Container();
	/**
	 * The tail part of the Spirit.
	 * Comprised of multiple square Graphics.
	 * @type {Container}
	 */
	_tail = new Container();
	/**
	 * References to all the tail parts instantiated in the scene and their current timeout.
	 * @type {{part: Container, timer: number}[]}
	 */
	_tailparts = [];

	/**
	 * Timer for the spirit ascension.
	 * @type {number}
	 */
	_timer = 0;
	/**
	 * Time to spawn tails at predefined intervals.
	 * @type {number}
	 */
	_tailTimer = 0;

	/**
	 * Instantiate a new head for the Spirit and add it to the Fighter layer of the Scene.
	 * @param {IScene} scene The Scene where to add the Spirit.
	 */
	constructor(scene) {
		super(new Container(), scene);
		this._head.addChild(new Asset(gfx.parts.ghost));

		this._root.addChild(this._tail);
		this._root.addChild(this._head);
		this._fadeoutTimer = 100;
		this._root.filters = [
			new GlowFilter({
				distance: 5,
				color: 0xffffff,
				outerStrength: 1
			})
		];
	}

	/**
	 * Get the x/y position of a spirit part based on the given timer, as well as its orientation (angle).
	 * The position follow a sinusoidal wave toward the top of the screen.
	 * @param {number} timer The time elapsed for the required position.
	 * @returns {{x: number, y: number, a: number}} The x/y position and the angle based on the given time.
	 */
	getPosition(timer) {
		const xRad = timer * (Spirit.SPEED_X + timer * 0.0015);
		const sinX = Math.sin(xRad);
		const cosX = Math.cos(xRad);
		// sharp sinusoidal wave oscillating between -1 and 1 so the head's angle move consistently.
		const ss = 1 - 2 * Math.abs((((xRad + Math.PI / 2) / Math.PI) % 2) - 1);
		return {
			x: sinX * Spirit.MOVEMENT_WIDTH,
			y: -timer * (Spirit.SPEED_Y + timer * 0.05),
			a: (1 - Math.abs(ss)) * 45 * Math.sign(cosX)
		};
	}

	static i = 0;
	/**
	 * Update the Spirit animation until its disappearance.
	 * @param {Timer} timer Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._timer += timer.tmod;
		const p = this.getPosition(this._timer);
		this._head.y = p.y;
		this._head.x = p.x;
		this._head.angle = p.a;

		while (this._tailTimer + Spirit.TAIL_FREQUENCY <= this._timer) {
			this._tailTimer += Spirit.TAIL_FREQUENCY;
			const pt = this.getPosition(this._tailTimer);

			const tailSprite = new Graphics()
				.beginFill(0xffffff)
				.drawRect(-Spirit.TAIL_WIDTH / 2, -Spirit.TAIL_HEIGHT / 2, Spirit.TAIL_WIDTH, Spirit.TAIL_HEIGHT);
			tailSprite.scale.x = 0.07;
			const tailPart = new Container();
			tailPart.addChild(tailSprite);
			this._tail.addChild(tailPart);
			tailPart.x = pt.x;
			tailPart.y = pt.y;
			tailPart.angle = pt.a + 90;

			// Tails fadeout over time and are then removed from the scene once their timer reaches 0.
			this._tailparts.push({
				timer: Spirit.TAIL_FADEOUT_FRAMES - (this._timer - this._tailTimer),
				part: tailPart
			});
		}
		// Updates tails and remove them once done.
		this._tailParts = this._tailparts.filter((t) => {
			t.timer -= timer.tmod;
			if (t.timer <= 0) {
				this._tail.removeChild(t.part);
				return false;
			}
			t.part.scale.y = t.timer / Spirit.TAIL_FADEOUT_FRAMES;
			return true;
		});
	}
}
