// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/State.hx

import { Fighter } from './Fighter.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { Scene } from './Scene.js';
import { Timer } from './Timer.js';

/**
 * A State represents an action which will be played through the history of a fight.
 * A new State is automatically added the the history and will be updated over time.
 *
 * A State will register a casting of actors (one or multiple Fighters) to perform the task at hand.
 * The task begins once all Fighters are ready to perform.
 *
 * State is an abstract class and cannot be instantiated by itself (well, it can, but it does nothing, so don't).
 */
export class State {
	/**
	 * Allows the attribution of an unique ID for each State.
	 * Increased after each new State instantiation.
	 * @type {number}
	 */
	static CURRENT_ID = 0;

	/**
	 * Each state needs to be identifiable and comparable to each other.
	 * As such, each state is given a unique id.
	 */
	id;

	/**
	 * Callback called at the end of the State or when _endTimer reaches 0.
	 * @type {() => void}
	 */
	endCall;
	/**
	 * Current progression of the State between 0 and 1, 0 being the begining of the State and 1 its end.
	 * @type {number}
	 */
	_coef = 0;
	/**
	 * Speed of the coefficient in frames.
	 * For example, 1 would increase _coef of 1 per frame (meaning the State would reached its max coef in 1 frame).
	 */
	_coefSpeed = 0.1;
	/**
	 * Once the time has elapsed, call the callback endCall.
	 * If the timer is undefined, endCall is only called when the method "end" is called.
	 */
	_endTimer;
	/**
	 * Contains all the actor participating in the action.
	 * @type {Fighter[]}
	 */
	_casting = [];
	/**
	 * While this variable is true, it means all the actors needed for the State are not available.
	 * @type {boolean}
	 */
	_castingWait = true;
	/**
	 * Determines if a State should be removed from the state list.
	 * @type {boolean}
	 */
	toDelete = false;

	/**
	 * The Scene where the state is happening.
	 * @type {Scene}
	 */
	_scene;

	/**
	 * State is abstract and shouldn't be instantiated by itself.
	 * If you are reading this you are doing something wrong.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The callback once the State ends, if any.
	 */
	constructor(scene, endCall = undefined) {
		this.id = State.CURRENT_ID++;
		this._scene = scene;
		this.endCall = endCall;
	}

	/**
	 * Updates the State.
	 *
	 * If the casting is not ready yet, check if it is ready and stop if it is not.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 * @returns {void}
	 */
	update(timer) {
		if (this._castingWait) {
			this.checkCasting();
			return;
		}
		// Increase the coef by the speed multiplied by the elapsed frames (tmod) and cap it between 0 and 1.
		this._coef = PixiHelper.mm(0, this._coef + this._coefSpeed * timer.tmod, 1);
		if (this._endTimer !== undefined && this.endCall) {
			this._endTimer -= timer.tmod;
			if (this._endTimer <= 0) {
				this.endCall();
				this._endTimer = undefined;
			}
		}
	}

	/**
	 * Method whose only purpose is to be overriden by its children.
	 * Will be called once the casting is ready to enact this State.
	 */
	init() {}

	/**
	 * Add an "actor" (Fighter) to the current State and set the State as waiting for its Fighters to be ready.
	 * @param {Fighter} f The new Fighter to add to the state.
	 */
	addActor(f) {
		this._casting.push(f);
		this._castingWait = true;
	}

	/**
	 * Check if the registered Fighters are ready to execute the State or not.
	 *
	 * If the Fighters are ready, the wait is over and init() is called.
	 * @returns {void}
	 */
	checkCasting() {
		for (const f of this._casting) {
			if (!f.setFocus(this)) {
				return;
			}
		}
		this._castingWait = false;
		this.init();
	}

	/**
	 * That's all folks. Release the Fighters from this State and give them a lock timer if needed.
	 * @param {number | undefined} n The lock timer to give to the Fighters before releasing them from the State.
	 */
	releaseCasting(n = undefined) {
		for (const f of this._casting) {
			f.unfocus();
			if (n !== undefined) {
				f.setLockTimer(n);
			}
		}
		this._casting = [];
	}

	/**
	 * Ends the state. Flags the State to be deleted, release the actors and call the endCall callback.
	 */
	end() {
		this.kill();
		if (this.endCall) {
			this.endCall();
		}
	}

	/**
	 * Flag the State to be deleted and release the actors.
	 */
	kill() {
		this.toDelete = true;
		this.releaseCasting();
	}
}
