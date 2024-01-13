// @ts-check

import { Scene } from './Scene.js';
import { State } from './State.js';
import { Fight } from './Fight.js';
import { AddFighter } from './actions/AddFighter.js';
import { Timer } from './Timer.js';
import { MoveTo } from './actions/MoveTo.js';

export class History {
	/**
	 * The scene that the history is impacting.
	 * @type {Scene}
	 */
	_scene;
	/**
	 * The history of the fight.
	 * @type {{action: number, args: object[]}[]}
	 */
	_history;
	/**
	 * Current part of the history being played.
	 * @type {number}
	 */
	_historyIdx = -1;
	/**
	 * Mapping between Fight.Action and History.
	 * @type {object}
	 */
	_actions;

	/**
	 * Current state being acted upon.
	 * @type {State}
	 */
	_currentState;
	/**
	 * List of all the currently running states.
	 * @type {State[]}
	 */
	_states = [];

	/**
	 *
	 * @param {Scene} scene
	 * @param {object[]} history
	 */
	constructor(scene, history) {
		this._scene = scene;
		this._history = history;
		this._actions = {
			[Fight.Action.Add]: 'addFighter',
			[Fight.Action.AddCastle]: undefined,
			[Fight.Action.MoveTo]: 'moveTo',
			[Fight.Action.Damages]: undefined,
			[Fight.Action.DamagesGroup]: undefined,
			[Fight.Action.CastleAttack]: undefined,
			[Fight.Action.Return]: undefined,
			[Fight.Action.Dead]: undefined,
			[Fight.Action.Lost]: undefined,
			[Fight.Action.Escape]: undefined,
			[Fight.Action.Finish]: undefined,
			[Fight.Action.Energy]: undefined,
			[Fight.Action.MaxEnergy]: undefined,
			[Fight.Action.Pause]: undefined,
			[Fight.Action.Announce]: undefined,
			[Fight.Action.Goto]: undefined,
			[Fight.Action.Regen]: undefined,
			[Fight.Action.Object]: undefined,
			[Fight.Action.Fx]: undefined,
			[Fight.Action.Status]: undefined,
			[Fight.Action.NoStatus]: undefined,
			[Fight.Action.Display]: undefined,
			[Fight.Action.TimeLimit]: undefined,
			[Fight.Action.Talk]: undefined,
			[Fight.Action.Text]: undefined,
			[Fight.Action.Flip]: undefined,
			[Fight.Action.SpawnToy]: undefined,
			[Fight.Action.DestroyToy]: undefined,
			[Fight.Action.Wait]: undefined,
			[Fight.Action.Log]: 'printLog',
			[Fight.Action.Notify]: undefined
		};
	}

	/**
	 * Play the next action in the fight history. Set the new current state of the history.
	 * @returns {void}
	 */
	playNext() {
		this._historyIdx++;
		if (this._history && this._historyIdx < this._history.length) {
			const h = this._history[this._historyIdx];
			if (this._actions[h.action]) {
				this._currentState = this[this._actions[h.action]](h);
				if (this._currentState) {
					this._states.push(this._currentState);
					/**
					 * Once the state ends, calls the next State in the history.
					 */
					this._currentState.endCall = () => {
						this.playNext();
					};
				} else {
					this.playNext();
				}
			} else {
				console.error(`Action ${h.action} not defined in history mapping.`);
				this.playNext();
			}
		}
	}

	/**
	 * Update all the states.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	updateStates(timer) {
		for (const st of this._states) {
			st.update(timer);
		}
		this._states = this._states.filter((s) => !s.toDelete);
	}

	/**
	 * Add a Fighter to the scene.
	 * @param {{action: number, fighter: object}} action Action which triggered the call.
	 * @returns {State} The AddFighter State.
	 */
	addFighter(action) {
		return new AddFighter(this._scene, action.fighter);
	}

	/**
	 * Move a Fighter to a specific destination.
	 * @param {{action: number, fid: number, x: number, y: number}} action Action which triggered the call.
	 * @returns {State} The MoveTo State.
	 */
	moveTo(action) {
		return new MoveTo(this._scene, action.fid, action.x, action.y);
	}

	/**
	 * Print the message to the standard output.
	 * @param {{action: number, msg: string}} action Action which triggered the call.
	 * @returns {null} No State is returned.
	 */
	printLog(action) {
		if (this._scene.debugMode) {
			console.log(`Fight Log Message: ${action.msg}`);
		}
		return null;
	}
}
