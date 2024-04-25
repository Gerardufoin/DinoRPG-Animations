// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Text.hx
import { Layers } from '../DepthManager.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { TextBox } from '../parts/text/TextBox.js';

/**
 * Creates a text box at the top of the scene and display a message over time.
 * All the fighters are immobilized while the text box is on screen.
 */
export class Text extends State {
	/**
	 * The message to display.
	 * @type {string}
	 */
	_message;
	/**
	 * The text box where the text is displayed.
	 * @type {TextBox}
	 */
	_textBox;

	/**
	 * Current step of the text.
	 * 0 is when the text is being displayed.
	 * 1 is when the State is waiting for confirmation from the player.
	 * 2 is when the State is released and the text box starts fading out.
	 */
	_step = 0;

	/**
	 * Creates a text box at the top of the screen and fills it over time with the given message.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {string} message The message to display in the text box.
	 */
	constructor(scene, endCall, message) {
		super(scene, endCall);
		this._message = message;

		// Add all the waiting Fighters so they don't move while the text is displayed.
		for (const f of this._scene.getFighters()) {
			if (f._mode === Fighter.Mode.Waiting) {
				this.addActor(f);
			}
		}
	}

	/**
	 * Creates the text box.
	 */
	init() {
		this._textBox = new TextBox(this._scene, this._message);
		this._scene.dm.addContainer(this._textBox, Layers.Scene.INTER);
		this._scene.setClick(() => {
			this._textBox.speedUp();
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
				this._textBox.update(timer);
				if (this._textBox.isDisplayed) {
					this._step = 1;
					if (this._scene.settings.autoSkip < 0) {
						this._scene.setClick(
							() => {
								this.endTalk();
							},
							true,
							true
						);
					} else {
						this._scene.removeClick();
						setTimeout(() => {
							this.endTalk();
						}, this._scene.settings.autoSkip * 1000);
					}
				}
				break;
			case 2:
				this._textBox.alpha = 1 - this._coef;
				if (this._coef == 1) {
					this._scene.dm.removeContainer(this._textBox, Layers.Scene.INTER);
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
