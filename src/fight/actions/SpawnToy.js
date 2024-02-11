// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/SpawnToy.hx
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { Toy } from '../parts/Toy.js';

/**
 * Spawns a Toy in the scene.
 * The Toy is a Physic entity with an initial position and velocity.
 * The Toy will remain until it is remove with a call to DestroyToy.
 */
export class SpawnToy extends State {
	/**
	 * Creates a Toy at the given coordinates with the given velocity.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {string} toy The Toy display index. Should be an asset name from gfx.toys.
	 * @param {number | null} x The initial x coordinate.
	 * @param {number | null} y The initial y coordinate.
	 * @param {number | null} z The initial z coordinate.
	 * @param {number | null} vx The initial vx coordinate.
	 * @param {number | null} vy The initial vy coordinate.
	 * @param {number | null} vz The initial vz coordinate.
	 */
	constructor(scene, endCall, toy, x, y, z, vx, vy, vz) {
		super(scene, endCall);

		this._scene.addToy(new Toy(this._scene, toy, x, y, z, vx, vy, vz), toy);
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
