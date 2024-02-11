// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/SpawnToy.hx
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * Remove all reference from a given Toy from the Scene.
 */
export class DestroyToy extends State {
	/**
	 * Remove the given Toy name from the Scene.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {string} toy The Toy to remove.
	 */
	constructor(scene, endCall, toy) {
		super(scene, endCall);

		this._scene.removeToy(toy);
	}

	/**
	 * Ends the state once the coefficient reaches 1.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._coef === 1) {
			this.end();
		}
	}
}
