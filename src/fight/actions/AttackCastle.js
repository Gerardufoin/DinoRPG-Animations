// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/AttackCastle.hx
import { Castle } from '../Castle.js';
import { Layers } from '../DepthManager.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { Score } from '../parts/text/Score.js';

const AttackStep = {
	Approach: 0,
	Hit: 1,
	Recall: 2
};

/**
 * A Fighter moves up the the Castle and attacks it, dealing the given amount of damages.
 */
export class AttackCastle extends State {
	/**
	 * The Fighter attacking.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The position the Fighter needs to go to in order to attack the Castle.
	 * @type {{x: number, y: number}}
	 */
	_destination;
	/**
	 * The damages to deal to the Castle during the attack.
	 * @type {number}
	 */
	_damages;
	/**
	 * The Castle being attacked.
	 * @type {Castle}
	 */
	_castle;
	/**
	 * The current AttackStep of the action.
	 * @type {number}
	 */
	_step;

	/**
	 * Moves the selected Fighter (fid) toward the Castle to then attack it.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The id of the chosen Fighter.
	 * @param {number} damages The amount of damages dealt to the Castle.
	 * @param {Castle} castle The Castle being attacked.
	 */
	constructor(scene, endCall, fid, damages, castle) {
		super(scene, endCall);
		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			console.error(`AttackCastle Error: Fighter with id ${fid} does not exist in the scene.`);
			this.kill();
			return;
		}
		if (!castle) {
			console.error(`AttackCastle Error: Action called, but no Castle added to the Scene.`);
			this.kill();
			return;
		}
		this._destination = {
			x: this._scene.width - this._fighter.ray,
			y: this._fighter.position.y
		};
		this._damages = damages;
		this._castle = castle;
		this.addActor(this._fighter);
		this._step = AttackStep.Approach;
	}

	/**
	 * Setup the movement for the Fighter.
	 */
	init() {
		this._fighter.playAnim('run');
		this._fighter.saveCurrentCoords();
		this._coefSpeed = this._fighter.runSpeed / this._fighter.getDist(this._destination);
		this._fighter.moveTo(this._destination.x, this._destination.y);
	}

	/**
	 * Increase the step counter and reset the coef.
	 */
	nextStep() {
		this._coef = 0;
		this._step++;
	}

	/**
	 * Update the Fighter movement, attack, and recall.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		switch (this._step) {
			case AttackStep.Approach:
				this._fighter.updateMove(this._coef);
				if (this._coef === 1) {
					this._fighter.playAnim('attack');
					this._fighter.registerCallback('hit', (_anim, _args) => {
						this._scene.dm.addSprite(
							new Score(
								this._scene,
								this._scene.width,
								this._scene.getY(this._fighter.position.y),
								this._damages
							),
							Layers.Scene.INTER
						);
						this._castle.damage(this._damages, this._fighter);
						this._fighter.clearCallback('hit');
						this.nextStep();
					});
					this._coefSpeed = 0.1;
				}
				break;
			case AttackStep.Hit:
				if (this._coef === 1) {
					this._fighter.initReturn(null);
					this.nextStep();
				}
				break;
			case AttackStep.Recall:
				this._fighter.updateMove(this._coef);
				if (this._coef === 1) {
					this.end();
				}
		}
	}
}
