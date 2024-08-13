// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { stand } from './animations/stand.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { parts } from './parts.js';

// stroa animation have inner drop shadow filters.
// Did not find an alternative for pixijs, so they are in the animation but not implemented.
// (Those are the values ds* for the body part)
// Symbol 3976
export const stroa = {
	name: 'stroa',
	// Symbol 82
	width: 2.681,
	height: 4.071,
	transforms: [
		// 4089
		{
			tx: 12,
			ty: -80,
			a: 0.593,
			d: 0.593,
			brightness: 7,
			contrast: 11
		}
	],
	glow: {
		distance: 4,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 3.022,
			d: 2.735
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3872
		back: parts.back,
		// 3880
		r_eye: parts.right_eye,
		// 3886
		l_eye: parts.left_eye,
		// 3890
		tentacle_1: parts.tentacle,
		// 3890-1
		tentacle_2: parts.tentacle,
		// 3890-2
		tentacle_3: parts.tentacle,
		// 3890-3
		tentacle_4: parts.tentacle,
		// 3890-4
		tentacle_5: parts.tentacle,
		// 3890-5
		tentacle_6: parts.tentacle,
		// 3890-6
		tentacle_7: parts.tentacle,
		// 3891
		tentacles_1: parts.tentacles,
		// 3891-1
		tentacles_2: parts.tentacles,
		// 3891-2
		tentacles_3: parts.tentacles,
		// 3914
		pasta_1: parts.pasta,
		// 3914-1
		pasta_2: parts.pasta,
		// 3914-2
		pasta_3: parts.pasta,
		// 3914-3
		pasta_4: parts.pasta,
		// 3914-4
		pasta_5: parts.pasta,
		// 3914-5
		pasta_6: parts.pasta,
		// 3926
		body: parts.body,
		// 3930
		atk_sauce_1: parts.attack_sauce_1,
		// 3931
		atk_sauce_2: parts.attack_sauce_2,
		// 3932
		atk_sauce_3: parts.attack_sauce_3,
		// 3933
		atk_sauce_4: parts.attack_sauce_4,
		// 3934
		atk_sauce_5: parts.attack_sauce_5,
		// 3935
		atk_sauce_6: parts.attack_sauce_6,
		// 3936
		atk_sauce_7: parts.attack_sauce_7,
		// 3937
		atk_sauce_8: parts.attack_sauce_8,
		// 3938
		atk_sauce_9: parts.attack_sauce_9,
		// 3939
		atk_sauce_10: parts.attack_sauce_10,
		// 3940
		atk_sauce_11: parts.attack_sauce_11,
		// 3941
		atk_sauce_12: parts.attack_sauce_12,
		// 3942
		atk_sauce_13: parts.attack_sauce_13,
		// 3946
		body_dead: parts.body_dead,
		// 3947
		pasta_dead_1: parts.pasta_dead_1,
		// 3948
		pasta_dead_2: parts.pasta_dead_2,
		// 3949
		pasta_dead_3: parts.pasta_dead_3,
		// 3950
		pasta_dead_4: parts.pasta_dead_4,
		// 3951
		pasta_dead_5: parts.pasta_dead_5,
		// 3952
		pasta_dead_6: parts.pasta_dead_6,
		// 3953
		pasta_dead_7: parts.pasta_dead_7,
		// 3954
		pasta_dead_8: parts.pasta_dead_8,
		// 3955
		pasta_dead_9: parts.pasta_dead_9,
		// 3956
		pasta_dead_10: parts.pasta_dead_10,
		// 3957
		pasta_dead_11: parts.pasta_dead_11,
		// 3958
		pasta_dead_12: parts.pasta_dead_12,
		// 3959
		pasta_dead_13: parts.pasta_dead_13,
		// 3960
		pasta_dead_14: parts.pasta_dead_14,
		// 3961
		pasta_dead_15: parts.pasta_dead_15,
		// 3962
		pasta_dead_16: parts.pasta_dead_16,
		// 3965
		tentacles_sleep: parts.tentacles_sleep,
		// 3967
		r_eye_sleep: parts.right_eye_sleep,
		// 3969
		l_eye_sleep: parts.left_eye_sleep,
		// 3971
		body_sleep: parts.body_sleep,
		// 3973
		sleep_bubble: parts.sleep_bubble
	},
	animations: {
		// release, ill, cast, walk, run same as stand
		// 3927
		stand: stand,
		// 3928
		hit: hit,
		// 3929
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 3943
		attack: attack,
		big: attack,
		counter: attack,
		// 3944
		land: land,
		// 3963
		dead: dead,
		// 3974
		sleep: sleep
	}
};
