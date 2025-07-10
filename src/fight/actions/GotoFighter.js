// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/GotoFighter.hx
import { Color } from 'pixi.js';
import { Layers } from '../DepthManager.js';
import { FighterStatus, GotoEffect } from '../Enums.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { Shade } from '../parts/Shade.js';

/**
 * Move a Fighter toward another Fighter.
 * Saves the Fighter coordinates before movement.
 */
export class GotoFighter extends State {
	/**
	 * The Fighter moving.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The targetted Fighter.
	 * @type {Fighter}
	 */
	_target;
	/**
	 * The movement type of the Fighter.
	 * @type {number}
	 */
	_gotoEffect;
	/**
	 * The shade color for GotoFighter.Effect.
	 * @type {{col1: Color, col2: Color}}
	 */
	_shadeColor;

	/**
	 * Moves the selected Fighter (fid) toward another Fighter (tid) with the specified movement type.
	 * If no movement type is given, Effect.Normal is used instead.
	 * If Effect.Special is specified, the shade color has to be provided as well. Otherwise, default both colors to black.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The id of the chosen Fighter.
	 * @param {number} tid The id of the targetted Fighter.
	 * @param {number | null} effect The GotoFighter.Effect managing the movement type.
	 * @param {{col1?: number, col2?: number} | null} shadeColor The color of the shade created for the Special effect.
	 * @param {boolean} [saveStartPosition=true] If false, don't save the starting position of the Fighter.
	 */
	constructor(scene, endCall, fid, tid, effect = null, shadeColor = null, saveStartPosition = true) {
		super(scene, endCall);
		this._fighter = this._scene.getFighter(fid);
		this._target = this._scene.getFighter(tid);
		if (!this._fighter || !this._target) {
			console.error(`Return Error: Fighter with id ${this._fighter ? tid : fid} does not exist in the scene.`);
			this.kill();
			return;
		}
		this._gotoEffect = effect === null ? GotoEffect.Normal : effect;
		this._shadeColor = {
			col1: new Color(shadeColor?.col1 ?? 0x000000),
			col2: new Color(shadeColor?.col2 ?? 0x000000)
		};
		this.addActor(this._fighter);
		this.addActor(this._target);
		this._saveStartPosition = saveStartPosition;
	}

	/**
	 * Save the coordinates of the Fighter and setup the destination.
	 */
	init() {
		// Save current position if saveNewPosition is false (default behavior)
		if (this._saveStartPosition) {
			this._fighter.saveCurrentCoords();
		}

		let p = null;
		switch (this._gotoEffect) {
			case GotoEffect.Over:
				p = this._target.position;
				this._fighter.removeStatus(FighterStatus.Fly);
				break;
			default:
				p = this._fighter.getBrawlPos(this._target);
		}
		this._coefSpeed = this._fighter.runSpeed / this._fighter.getDist(p);
		this._fighter.moveTo(
			p.x,
			p.y,
			this._gotoEffect === GotoEffect.Over ? Fighter.MovementType.JumpAbove : Fighter.MovementType.Run
		);
	}

	/**
	 * Update the Fighter movement.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		switch (this._gotoEffect) {
			case GotoEffect.Special:
				if (timer.frameElapsed) {
					this._scene.dm.addSprite(
						new Shade(this._scene, this._fighter, this._shadeColor.col1, this._shadeColor.col2),
						Layers.Scene.SHADE
					);
				}
				this._coefSpeed += 0.005 * timer.tmod;
				break;
			case GotoEffect.Over:
				this._coefSpeed += 0.01 * timer.tmod;
				break;
		}

		this._fighter.updateMove(this._coef);
		if (this._coef === 1) {
			this.end();
		}
	}
}
