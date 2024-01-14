// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/MoveTo.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * Move an existing Fighter to a specific location.
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
	 * Moves the Fighter with the given fid to the desired xy coordinates.
	 * @param {Scene} scene The scene where the Fighter is contained.
	 * @param {number} fid The id of the Fighter to move.
	 * @param {number} x The x coordinate of the destination.
	 * @param {number} y The y coordinate of the destination.
	 */
	constructor(scene, fid, x, y) {
		super(scene);
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
		if (this._castingWait) {
			return;
		}
		this._fighter.updateMove(this._coef);
		if (this._coef === 1) {
			this._fighter.backToDefault();
			this.end();
		}
	}
}
