// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/GroupEffect.hx

import { Fighter } from '../../Fighter.js';
import { Scene } from '../../Scene.js';
import { State } from '../../State.js';

/**
 * Parent class for the targeted skills.
 */
export class GroupEffect extends State {
	/**
	 * Current state of the effect.
	 * @type {number}
	 */
	_step = 0;
	/**
	 * Figther casting the skill.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * Targets of the skill.
	 * @type {{fighter: Fighter, life?: number}[]}
	 */
	_targets;

	/**
	 * Create a new GroupEffect, storing the caster and the targets.
	 * @param {Scene} scene The scene containing the skill.
	 * @param {() => void} endCall The callback to trigger at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall);

		this._caster = caster;
		this._targets = targets;
	}

	/**
	 * Go to the next step of the skill and reset the coefficient.
	 */
	nextStep() {
		this._step++;
		this._coef = 0;
	}

	/**
	 * Generate rays around the caster.
	 */
	genRayConcentrate() {
		// TODO
		/*var mc = caster.bdm.attach("mcRayConcentrate",Fighter.DP_BACK);
		mc._y = -caster.height*0.5;
		mc._rotation = Math.random()*360;
		return mc;*/
	}

	/**
	 * Damages all the targets with their given damages.
	 * @param {{fx: number, amount?: number, size?: number}} lifeFx The life effect to play on the damaged targets.
	 */
	damageAll(lifeFx = undefined) {
		for (const t of this._targets)
			if (t.life != null) {
				t.fighter.damages(t.life, 20, lifeFx);
			}
	}

	/**
	 * The caster moves to the given coordinates.
	 * @param {number} tx X coordinate of the destination.
	 * @param {number} ty Y coordinate of the destination.
	 */
	goto(tx, ty) {
		this._caster.saveCurrentCoords();
		this._coefSpeed = this._caster.runSpeed / this._caster.getDist({ x: tx, y: ty });
		this._caster.moveTo(tx, ty);
	}
}
