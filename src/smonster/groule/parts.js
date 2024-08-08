// @ts-check

import { ref } from '../references.js';
import { groule_aura } from './animations/eye.js';
import { groule_head } from './animations/head.js';
import { groule_orb } from './animations/orb.js';
import { groule_spark } from './animations/spark.js';
import { groule_stone_1 } from './animations/stone_1.js';
import { groule_stone_2 } from './animations/stone_2.js';
import { groule_stone_3 } from './animations/stone_3.js';
import { groule_stone_4 } from './animations/stone_4.js';
import { groule_stone_5 } from './animations/stone_5.js';
import { groule_stone_6 } from './animations/stone_6.js';
import { groule_stone_7 } from './animations/stone_7.js';

const stone_adjust = {
	brightness: -15,
	contrast: 31,
	saturation: 20
};

export const parts = {
	// 3099
	orb: [
		{
			...groule_orb,
			colorAdjust: {
				brightness: 5,
				contrast: 55,
				saturation: 98,
				hue: -160
			}
		}
	],
	// 3108
	aura: [
		{
			...groule_aura,
			transform: {
				tx: 69.9,
				ty: 55.4,
				a: -0.844,
				d: -0.844
			},
			glow: {
				distance: 5,
				color: 0xffcc00,
				quality: 0.5,
				strength: 1
			}
		},
		{
			...groule_aura,
			transform: {
				tx: 22.35,
				ty: 70.2,
				a: 0.926,
				d: -0.793,
				b: -0.535,
				c: -0.458
			},
			glow: {
				distance: 5,
				color: 0xffcc00,
				quality: 0.5,
				strength: 1
			},
			alpha: 0.5
		}
	],
	// 3113
	stone_1: [
		{
			...groule_stone_1,
			colorAdjust: stone_adjust
		}
	],
	// 3113
	stone_dead_1: [
		// 3109
		{
			ref: ref.groule.stone_1
		},
		// 3111
		{
			ref: ref.groule.stone_1_reflection,
			transform: {
				tx: 0.15,
				ty: 1.2
			}
		}
	],
	// 3113
	stone_dead_nr_1: [
		// 3109
		{
			ref: ref.groule.stone_1
		}
	],
	// 3118
	stone_2: [
		{
			...groule_stone_2,
			colorAdjust: stone_adjust
		}
	],
	// 3118
	stone_dead_2: [
		// 3114
		{
			ref: ref.groule.stone_2
		},
		// 3116
		{
			ref: ref.groule.stone_2_reflection,
			transform: {
				tx: 0.6,
				ty: 0.35
			}
		}
	],
	// 3118
	stone_dead_nr_2: [
		// 3114
		{
			ref: ref.groule.stone_2
		}
	],
	// 3124
	stone_3: [
		{
			...groule_stone_3,
			colorAdjust: stone_adjust
		}
	],
	// 3124
	stone_dead_3: [
		// 3114
		{
			ref: ref.groule.stone_3
		},
		// 3116
		{
			ref: ref.groule.stone_3_reflection,
			transform: {
				tx: -1.1,
				ty: 1
			}
		}
	],
	// 3124
	stone_dead_nr_3: [
		// 3114
		{
			ref: ref.groule.stone_3
		}
	],
	// 3129
	stone_4: [
		{
			...groule_stone_4,
			colorAdjust: stone_adjust
		}
	],
	// 3129
	stone_dead_4: [
		// 3125
		{
			ref: ref.groule.stone_4
		},
		// 3127
		{
			ref: ref.groule.stone_4_reflection,
			transform: {
				tx: 0.25,
				ty: 0.15
			}
		}
	],
	// 3129
	stone_dead_nr_4: [
		// 3125
		{
			ref: ref.groule.stone_4
		}
	],
	// 3134
	stone_5: [
		{
			...groule_stone_5,
			colorAdjust: stone_adjust
		}
	],
	// 3134
	stone_dead_5: [
		// 3130
		{
			ref: ref.groule.stone_5
		},
		// 3132
		{
			ref: ref.groule.stone_5_reflection,
			transform: {
				tx: 0.3,
				ty: 0.05
			}
		}
	],
	// 3134
	stone_dead_nr_5: [
		// 3130
		{
			ref: ref.groule.stone_5
		}
	],
	// 3139
	stone_6: [
		{
			...groule_stone_6,
			colorAdjust: stone_adjust
		}
	],
	// 3139
	stone_dead_6: [
		// 3135
		{
			ref: ref.groule.stone_6
		},
		// 3137
		{
			ref: ref.groule.stone_6_reflection,
			transform: {
				tx: 0.3
			}
		}
	],
	// 3139
	stone_dead_nr_6: [
		// 3135
		{
			ref: ref.groule.stone_6
		}
	],
	// 3144
	stone_7: [
		{
			...groule_stone_7,
			colorAdjust: stone_adjust
		}
	],
	// 3144
	stone_dead_7: [
		// 3140
		{
			ref: ref.groule.stone_7
		},
		// 3142
		{
			ref: ref.groule.stone_7_reflection,
			transform: {
				tx: 0.3,
				ty: 0.75
			}
		}
	],
	// 3144
	stone_dead_nr_7: [
		// 3140
		{
			ref: ref.groule.stone_7
		}
	],
	// 3151
	head: [
		{
			...groule_head,
			colorAdjust: stone_adjust
		}
	],
	// 3151
	head_dead: [
		// 3145
		{
			ref: ref.groule.head
		},
		// 3147
		{
			ref: ref.groule.eyes,
			transform: {
				tx: 3.35,
				ty: 25.8
			}
		},
		// 3149
		{
			ref: ref.groule.head_reflection,
			transform: {
				tx: 0.05,
				ty: 14.2
			}
		}
	],
	// 3151
	head_dead_nr: [
		// 3145
		{
			ref: ref.groule.head
		},
		// 3147
		{
			ref: ref.groule.eyes,
			transform: {
				tx: 3.35,
				ty: 25.8
			}
		}
	],
	// 3159
	attack: [
		{
			...groule_spark,
			glow: {
				distance: 5,
				color: 0xffcc00,
				quality: 0.5,
				strength: 1
			}
		}
	]
};
