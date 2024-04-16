// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../display/Asset.js';

/**
 * Creates a toggle which fires a callback when toggled on or off.
 */
export class Toggle extends Container {
	/**
	 * Callback to fire when the toggle is switched on.
	 * @type {() => void}
	 */
	onToggle;
	/**
	 * Callback to fire when the toggle is switched off.
	 * @type {() => void}
	 */
	onUntoggle;

	/**
	 * Current state of the toggle.
	 * @type {boolean}
	 */
	_state;
	/**
	 * Display for the ON state.
	 * @type {Container}
	 */
	_displayOn;
	/**
	 * Display for the OFF state.
	 * @type {Container}
	 */
	_displayOff;

	/**
	 * Creates a toggle with the given displays for the on and off state.
	 * @param {{jpg?: string, png?: string, webp?: string, svg?: string, offset?: {x: number, y: number}}} refOn The visual reference to the toggle on.
	 * @param {{jpg?: string, png?: string, webp?: string, svg?: string, offset?: {x: number, y: number}}} refOff The visual reference to the toggle off.
	 * @param {boolean} state Default state of the toggle. True for ON, false for OFF.
	 * @param {() => void} onCb The callback for the ON state.
	 * @param {() => void} offCb The callback for the OFF state.
	 */
	constructor(refOn, refOff, state, onCb, offCb) {
		super();

		const toggle = new Container();
		this._displayOn = new Asset(refOn);
		toggle.addChild(this._displayOn);
		this._displayOff = new Asset(refOff);
		toggle.addChild(this._displayOff);
		this.addChild(toggle);

		toggle.onclick = () => this.clickCallback();
		toggle.ontap = () => this.clickCallback();
		toggle.eventMode = 'static';
		toggle.cursor = 'pointer';

		this._state = state;
		this.onToggle = onCb;
		this.onUntoggle = offCb;
		this.updateDisplay();
	}

	/**
	 * Update the display of the toggle.
	 */
	updateDisplay() {
		this._displayOff.visible = !this._state;
		this._displayOn.visible = this._state;
	}

	/**
	 * Method called when the toggle is clicked.
	 */
	clickCallback() {
		if (this._state && this.onUntoggle) {
			this.onUntoggle();
		} else if (!this._state && this.onToggle) {
			this.onToggle();
		}
		this._state = !this._state;
		this.updateDisplay();
	}
}
