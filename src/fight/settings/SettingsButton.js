// @ts-check

import { Container } from 'pixi.js';
import { SCENE_HEIGHT } from '../IScene.js';
import { SettingsPanel } from './SettingsPanel.js';
import { ref } from '../../gfx/references.js';
import { Button } from './Button.js';
import { ConstantShaderManager } from '../../display/ConstantShaderManager.js';

/**
 * A cog button allowing to open the setting panel on click.
 * Will be displayed at the bottom left of the scene.
 */
export class SettingsButton extends Container {
	/**
	 * The panel containing the settings.
	 * @type {SettingsPanel}
	 */
	_settingsPanel;

	/**
	 * Creates a button which allows to open the settings panel when clicked.
	 * @param {SettingsPanel} panel The settings panel to open on click.
	 * @param {() => void} callback Callback to trigger on click on top of opening the menu.
	 */
	constructor(panel, callback) {
		super();

		this._settingsPanel = panel;

		const btn = new Button(ref.settings.cog);
		btn.onAction = () => {
			callback();
			this.openSettings();
		};
		btn.filters = [
			ConstantShaderManager.getGlowFilter({
				color: 0xffffff,
				distance: 5,
				outerStrength: 3,
				quality: 1
			})
		];
		this.addChild(btn);

		this.x = 11;
		this.y = SCENE_HEIGHT - 28;
	}

	/**
	 * Opens the settings panel.
	 */
	openSettings() {
		this._settingsPanel.open();
	}
}
