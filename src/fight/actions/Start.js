// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Start.hx
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * Fades out the loading screen from the Scene.
 */
export class Start extends State {
	/**
	 * Fades out the loading screen from the Scene.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);

		if (this._scene.endLoading(timer)) {
			this.end();
		}
	}
}
