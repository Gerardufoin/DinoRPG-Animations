// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

export let parts = {
	// 79
	back_bones: [
		{
			partIdx: 1,
			frames: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
			parts: [
				// 78
				{
					ref: ref.moueffe.back_bones
				}
			]
		}
	],
	// 82
	right_arm: [
		// 81
		{
			colorIdx: 0,
			ref: ref.moueffe.right_arm,
			transform: {
				tx: 11.95,
				ty: 8.2,
				a: -0.682,
				d: 0.682,
				b: -0.492,
				c: -0.492
			}
		}
	],
	// 88
	right_foot: [
		// 84
		{
			colorIdx: 0,
			ref: ref.moueffe.foot,
			transform: {
				tx: -5.15,
				ty: -3.55
			}
		},
		// 85
		{
			ref: ref.moueffe.right_foot_claws
		},
		// 87
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					ref: ref.moueffe.right_foot_special,
					transform: {
						tx: -9.15,
						ty: -4.1
					}
				}
			]
		}
	],
	// 91
	connector_1: [
		// 90
		{
			colorIdx: 0,
			ref: ref.moueffe.connector,
			transform: {
				tx: 3.35,
				ty: 1.85
			}
		}
	],
	// 92
	connector_2: [
		// 90
		{
			colorIdx: 0,
			ref: ref.moueffe.connector
		}
	],
	// 98
	right_leg: [
		// 94
		{
			colorIdx: 0,
			ref: ref.moueffe.right_leg,
			transform: {
				tx: 3.75,
				ty: 2.0
			}
		},
		// 96
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					ref: ref.moueffe.right_leg_special,
					transform: {
						tx: -2,
						ty: -1.3
					}
				}
			]
		},
		{
			partIdx: 3,
			frames: [0, -1],
			parts: [
				// 97
				{
					ref: ref.moueffe.leg_bone,
					transform: {
						tx: 1.85,
						ty: -2.05
					}
				}
			]
		}
	],
	// 110
	body: [
		// 100
		{
			colorIdx: 0,
			ref: ref.moueffe.body_tail,
			transform: {
				tx: -4.15,
				ty: 4.25,
				a: 0.91,
				d: 0.91,
				b: -0.411,
				c: 0.411
			}
		},
		// 103
		{
			colorIdx: 0,
			ref: ref.moueffe.body
		},
		// 105
		{
			colorIdx: 0,
			ref: ref.moueffe.body_belly,
			blend: [BLEND_MODES.ADD],
			alpha: 0.238
		},
		{
			partIdx: 7,
			frames: [0, 0, -1, -1],
			parts: [
				// 107
				{
					partIdx: 8,
					frames: [0, -1, -1, -1],
					parts: [
						// 106
						{
							ref: ref.moueffe.body_acc_1,
							transform: {
								tx: -3.85,
								ty: 1.7
							}
						}
					]
				}
			]
		},
		// 109
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					ref: ref.moueffe.body_special,
					transform: {
						tx: -8.6,
						ty: -8.95
					}
				}
			]
		}
	],
	// 123
	head: [
		// 112
		{
			colorIdx: 0,
			ref: ref.moueffe.head,
			transform: {
				tx: 8.85,
				ty: -8.35
			}
		},
		{
			partIdx: 5,
			frames: [0, 1, 2, 3, 4, 5, 6, -1],
			parts: [
				// 114
				{
					colorIdx: 1,
					ref: ref.moueffe.head_acc_1,
					transform: {
						tx: 6.15,
						ty: -14
					}
				},
				// 114 (scaled)
				{
					colorIdx: 1,
					ref: ref.moueffe.head_acc_1,
					transform: {
						tx: 5.45,
						ty: -14.45,
						a: 1.173,
						d: 1.254
					}
				},
				// 116
				{
					colorIdx: 0,
					ref: ref.moueffe.head_acc_2,
					transform: {
						tx: 7.7,
						ty: -15.3
					}
				},
				// 118
				{
					colorIdx: 1,
					ref: ref.moueffe.head_acc_3,
					transform: {
						tx: 6.5,
						ty: -15.85
					}
				},
				// 119
				{
					ref: ref.moueffe.head_acc_4
				},
				// 120
				{
					ref: ref.moueffe.head_acc_5
				},
				// 122
				{
					colorIdx: 0,
					ref: ref.moueffe.head_acc_6,
					transform: {
						tx: 6.5,
						ty: -15.85
					}
				}
			]
		}
	],
	// 127
	left_foot: [
		// 84
		{
			colorIdx: 0,
			ref: ref.moueffe.foot,
			transform: {
				tx: -5.15,
				ty: -3.55
			}
		},
		// 124
		{
			ref: ref.moueffe.left_foot_claws
		},
		// 126
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					ref: ref.moueffe.left_foot_special,
					transform: {
						tx: -5.85,
						ty: -3.85
					}
				}
			]
		}
	],
	// 132
	left_leg: [
		// 129
		{
			colorIdx: 0,
			ref: ref.moueffe.left_leg,
			transform: {
				tx: 3.75,
				ty: 2.0
			}
		},
		{
			partIdx: 3,
			frames: [0, -1],
			parts: [
				// 97
				{
					ref: ref.moueffe.leg_bone
				}
			]
		},
		// 131
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					ref: ref.moueffe.left_leg_special,
					transform: {
						tx: -1.7,
						ty: -0.9
					}
				}
			]
		}
	],
	// 139
	left_arm: [
		// 134
		{
			colorIdx: 0,
			ref: ref.moueffe.left_arm,
			transform: {
				tx: 3.6,
				ty: 7.9,
				a: 0.963,
				d: 0.963,
				b: -0.258,
				c: 0.258
			}
		},
		{
			partIdx: 6,
			frames: [0, 0, 0, 0, 1, -1, -1],
			parts: [
				// 137
				{
					partIdx: 8,
					frames: [0, 0, 0, 0, 0, -1, -1, -1, -1, -1],
					parts: [
						// 136
						{
							colorIdx: 2,
							blend: BLEND_MODES.HARD_LIGHT,
							ref: ref.moueffe.left_arm_sigil,
							transform: {
								tx: 5.75,
								ty: 4.15
							}
						}
					]
				},
				// 138
				{
					ref: ref.moueffe.left_arm_bone
				}
			]
		}
	],
	// 160
	hand: [
		{
			// 159
			colorIdx: 0,
			ref: ref.shared.hand,
			transform: {
				tx: -2.75,
				ty: -2.15
			}
		}
	]
};
