// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Notification.hx
import { BlurFilter } from 'pixi.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { NotificationDisplay } from '../parts/notifications/NotificationDisplay.js';

export const Notifications = {
	Slow: 0,
	Quick: 1,
	Silence: 2,
	Sharignan: 2,
	NoUse: 3,
	Down: 4,
	Up: 5,
	Fire: 6,
	Wood: 7,
	Water: 8,
	Thunder: 9,
	Air: 10,
	InitUp: 11,
	InitDown: 12,
	Snake: 13,
	Strong: 14,
	Shield: 15,
	MonoElt: 16,
	Todo: 17
};

/**
 * A notification appears above a group of Fighters.
 */
export class Notification extends State {
	/**
	 * A list of the Fighters showing the notification and their associated notification.
	 * @type {{fighter: Fighter, notification: NotificationDisplay}[]}
	 */
	_fighters = [];
	/**
	 * The blur filter applied to the notifications.
	 */
	_blurFilter = new BlurFilter(0);
	/**
	 * Once true, the notification will fade out over time.
	 * @type {boolean}
	 */
	_fadeOut = false;
	/**
	 * The fadeout timer to respect the frame rate.
	 * @type {number}
	 */
	_fadeTimer = 0;

	/**
	 * A group of Fighters (fids) show the specified notification above their head.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number[]} fids A list of the impacted Fighters' id.
	 * @param {number} notif A notification from the Notifications enum.
	 */
	constructor(scene, endCall, fids, notif) {
		super(scene, endCall);

		for (const fid of fids) {
			const f = this._scene.getFighter(fid);
			if (f) {
				const n = this.createDisplay(notif);
				n.filters = [this._blurFilter];
				n.y = -f.height / 2;
				f.addContainer(n, Fighter.LAYERS.DP_FRONT);
				this._fighters.push({
					fighter: f,
					notification: n
				});
			} else {
				console.error(`Notification Error: Fighter with id ${fid} does not exist in the scene.`);
			}
		}
		this._castingWait = false;
		this._coefSpeed = 0.05;
	}

	/**
	 * Create the display corresponding at the given Notifications.
	 * @param {number} notif Element of the Notifications enum.
	 * @returns {NotificationDisplay} The appropriate display to add to the Fighter.
	 */
	createDisplay(notif) {
		return new NotificationDisplay();
	}

	/**
	 * Update the display of the notification, making it blurry out over time.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (!this._fadeOut) {
			// Normal display part
			if (this._coef === 1) {
				this._blurFilter.blur = 1;
				this._coefSpeed = 0.025;
				this._fadeOut = true;
				this._coef = 0;
			}
		} else {
			// Fadeout/Blurout part
			this._fadeTimer += timer.tmod;
			if (this._fadeTimer >= 1) {
				this._fadeTimer--;
				this._blurFilter.blur = 1 + 3 * this._coef;
				for (const f of this._fighters) {
					f.notification.y -= 3;
					f.notification.alpha = Math.max(f.notification.alpha - 5, 0);
				}
			}
			if (this._coef === 1) {
				for (const f of this._fighters) {
					f.fighter.removeContainer(f.notification, Fighter.LAYERS.DP_FRONT);
				}
				this.end();
			}
		}
	}
}
