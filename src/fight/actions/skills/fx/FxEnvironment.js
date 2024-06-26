// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Env.hx

import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { Timer } from '../../../Timer.js';
import { AirEnvironment } from '../../../parts/skills/env/air/AirEnvironment.js';
import { FireEnvironment } from '../../../parts/skills/env/fire/FireEnvironment.js';
import { LightningEnvironment } from '../../../parts/skills/env/lightning/LightningEnvironment.js';
import { WaterEnvironment } from '../../../parts/skills/env/water/WaterEnvironment.js';
import { WoodEnvironment } from '../../../parts/skills/env/wood/WoodEnvironment.js';

/**
 * Creates a new environment which will be displayed on the background of the Scene.
 */
export class FxEnvironment extends State {
	/**
	 * An environment of the given type is created in the Scene.
	 * If a previous environment exists, it is disposed of.
	 * If the remove parameter is true, only removes the current environment and does not setup a new one.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {number} type The type of environment. A value from the SkillType enum.
	 * @param {boolean} remove If true, only remove the existing environment.
	 */
	constructor(scene, endCall, type, remove) {
		super(scene, endCall);
		this._coefSpeed = 0.0125;

		if (remove === true) {
			this._scene.removeEnvironment();
			return;
		}
		switch (type) {
			case SkillType.Fire:
				this._scene.setEnvironment(new FireEnvironment(this._scene), Layers.Scene.BG_FRONT);
				break;
			case SkillType.Wood:
				this._scene.setEnvironment(new WoodEnvironment(this._scene), Layers.Scene.BG);
				break;
			case SkillType.Water:
				this._scene.setEnvironment(new WaterEnvironment(this._scene), Layers.Scene.BG);
				break;
			case SkillType.Lightning:
				this._scene.setEnvironment(new LightningEnvironment(this._scene), Layers.Scene.BG);
				break;
			case SkillType.Air:
				this._scene.setEnvironment(new AirEnvironment(this._scene), Layers.Scene.BG_FRONT);
				break;
		}
	}

	/**
	 * Updates the skill.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._coef === 1) {
			this.end();
		}
	}
}
