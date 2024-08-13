// @ts-check
import { ref } from '../references.js';
import { stroa_body } from './animations/body.js';
import { stroa_left_eye } from './animations/left_eye.js';
import { stroa_pasta } from './animations/pasta.js';
import { stroa_right_eye } from './animations/right_eye.js';
import { stroa_tentacle } from './animations/tentacle.js';

export const parts = {
	// 3872
	back: [
		{
			ref: ref.stroa.back
		}
	],
	// 3880
	right_eye: [stroa_right_eye],
	// 3886
	left_eye: [stroa_left_eye],
	// 3890
	tentacle: [stroa_tentacle],
	// 3891
	tentacles: [
		{
			...stroa_tentacle,
			transform: {
				tx: -39.75,
				ty: -39,
				a: -0.016,
				d: -0.016,
				b: -1,
				c: 1
			}
		},
		{
			...stroa_tentacle,
			transform: {
				tx: 25.2,
				ty: -44.1,
				a: -0.207,
				d: -0.207,
				b: -0.978,
				c: 0.978
			}
		},
		{
			...stroa_tentacle,
			transform: {
				tx: 2.75,
				ty: -17.8,
				a: -0.107,
				d: -0.107,
				b: -0.994,
				c: 0.994
			}
		},
		{
			...stroa_tentacle,
			transform: {
				tx: -15.55,
				ty: -52.85,
				a: 0.093,
				d: 0.093,
				b: -0.996,
				c: 0.996
			},
			colorOffset: {
				r: 10
			},
			colorMultiplier: {
				r: 0.797,
				g: 0.797,
				b: 0.797
			}
		},
		{
			...stroa_tentacle,
			transform: {
				tx: 7.85,
				ty: -48.65,
				a: 0.104,
				d: -0.104,
				b: -0.995,
				c: -0.995
			},
			colorOffset: {
				r: 10
			},
			colorMultiplier: {
				r: 0.797,
				g: 0.797,
				b: 0.797
			}
		},
		{
			...stroa_tentacle,
			transform: {
				tx: -15.35,
				ty: -40.35,
				a: 0.013,
				d: -0.013,
				b: -1,
				c: -1
			}
		}
	],
	// 3914
	pasta: [stroa_pasta],
	// 3926
	body: [stroa_body],
	// 3930
	attack_sauce_1: [
		{
			ref: ref.stroa.attack_sauce_1
		}
	],
	// 3931
	attack_sauce_2: [
		{
			ref: ref.stroa.attack_sauce_2
		}
	],
	// 3932
	attack_sauce_3: [
		{
			ref: ref.stroa.attack_sauce_3
		}
	],
	// 3933
	attack_sauce_4: [
		{
			ref: ref.stroa.attack_sauce_4
		}
	],
	// 3934
	attack_sauce_5: [
		{
			ref: ref.stroa.attack_sauce_5
		}
	],
	// 3935
	attack_sauce_6: [
		{
			ref: ref.stroa.attack_sauce_6
		}
	],
	// 3936
	attack_sauce_7: [
		{
			ref: ref.stroa.attack_sauce_7
		}
	],
	// 3937
	attack_sauce_8: [
		{
			ref: ref.stroa.attack_sauce_8
		}
	],
	// 3938
	attack_sauce_9: [
		{
			ref: ref.stroa.attack_sauce_9
		}
	],
	// 3939
	attack_sauce_10: [
		{
			ref: ref.stroa.attack_sauce_10
		}
	],
	// 3940
	attack_sauce_11: [
		{
			ref: ref.stroa.attack_sauce_11
		}
	],
	// 3941
	attack_sauce_12: [
		{
			ref: ref.stroa.attack_sauce_12
		}
	],
	// 3942
	attack_sauce_13: [
		{
			ref: ref.stroa.attack_sauce_13
		}
	],
	// 3946
	body_dead: [
		{
			ref: ref.stroa.body_dead
		}
	],
	// 3947
	pasta_dead_1: [
		{
			ref: ref.stroa.pasta_dead_1
		}
	],
	// 3948
	pasta_dead_2: [
		{
			ref: ref.stroa.pasta_dead_2
		}
	],
	// 3949
	pasta_dead_3: [
		{
			ref: ref.stroa.pasta_dead_3
		}
	],
	// 3950
	pasta_dead_4: [
		{
			ref: ref.stroa.pasta_dead_4
		}
	],
	// 3951
	pasta_dead_5: [
		{
			ref: ref.stroa.pasta_dead_5
		}
	],
	// 3952
	pasta_dead_6: [
		{
			ref: ref.stroa.pasta_dead_6
		}
	],
	// 3953
	pasta_dead_7: [
		{
			ref: ref.stroa.pasta_dead_7
		}
	],
	// 3954
	pasta_dead_8: [
		{
			ref: ref.stroa.pasta_dead_8
		}
	],
	// 3955
	pasta_dead_9: [
		{
			ref: ref.stroa.pasta_dead_9
		}
	],
	// 3956
	pasta_dead_10: [
		{
			ref: ref.stroa.pasta_dead_10
		}
	],
	// 3957
	pasta_dead_11: [
		{
			ref: ref.stroa.pasta_dead_11
		}
	],
	// 3958
	pasta_dead_12: [
		{
			ref: ref.stroa.pasta_dead_12
		}
	],
	// 3959
	pasta_dead_13: [
		{
			ref: ref.stroa.pasta_dead_13
		}
	],
	// 3960
	pasta_dead_14: [
		{
			ref: ref.stroa.pasta_dead_14
		}
	],
	// 3961
	pasta_dead_15: [
		{
			ref: ref.stroa.pasta_dead_15
		}
	],
	// 3962
	pasta_dead_16: [
		{
			ref: ref.stroa.pasta_dead_16
		}
	],
	// 3965
	tentacles_sleep: [
		{
			ref: ref.stroa.tentacles_sleep
		}
	],
	// 3967
	right_eye_sleep: [
		// 3966
		{
			ref: ref.stroa.right_eye_sleep
		},
		// 3877
		{
			ref: ref.stroa.right_eye_sauce,
			transform: {
				tx: -8.05,
				ty: -16.8,
				a: 0.807,
				d: 0.807,
				b: -0.591,
				c: 0.591
			}
		}
	],
	// 3969
	left_eye_sleep: [
		// 3968
		{
			ref: ref.stroa.left_eye_sleep
		},
		// 3883
		{
			ref: ref.stroa.left_eye_sauce,
			transform: {
				tx: -6.45,
				ty: -19.5,
				a: 0.885,
				d: 0.885,
				b: 0.465,
				c: -0.465
			}
		}
	],
	// 3971
	body_sleep: [
		{
			ref: ref.stroa.body_sleep
		}
	],
	// 3973
	sleep_bubble: [
		{
			ref: ref.stroa.sleep_bubble
		}
	]
};
