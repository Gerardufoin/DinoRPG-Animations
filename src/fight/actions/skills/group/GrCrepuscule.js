// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Crepuscule.hx

import { Container, DisplayObject, Filter } from 'pixi.js';
import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { GroupEffect } from '../GroupEffect.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { SkillType } from '../../../Enums.js';
import { ElectrifiedMeteor } from '../../../parts/skills/meteor/ElectricMeteor.js';
import { offsetShader } from '../../../../display/shaders/ColorOffsetShader.js';

/**
 * Dawn falls upon the Scene as the caster blast the targets with electrified meteors.
 */
export class GrCrepuscule extends GroupEffect {
	/**
	 * Final position of the crepusule asset.
	 * @type {number}
	 */
	static SHADE = 150;
	/**
	 * The filter used to darken the scene.
	 * @type {Filter}
	 */
	static NightFilter;

	/**
	 * Reference to the crepuscule asset.
	 * @type {Container}
	 */
	_mcCrep;
	/**
	 * List of the meteorite currently on the Scene.
	 * @type {ElectrifiedMeteor[]}
	 */
	_meteors = [];
	/**
	 * List of the container who had a night filter applied to them.
	 * @type {DisplayObject[]}
	 */
	_nightContainer = [];

	/**
	 * Dawn falls upon the Scene and the caster strikes its targets with electrified meteors.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.02;

		this.addSkillAura(SkillType.Fire);

		this._mcCrep = new Asset(ref.fx.crepuscule);
		this._scene.dm.addContainer(this._mcCrep, Layers.Scene.SHADE);
		this.addNightFilter();
		this.fade(0);
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			case 0:
				this.fade(this._coef);
				if (this._coef === 1) {
					this._manualAura = true;
					this._caster.playAnim('release');
					this._coefSpeed = 0.025;
					this.nextStep();

					for (const t of this._targets) {
						const m = new ElectrifiedMeteor(this._scene, t.fighter, t.life, this._caster.intSide);
						this._scene.dm.addSprite(m, Layers.Scene.FIGHTERS);
						this._meteors.push(m);
					}
				}
				break;
			case 1:
				this._aura.update(1);
				this._meteors = this._meteors.filter((m) => !m.isDeleted);
				if (this._meteors.length == 0) {
					this._coefSpeed = 0.1;
					this.nextStep();
				}
				break;
			case 2:
				this.fade(1 - this._coef);
				this._aura.update(1 - this._coef);
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.removeNightFilter();
					this.removeSkillAura();
					this._scene.dm.removeContainer(this._mcCrep, Layers.Scene.SHADE);
					this.end();
				}
		}
	}

	/**
	 * Adds the night filter to all the layers of the scene beside fighters.
	 * If the layer is the FIGHERS layer, adds the night filter to all the children, then remove it for the targets and the caster.
	 */
	addNightFilter() {
		if (!GrCrepuscule.NightFilter) {
			GrCrepuscule.NightFilter = new Filter(undefined, offsetShader, {
				offset: new Float32Array([0, 0, 0]),
				mult: new Float32Array([1, 1, 1])
			});
		}

		const noNightFilter = [
			this._caster.getRootContainer().name,
			...this._targets.map((t) => t.fighter.getRootContainer().name)
		];
		for (const k in Layers.Scene) {
			const layer = this._scene.dm.getLayer(Layers.Scene[k]);
			if (k !== 'FIGHTERS') {
				this._nightContainer.push(layer);
			} else {
				for (const c of layer.children) {
					// Adds the night filter for all element in the FIGHTERS layer, except the caster and the targets.
					if (!noNightFilter.includes(c.name)) {
						this._nightContainer.push(c);
					}
				}
			}
		}
		this._nightContainer.map((n) => {
			if (!n.filters) {
				n.filters = [];
			}
			n.filters.push(GrCrepuscule.NightFilter);
		});
	}

	/**
	 * Remove the night filter from all the container where it was previously applied.
	 */
	removeNightFilter() {
		this._nightContainer.map((n) => {
			n.filters.pop();
			if (n.filters.length == 0) {
				n.filters = undefined;
			}
		});
	}

	/**
	 * Updates the dawn animation.
	 * @param {number} coef The current coefficient of the animation.
	 */
	fade(coef) {
		const inc = Math.floor(GrCrepuscule.SHADE * coef);
		GrCrepuscule.NightFilter.uniforms.offset = new Float32Array([-inc, -inc, -inc]);
		this._mcCrep.y = -GrCrepuscule.SHADE * (1 - coef);
	}
}
