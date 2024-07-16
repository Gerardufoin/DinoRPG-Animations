// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1454
export const gropi = {
	name: 'gropi',
	// Symbol 82
	width: 1.265,
	height: 1.808,
	transforms: [
		// 4089
		{
			tx: -0.1,
			ty: -6.05,
			a: 0.882,
			d: 0.882,
			brightness: -15,
			contrast: 11
		},
		// 1454
		{
			tx: -1.35,
			ty: 2.75,
			a: 0.882,
			d: 0.882
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 1.3,
		color: 0x660000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 1.278,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1368
		stain_1: parts.stain_1,
		// 1371
		r_spikes: parts.right_spikes,
		// 1374
		body: parts.body,
		// 1379
		r_eye: parts.right_eye,
		// 1385
		l_eye: parts.left_eye,
		// 1388
		mouth: parts.mouth,
		// 1392
		r_horn: parts.right_horn,
		// 1397
		cap: parts.cap,
		// 1403
		l_horn: parts.left_horn,
		// 1405 + 1421
		stain_2: parts.stain_2,
		// 1406
		stain_3: parts.stain_3,
		// 1407
		stain_4: parts.stain_4,
		// 1408
		stain_drop_1: parts.stain_drop_1,
		// 1409
		stain_5: parts.stain_5,
		// 1410
		stain_drop_2: parts.stain_drop_2,
		// 1411
		stain_6: parts.stain_6,
		// 1412
		stain_drop_3: parts.stain_drop_3,
		// 1413
		stain_7: parts.stain_7,
		// 1414
		stain_drop_4: parts.stain_drop_4,
		// 1415 + 1422
		stain_8: parts.stain_8,
		// 1416
		stain_9: parts.stain_9,
		// 1417 + 1423
		stain_10: parts.stain_10,
		// 1418
		stain_11: parts.stain_11,
		// 1419
		stain_12: parts.stain_12,
		// 1428
		r_eye_atk: parts.right_eye_atk,
		// 1431
		l_eye_atk: parts.left_eye_atk,
		// 1434
		mouth_atk: parts.mouth_atk,
		// 1435
		atk_smear_1: parts.atk_smear_1,
		// 1436
		atk_smear_2: parts.atk_smear_2,
		// 1437
		atk_smear_3: parts.atk_smear_3,
		// 1438
		atk_smear_4: parts.atk_smear_4,
		// 1443
		r_eye_sleep: parts.right_eye_sleep,
		// 1445
		l_eye_sleep: parts.left_eye_sleep,
		// 1449
		mouth_sleep: parts.mouth_sleep,
		// 1451
		mouth_sleep_open: parts.mouth_sleep_open,
		// 57
		shade: [
			{
				ref: ref_sdino.fx.shadow,
				blur: {
					x: 2,
					y: 2
				}
			}
		],
		sleep_bubble: parts.sleep_bubble
	},
	animations: {
		// guard, release, ill, cast same as stand
		// 1404
		stand: stand,
		// 1420
		walk: walk,
		// 1424
		run: run,
		// 1425
		hit: hit,
		// 1426
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 1439
		attack: attack,
		big: attack,
		counter: attack,
		// 1440
		land: land,
		// 1441
		dead: dead,
		// 1452
		sleep: sleep
	}
};
