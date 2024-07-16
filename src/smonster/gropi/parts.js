// @ts-check
import { ref } from '../references.js';
import { left_eye } from './animations/left_eye.js';
import { mouth_sleep } from './animations/mouth_sleep.js';
import { right_eye } from './animations/right_eye.js';

const horn_color = {
	r: -21,
	g: -31,
	b: -82
};

export const parts = {
	// 1368
	stain_1: [
		{
			ref: ref.gropi.stain_1
		}
	],
	// 1371
	right_spikes: [
		{
			ref: ref.gropi.right_spikes,
			colorOffset: horn_color
		}
	],
	// 1374
	body: [
		{
			ref: ref.gropi.body,
			colorOffset: {
				r: -57,
				g: -72,
				b: -97
			}
		}
	],
	// 1379
	right_eye: [right_eye],
	// 1385
	left_eye: [left_eye],
	// 1388
	mouth: [
		{
			ref: ref.gropi.mouth,
			colorOffset: {
				r: -57,
				g: -72,
				b: -97
			}
		}
	],
	// 1392
	right_horn: [
		// 1390
		{
			ref: ref.gropi.right_horn,
			colorOffset: horn_color
		},
		// 1391
		{
			ref: ref.gropi.right_horn_highlight
		}
	],
	// 1397
	cap: [
		// 1394
		{
			ref: ref.gropi.cap,
			colorOffset: {
				r: -87,
				g: -62,
				b: -108
			}
		},
		// 1394 + 1395
		{
			ref: ref.gropi.cap_spots,
			colorOffset: {
				r: -189,
				g: -179,
				b: -255
			},
			alpha: 0.28
		},
		// 1396
		{
			ref: ref.gropi.cap_highlight
		}
	],
	// 1403
	left_horn: [
		// 1399
		{
			ref: ref.gropi.left_horn_socket,
			transform: {
				tx: -22.4,
				ty: 15.05
			},
			colorOffset: {
				r: -87,
				g: -62,
				b: -108
			}
		},
		// 1401
		{
			ref: ref.gropi.left_horn,
			colorOffset: horn_color
		},
		// 1402
		{
			ref: ref.gropi.left_horn_highlight
		}
	],
	// 1405 + 1421
	stain_2: [
		{
			ref: ref.gropi.stain_2
		}
	],
	// 1406
	stain_3: [
		{
			ref: ref.gropi.stain_3
		}
	],
	// 1407
	stain_4: [
		{
			ref: ref.gropi.stain_4
		}
	],
	// 1408
	stain_drop_1: [
		{
			ref: ref.gropi.stain_drop_1
		}
	],
	// 1409
	stain_5: [
		{
			ref: ref.gropi.stain_5
		}
	],
	// 1410
	stain_drop_2: [
		{
			ref: ref.gropi.stain_drop_2
		}
	],
	// 1411
	stain_6: [
		{
			ref: ref.gropi.stain_6
		}
	],
	// 1412
	stain_drop_3: [
		{
			ref: ref.gropi.stain_drop_3
		}
	],
	// 1413
	stain_7: [
		{
			ref: ref.gropi.stain_7
		}
	],
	// 1414
	stain_drop_4: [
		{
			ref: ref.gropi.stain_drop_4
		}
	],
	// 1415 + 1422
	stain_8: [
		{
			ref: ref.gropi.stain_8
		}
	],
	// 1416
	stain_9: [
		{
			ref: ref.gropi.stain_9
		}
	],
	// 1417 + 1423
	stain_10: [
		{
			ref: ref.gropi.stain_10
		}
	],
	// 1418
	stain_11: [
		{
			ref: ref.gropi.stain_11
		}
	],
	// 1419
	stain_12: [
		{
			ref: ref.gropi.stain_12
		}
	],
	// 1428
	right_eye_atk: [
		{
			ref: ref.gropi.right_eye_attack
		}
	],
	// 1431
	left_eye_atk: [
		// 1429
		{
			ref: ref.gropi.left_spikes_socket_attack
		},
		// 1382
		{
			ref: ref.gropi.left_spikes,
			transform: {
				tx: 3.4,
				ty: 2.4,
				a: 0.924,
				d: 0.924,
				b: -0.379,
				c: 0.379
			},
			colorOffset: horn_color
		},
		// 1430
		{
			ref: ref.gropi.left_eye_attack
		}
	],
	// 1434
	mouth_atk: [
		{
			ref: ref.gropi.mouth_attack,
			transform: {
				tx: 0.1,
				ty: -3.2
			}
		}
	],
	// 1435
	atk_smear_1: [
		{
			ref: ref.gropi.atk_smear_1
		}
	],
	// 1436
	atk_smear_2: [
		{
			ref: ref.gropi.atk_smear_2
		}
	],
	// 1437
	atk_smear_3: [
		{
			ref: ref.gropi.atk_smear_3
		}
	],
	// 1438
	atk_smear_4: [
		{
			ref: ref.gropi.atk_smear_4
		}
	],
	// 1443
	right_eye_sleep: [
		{
			ref: ref.gropi.right_eye_sleep
		}
	],
	// 1445
	left_eye_sleep: [
		// 1444
		{
			ref: ref.gropi.left_eye_sleep
		},
		// 1382
		{
			ref: ref.gropi.left_spikes,
			transform: {
				tx: 3.3,
				ty: 3.8
			},
			colorOffset: horn_color
		}
	],
	// 1449
	mouth_sleep: [mouth_sleep],
	// 1451
	mouth_sleep_open: [
		{
			ref: ref.gropi.mouth_sleep_open
		}
	],
	// 77
	sleep_bubble: [
		{
			ref: ref.shared.sleep_bubble
		}
	]
};
