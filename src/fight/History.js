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
import { Regen } from './actions/Regen.js';
import { Escape } from './actions/Escape.js';
import { Finish } from './actions/Finish.js';
import { Status } from './actions/Status.js';
import { NoStatus } from './actions/NoStatus.js';
import { Lost } from './actions/Lost.js';
import { Notification } from './actions/Notification.js';
import { UseItem } from './actions/UseItem.js';
import { SpawnToy } from './actions/SpawnToy.js';
import { DestroyToy } from './actions/DestroyToy.js';
import { Flip } from './actions/Flip.js';
import { Wait } from './actions/Wait.js';
import { Talk } from './actions/Talk.js';

/**
 * Contains the history of the fight and play it action by action.
 *
 * In most cases, an action will generate a new State which will call the next action once it ends.
 */
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
	 * Get the Scene linked to the History.
	 * @type {Scene}
	 */
	get scene() {
		return this._scene;
	}

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
	 * List of all the currently running states.
	 * @type {State[]}
	 */
	_states = [];

	/**
	 * Creates a new fight history using the history passed as parameter.
	 * Initialize the actions' mappin.
	 * @param {Fight} fight The Fight which created the History.
	 * @param {Scene} scene The Scene where the actions are happening.
	 * @param {object[]} history The history containing the list of all the steps of the fight.
	 */
	constructor(fight, scene, history) {
		this._fight = fight;
		this._scene = scene;
		this._history = history;
		this._actions = {
			[Fight.Action.Add]: 'addFighter',
			[Fight.Action.Announce]: 'announce',
			[Fight.Action.Object]: 'useItem',
			[Fight.Action.Lost]: 'lost',
			[Fight.Action.Status]: 'status',
			[Fight.Action.NoStatus]: 'noStatus',
			[Fight.Action.Regen]: 'regen',
			[Fight.Action.Damages]: 'damages',
			[Fight.Action.DamagesGroup]: 'damagesGroup',
			[Fight.Action.Fx]: undefined,
			[Fight.Action.Dead]: 'dead',
			[Fight.Action.Goto]: 'goToFighter',
			[Fight.Action.Return]: 'return',
			[Fight.Action.Pause]: 'pause',
			[Fight.Action.Finish]: 'finish',
			[Fight.Action.AddCastle]: undefined,
			[Fight.Action.TimeLimit]: undefined,
			[Fight.Action.CastleAttack]: undefined,
			[Fight.Action.Display]: 'display',
			[Fight.Action.Text]: undefined,
			[Fight.Action.Talk]: 'talk',
			[Fight.Action.Escape]: 'escape',
			[Fight.Action.MoveTo]: 'moveTo',
			[Fight.Action.Flip]: 'flip',
			[Fight.Action.SpawnToy]: 'spawnToy',
			[Fight.Action.DestroyToy]: 'destroyToy',
			[Fight.Action.Wait]: 'wait',
			[Fight.Action.Log]: 'printLog',
			[Fight.Action.Notify]: 'notify',
			[Fight.Action.Energy]: 'energy',
			[Fight.Action.MaxEnergy]: 'maxEnergy'
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
				const newState = this[this._actions[h.action]](h);
				if (newState) {
					this.registerState(newState);
				}
			} else {
				console.error(`Action ${h.action} not defined in history mapping.`);
				this.playNext();
			}
		}
	}

	/**
	 * Register a new State to be updated.
	 * @param {State} state The new State to register into the History State management.
	 */
	registerState(state) {
		this._states.push(state);
	}

	/**
	 * Update all the states and collect the new States created during the update or init.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	updateStates(timer) {
		for (const st of this._states) {
			st.update(timer);
			for (const ns of st.collectNewStates()) {
				this._states.push(ns);
			}
		}
		this._states = this._states.filter((s) => !s.toDelete);
	}

	/**
	 * Add a Fighter to the scene.
	 * @param {{action: number, fighter: object}} action Action which triggered the call.
	 * @returns {State} The AddFighter State.
	 */
	addFighter(action) {
		return new AddFighter(
			this._scene,
			() => {
				this.playNext();
			},
			action.fighter
		);
	}

	/**
	 * A fighter announce an attack (or anything really).
	 * @param {{action: number, fid: number, message: string}} action Action which triggered the call.
	 * @returns {Announce} The Announce State.
	 */
	announce(action) {
		return new Announce(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.message
		);
	}

	/**
	 * A fighter uses an item.
	 * @param {{action: number, fid: number, name: string, item: string}} action Action which triggered the call.
	 * @returns {State} The UseItem State.
	 */
	useItem(action) {
		return new UseItem(
			this,
			() => {
				this.playNext();
			},
			action.fid,
			action.name,
			action.item
		);
	}

	/**
	 * A fighter lose some life with the given LifeEffect.
	 * @param {{action: number, fid: number, amount: number, lifeFx: {fx: number, amount?: number, size?: number}}} action Action which triggered the call.
	 * @returns {Lost} The Lost State.
	 */
	lost(action) {
		return new Lost(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.amount,
			action.lifeFx
		);
	}

	/**
	 * A status is added to a Fighter.
	 * @param {{action: number, fid: number, status: number}} action Action which triggered the call.
	 * @returns {State} The Status State.
	 */
	status(action) {
		return new Status(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.status
		);
	}

	/**
	 * A status is removed from a Fighter.
	 * @param {{action: number, fid: number, status: number}} action Action which triggered the call.
	 * @returns {State} The Status State.
	 */
	noStatus(action) {
		return new NoStatus(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.status
		);
	}

	/**
	 * A Fighter regens the given amount of life. If the Figther was dead, the Fighter is resurrected.
	 * @param {{action: number, fid: number, amount: number, lifeFx: {fx: number, amount?: number, size?: number}}} action Action which triggered the call.
	 * @returns {State} The GoToFither State.
	 */
	regen(action) {
		return new Regen(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.amount,
			action.lifeFx
		);
	}

	/**
	 * A Fighter attacks another Fighter.
	 * @param {{action: number, fid: number, tid: number, damages: number | null, lifeFx?: {fx: number, amount?: number, size?: number}, effect?: number}} action Action which triggered the call.
	 * @returns {State} The Damages State.
	 */
	damages(action) {
		return new Damages(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.tid,
			action.damages,
			action.lifeFx,
			action.effect
		);
	}

	/**
	 * A Fighter attacks a group of Fighters.
	 * @param {{action: number, fid: number, targets: {id: number, damages: number}[], skill: number, type?: number, fx?: string, anim?: string, speed?: number, power?: number}} action Action which triggered the call.
	 * @returns {State} The DamagesGroup State.
	 */
	damagesGroup(action) {
		return new DamagesGroup(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.targets,
			{
				skill: action.skill,
				type: action.type,
				fx: action.fx,
				anim: action.anim,
				speed: action.speed,
				power: action.power
			}
		);
	}

	/**
	 * A Fighter dies.
	 * @param {{action: number, fid: number}} action Action which triggered the call.
	 * @returns {State} The Dead State.
	 */
	dead(action) {
		return new Dead(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid
		);
	}

	/**
	 * A Fighter moves toward another Fighter with the desired movement effect.
	 * @param {{action: number, fid: number, tid: number, effect: number, shadeColor?: {col1?: number, col2?: number}}} action Action which triggered the call.
	 * @returns {State} The GoToFither State.
	 */
	goToFighter(action) {
		return new GotoFighter(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.tid,
			action.effect,
			action.shadeColor
		);
	}

	/**
	 * A Fighter goes back to its saved position.
	 * @param {{action: number, fid: number}} action Action which triggered the call.
	 * @returns {State} The Return State.
	 */
	return(action) {
		return new Return(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid
		);
	}

	/**
	 * Pause the history untile the given amount of frames have elapsed.
	 * @param {{action: number, time: number}} action Action which triggered the call.
	 */
	pause(action) {
		this._fight.pause(action.time);
		if (!this._fight.paused) {
			this.playNext();
		}
	}

	/**
	 * The Fighters wrap up the Fight and enact their end of fight behavior.
	 * @param {{action: number, left: number, right: number}} action Action which triggered the call.
	 * @returns {State} The Finish State.
	 */
	finish(action) {
		return new Finish(
			this._scene,
			() => {
				this.playNext();
			},
			action.left,
			action.right
		);
	}

	/**
	 * Not implemented in this project for now. Wait for the loading screen for MT.
	 * @param {{action: number}} action Action which triggered the call.
	 */
	display(action) {
		this.playNext();
	}

	/**
	 * A Fighter start talking, creating a speech bubble above its head.
	 * @param {{action: number, fid: number, message: string}} action Action which triggered the call.
	 * @returns {State} The Talk State.
	 */
	talk(action) {
		return new Talk(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.message
		);
	}

	/**
	 * A Fighter escapes the fight. The Fighter is killed at the end of the escape action.
	 * @param {{action: number, fid: number}} action Action which triggered the call.
	 * @returns {State} The Escape State.
	 */
	escape(action) {
		return new Escape(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid
		);
	}

	/**
	 * Move a Fighter to a specific destination.
	 * @param {{action: number, fid: number, x: number, y: number}} action Action which triggered the call.
	 * @returns {State} The MoveTo State.
	 */
	moveTo(action) {
		return new MoveTo(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid,
			action.x,
			action.y
		);
	}

	/**
	 * Flips a Fighter around.
	 * @param {{action: number, fid: number}} action Action which triggered the call.
	 * @returns {State} The Flip State.
	 */
	flip(action) {
		return new Flip(
			this._scene,
			() => {
				this.playNext();
			},
			action.fid
		);
	}

	/**
	 * Spawns a Toy in the Scene.
	 * @param {{action: number, toy: string, x?: number, y?: number, z?: number, vx?: number, vy?: number, vz?: number}} action Action which triggered the call.
	 * @returns {State} The SpawnToy State.
	 */
	spawnToy(action) {
		return new SpawnToy(
			this._scene,
			() => {
				this.playNext();
			},
			action.toy,
			action.x,
			action.y,
			action.z,
			action.vx,
			action.vy,
			action.vz
		);
	}

	/**
	 * Removes all Toys with the given name from the Scene.
	 * @param {{action: number, toy: string}} action Action which triggered the call.
	 * @returns {State} The DestroyToy State.
	 */
	destroyToy(action) {
		return new DestroyToy(
			this._scene,
			() => {
				this.playNext();
			},
			action.toy
		);
	}

	/**
	 * Waits for a specific amount of time in milliseconds.
	 * @param {{action: number, time: number}} action Action which triggered the call.
	 * @returns {State} The Wait State.
	 */
	wait(action) {
		return new Wait(
			this._scene,
			() => {
				this.playNext();
			},
			action.time
		);
	}

	/**
	 * Print the message to the standard output.
	 * @param {{action: number, msg: string}} action Action which triggered the call.
	 */
	printLog(action) {
		if (this._scene.debugMode) {
			console.log(`Fight Log Message: ${action.msg}`);
		}
		this.playNext();
	}

	/**
	 * Display a notification icon above the given figthers.
	 * @param {{action: number, fids: [], notification: number}} action Action which triggered the call.
	 */
	notify(action) {
		this.registerState(new Notification(this._scene, undefined, action.fids, action.notification));
		this.playNext();
	}

	/**
	 * Set the energy of the given figthers.
	 * @param {{action: number, fighters: { fid: number, energy: number }[]}} action Action which triggered the call.
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
		this.playNext();
	}

	/**
	 * Set the maximum energy of the given figthers.
	 * @param {{action: number, fighters: { fid: number, maxEnergy: number }[]}} action Action which triggered the call.
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
		this.playNext();
	}
}
