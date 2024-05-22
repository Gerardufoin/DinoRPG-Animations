// @ts-check

import { Container, Filter } from 'pixi.js';
import { Part } from '../../../Part.js';
import { IScene, SCENE_HEIGHT, SCENE_WIDTH } from '../../../IScene.js';
import { PixiHelper } from '../../../../display/PixiHelper.js';
import { SkillAura } from '../../../actions/skills/SkillAura.js';

/**
 * Abstract class for an invocation.
 */
export class Invocation extends Part {
	/**
	 * Starting z position for an invocation.
	 * @type {number}
	 */
	static DEFAULT_Z_POSITION = -1000;
	/**
	 * The ColorOffsetFilter used to white out the invocation.
	 * @type {Filter}
	 */
	static WhiteFilter = PixiHelper.colorOffsetFilter(0, 0, 0);

	/**
	 * The z destination for the invocation.
	 * @type {number}
	 */
	_zDest = 0;
	/**
	 * The container allowing to add/remove the filters for the skill aura.
	 * Children have to be added to body instead of root.
	 * @type {Container}
	 */
	_body = new Container();
	/**
	 * The aura around the invocation if one is instantiated.
	 * @type {SkillAura}
	 */
	_aura;

	/**
	 * Creates an invocation in the Scene. The invocation can be updated to move down toward the center of the Scene.
	 * @param {IScene} scene The Scene where the invocation is instantiated.
	 */
	constructor(scene) {
		super(new Container(), scene);
		this._root.addChild(this._body);

		const y = SCENE_HEIGHT / 2;
		this._x = SCENE_WIDTH / 2;
		this._y = this._scene.getGY(y);
		this._z = Invocation.DEFAULT_Z_POSITION;
		this._zDest = (y - this._y) * 2;

		this._ray = 100;
		this.dropShadow();
		this.updatePos();

		this._root.filters = [Invocation.WhiteFilter];
		this.fade(0);
	}

	/**
	 * Spawn the additionnal parts for the invocation, if any.
	 * Implemented by the invocations if needed.
	 */
	spawnParts() {}

	/**
	 * Update the vertical position of the invocation based on the given coefficient.
	 * @param {number} coef The coefficient for the position, between 0 and 1.
	 */
	descend(coef) {
		this._z = Invocation.DEFAULT_Z_POSITION + (this._zDest - Invocation.DEFAULT_Z_POSITION) * coef;
	}

	/**
	 * Adds an aura around the invocation.
	 * @param {number} type The type of aura based on SkillType.
	 */
	addAura(type) {
		this._aura = new SkillAura(type, this._body);
	}

	/**
	 * Updates the aura with the given coefficient if an aura is instantiated.
	 * @param {number} coef The value of the coefficient between 0 and 1.
	 */
	updateAura(coef) {
		if (this._aura) {
			this._aura.update(coef);
		}
	}

	/**
	 * Remove the aura.
	 */
	removeAura() {
		this._body.filters = [];
		this._aura = undefined;
	}

	/**
	 * Fades to white the invocation based on the given coefficient.
	 * @param {number} coef The coefficient value between 0 and 1.
	 */
	fade(coef) {
		PixiHelper.setPercentColor(Invocation.WhiteFilter, 100, 0, Math.floor(255 * coef));
	}

	/**
	 * Sets the alpha of the invocation between 0 and 1 based on the inverse of the given coefficient.
	 * @param {number} coef The coefficient used to set the alpha, between 0 and 1.
	 */
	fadeOut(coef) {
		this._root.alpha = 1 - coef;
	}
}
