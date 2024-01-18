// @ts-check

import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

export class Finish extends State {
	/**
	 * Behavior of the Fighters at the end of the fight:
	 * - Run: Run across the scene and exit on the other side.
	 * - Escape: Run away on the Fighter's side.
	 * - Stand: Stand in place and do nothing.
	 * - Guard: Guard something.
	 */
	static EndBehaviour = {
		Run: 0,
		Escape: 1,
		Stand: 2,
		Guard: 3
	};
	/**
	 * End behavior of the left sided Fighters.
	 * @type {number}
	 */
	_leftBehavior;
	/**
	 * End behavior of the right sided Fighters.
	 * @type {number}
	 */
	_rightBehavior;

	/**
	 * Defined the end behavior of both side of Fighters.
	 * @param {Scene} scene The Scene where the action is happening.
	 * @param {number} leftEB The behavior of the left sided Fighters.
	 * @param {number} rightEB The behavior of the right sided Fighters.
	 */
	constructor(scene, leftEB, rightEB) {
		super(scene);

		this._leftBehavior = leftEB;
		this._rightBehavior = rightEB;
		this._scene.getFighters().map((f) => {
			this.addActor(f);
		});
		if (!this._casting.length) {
			this.kill();
		}
	}

	/**
	 * Setup the runing away behavior.
	 */
	init() {}
}
