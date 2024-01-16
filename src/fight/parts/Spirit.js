// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Spirit.hx

import { Container, Graphics, Sprite } from 'pixi.js';
import { ref as gfx } from '../../gfx/references.js';
import { Part } from '../Part.js';
import { TextureManager } from '../../display/TextureManager.js';
import { Scene } from '../Scene.js';
import { Timer } from '../Timer.js';

export class Spirit extends Part {
	static TAIL_WIDTH = 100;
	static TAIL_HEIGHT = 12;
	_head = new Container();
	_tail = new Container();
	_angle = -1.57;
	_speed = 1.5;
	_dec = 0;
	_speedDec = 23;
	_ec = 0.1;

	constructor(scene) {
		super(new Container(), scene, Scene.LAYERS.FIGHTERS);
		const texture = TextureManager.getTextureFromCompressedReference(gfx.parts.mcGhost);
		const sprite = Sprite.from(texture);
		this._head.addChild(sprite);
		sprite.x -= gfx.parts.mcGhost.offset.x;
		sprite.y -= gfx.parts.mcGhost.offset.y;

		this._tail.alpha = 0.4;
		this._root.addChild(this._tail);
		this._root.addChild(this._head);
		this._timer = 100;
		//Filt.glow(root,10,1,0xFFFFFF ); TODO
	}

	/**
	 * Update the Spirit animation until its disappearance.
	 * @param {Timer} timer Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._dec = (this._dec + this._speedDec) % 628;
		this._angle += Math.cos(this._dec * 0.01) * this._ec;

		const dist = this._speed * timer.tmod;
		const dx = Math.cos(this._angle) * dist;
		const dy = Math.sin(this._angle) * dist;

		this._head.x += dx;
		this._head.y += dy;

		const tailPart = new Graphics()
			.beginFill(0xffffff)
			.drawRect(-Spirit.TAIL_WIDTH / 2, -Spirit.TAIL_HEIGHT / 2, Spirit.TAIL_WIDTH, Spirit.TAIL_HEIGHT);
		this._tail.addChild(tailPart);
		tailPart.x = this._head.x;
		tailPart.y = this._head.y;
		tailPart.angle = this._angle / 0.0174 + 180;
		tailPart.scale.x = this._speed / 100;
		this._head.angle = tailPart.angle - 90;

		this._speedDec += 0.3 * timer.tmod;
		this._ec += 0.002 * timer.tmod;
		this._speed += 0.1 * timer.tmod;
	}
}
