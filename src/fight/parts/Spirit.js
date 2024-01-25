// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Spirit.hx

import { Container, Graphics, Sprite } from 'pixi.js';
import { ref as gfx } from '../../gfx/references.js';
import { Part } from '../Part.js';
import { TextureManager } from '../../display/TextureManager.js';
import { Scene } from '../Scene.js';
import { Timer } from '../Timer.js';
import { GlowFilter } from '@pixi/filter-glow';

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
	static TAIL_FADEOUT_FRAMES = 13;
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
	 * Current angle of the Spirit.
	 * @type {number}
	 */
	_angle = -1.57;
	/**
	 * Current speed of the Spirit. Increases over time.
	 * @type {number}
	 */
	_speed = 1.5;
	/**
	 * Increment for the angle rotation.
	 * @type {number}
	 */
	_dec = 0;
	/**
	 * Speed at which _dec is changing. Faster over time.
	 * @type {number}
	 */
	_speedDec = 23;
	/**
	 * Dunno. Help changing the angle over time, but still a mystery.
	 * @type {number}
	 */
	_ec = 0.1;

	/**
	 * Instantiate a new head for the Spirit and add it to the Fighter layer of the Scene.
	 * @param {Scene} scene The Scene where to add the Spirit.
	 */
	constructor(scene) {
		super(new Container(), scene);
		const texture = TextureManager.getTextureFromCompressedReference(gfx.parts.mcGhost);
		const sprite = Sprite.from(texture);
		this._head.addChild(sprite);
		sprite.x -= gfx.parts.mcGhost.offset.x;
		sprite.y -= gfx.parts.mcGhost.offset.y;

		this._root.addChild(this._tail);
		this._root.addChild(this._head);
		this._fadeoutTimer = 100;
		this._root.filters = [
			new GlowFilter({
				distance: 5,
				color: 0xffffff,
				innerStrength: 0,
				outerStrength: 1
			})
		];
	}

	/**
	 * Update the Spirit animation until its disappearance.
	 * @param {Timer} timer Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._dec = (this._dec + this._speedDec * timer.tmod) % 628;
		this._angle += Math.cos(this._dec * 0.01) * this._ec * timer.tmod;

		const dist = this._speed * timer.tmod;
		const dx = Math.cos(this._angle) * dist;
		const dy = Math.sin(this._angle) * dist;

		this._head.x += dx;
		this._head.y += dy;

		const tailSprite = new Graphics()
			.beginFill(0xffffff)
			.drawRect(-Spirit.TAIL_WIDTH / 2, -Spirit.TAIL_HEIGHT / 2, Spirit.TAIL_WIDTH, Spirit.TAIL_HEIGHT);
		tailSprite.scale.x = this._speed / 100;
		const tailPart = new Container();
		tailPart.addChild(tailSprite);
		this._tail.addChild(tailPart);
		tailPart.x = this._head.x;
		tailPart.y = this._head.y;
		tailPart.angle = this._angle / 0.0174 + 180;
		this._head.angle = tailPart.angle - 90;

		// Tails fadeout over time and are then removed from the scene once their timer reaches 0.
		this._tailparts.push({ timer: Spirit.TAIL_FADEOUT_FRAMES, part: tailPart });
		this._tailParts = this._tailparts.filter((t) => {
			t.timer -= timer.tmod;
			if (t.timer <= 0) {
				this._tail.removeChild(t.part);
				return false;
			}
			t.part.scale.y = t.timer / Spirit.TAIL_FADEOUT_FRAMES;
			return true;
		});

		this._speedDec += 0.3 * timer.tmod;
		this._ec += 0.002 * timer.tmod;
		this._speed += 0.1 * timer.tmod;
	}
}
