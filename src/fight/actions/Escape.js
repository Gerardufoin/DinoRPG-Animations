// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Escape.hx
import { Fighter } from '../Fighter.js';
import { SCENE_WIDTH } from '../IScene.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * A Fighter escapes the fight.
 */
export class Escape extends State {
	/**
	 * The Fighter escaping.
	 * @type {Fighter}
	 */
	_fighter;

	/**
	 * A Fighter (fid) escapes the fight.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The Fighter's id.
	 */
	constructor(scene, endCall, fid) {
		super(scene, endCall);

		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			this.kill();
			console.error(`Escape Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}
		this.addActor(this._fighter);
	}

	/**
	 * The Fighter start running. Set the destination of the movement.
	 */
	init() {
		this._fighter.playAnim('run');
		const m = 50 + this._fighter._ray;
		const tx = -m + (!this._fighter.side ? SCENE_WIDTH + 2 * m : 0);
		const ty = this._fighter._y;
		const dist = this._fighter.getDist({ x: tx, y: ty });
		this._coefSpeed = this._fighter.runSpeed / dist;
		this._fighter.moveTo(tx, ty);
	}

	/**
	 * Update the Fighter movement.
	 * @param {Timer} timer The Fight's timer, containing the elasped time.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		this._fighter.updateMove(this._coef);
		if (this._coef === 1) {
			this._fighter.kill();
			this.end();
		}
	}
}
