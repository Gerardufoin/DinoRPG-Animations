// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/ChainLightning.hx

import { BLEND_MODES, Graphics } from 'pixi.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { GroupEffect } from '../GroupEffect.js';
import { Bolt } from '../../../parts/life/Bolt.js';
import { Layers } from '../../../DepthManager.js';
import { LifeEffect, SkillType } from '../../../Enums.js';

/**
 * The caster cast a lightning bolt which bounces from target to target.
 */
export class GrChainLightning extends GroupEffect {
	/**
	 * Max number of the bolt segments drawn at a time.
	 * @type {number}
	 */
	static MAX_SEGMENTS_DISPLAY = 20;

	/**
	 * All the segments the bolt will have to go through to complete the skill.
	 * Will go from targets to targets with a maximum of MAX_SEGMENTS_DISPAYS segments from one target to another.
	 * @type {{x: number, y: number, target?: {fighter: Fighter, life?: number}}[]}
	 */
	_boltSegments = [];
	/**
	 * Current id for the segments to display.
	 * @type {number}
	 */
	_currentId;
	/**
	 * The Graphic for the bolt, which will be udpated every frame of the expected framerate.
	 * @type {Graphics}
	 */
	_bolt;

	/**
	 * The caster cast a lightning bolt which goes through all the targets and damages them on contact.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);

		this._caster.playAnim('cast');
		this.addSkillAura(SkillType.Lightning);
		this._coefSpeed = 0.03;

		this._bolt = new Graphics();
		this._bolt.blendMode = BLEND_MODES.ADD;
		this._bolt.filters = [Bolt.GlowFilter];
		this._scene.dm.addContainer(this._bolt, Layers.Scene.PARTS);

		// MAX_SEGMENTS_DISPLAY segments are always trying to be rendered, so start in the negative so the first display includes only the first segments.
		// First display will be -20...0, so only segment 0 will be rendererd. The next display will be -19..1, so segment 0 and 1 are displayed, etc...
		this._currentId = -GrChainLightning.MAX_SEGMENTS_DISPLAY;

		let px = this._caster.getRootContainer().x;
		let py = this._caster.getRootContainer().y;
		this._boltSegments.push({ x: px, y: py });

		// Create all the segments.
		for (const t of this._targets) {
			const tdx = t.fighter.getRootContainer().x - px;
			const tdy = t.fighter.getRootContainer().y - py;
			const dist = Math.sqrt(tdx ** 2 + tdy ** 2);
			// Create a maximum of MAX_SEGEMENTS_DISPLAY number of steps, based on the distance.
			const steps = Math.ceil(dist / GrChainLightning.MAX_SEGMENTS_DISPLAY);
			for (let i = 0; i < steps; ++i) {
				const coef = (i + 1) / steps;
				this._boltSegments.push({ x: px + coef * tdx, y: py + coef * tdy, target: coef === 1 ? t : undefined });
			}
			px += tdx;
			py += tdy;
		}
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Charges the aura of the caster
			case 0:
				if (this._coef === 1) {
					this.nextStep();
					this._caster.playAnim('release');
				}
				break;
			// Draws the bolt. Once the bolt has reached the last segment, end the skill.
			case 1:
				if (timer.frameElapsed) {
					this._bolt.clear();
					// Select all the segments to draw for this frame.
					const toDraw = [];
					this._currentId++;
					for (let i = this._currentId; i < this._currentId + GrChainLightning.MAX_SEGMENTS_DISPLAY; ++i) {
						const s = this._boltSegments[i];
						if (s) {
							toDraw.push(s);
							// If the segment has a target, damage it and remove the target from the segment.
							if (s.target) {
								if (s.target.life !== null) {
									s.target.fighter.damages(s.target.life, 20, { fx: LifeEffect.Lightning });
								}
								s.target = undefined;
							}
						}
					}

					// Draw the segments if there is more than 1 point.
					if (toDraw.length > 1) {
						this._bolt.lineStyle(1, 0xffffff);
						// Set the start of the bolt
						const first = toDraw.shift();
						this._bolt.moveTo(first.x, first.y);
						const ec = 6;
						const half = toDraw.length * 0.5;

						// Draw all the remaining segments.
						for (let i = 0; i < toDraw.length; ++i) {
							const p = toDraw[i];
							const c = 1 - Math.abs(i - half) / half;
							this._bolt.lineStyle(1 + c * 4, 0xffffff, 100);
							this._bolt.lineTo(p.x + (Math.random() * 2 - 1) * ec, p.y + (Math.random() * 2 - 1) * ec);
						}
					}
				}

				// If _currentId has reached the end of the segments, the skill is over.
				if (this._currentId >= this._boltSegments.length) {
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}
}
