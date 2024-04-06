// @ts-check

import { Container } from 'pixi.js';
import { Part } from '../../../Part.js';
import { IScene } from '../../../IScene.js';
import { Animator } from '../../../../display/Animator.js';
import { fx_light_heal } from '../../../../gfx/fx/light_heal.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';

// GFX 714 partIce
/**
 * A random ice shard which fly in a random direction before vanishing.
 */
export class IceShard extends Part {
	/**
	 * The possible shard skin and the position of the shine.
	 * @type {{shard: object, hlx: number, hly: number}[]}
	 */
	static SHARDS_SKINS = [
		{
			shard: ref.fx.ice.shard_1,
			hlx: 1.8,
			hly: -0.65
		},
		{
			shard: ref.fx.ice.shard_2,
			hlx: -2.2,
			hly: -0.45
		},
		{
			shard: ref.fx.ice.shard_3,
			hlx: -0.2,
			hly: -0.65
		},
		{
			shard: ref.fx.ice.shard_4,
			hlx: 0.4,
			hly: 1.55
		}
	];

	/**
	 * Creates a new ice shard with a random skin.
	 * @param {IScene} scene The Scene where the shard is instantiated.
	 * @param {number} x The initial x position.
	 * @param {number} y The initial y position.
	 * @param {number} z The initial z position.
	 * @param {number} width The width of the area where the ice shard can spawn.
	 * @param {number} height The height of the area where the ice shard can spawn.
	 */
	constructor(scene, x, y, z, width, height) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(fx_light_heal);
		const shardIdx = Math.floor(IceShard.SHARDS_SKINS.length * Math.random());
		this._root.addChild(new Asset(IceShard.SHARDS_SKINS[shardIdx].shard));
		this._animator.x += IceShard.SHARDS_SKINS[shardIdx].hlx;
		this._animator.y += IceShard.SHARDS_SKINS[shardIdx].hly;
		this._root.addChild(this._animator);

		this._x = x + (Math.random() * 2 - 1) * width;
		this._y = y + (Math.random() * 2 - 1) * width * 0.5;
		this._z = -Math.random() * (height + 20);

		const c = 0.2;
		this._vx = (this._x - x) * c;
		this._vy = (this._y - y) * c * 0.5;
		this._vz = (this._z - z) * c * 1.5;

		this._weight = 0.2 + Math.random() * 0.4;
		this._ray = 5;
		this.dropShadow();
		this.updatePos();

		this._fadeScale = true;
		this._fadeoutTimer = 10 + Math.random() * 80;
		this._root.angle = Math.random() * 360;
		this._vr = (Math.random() * 2 - 1) * 15;
		this._friction = 0.96;
	}
}
