// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../display/Asset.js';

/**
 * Creates a button which fires a callback on click.
 */
export class Button extends Container {
	/**
	 * Callback to fire when the button is clicked.
	 * @type {() => void}
	 */
	onAction;

	/**
	 * Creates a button with the given display.
	 * A callback can be registered when the button is clicked.
	 * @param {{jpg?: string, png?: string, webp?: string, svg?: string, offset?: {x: number, y: number}}} ref The visual reference to the button.
	 */
	constructor(ref) {
		super();

		const btn = new Asset(ref);
		this.addChild(btn);

		btn.onclick = () => this.clickCallback();
		btn.ontap = () => this.clickCallback();
		btn.eventMode = 'static';
		btn.cursor = 'pointer';
	}

	/**
	 * Method called when the button is clicked.
	 */
	clickCallback() {
		if (this.onAction) {
			this.onAction();
		}
	}
}
