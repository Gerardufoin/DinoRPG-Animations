// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/State.hx

import { Ticker } from 'pixi.js';
import { Fighter } from './Fighter';
import { PixiHelper } from '../display/PixiHelper';

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
	 * @type {() => void}
	 */
	endCall;
	castingWait = true;
	coef = 0;
	spc = 0.1;
	//var timer:Float;
	endTimer;
	/**
	 * @type {Fighter[]}
	 */
	casting = [];
	//public var tids:List<{t : Fighter, life : Int}>;

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
		this.coef = PixiHelper.mm(0, this.coef + this.spc * Ticker.shared.elapsedMS, 1);
		if (this.endTimer !== undefined && this.endCall) {
			this.endTimer -= Ticker.shared.elapsedMS;
			if (this.endTimer <= 0) {
				this.endCall();
				this.endTimer = undefined;
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

	end() {
		this.kill();
		if (this.endCall) {
			this.endCall();
		}
	}

	kill() {
		//Main.me.states.remove(this);
		this.releaseCasting();
	}
}
