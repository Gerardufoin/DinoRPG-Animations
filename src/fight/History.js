// @ts-check

import { Scene } from './Scene.js';
import { State } from './State.js';
import { Fight } from './Fight.js';
import { AddFighter } from './actions/AddFighter.js';
import { Timer } from './Timer.js';
import { MoveTo } from './actions/MoveTo.js';
import { Damages } from './actions/Damages.js';
import { Return } from './actions/Return.js';
import { GotoFighter } from './actions/GotoFighter.js';
import { Dead } from './actions/Dead.js';
import { Announce } from './actions/Announce.js';
import { DamagesGroup } from './actions/DamagesGroup.js';

export class History {
	/**
	 * The fight instantiating the history.
	 * @type {Fight}
	 */
	_fight;
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
	 * @param {Fight} fight
	 * @param {Scene} scene
	 * @param {object[]} history
	 */
	constructor(fight, scene, history) {
		this._fight = fight;
		this._scene = scene;
		this._history = history;
		this._actions = {
			[Fight.Action.Add]: 'addFighter',
			[Fight.Action.AddCastle]: undefined,
			[Fight.Action.MoveTo]: 'moveTo',
			[Fight.Action.Damages]: 'damages',
			[Fight.Action.DamagesGroup]: 'damagesGroup',
			[Fight.Action.CastleAttack]: undefined,
			[Fight.Action.Return]: 'return',
			[Fight.Action.Dead]: 'dead',
			[Fight.Action.Lost]: undefined,
			[Fight.Action.Escape]: undefined,
			[Fight.Action.Finish]: undefined,
			[Fight.Action.Energy]: 'energy',
			[Fight.Action.MaxEnergy]: 'maxEnergy',
			[Fight.Action.Pause]: 'pause',
			[Fight.Action.Announce]: 'announce',
			[Fight.Action.Goto]: 'goToFighter',
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
				} else if (!this._fight.paused) {
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
	 * A Fighter attacks another Fighter.
	 * @param {{action: number, fid: number, tid: number, damages: number | null, lifeFx?: number, effect?: number}} action Action which triggered the call.
	 * @returns {State} The Damages State.
	 */
	damages(action) {
		return new Damages(this._scene, action.fid, action.tid, action.damages, action.lifeFx, action.effect);
	}

	/**
	 * A Fighter attacks a group of Fighters.
	 * @param {{action: number, fid: number, targets: {id: number, damages: number}[], skill: number, type?: number, fx?: string, anim?: string, speed?: number, power?: number}} action Action which triggered the call.
	 * @returns {State} The DamagesGroup State.
	 */
	damagesGroup(action) {
		return new DamagesGroup(this._scene, action.fid, action.targets, {
			skill: action.skill,
			type: action.type,
			fx: action.fx,
			anim: action.anim,
			speed: action.speed,
			power: action.power
		});
	}

	/**
	 * A Fighter goes back to its saved position.
	 * @param {{action: number, fid: number}} action Action which triggered the call.
	 * @returns {State} The Return State.
	 */
	return(action) {
		return new Return(this._scene, action.fid);
	}

	/**
	 * A Fighter dies.
	 * @param {{action: number, fid: number}} action Action which triggered the call.
	 * @returns {State} The Dead State.
	 */
	dead(action) {
		return new Dead(this._scene, action.fid);
	}

	/**
	 * Set the energy of the given figthers.
	 * @param {{action: number, fighters: { fid: number, energy: number }[]}} action Action which triggered the call.
	 * @returns {null} Nothing, immediately play the next action.
	 */
	energy(action) {
		for (const f of action.fighters) {
			const fighter = this._scene.getFighter(f.fid);
			if (fighter) {
				fighter.setEnergy(f.energy);
			} else {
				console.error(`Energy Error: Fighter with id ${f.fid} does not exist in the scene.`);
			}
		}
		return null;
	}

	/**
	 * Set the maximum energy of the given figthers.
	 * @param {{action: number, fighters: { fid: number, maxEnergy: number }[]}} action Action which triggered the call.
	 * @returns {null} Nothing, immediately play the next action.
	 */
	maxEnergy(action) {
		for (const f of action.fighters) {
			const fighter = this._scene.getFighter(f.fid);
			if (fighter) {
				fighter.setMaxEnergy(f.maxEnergy);
			} else {
				console.error(`MaxEnergy Error: Fighter with id ${f.fid} does not exist in the scene.`);
			}
		}
		return null;
	}

	/**
	 * Pause the history untile the given amount of frames have elapsed.
	 * @param {{action: number, time: number}} action Action which triggered the call.
	 * @returns {null} Nothing.
	 */
	pause(action) {
		this._fight.pause(action.time);
		return null;
	}

	/**
	 * A fighter announce an attack (or anything really).
	 * @param {{action: number, fid: number, message: string}} action Action which triggered the call.
	 * @returns {Announce} The Announce State.
	 */
	announce(action) {
		return new Announce(this._scene, action.fid, action.message);
	}

	/**
	 * A Fighter moves toward another Fighter with the desired movement effect.
	 * @param {{action: number, fid: number, tid: number, effect: number, shadeColor?: {col1?: number, col2?: number}}} action Action which triggered the call.
	 * @returns {State} The GoToFither State.
	 */
	goToFighter(action) {
		return new GotoFighter(this._scene, action.fid, action.tid, action.effect, action.shadeColor);
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
