// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Object.hx
import { Fighter } from '../Fighter.js';
import { History } from '../History.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Item } from '../parts/Item.js';
import { Announce } from './Announce.js';

/**
 * A Fighter uses an item.
 */
export class UseItem extends State {
	/**
	 * The Fighter using the item.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The name of the item used.
	 * @type {string}
	 */
	_name;
	/**
	 * The id of the item visual reference.
	 * @type {string}
	 */
	_item;
	/**
	 * Reference to the History to add the Announce state.
	 * @type {History}
	 */
	_history;

	/**
	 * A Fighter (fid) shows an item above its head with the given name.
	 * @param {History} history The History having created the State.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The Fighter's id.
	 * @param {string} name The name of the item to display.
	 * @param {string} item The index referencing the visual to use.
	 */
	constructor(history, endCall, fid, name, item) {
		super(history.scene, endCall);

		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			this.kill();
			console.error(`Object Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}

		this._fighter.playAnim('stand');
		this._name = name;
		this._item = item;
		this._history = history;
		this.addActor(this._fighter);
	}

	/**
	 * Create the display for the item and add a new Announce state with the item name.
	 */
	init() {
		this._scene.addSprite(
			new Item(
				this._scene,
				this._item,
				this._fighter.position.x - 20,
				this._scene.getY(this._fighter.position.y) - 50
			),
			Scene.LAYERS.PARTS
		);
		this.releaseCasting();

		this._history.registerState(new Announce(this._scene, this.endCall, this._fighter.id, this._name));
		this.endCall = undefined;
		this.end();
	}
}
