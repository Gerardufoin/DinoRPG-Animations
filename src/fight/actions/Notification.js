// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Notification.hx
import { BlurFilter } from 'pixi.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { ref } from '../../gfx/references.js';
import { NotificationDisplay } from '../parts/notifications/NotificationDisplay.js';
import { BasicNotification } from '../parts/notifications/BasicNotification.js';
import { SlowNotification } from '../parts/notifications/SlowNotification.js';
import { QuickNotification } from '../parts/notifications/QuickNotification.js';
import { SharinganNotification } from '../parts/notifications/SharinganNotification.js';
import { DownNotification } from '../parts/notifications/DownNotification.js';
import { UpNotification } from '../parts/notifications/UpNotification.js';
import { InitUpNotification } from '../parts/notifications/InitUpNotification.js';
import { StrongNotification } from '../parts/notifications/StrongNotification.js';

export const Notifications = {
	Slow: 0,
	Quick: 1,
	Silence: 2,
	Sharingan: 3,
	NoUse: 4,
	Down: 5,
	Up: 6,
	Fire: 7,
	Wood: 8,
	Water: 9,
	Thunder: 10,
	Air: 11,
	InitUp: 12,
	InitDown: 13,
	Snake: 14,
	Strong: 15,
	Shield: 16,
	MonoElt: 17,
	Todo: 18
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
		switch (notif) {
			case Notifications.Slow:
				return new SlowNotification();
			case Notifications.Quick:
				return new QuickNotification();
			case Notifications.Silence:
				return new BasicNotification(ref.status.silence, -10.55, -8.1, 2);
			case Notifications.Sharingan:
				return new SharinganNotification();
			case Notifications.NoUse:
				return new BasicNotification(ref.status.no_use);
			case Notifications.Down:
				return new DownNotification();
			case Notifications.Up:
				return new UpNotification();
			case Notifications.Fire:
				return new BasicNotification(ref.status.fire);
			case Notifications.Wood:
				return new BasicNotification(ref.status.wood);
			case Notifications.Water:
				return new BasicNotification(ref.status.water);
			case Notifications.Thunder:
				return new BasicNotification(ref.status.thunder);
			case Notifications.Air:
				return new BasicNotification(ref.status.air);
			case Notifications.InitUp:
				return new InitUpNotification();
			case Notifications.InitDown:
				return new BasicNotification(ref.status.init_down, -11.35, -12.45);
			case Notifications.Snake:
				return new BasicNotification(ref.status.snake, -11.65, -8.8, 2);
			case Notifications.Strong:
				return new StrongNotification();
			case Notifications.MonoElt:
				return new BasicNotification(ref.status.lock, -5.9, -7.1, 1.85);
			case Notifications.Shield:
				return new BasicNotification(ref.status.shield, -5.35, -8.6, 1.8);
			case Notifications.Stun:
				return new BasicNotification(ref.status.stun_notif);
		}
		return new NotificationDisplay();
	}

	/**
	 * Update the display of the notification, making it blurry out over time.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		for (const f of this._fighters) {
			f.notification.update(timer);
		}

		if (!this._fadeOut) {
			// Normal display part
			if (this._coef === 1) {
				this._blurFilter.blur = 0.5;
				this._coefSpeed = 0.025;
				this._fadeOut = true;
				this._coef = 0;
			}
		} else {
			// Fadeout/Blurout part
			this._fadeTimer += timer.tmod;
			if (this._fadeTimer >= 1) {
				this._fadeTimer--;
				this._blurFilter.blur = 0.5 + 6 * this._coef;
				for (const f of this._fighters) {
					f.notification.y -= 3;
					f.notification.alpha = Math.max(f.notification.alpha - 0.05, 0);
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
