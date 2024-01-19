// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/MoveTo.hx
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Goto.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * Move an existing Fighter to a specific location.
 * Merged with the Goto action of MT.
 */
export class MoveTo extends State {
	/**
	 * The Fighter moving.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The coordinates of the destination.
	 * @type {{x: number, y: number}}
	 */
	_dest;

	/**
	 * Ending state.
	 * If true, the Fighter goes into Dead mode after the movement.
	 * @type {boolean}
	 */
	_flSpin;
	/**
	 * Ending state.
	 * If true, the State is killed at the end of the movement.
	 * @type {boolean}
	 */
	_flEnd;

	/**
	 * Moves the Fighter with the given fid to the desired xy coordinates.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The id of the Fighter to move.
	 * @param {number} x The x coordinate of the destination.
	 * @param {number} y The y coordinate of the destination.
	 * @param {boolean} end End of fight action - If true, the State is killed after the movement.
	 * @param {boolean} spin End of fight action - If true, the Fighter is changed to Dead after the movement.
	 */
	constructor(scene, endCall, fid, x, y, end = false, spin = false) {
		super(scene, endCall);
		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			console.error(`MoveTo Error: Fighter with id ${fid} does not exist in the scene.`);
			this.kill();
			return;
		}
		this._dest = {
			x: x,
			y: y
		};
		this.addActor(this._fighter);

		this._flEnd = end;
		this._flSpin = spin;
	}

	/**
	 * Start the movement. Set the animation to run, save the current coordinates and
	 * compute the coefficient speed based on the distance to run and the speed of the Fighter.
	 */
	init() {
		this._fighter.playAnim('run');
		this._fighter.saveCurrentCoords();
		const dist = this._fighter.getDist(this._dest);
		this._coefSpeed = this._fighter.runSpeed / dist;
		this._fighter.moveTo(this._dest.x, this._dest.y);
	}

	/**
	 * Update the Fighter entrance animation.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		this._fighter.updateMove(this._coef);
		if (this._coef === 1) {
			if (this._flSpin) {
				this._fighter.backToDefault();
				this._fighter.setSens(false);
				this._fighter._mode = Fighter.Mode.Dead;
			} else if (this._flEnd) {
				this.kill();
			} else {
				this._fighter.backToDefault();
				this.end();
			}
		}
	}
}
