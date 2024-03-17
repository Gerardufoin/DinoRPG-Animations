// @ts-check
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Layers } from '../DepthManager.js';
import { EmoteDisplay } from '../parts/text/EmoteDisplay.js';

/**
 * An emote appears above a group of Fighters.
 */
export class Emote extends State {
	/**
	 * The emote to display.
	 * @type {number}
	 */
	_emote;
	/**
	 * The type of behaviour for the emote, based on the EmoteBehaviour enum.
	 * @type {number}
	 */
	_behaviour;
	/**
	 * A group of Fighters (fids) show the specified emote above their head.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number[]} fids A list of the impacted Fighters' id.
	 * @param {number} emote An emote from the Emotes enum.
	 * @param {number} behaviour A type of behaviour from the EmoteBehaviour enum.
	 */
	constructor(scene, endCall, fids, emote, behaviour) {
		super(scene, endCall);

		for (const fid of fids) {
			const f = this._scene.getFighter(fid);
			if (f) {
				this.addActor(f);
			} else {
				console.error(`Emote Error: Fighter with id ${fid} does not exist in the scene.`);
			}
		}
		this._emote = emote;
		this._behaviour = behaviour;
	}

	/**
	 * Add the desired emote to each fighter.
	 */
	init() {
		for (const f of this._casting) {
			this._scene.dm.addSprite(
				new EmoteDisplay(
					this._scene,
					f.position.x,
					this._scene.getY(f.position.y) - f.position.z - f.height,
					this._emote,
					this._behaviour
				),
				Layers.Scene.INTER
			);
		}
		this.end();
	}
}
