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
import { Layers } from '../DepthManager.js';
import { NotificationList } from '../Constants.js';

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
				f.dm.addContainer(n, Layers.Fighter.FRONT);
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
			case NotificationList.Slow:
				return new SlowNotification();
			case NotificationList.Quick:
				return new QuickNotification();
			case NotificationList.Silence:
				return new BasicNotification(ref.status.silence, -10.55, -8.1, 2);
			case NotificationList.Sharingan:
				return new SharinganNotification();
			case NotificationList.NoUse:
				return new BasicNotification(ref.status.no_use);
			case NotificationList.Down:
				return new DownNotification();
			case NotificationList.Up:
				return new UpNotification();
			case NotificationList.Fire:
				return new BasicNotification(ref.status.fire);
			case NotificationList.Wood:
				return new BasicNotification(ref.status.wood);
			case NotificationList.Water:
				return new BasicNotification(ref.status.water);
			case NotificationList.Thunder:
				return new BasicNotification(ref.status.thunder);
			case NotificationList.Air:
				return new BasicNotification(ref.status.air);
			case NotificationList.InitUp:
				return new InitUpNotification();
			case NotificationList.InitDown:
				return new BasicNotification(ref.status.init_down, -11.35, -12.45);
			case NotificationList.Snake:
				return new BasicNotification(ref.status.snake, -11.65, -8.8, 2);
			case NotificationList.Strong:
				return new StrongNotification();
			case NotificationList.MonoElt:
				return new BasicNotification(ref.status.lock, -5.9, -7.1, 1.85);
			case NotificationList.Shield:
				return new BasicNotification(ref.status.shield, -5.35, -8.6, 1.8);
			case NotificationList.Stun:
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
					f.fighter.dm.removeContainer(f.notification, Layers.Fighter.FRONT);
				}
				this.end();
			}
		}
	}
}
