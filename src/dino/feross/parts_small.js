// @ts-check
import { ref } from '../references_small.js';

export let parts_small = {
	// 858 p6
	ear: [
		// 857
		{
			colorIdx: 0,
			ref: ref.feross.ear
		}
	],
	// 861
	butt: [
		// 860
		{
			colorIdx: 1,
			ref: ref.feross.body
		}
	],
	// 867 p4
	leg: [
		// 863
		{
			colorIdx: 0,
			ref: ref.feross.leg_bottom,
			transform: {
				tx: -1.15,
				ty: 1.0
			}
		},
		// 865
		{
			colorIdx: 1,
			ref: ref.feross.leg_top,
			transform: {
				tx: 1.8,
				ty: -1.1
			}
		},
		// 866
		{
			ref: ref.feross.leg_nails
		}
	],
	// 878 p7
	body: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 3, 3, 3],
			parts: [
				// 869
				{
					colorIdx: 1,
					ref: ref.feross.body_grain
				},
				// 871
				{
					colorIdx: 1,
					ref: ref.feross.body_vent
				},
				// 873
				{
					colorIdx: 1,
					ref: ref.feross.body_bump
				},
				[
					// 860
					{
						colorIdx: 1,
						ref: ref.feross.body
					},
					// 877 p9
					{
						partIdx: 9,
						frames: [0, 1, 2],
						parts: [
							// 874
							{
								colorIdx: 3,
								ref: ref.feross.marking_dots,
								transform: {
									tx: -0.5,
									ty: -2.95
								}
							},
							// 875
							{
								colorIdx: 3,
								ref: ref.feross.marking_snakes,
								transform: {
									tx: -0.5,
									ty: -2.95
								}
							},
							// 876
							{
								colorIdx: 3,
								ref: ref.feross.marking_waves,
								transform: {
									tx: -0.5,
									ty: -2.95
								}
							}
						]
					}
				]
			]
		}
	],
	// 881 p8
	head: [
		// 880
		{
			colorIdx: 0,
			ref: ref.feross.head
		}
	],
	// 887 p3
	eye: [
		// 882
		{
			ref: ref.feross.eye
		},
		// 884
		{
			colorIdx: 0,
			ref: ref.feross.eye_skin
		},
		// 886
		{
			colorIdx: 2,
			ref: ref.feross.eye_pupil,
			transform: {
				tx: -0.05,
				ty: 0.95
			}
		}
	],
	// 892 special
	special: [
		// Multiple special
		{
			partIdx: 15,
			frames: [-1, 0, 1],
			parts: [
				[
					// 888
					{
						ref: ref.feross.special_skull
					},
					// 890
					{
						colorIdx: 2,
						ref: ref.feross.special_feather,
						transform: {
							tx: 5.6,
							ty: -9.0
						}
					}
				],
				// 891
				{
					ref: ref.feross.special_christmas
				}
			]
		}
	],
	// 898 p5
	horn: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 1, 2, 2, 3, 4],
			parts: [
				// 893
				{
					ref: ref.feross.horn
				},
				// 894
				{
					ref: ref.feross.horn_small
				},
				// 895
				{
					ref: ref.feross.horn_twice
				},
				// 896
				{
					ref: ref.feross.horn_t
				},
				// 897
				{
					ref: ref.feross.horn_l
				}
			]
		}
	],
	// 901 p4
	nostril: [
		// 900
		{
			colorIdx: 0,
			ref: ref.feross.nostril,
			transform: {
				tx: -1.1,
				ty: -1.05
			}
		}
	]
};
