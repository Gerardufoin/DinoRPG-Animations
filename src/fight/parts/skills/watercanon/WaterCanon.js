// @ts-check

import { Container, TilingSprite, WRAP_MODES } from 'pixi.js';
import { ref } from '../../../../gfx/references.js';
import { Timer } from '../../../Timer.js';
import { Animator } from '../../../../display/Animator.js';
import { TextureManager } from '../../../../display/TextureManager.js';
import { Part } from '../../../Part.js';
import { IScene } from '../../../IScene.js';
import { Fighter } from '../../../Fighter.js';
import { fx_water_canon_end } from '../../../../gfx/fx/water_canon_end.js';
import { WaterDrop } from './WaterDrop.js';
import { DepthManager } from '../../../DepthManager.js';
import { Ecume } from './Ecume.js';

/**
 * A pillar of water starting from a Fighter and goind toward another Fighter.
 * Can be closed.
 */
export class WaterCanon extends Part {
	/**
	 * Scale of the canon.
	 * @type {number}
	 */
	static CANON_SCALE = 0.5;
	/**
	 * Time (in frames) taken for the pillar to open or close.
	 * @type {number}
	 */
	static TRANSITION_TIME = 12;

	/**
	 * The Fighter casting the water canon.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * The Fighter targeted by the water canon.
	 * @type {Fighter}
	 */
	_target;
	/**
	 * The depth manager of the water canon.
	 * @type {DepthManager}
	 */
	_depthManager;

	/**
	 * The pillar part of the water.
	 * @type {TilingSprite}
	 */
	_pillar;
	/**
	 * The animation of the end part of the water.
	 * @type {Animator}
	 */
	_bottom;
	/**
	 * Container for the pillar and bottom, scales on opening and closing.
	 * @type {Container}
	 */
	_canon;
	/**
	 * Is the pillar opening or closing.
	 * @type {boolean}
	 */
	_closing = false;
	/**
	 * Timer used for the transition animations.
	 * @type {number}
	 */
	_timer = 0;

	/**
	 * Timer used to spawn particle every tmod.
	 * @type {number}
	 */
	_particleTimer = 0;

	/**
	 * Creates a water canon going from the caster to the target.
	 * @param {IScene} scene The Scene where the skill is happening.
	 * @param {Fighter} caster The caster of the water canon.
	 * @param {Fighter} target The target of the water canon.
	 */
	constructor(scene, caster, target) {
		super(new Container(), scene);

		this._caster = caster;
		this._target = target;
		this._depthManager = new DepthManager(3);
		this._root.addChild(this._depthManager);

		this._canon = new Container();
		const tex = TextureManager.getTextureFromCompressedReference(ref.fx.water.canon);
		tex.baseTexture.wrapMode = WRAP_MODES.REPEAT;
		this._pillar = new TilingSprite(tex, 36, 300);
		this._pillar.anchor.set(0.5, 1);
		this._canon.addChild(this._pillar);

		this._bottom = new Animator(false).loadAnimation(fx_water_canon_end);
		this._canon.addChild(this._bottom);

		this._canon.angle = 90;
		const scaler = new Container();
		scaler.addChild(this._canon);
		scaler.scale.set(WaterCanon.CANON_SCALE);
		this._depthManager.addContainer(scaler, 0);
	}

	/**
	 * Update the animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		this._x = this._target.position.x;
		this._y = this._target.position.y + 0.1;
		this._z = this._target.position.z - this._target.height;
		super.update(timer);

		this._depthManager.update(timer);
		// Texture animation
		this._pillar.tilePosition.y += timer.tmod * 5;
		// End of canon animation
		this._bottom.update(timer.deltaTimeMS);
		// Opening/Closing
		if (this._timer < WaterCanon.TRANSITION_TIME) {
			this._timer = Math.min(this._timer + timer.tmod, WaterCanon.TRANSITION_TIME);
			const coef = this._timer / WaterCanon.TRANSITION_TIME;
			this._canon.scale.x = this._closing ? 1 - coef : coef;
		}

		if (!this._closing) {
			// Compute the angle from target to caster
			const ty = this._scene.getY(this.position.y) + this.position.z * 0.5;
			const py =
				this._scene.getY(this._caster.position.y) + (this._caster.position.z - this._caster.height) * 0.5;
			const dx = this._caster.position.x - this.position.x;
			const dy = py - ty;
			const angle = Math.atan2(dy, dx) / 0.0174;
			this._root.angle = angle;
			// Scale canon length
			const dist = Math.sqrt(dx ** 2 + dy ** 2);
			const prevHeight = this._pillar.height;
			this._pillar.height = dist / WaterCanon.CANON_SCALE;
			this._pillar.tilePosition.y += this._pillar.height - prevHeight;

			// Instantiate particles
			this._particleTimer += timer.tmod;
			if (this._particleTimer >= 1) {
				this._particleTimer -= 1;
				this._depthManager.addSprite(new WaterDrop(this._scene, dist, 0), 1);
				this._depthManager.addSprite(new Ecume(this._scene), 2);
			}
		}
	}

	/**
	 * Close the pillar and fade it out.
	 */
	close() {
		this._closing = true;
		this._timer = 0;
		this._fadeoutTimer = 20;
		this._fadeLimit = 5;
	}
}
