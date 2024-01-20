// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Finish.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { MoveTo } from './MoveTo.js';

/**
 * Behavior of the Fighters at the end of the fight:
 * - Run: Run across the scene and exit on the other side.
 * - Escape: Run away on the Fighter's side.
 * - Stand: Stand in place and do nothing.
 * - Guard: Guard something.
 */
export const EndBehaviour = {
	Run: 0,
	Escape: 1,
	Stand: 2,
	Guard: 3
};

/**
 * The Fighters wrap up the Fight and execute their assigned EndBehavior.
 */
export class Finish extends State {
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
	 * The Fighters impacted by the action.
	 * @type {Fighter[]}
	 */
	_fighters;

	/**
	 * Defined the end behavior of both side of Fighters.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} leftEB The behavior of the left sided Fighters.
	 * @param {number} rightEB The behavior of the right sided Fighters.
	 */
	constructor(scene, endCall, leftEB, rightEB) {
		super(scene, endCall);

		this._leftBehavior = leftEB;
		this._rightBehavior = rightEB;
		this._fighters = this._scene.getFighters();
		this._fighters.map((f) => {
			this.addActor(f);
		});
		if (!this._casting.length) {
			this.kill();
		}
	}

	/**
	 * Free the casting to setup the runing away behavior.
	 */
	init() {
		this.releaseCasting();
		for (const f of this._fighters) {
			const behavior = f.side ? this._leftBehavior : this._rightBehavior;
			switch (behavior) {
				case EndBehaviour.Run:
					{
						const m = 50;
						const tx = -m + (f.side ? Scene.WIDTH + 2 * m : 0);
						const ty = f.position.y + (Math.random() * 2 - 1) * 20;
						this._newStates.push(new MoveTo(this._scene, undefined, f.id, tx, ty, true));
					}
					break;
				case EndBehaviour.Escape:
					{
						const m = 50;
						const tx = -m + (!f.side ? Scene.WIDTH + 2 * m : 0);
						const ty = f.position.y;
						this._newStates.push(new MoveTo(this._scene, undefined, f.id, tx, ty, true));
					}
					break;
				case EndBehaviour.Guard:
					{
						const m = f._ray + 10;
						const tx = m + (f.side ? Scene.WIDTH + 2 * m : 0);
						const ty = f.position.y;
						this._newStates.push(new MoveTo(this._scene, undefined, f.id, tx, ty, false, true));
					}
					break;
			}
		}
	}
}
