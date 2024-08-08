// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { land } from './animations/land.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 2381
export const piglou = {
	name: 'piglou',
	// Symbol 82
	width: 1.241,
	height: 1.32,
	transforms: [
		// 4089
		{
			tx: -19.35,
			ty: -52,
			a: 1.412,
			d: 1.412
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 1,
			a: 1.291,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2267
		r_horn: parts.right_horn,
		// 2269
		r_arm: parts.right_arm,
		// 2271
		head: parts.head,
		// 2273
		body: parts.body,
		// 2275
		face: parts.face,
		// 2277
		mouth: parts.mouth,
		// 2279
		l_horn: parts.left_horn,
		// 2281
		l_arm: parts.left_arm,
		// 2283
		snow: parts.snow,
		// 2285
		snw_walk_1: parts.snow_walk_1,
		// 2286
		snw_walk_2: parts.snow_walk_2,
		// 2287
		snw_walk_3: parts.snow_walk_3,
		// 2288
		snw_walk_4: parts.snow_walk_4,
		// 2289
		snw_walk_5: parts.snow_walk_5,
		// 2290
		snw_walk_6: parts.snow_walk_6,
		// 2291
		snw_walk_7: parts.snow_walk_7,
		// 2292
		snw_walk_8: parts.snow_walk_8,
		// 2293
		snw_walk_9: parts.snow_walk_9,
		// 2295
		snw_run_1: parts.snow_run_1,
		// 2296
		snw_run_2: parts.snow_run_2,
		// 2297
		snw_run_3: parts.snow_run_3,
		// 2298
		snw_run_4: parts.snow_run_4,
		// 2299
		snw_run_5: parts.snow_run_5,
		// 2300
		snw_run_6: parts.snow_run_6,
		// 2309
		atk_mouth: parts.attack_mouth,
		// 2310
		atk_voice_1: parts.attack_voice_1,
		// 2324
		atk_grr: parts.attack_grr,
		// 2325
		atk_voice_2: parts.attack_voice_2,
		// 2331
		atk_burst_1: parts.attack_burst,
		// 2331-1
		atk_burst_2: parts.attack_burst,
		// 2331-2
		atk_burst_3: parts.attack_burst,
		// 2332
		atk_voice_3: parts.attack_voice_3,
		// 2333
		atk_voice_4: parts.attack_voice_4,
		// 2334
		atk_voice_5: parts.attack_voice_5,
		// 2335
		atk_voice_6: parts.attack_voice_6,
		// 2336
		atk_voice_7: parts.attack_voice_7,
		// 2337
		atk_voice_8: parts.attack_voice_8,
		// 2338
		atk_voice_9: parts.attack_voice_9,
		// 2339
		atk_voice_10: parts.attack_voice_10,
		// 2340
		atk_voice_11: parts.attack_voice_11,
		// 2341
		atk_voice_12: parts.attack_voice_12,
		// 2342
		atk_voice_13: parts.attack_voice_13,
		// 2346
		snw_explo_1: parts.snow_explo_1,
		// 2347
		snw_vanish_1: parts.snow_vanish_1,
		// 2349
		snw_vanish_2: parts.snow_vanish_2,
		// 2350
		snw_explo_2: parts.snow_explo_2,
		// 2351
		snw_vanish_3: parts.snow_vanish_3,
		// 2352
		snw_vanish_4: parts.snow_vanish_4,
		// 2353
		snw_explo_3: parts.snow_explo_3,
		// 2354
		snw_vanish_5: parts.snow_vanish_5,
		// 2355
		snw_vanish_6: parts.snow_vanish_6,
		// 2357
		snw_vanish_7: parts.snow_vanish_7,
		// 2358
		snw_explo_4: parts.snow_explo_4,
		// 2359
		snw_vanish_8: parts.snow_vanish_8,
		// 2360
		snw_vanish_9: parts.snow_vanish_9,
		// 2361
		snw_explo_5: parts.snow_explo_5,
		// 2362
		snw_vanish_10: parts.snow_vanish_10,
		// 2363
		snw_vanish_11: parts.snow_vanish_11,
		// 2364
		snw_vanish_12: parts.snow_vanish_12,
		// 2365
		snw_explo_6: parts.snow_explo_6,
		// 2366
		snw_vanish_13: parts.snow_vanish_13,
		// 2368
		snw_vanish_14: parts.snow_vanish_14,
		// 2369
		snw_explo_7: parts.snow_explo_7,
		// 2371
		snw_explo_8: parts.snow_explo_8,
		// 2372
		snw_explo_9: parts.snow_explo_9,
		// 2373
		snw_explo_10: parts.snow_explo_10,
		// 2374
		snw_explo_11: parts.snow_explo_11,
		// 2375
		snw_explo_12: parts.snow_explo_12,
		// 2378
		face_sleep: parts.face_sleep,
		// Manual (morphshapes)
		body_dead_1: parts.body_dead_1,
		body_dead_2: parts.body_dead_2,
		body_dead_3: parts.body_dead_3,
		body_dead_4: parts.body_dead_4,
		body_dead_5: parts.body_dead_5,
		body_dead_6: parts.body_dead_6,
		body_dead_7: parts.body_dead_7,
		body_dead_8: parts.body_dead_8,
		body_dead_9: parts.body_dead_9,
		body_dead_10: parts.body_dead_10,
		body_dead_11: parts.body_dead_11,
		body_dead_12: parts.body_dead_12,
		body_dead_13: parts.body_dead_13,
		body_dead_14: parts.body_dead_14,
		body_dead_15: parts.body_dead_15,
		body_dead_16: parts.body_dead_16,
		body_dead_17: parts.body_dead_17,
		snow_melt_1: parts.snow_melt_1,
		snow_melt_2: parts.snow_melt_2,
		snow_melt_3: parts.snow_melt_3
	},
	animations: {
		// guard, release, ill same as stand
		// 2284
		stand: stand,
		// 2294
		walk: walk,
		// 2301
		run: run,
		// 2302
		hit: hit,
		// 2303
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 2343
		attack: attack,
		big: attack,
		// 2344
		land: land,
		// 2376
		dead: dead,
		// 2379
		sleep: sleep
	}
};
