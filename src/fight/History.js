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
import { Text } from './actions/Text.js';
import { AttackCastle } from './actions/AttackCastle.js';
import { Start } from './actions/Start.js';
import { Skill } from './actions/Skill.js';
import { Action } from './Enums.js';
import { Emote } from './actions/Emote.js';
import { EnumConverter } from './data/EnumConverter.js';

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
	 * @type {{action: number}[]}
	 */
	_history;
	/**
	 * Current part of the history being played.
	 * @type {number}
	 */
	_historyIdx = -1;
	/**
	 * Mapping between Action and History.
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
			[Action.Add]: 'addFighter',
			[Action.Announce]: 'announce',
			[Action.Object]: 'useItem',
			[Action.Lost]: 'lost',
			[Action.Status]: 'status',
			[Action.NoStatus]: 'noStatus',
			[Action.Regen]: 'regen',
			[Action.Damages]: 'damages',
			[Action.Skill]: 'skill',
			[Action.Dead]: 'dead',
			[Action.Goto]: 'goToFighter',
			[Action.Return]: 'return',
			[Action.Pause]: 'pause',
			[Action.Finish]: 'finish',
			[Action.AddCastle]: 'addCastle',
			[Action.TimeLimit]: 'timeLimit',
			[Action.AttackCastle]: 'attackCastle',
			[Action.Display]: 'display',
			[Action.Text]: 'text',
			[Action.Talk]: 'talk',
			[Action.Escape]: 'escape',
			[Action.MoveTo]: 'moveTo',
			[Action.Flip]: 'flip',
			[Action.SpawnToy]: 'spawnToy',
			[Action.DestroyToy]: 'destroyToy',
			[Action.Wait]: 'wait',
			[Action.Log]: 'printLog',
			[Action.Notify]: 'notify',
			[Action.Energy]: 'energy',
			[Action.MaxEnergy]: 'maxEnergy',
			[Action.Emote]: 'emote',
			[Action.Shake]: 'shake'
		};
		if (!this._history.find((v) => v.action === Action.Display)) {
			this._history.unshift({ action: Action.Display });
		}
	}

	/**
	 * Play the next action in the fight history. Set the new current state of the history.
	 * @returns {void}
	 */
	playNext() {
		// Fight end callback
		if (this._history && this._historyIdx < this._history.length && this._historyIdx + 1 >= this._history.length) {
			this._scene.settings.onFightEnd();
		}
		this._historyIdx++;
		if (this._history && this._historyIdx < this._history.length) {
			const h = this._history[this._historyIdx];
			// Step start callback
			this._scene.settings.onStepStart(this._historyIdx, h);
			this._scene.settings.onStepStartStr(this._historyIdx, EnumConverter.convertAction(h, true));
			if (this._actions[h.action]) {
				const newState = this[this._actions[h.action]](h);
				if (newState) {
					this.registerState(newState);
				}
			} else {
				console.error(`Action ${h.action} not defined in history mapping.`);
				this.nextAction(true);
			}
		}
	}

	/**
	 * Invoke the next action while doing the necessary steps based on the settings.
	 * @param {boolean} ignore If true, ignore the autopause setting. False by default.
	 */
	nextAction(ignore = false) {
		// Step end callback
		this._scene.settings.onStepEnd(this._historyIdx, this._history[this._historyIdx]);
		this._scene.settings.onStepEndStr(
			this._historyIdx,
			EnumConverter.convertAction(this._history[this._historyIdx], true)
		);
		if (!ignore && this._scene.settings.autoPause) {
			this._scene.setClick(
				() => {
					this.playNext();
				},
				true,
				true
			);
		} else {
			this.playNext();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
			},
			action.fid,
			action.tid,
			action.damages,
			action.lifeFx,
			action.effect
		);
	}

	/**
	 * A skill is used.
	 * @param {{action: number, skill: number, details: import('./actions/Skill.js').SkillDetails}} action Action which triggered the call.
	 * @returns {State} The Skill State.
	 */
	skill(action) {
		return new Skill(
			this._scene,
			() => {
				this.nextAction();
			},
			action.skill,
			action.details
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
			},
			action.fid
		);
	}

	/**
	 * Pause the history untile the given amount of frames have elapsed.
	 * Decrease the remaining time of the time bar if one was instantiated.
	 * @param {{action: number, time: number}} action Action which triggered the call.
	 */
	pause(action) {
		this._fight.pause(action.time);
		this._scene.reduceTimeBar(action.time);
		if (!this._fight.paused) {
			this.nextAction();
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
				this.nextAction();
			},
			action.left,
			action.right
		);
	}

	/**
	 * Adds a Castle to the Scene.
	 * @param {{action: number, castle: import('./Castle.js').CastleDetails}} action Action which triggered the call.
	 */
	addCastle(action) {
		this._scene.createCastle(action.castle);
		this.nextAction();
	}

	/**
	 * Adds the time bar to the Scene.
	 * @param {{action: number, time: number}} action Action which triggered the call.
	 */
	timeLimit(action) {
		this._scene.initTimeBar(action.time);
		this.nextAction();
	}

	/**
	 * A Fighter attacks the Castle.
	 * @param {{action: number, fid: number, damages: number}} action Action which triggered the call.
	 * @returns {State} The AttackCastle State.
	 */
	attackCastle(action) {
		return new AttackCastle(
			this._scene,
			() => {
				this.nextAction();
			},
			action.fid,
			action.damages,
			this._scene._castle
		);
	}

	/**
	 * Removes the loading screen.
	 * @param {{action: number}} _action Action which triggered the call.
	 * @returns {State} The Start State.
	 */
	display(_action) {
		return new Start(this._scene, () => {
			this.nextAction(true);
		});
	}

	/**
	 * Creates a text box at the top of the screen and fill it over time with the given message.
	 * @param {{action: number, message: string}} action Action which triggered the call.
	 * @returns {State} The Text State.
	 */
	text(action) {
		return new Text(
			this._scene,
			() => {
				this.nextAction(true);
			},
			action.message
		);
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
				this.nextAction(true);
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
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
				this.nextAction();
			},
			action.time
		);
	}

	/**
	 * Print the message to the standard output.
	 * @param {{action: number, msg: string}} action Action which triggered the call.
	 */
	printLog(action) {
		console.log(`Fight Log Message: ${action.msg}`);
		this.nextAction(true);
	}

	/**
	 * Display a notification icon above the given figthers.
	 * @param {{action: number, fids: [], notification: number}} action Action which triggered the call.
	 */
	notify(action) {
		this.registerState(new Notification(this._scene, undefined, action.fids, action.notification));
		this.nextAction();
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
		this.nextAction();
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
		this.nextAction();
	}

	/**
	 * Adds an emote above the designated Fighters.
	 * @param {{action: number, fids: number[], emote: number, behaviour: number}} action Action which triggered the call.
	 * @returns {State} The Emote State.
	 */
	emote(action) {
		return new Emote(
			this._scene,
			() => {
				this.nextAction();
			},
			action.fids,
			action.emote,
			action.behaviour
		);
	}

	/**
	 * Shake the scene using the given parameters.
	 * @param {{action: number, force: number, frict: number, speed: number}} action Action which triggered the call.
	 */
	shake(action) {
		this._scene.fxShake(action.force, action.frict, action.speed);
		this.nextAction();
	}
}
