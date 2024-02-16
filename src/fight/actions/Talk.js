// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Talk.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { SpeechBubble } from '../parts/text/SpeechBubble.js';

/**
 * Creates a Speech Bubble above the Fighter and fill it with the message over time.
 *
 * Once the Speech Bubble is filled, fade it out.
 */
export class Talk extends State {
	/**
	 * The Fighter talking.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The message to display.
	 * @type {string}
	 */
	_message;
	/**
	 * The Speech Bubble displayed above the Fighter.
	 * @type {SpeechBubble}
	 */
	_bubble;

	/**
	 * Current step of the talk.
	 * 0 is when the bubble is being displayed.
	 * 1 is when the State is waiting for confirmation from the player.
	 * 2 is when the State is released and the bubble starts fading out.
	 */
	_step = 0;

	/**
	 * Creates a Speech Bubble above the given Fighter and fill it over time with the given message.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The Fighter's id.
	 * @param {string} message The message to display in the Speech Bubble.
	 */
	constructor(scene, endCall, fid, message) {
		super(scene, endCall);
		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			console.error(`Flip Error: Fighter with id ${fid} does not exist in the scene.`);
			this.kill();
			return;
		}
		this._message = message;

		if (this._fighter._mode !== Fighter.Mode.Dead) {
			this.addActor(this._fighter);
		}
		// Add all the waiting Fighters so they don't move during the speech.
		for (const f of this._scene.getFighters()) {
			if (f._mode === Fighter.Mode.Waiting && f.id !== this._fighter.id) {
				this.addActor(f);
			}
		}
	}

	/**
	 * Creates the speech bubble.
	 */
	init() {
		this._bubble = new SpeechBubble(
			this._fighter.getRootContainer().x,
			this._fighter.getRootContainer().y - (this._fighter.height + 10),
			this._message
		);
		this._scene.addContainer(this._bubble, Scene.LAYERS.LOADING);
		this._scene.setClick(() => {
			this._bubble.speedUp();
		}, true);
	}

	/**
	 * Once the wait timer has elapsed, ends the State.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		switch (this._step) {
			case 0:
				this._bubble.update(timer);
				if (this._bubble.isDisplayed) {
					this._step = 1;
					this._scene.setClick(
						() => {
							this.endTalk();
						},
						true,
						true
					);
				}
				break;
			case 2:
				this._bubble.alpha = 1 - this._coef;
				if (this._coef == 1) {
					this._scene.removeContainer(this._bubble, Scene.LAYERS.LOADING);
					this.end();
				}
				break;
		}
	}

	/**
	 * Ends the talk. The State enters the next step and start fading out the speech bubble.
	 */
	endTalk() {
		this._step = 2;
		this._coef = 0;
		this._coefSpeed = 0.2;
	}
}
