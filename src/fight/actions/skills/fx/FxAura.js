// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Aura.hx

import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { PixiHelper } from '../../../../display/PixiHelper.js';
import { fx_detonation } from '../../../../gfx/fx/detonation.js';
import { Layers } from '../../../DepthManager.js';
import { AuraType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { Timer } from '../../../Timer.js';
import { QuickAnim2D } from '../../../parts/QuickAnim2D.js';
import { AuraEffect } from '../../../parts/skills/aura/AuraEffect.js';
import { AuraFireSpark } from '../../../parts/skills/aura/AuraFireSpark.js';
import { AuraLight } from '../../../parts/skills/aura/AuraLight.js';

/**
 * An aura is displayed on the targeted Fighter.
 */
export class FxAura extends State {
	/**
	 * The Fighter casting the aura.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * The color of the aura.
	 * @type {number}
	 */
	_color;
	/**
	 * The type of aura to display. Value from AuraType.
	 * @type {number}
	 */
	_type;

	/**
	 * Timer to spawn fx every 1 tmod.
	 * @type {number}
	 */
	_fxTimer = 0;

	/**
	 * An aura is displayed on the targeted Fighter.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The Fighter displaying the aura.
	 * @param {number} color The color of the aura.
	 * @param {number} type The type of aura to display. A value from the AuraType enum.
	 */
	constructor(scene, endCall, fighter, color, type) {
		super(scene, endCall);
		// As the state is called from Skill, the fighter is already ready, do not add to the cast.
		this._caster = fighter;
		this._color = color;
		this._type = type;
		this._coefSpeed = 0.05;

		if (!Object.values(AuraType).includes(type)) {
			console.error(`[FxAura]: Unknown aura type '${type}'`);
		}

		this.init();
	}

	/**
	 * Instantiate the detonation and the sparks if needed.
	 */
	init() {
		let pmax = 0;
		let speed = 0.3;
		switch (this._type) {
			case AuraType.Burst:
				pmax = 36;
				break;
			case AuraType.Detonate:
				{
					pmax = 72;
					speed = 3;
					const detonation = new QuickAnim2D(
						this._scene,
						fx_detonation,
						this._caster.getRootContainer().x,
						this._caster.getRootContainer().y - this._caster.height * 0.5
					);
					detonation.getRootContainer().filters = [
						ConstantShaderManager.getAdjustColorFilter(20),
						ConstantShaderManager.getBlurFilter(1, 1, 1)
					];
					detonation.getRootContainer().alpha = 0.5;
					this._scene.dm.addSprite(detonation, Layers.Scene.PARTS);
				}
				break;
		}
		for (let i = 0; i < pmax; ++i) {
			this._scene.dm.addSprite(
				new AuraFireSpark(
					this._scene,
					this._caster.position.x,
					this._caster.position.y,
					-Math.random() * this._caster.height,
					speed
				),
				Layers.Scene.FIGHTERS
			);
		}
	}

	/**
	 * Updates the state of the aura.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._coef < 0.9) {
			this._fxTimer += timer.tmod;
			switch (this._type) {
				case AuraType.Burst:
				case AuraType.Detonate:
				case AuraType.Light:
					if (this._fxTimer >= 1) {
						this._fxTimer -= 1;
						for (let i = 0; i < 2; ++i) {
							this._caster.dm.addSprite(
								new AuraLight(
									this._scene,
									(Math.random() * 2 - 1) * this._caster.ray,
									-Math.random() * this._caster.height,
									this._color
								),
								Math.floor(Math.random() * 2) == 0 ? Layers.Fighter.FRONT : Layers.Fighter.BACK
							);
						}
					}
					break;
				case AuraType.Spiral:
				case AuraType.Line:
					if (PixiHelper.tmodRandom(0.5, timer.tmod)) {
						const d = Math.floor(Math.random() * 3) == 0 ? Layers.Fighter.FRONT : Layers.Fighter.BACK;
						this._caster.dm.addSprite(
							new AuraEffect(this._scene, this._type, this._color, d == Layers.Fighter.FRONT ? 0.4 : 1),
							d
						);
					}
					break;
			}
		}

		if (this._coef == 1) {
			this.end();
		}
	}
}
