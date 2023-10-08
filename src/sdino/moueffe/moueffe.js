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

export let moueffe = {
	name: 'moueffe',
	center: 20,
	transform: {
		tx: 0.0,
		ty: 0.85,
		a: 0.915,
		d: 0.915
	},
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
		ref: 'fx_shadow.svg',
		offset: { x: 14.25, y: 8.95 },
		transform: {
			tx: 16,
			ty: 32,
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
				ref: 'right_arm.svg',
				offset: { x: 3.2, y: 6.9 },
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
				ref: 'foot.svg',
				offset: { x: 1, y: 1 },
				transform: {
					tx: -5.15,
					ty: -3.55
				}
			},
			// 85
			{
				ref: 'right_foot_claws.svg',
				offset: { x: 7.5, y: 2.3 }
			},
			// 87
			{
				special: true,
				ref: 'right_foot_special.svg',
				offset: { x: 1, y: 1 },
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
				ref: 'connector.svg',
				offset: { x: 4.35, y: 2.85 }
			}
		],
		// 98
		right_leg: [
			// 94
			{
				colorIdx: 0,
				ref: 'right_leg.svg',
				offset: { x: 5.75, y: 7.55 },
				transform: {
					tx: 3.75,
					ty: 2.0
				}
			},
			// 96
			{
				special: true,
				ref: 'right_leg_special.svg',
				offset: { x: 1, y: 1 },
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
						ref: 'leg_bone.svg',
						offset: { x: -0.6, y: 3.45 },
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
				ref: 'connector.svg',
				offset: { x: 4.35, y: 2.85 }
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
						ref: 'back_bones.svg',
						offset: { x: 1, y: 1 }
					}
				]
			}
		],
		// 110
		body: [
			// 100
			{
				colorIdx: 0,
				ref: 'body_tail.svg',
				offset: { x: 1.65, y: 0.9 },
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
				ref: 'body.svg',
				offset: { x: 9.0, y: 9.5 }
			},
			// 105
			{
				colorIdx: 0,
				ref: 'body_belly.svg',
				blend: [BLEND_MODES.ADD],
				alpha: 0.23828125,
				offset: { x: 9.0, y: 9.3 }
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
								ref: 'body_acc_1.svg',
								offset: { x: 5.85, y: 6.05 },
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
				ref: 'body_special.svg',
				offset: { x: 1, y: 1 },
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
				ref: 'head.svg',
				offset: { x: 13.7, y: 5.8 },
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
						ref: 'head_acc_1.svg',
						offset: { x: 1.4, y: 1.75 },
						transform: {
							tx: 6.15,
							ty: -14
						}
					},
					// 114 (scaled)
					{
						colorIdx: 1,
						ref: 'head_acc_1.svg',
						offset: { x: 1.4, y: 1.75 },
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
						ref: 'head_acc_2.svg',
						offset: { x: 1, y: 1 },
						transform: {
							tx: 7.7,
							ty: -15.3
						}
					},
					// 118
					{
						colorIdx: 1,
						ref: 'head_acc_3.svg',
						offset: { x: 1.9, y: 2.05 },
						transform: {
							tx: 6.5,
							ty: -15.85
						}
					},
					// 119
					{
						ref: 'head_acc_4.svg',
						offset: { x: -6.4, y: 15.85 }
					},
					// 120
					{
						ref: 'head_acc_5.svg',
						offset: { x: -5.65, y: 18.65 }
					},
					// 122
					{
						colorIdx: 0,
						ref: 'head_acc_6.svg',
						offset: { x: 1.5, y: 1.4 },
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
				ref: 'connector.svg',
				offset: { x: 4.35, y: 2.85 }
			}
		],
		// 91
		left_leg_connector: [
			// 90
			{
				colorIdx: 0,
				ref: 'connector.svg',
				offset: { x: 4.35, y: 2.85 },
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
				ref: 'foot.svg',
				offset: { x: 1, y: 1 },
				transform: {
					tx: -5.15,
					ty: -3.55
				}
			},
			// 124
			{
				ref: 'left_foot_claws.svg',
				offset: { x: 4.25, y: -0.35 }
			},
			// 126
			{
				special: true,
				ref: 'left_foot_special.svg',
				offset: { x: 1, y: 1 },
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
				ref: 'left_leg.svg',
				offset: { x: 5.75, y: 7.55 },
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
						ref: 'leg_bone.svg',
						offset: { x: -0.6, y: 3.45 }
					}
				]
			},
			// 131
			{
				special: true,
				ref: 'left_leg_special.svg',
				offset: { x: 1, y: 1 },
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
				ref: 'hand.svg',
				offset: { x: 7.6, y: 8.35 },
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
				ref: 'left_arm.svg',
				offset: { x: 3.2, y: 6.9 },
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
								ref: 'left_arm_sigil.svg',
								offset: { x: 1, y: 1 },
								transform: {
									tx: 5.75,
									ty: 4.15
								}
							}
						]
					},
					// 138
					{
						ref: 'left_arm_bone.svg',
						offset: { x: -8.2, y: -8.25 }
					}
				]
			}
		],
		// 160
		left_hand: [
			{
				// 159
				colorIdx: 0,
				ref: 'hand.svg',
				offset: { x: 7.6, y: 8.35 },
				transform: {
					tx: -2.75,
					ty: -2.15
				}
			}
		],
		// 146
		fx_impact_1: [
			{
				ref: 'fx_impact_1.svg',
				offset: { x: 9.75, y: 20.35 }
			}
		],
		// 147
		fx_impact_2: [
			{
				ref: 'fx_impact_2.svg',
				offset: { x: 14.05, y: 26.05 }
			}
		],
		// 148
		fx_impact_3: [
			{
				ref: 'fx_impact_3.svg',
				offset: { x: 17.7, y: 32.75 }
			}
		],
		// 149
		fx_impact_4: [
			{
				ref: 'fx_impact_4.svg',
				offset: { x: 19.85, y: 36.6 }
			}
		],
		// 150
		fx_impact_5: [
			{
				ref: 'fx_impact_5.svg',
				offset: { x: 21.0, y: 38.8 }
			}
		],
		// 154
		fx_dust_1: [
			{
				ref: 'fx_dust.svg',
				offset: { x: 9.9, y: 10.65 }
			}
		],
		// 154
		fx_dust_2: [
			{
				ref: 'fx_dust.svg',
				offset: { x: 9.9, y: 10.65 }
			}
		],
		// 154
		fx_dust_3: [
			{
				ref: 'fx_dust.svg',
				offset: { x: 9.9, y: 10.65 }
			}
		]
	},
	animations: {
		// 140 (but same as 141)
		cast: stand,
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
		// 141
		sleep: stand,
		// 161
		release: release
	}
};
