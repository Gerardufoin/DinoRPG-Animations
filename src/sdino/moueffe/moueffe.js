// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { release } from './animations/release.js';
import { ref } from '../references.js';

export let moueffe = {
	name: 'moueffe',
	transforms: [
		// 163
		{
			partIdx: 1,
			transforms: [
				{
					tx: -0.65,
					ty: 2.05,
					a: 0.797,
					d: 0.797,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -0.6,
					ty: 1.8,
					a: 0.819,
					d: 0.819,
					brightness: 9,
					contrast: 5
				},
				{
					tx: -0.55,
					ty: 1.55,
					a: 0.842,
					d: 0.842,
					brightness: 8,
					contrast: 3
				},
				{
					tx: -0.45,
					ty: 1.3,
					a: 0.865,
					d: 0.865,
					brightness: 7,
					contrast: 3
				},
				{
					tx: -0.4,
					ty: 1.1,
					a: 0.887,
					d: 0.887,
					brightness: 6,
					contrast: 2
				},
				{
					tx: -0.35,
					ty: 0.85,
					a: 0.91,
					d: 0.91,
					brightness: 4,
					contrast: 2
				},
				{
					tx: -0.3,
					ty: 0.6,
					a: 0.932,
					d: 0.932,
					brightness: 3,
					contrast: 1
				},
				{
					tx: -0.25,
					ty: 0.35,
					a: 0.955,
					d: 0.955,
					brightness: 2,
					contrast: 1
				},
				{
					tx: -0.15,
					ty: 0.1,
					a: 0.977,
					d: 0.977,
					brightness: 1
				},
				{
					tx: 0,
					ty: 0
				},
				{
					tx: -0.05,
					ty: -1.1,
					a: 1.069,
					d: 1.069,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: 0.0,
			ty: 0.85,
			a: 0.915,
			d: 0.915
		}
	],
	glow: {
		distance: 1.3,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	palette: [
		[
			// col0
			[
				'#F0DC99',
				'#FFCC79',
				'#FFAA1E',
				'#DF7E37',
				'#D1F49B',
				'#BBDB71',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#CC5858',
				'#FFF9AE',
				'#F0DC99',
				'#BBDB71',
				'#CC5858',
				'#CC7695'
			],
			// col1
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#4F677D', '#DF7E37', '#B85F1D'],
			// col2
			[
				'#FFF2DF',
				'#FFCC79',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			],
			// col3
			[
				'#FFF2DF',
				'#FFCC79',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			]
		],
		[
			// col0
			['#A9D9DB', '#9C4D00', '#DBA3C5'],
			// col1
			['#73A4A6', '#AA5400', '#8E448D'],
			// col2
			['#52CFD4', '#8E200A', '#B44FB2'],
			// col3
			['#329498', '#B62C12', '#DE5DDC']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -0.8,
			ty: 11.1,
			a: 1.351,
			d: 1.129
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
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
				special: true,
				ref: ref.moueffe.right_foot_special,
				transform: {
					tx: -9.15,
					ty: -4.1
				}
			}
		],
		// 92
		right_arm_connector: [
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
				special: true,
				ref: ref.moueffe.right_leg_special,
				transform: {
					tx: -2,
					ty: -1.3
				}
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
		// 92
		right_leg_connector: [
			// 90
			{
				colorIdx: 0,
				ref: ref.moueffe.connector
			}
		],
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
				alpha: 0.23828125
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
				special: true,
				ref: ref.moueffe.body_special,
				transform: {
					tx: -8.6,
					ty: -8.95
				}
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
		// 92
		left_arm_connector: [
			// 90
			{
				colorIdx: 0,
				ref: ref.moueffe.connector
			}
		],
		// 91
		left_leg_connector: [
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
				special: true,
				ref: ref.moueffe.left_foot_special,
				transform: {
					tx: -5.85,
					ty: -3.85
				}
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
				special: true,
				ref: ref.moueffe.left_leg_special,
				transform: {
					tx: -1.7,
					ty: -0.9
				}
			}
		],
		// 160
		right_hand: [
			{
				// 159
				colorIdx: 0,
				ref: ref.moueffe.hand,
				transform: {
					tx: -2.75,
					ty: -2.15
				}
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
		left_hand: [
			{
				// 159
				colorIdx: 0,
				ref: ref.moueffe.hand,
				transform: {
					tx: -2.75,
					ty: -2.15
				}
			}
		],
		// 146
		fx_impact_1: [
			{
				ref: ref.fx.impact_1
			}
		],
		// 147
		fx_impact_2: [
			{
				ref: ref.fx.impact_2
			}
		],
		// 148
		fx_impact_3: [
			{
				ref: ref.fx.impact_3
			}
		],
		// 149
		fx_impact_4: [
			{
				ref: ref.fx.impact_4
			}
		],
		// 150
		fx_impact_5: [
			{
				ref: ref.fx.impact_5
			}
		],
		// 154
		fx_dust_1: [
			{
				ref: ref.fx.dust_brown
			}
		],
		// 154
		fx_dust_2: [
			{
				ref: ref.fx.dust_brown
			}
		],
		// 154
		fx_dust_3: [
			{
				ref: ref.fx.dust_brown
			}
		]
	},
	animations: {
		// cast(140), sleep are same as stand
		// missing fly, ill
		// 141
		stand: stand,
		// 142
		walk: walk,
		// 143
		run: run,
		// 144
		hit: hit,
		// 145
		jump: jump,
		// 151
		attack: attack,
		// 152
		land: land,
		// 157
		dead: dead,
		// 161
		release: release
	}
};
