// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Finish.hx
import { EndBehaviour } from '../Enums.js';
import { Fighter } from '../Fighter.js';
import { SCENE_WIDTH } from '../IScene.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { MoveTo } from './MoveTo.js';

/**
 * The Fighters wrap up the Fight and execute their assigned EndBehaviour.
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
	 * All the movement states created by the Finish action.
	 * @type {State[]}
	 */
	_movements = [];

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
			this.end();
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
						const tx = -m + (f.side ? SCENE_WIDTH + 2 * m : 0);
						const ty = f.position.y + (Math.random() * 2 - 1) * 20;
						const state = new MoveTo(this._scene, undefined, f.id, tx, ty, true);
						this._movements.push(state);
						this._newStates.push(state);
					}
					break;
				case EndBehaviour.Escape:
					{
						const m = 50;
						const tx = -m + (!f.side ? SCENE_WIDTH + 2 * m : 0);
						const ty = f.position.y;
						const state = new MoveTo(this._scene, undefined, f.id, tx, ty, true);
						this._movements.push(state);
						this._newStates.push(state);
					}
					break;
				case EndBehaviour.Guard:
					{
						const m = f._ray + 10;
						const tx = m + (f.side ? this._scene.width + 2 * m : 0);
						const ty = f.position.y;
						const state = new MoveTo(this._scene, undefined, f.id, tx, ty, false, true);
						this._movements.push(state);
						this._newStates.push(state);
					}
					break;
			}
		}
	}

	/**
	 * Checks if the movements are done, and if yes ends the state.
	 * @param {Timer} timer The fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		this._movements = this._movements.filter((s) => !s.toDelete);
		if (this._movements.length == 0) {
			this.end();
		}
	}
}
