// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/GroupEffect.hx

import { ColorMatrixFilter } from 'pixi.js';
import { Layers } from '../../DepthManager.js';
import { Fighter } from '../../Fighter.js';
import { Scene } from '../../Scene.js';
import { State } from '../../State.js';
import { Timer } from '../../Timer.js';
import { SkillAura } from './SkillAura.js';
import { SkillRay } from './SkillRay.js';

/**
 * Parent class for the targeted skills.
 */
export class GroupEffect extends State {
	/**
	 * The ColorMatrixFilter for the black shader.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {ColorMatrixFilter}
	 */
	static BlackFilter;

	/**
	 * Current state of the effect.
	 * @type {number}
	 */
	_step = 0;
	/**
	 * Timer to respect frame rate.
	 * @type {number}
	 */
	_frameTimer = 0;

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
	 * Aura around the caster while casting the skill, if any.
	 * @type {SkillAura}
	 */
	_aura;

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

		if (!GroupEffect.BlackFilter) {
			GroupEffect.BlackFilter = new ColorMatrixFilter();
			GroupEffect.BlackFilter.matrix[0] = 0;
			GroupEffect.BlackFilter.matrix[6] = 0;
			GroupEffect.BlackFilter.matrix[12] = 0;
		}
	}

	/**
	 * Update the frame timer.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._frameTimer += timer.tmod;
		if (this._aura) {
			this._aura.update(this._coef);
			if (this._frameTimer >= 1) {
				this._frameTimer -= 1;
				this.genRayConcentrate();
			}
		}
	}

	/**
	 * Go to the next step of the skill and reset the coefficient.
	 */
	nextStep() {
		this._step++;
		this._frameTimer = 0;
		this._coef = 0;
		if (this._aura) {
			this.removeSkillAura();
		}
	}

	/**
	 * Spawn two rays around the caster.
	 */
	genRayConcentrate() {
		this._caster.dm.addSprite(new SkillRay(this._scene, -this._caster.height * 0.5), Layers.Fighter.BACK);
		this._caster.dm.addSprite(new SkillRay(this._scene, -this._caster.height * 0.5), Layers.Fighter.BACK);
	}

	/**
	 * Creates a skill aura of the given type around the Fighter.
	 * The aura grows over time and generate rays periodically.
	 * The aura is automatically removed at the end of the current step.
	 * @param {number} type A type from the SkillType enum.
	 */
	addSkillAura(type) {
		this._aura = new SkillAura(type, this._caster.skin);
	}

	/**
	 * Removes the skill aura around the Fighter.
	 */
	removeSkillAura() {
		this._caster.skin.filters = [];
		this._aura = undefined;
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
