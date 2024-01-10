// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/State.hx

import { Ticker } from 'pixi.js';
import { Fighter } from './Fighter.js';
import { PixiHelper } from '../display/PixiHelper.js';

/**
 * A State represents an action which will be played through the history of a fight.
 *
 * A State will register a casting of actors (one or multiple Fighters) to perform the task at hand.
 * The task begins once all Fighters are ready to perform.
 *
 * State is an abstract class and cannot be instantiated by itself (well, it can, but it does nothing, so yeah).
 */
export class State {
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
	coef = 0;
	_spc = 0.1;
	//var timer:Float;
	//public var tids:List<{t : Fighter, life : Int}>;
	/**
	 * Once the time has elapsed, call the callback endCall.
	 * If the timer is undefined, endCall is only called when the method "end" is called.
	 */
	_endTimer;
	/**
	 * Contains all the actor participating in the action.
	 * @type {Fighter[]}
	 */
	casting = [];
	/**
	 * While this variable is true, it means all the actors needed for the State are not available.
	 */
	castingWait = true;
	/**
	 * Determines if a State should be removed from the state list.
	 * @type {boolean}
	 */
	toDelete = false;

	/**
	 * State is abstract and shouldn't be instantiated by itself.
	 * If you are reading this you are doing something wrong.
	 */
	constructor() {
		this.id = State.CURRENT_ID++;
	}

	/**
	 * Updates the State.
	 *
	 * If the casting is not ready yet, check if it is ready and stop if it isnt.
	 * @returns {void}
	 */
	update() {
		if (this.castingWait) {
			this.checkCasting();
			return;
		}
		// TODO: Not quite sure how this is used yet. For both coef and spc.
		this.coef = PixiHelper.mm(0, this.coef + this._spc * Ticker.shared.elapsedMS, 1);
		if (this._endTimer !== undefined && this.endCall) {
			this._endTimer -= Ticker.shared.elapsedMS;
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
		this.casting.push(f);
		this.castingWait = true;
	}

	/**
	 * Check if the registered Fighters are ready to execute the State or not.
	 *
	 * If the Fighters are ready, the wait is over and init() is called.
	 * @returns {void}
	 */
	checkCasting() {
		for (const f of this.casting) {
			if (!f.setFocus(this)) {
				return;
			}
		}
		this.castingWait = false;
		this.init();
	}

	/**
	 * That's all folks. Release the Fighters from this State and give them a lock timer if needed.
	 * @param {number | undefined} n The lock timer to give to the Fighters before releasing them from the State.
	 */
	releaseCasting(n = undefined) {
		for (const f of this.casting) {
			f.unfocus();
			if (n !== undefined) {
				f.setLockTimer(n);
			}
		}
		this.casting = [];
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
