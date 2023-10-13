// @ts-check

import { BLEND_MODES } from 'pixi.js';
import { stand } from './animations/stand';
import { walk } from './animations/walk';
import { run } from './animations/run';
import { hit } from './animations/hit';
import { jump } from './animations/jump';
import { attack } from './animations/attack';
import { land } from './animations/land';
import { dead } from './animations/dead';
import { ref } from '../references';

export let pigmou = {
	name: 'pigmou',
	transforms: [
		// 231
		{
			partIdx: 1,
			transforms: [
				{
					tx: 0.0,
					ty: 1.2,
					a: 0.885,
					d: 0.885,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 0.0,
					ty: 1.05,
					a: 0.898,
					d: 0.898,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 0.0,
					ty: 0.95,
					a: 0.911,
					d: 0.911,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 0.0,
					ty: 0.8,
					a: 0.923,
					d: 0.923,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 0.0,
					ty: 0.65,
					a: 0.936,
					d: 0.936,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 0.0,
					ty: 0.55,
					a: 0.949,
					d: 0.949,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 0.0,
					ty: 0.4,
					a: 0.962,
					d: 0.962,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 0.0,
					ty: 0.25,
					a: 0.974,
					d: 0.974,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 0.0,
					ty: 0.15,
					a: 0.987,
					d: 0.987,
					brightness: 1
				},
				{
					tx: 0,
					ty: 0
				},
				{
					tx: 0.0,
					ty: -0.9,
					a: 1.16,
					d: 1.16,
					brightness: -34,
					contrast: 11
				}
			]
		}
		// 1642 No transform, set to tx: 0 and ty: 0
	],
	glow: {
		distance: 1,
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
			['#A9D9DB', '#FFC400'],
			// col1
			['#73A4A6', '#BB7A2C'],
			// col2
			['#52CFD4', '#C99A00'],
			// col3
			['#329498', '#D78523']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: 0.3,
			ty: 8.55,
			a: 0.917,
			d: 0.917
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 173
		front_right_leg: [
			// 167
			{
				colorIdx: 0,
				ref: ref.pigmou.front_leg,
				transform: {
					ty: -0.5
				}
			},
			{
				partIdx: 6,
				frames: [-1, 0],
				parts: [
					// 172
					{
						colorIdx: 1,
						ref: ref.pigmou.leg_fur,
						transform: {
							tx: 2.15,
							ty: -2.6,
							a: 1.122,
							d: 1.122,
							b: 0.301,
							c: -0.301
						}
					}
				]
			},
			// 170 - There was some "stop" callbacks which were ignored, to see later if they are really needed.
			{
				special: true,
				colorIdx: 0,
				ref: ref.pigmou.front_leg_special,
				blend: [BLEND_MODES.MULTIPLY],
				transform: {
					tx: -4.85,
					ty: -3.2
				}
			}
		],
		// 178
		tail: [
			// 175
			{
				partIdx: 5,
				frames: [0, 1, 2, 3],
				parts: [
					{
						colorIdx: 1,
						ref: ref.pigmou.tail_fur,
						transform: {
							tx: -0.05,
							ty: -0.1,
							a: 1.021,
							d: 1.021,
							b: -0.108,
							c: 0.108
						}
					},
					{
						colorIdx: 1,
						ref: ref.pigmou.tail_fur,
						transform: {
							tx: 4.45,
							ty: -3.0,
							a: 0.108,
							d: 0.108,
							b: 1.021,
							c: -1.021
						}
					},
					{
						colorIdx: 1,
						ref: ref.pigmou.tail_fur,
						transform: {
							tx: -0.75,
							ty: -0.25,
							a: 1.194,
							d: 1.194,
							b: -0.459,
							c: 0.459
						}
					},
					{
						colorIdx: 1,
						ref: ref.pigmou.tail_fur,
						transform: {
							tx: -0.5,
							ty: -1.55,
							a: 1.647,
							d: 1.647,
							b: -0.633,
							c: 0.633
						}
					}
				]
			},
			// 177
			{
				partIdx: 5,
				frames: [-1, 0, -1, -1],
				parts: [
					{
						colorIdx: 0,
						ref: ref.pigmou.tail,
						transform: {
							tx: 0.2,
							ty: -1.8
						}
					}
				]
			}
		],
		// 184
		body: [
			// 180
			{
				colorIdx: 0,
				ref: ref.pigmou.body
			},
			// 183
			{
				partIdx: 15,
				frames: [-1, 0],
				parts: [
					// 182
					{
						colorIdx: 0,
						ref: ref.pigmou.body_special,
						blend: [BLEND_MODES.MULTIPLY],
						transform: {
							tx: -4,
							ty: -4.4
						}
					}
				]
			}
		],
		// 173
		front_left_leg: [
			// 167
			{
				colorIdx: 0,
				ref: ref.pigmou.front_leg,
				transform: {
					ty: -0.5
				}
			},
			{
				partIdx: 6,
				frames: [-1, 0],
				parts: [
					// 172
					{
						colorIdx: 1,
						ref: ref.pigmou.leg_fur,
						transform: {
							tx: 2.15,
							ty: -2.6,
							a: 1.122,
							d: 1.122,
							b: 0.301,
							c: -0.301
						}
					}
				]
			},
			// 170 - There was some "stop" callbacks which were ignored, to see later if they are really needed.
			{
				special: true,
				colorIdx: 0,
				ref: ref.pigmou.front_leg_special,
				blend: [BLEND_MODES.MULTIPLY],
				transform: {
					tx: -4.85,
					ty: -3.2
				}
			}
		],
		// 214
		head: [
			{
				partIdx: 7,
				frames: [-1, -1, -1, -1, -1, 0, 0, -1, -1, 1, 1, 1, -1, 2, 2, 2],
				parts: [
					// 200
					{
						colorIdx: 0,
						ref: ref.pigmou.head_acc_1,
						transform: {
							tx: -3.25,
							ty: -4.05,
							a: -0.041,
							d: 0.36,
							b: -0.908,
							c: -0.589
						}
					},
					// 206
					{
						colorIdx: 1,
						ref: ref.pigmou.head_acc_2,
						transform: {
							tx: -4.65,
							ty: 1.0,
							a: -1.0,
							d: 1.0
						}
					},
					// 210
					{
						colorIdx: 1,
						ref: ref.pigmou.head_acc_3,
						transform: {
							tx: -4.65,
							ty: 1.0,
							a: -1.0,
							d: 1.0
						}
					}
				]
			},
			// 186
			{
				colorIdx: 0,
				ref: ref.pigmou.head,
				transform: {
					tx: -0.1,
					ty: 0
				}
			},
			// 189
			{
				special: true,
				colorIdx: 0,
				ref: ref.pigmou.head_special,
				blend: [BLEND_MODES.MULTIPLY],
				transform: {
					tx: -6.65,
					ty: -7.8
				}
			},
			{
				partIdx: 7,
				frames: [0, 1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 8, 8, 8],
				parts: [
					// 190
					{
						ref: ref.pigmou.head_acc_4
					},
					// 193
					{
						partIdx: 1,
						frames: [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1],
						parts: [
							// 191
							{
								ref: ref.pigmou.head_acc_5,
								transform: {
									tx: -0.75,
									ty: -2.04
								}
							},
							// 192
							{
								ref: ref.pigmou.head_acc_6,
								transform: {
									tx: -0.75,
									ty: -2.04
								}
							}
						]
					},
					// 195
					{
						ref: ref.pigmou.head_acc_7,
						transform: {
							tx: -2.85,
							ty: -3.85,
							a: 0.845,
							d: 0.845
						},
						glow: {
							distance: 5,
							color: '#FF9900',
							quality: 1,
							strength: 1
						}
					},
					// 198
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
						parts: [
							// 196
							{
								ref: ref.pigmou.head_acc_8,
								alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
								transform: {
									tx: 1,
									ty: -2.55
								}
							},
							// 197
							{
								ref: ref.pigmou.head_acc_9,
								alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
								transform: {
									tx: 1,
									ty: -2.55
								}
							}
						]
					},
					// 200
					{
						colorIdx: 0,
						ref: ref.pigmou.head_acc_1,
						transform: {
							tx: 5.3,
							ty: 2.35
						}
					},
					// 203
					{
						colorIdx: 2,
						ref: ref.pigmou.head_acc_10,
						blend: [BLEND_MODES.MULTIPLY],
						transform: {
							tx: 1.9,
							ty: -3.05
						}
					},
					// 206
					{
						colorIdx: 1,
						ref: ref.pigmou.head_acc_2,
						transform: {
							tx: 3.8,
							ty: 6.4
						}
					},
					// 208
					{
						colorIdx: 0,
						ref: ref.pigmou.head_acc_11,
						transform: {
							tx: 3.05,
							ty: -4.65
						}
					},
					// 212
					{
						colorIdx: 1,
						ref: ref.pigmou.head_acc_12,
						transform: {
							tx: 3.8,
							ty: 6.4
						}
					}
				]
			},
			{
				partIdx: 7,
				frames: [-1, -1, -1, 0, -1, 1, 2, -1, -1, -1, 2, 3, -1, 4, 3, 2],
				parts: [
					// 195
					{
						ref: ref.pigmou.head_acc_7,
						transform: {
							tx: 0.95,
							ty: -0.8,
							a: 0.966,
							d: 0.966,
							b: 0.259,
							c: -0.259
						},
						glow: {
							distance: 1,
							color: '#FF9900',
							quality: 1,
							strengh: 1
						}
					},
					// 201
					{
						ref: ref.pigmou.head_acc_13
					},
					// 193
					{
						partIdx: 1,
						frames: [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1],
						parts: [
							// 191
							{
								ref: ref.pigmou.head_acc_5,
								transform: {
									tx: -0.75,
									ty: -2.05
								}
							},
							// 192
							{
								ref: ref.pigmou.head_acc_6,
								transform: {
									tx: -0.75,
									ty: -2.05
								}
							}
						]
					},
					// 198
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
						parts: [
							// 196
							{
								ref: ref.pigmou.head_acc_8,
								alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
								transform: {
									tx: 1,
									ty: -2.55
								}
							},
							// 197
							{
								ref: ref.pigmou.head_acc_9,
								alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
								transform: {
									tx: 1,
									ty: -2.55
								}
							}
						]
					},
					// 213
					{
						ref: ref.pigmou.head_acc_14
					}
				]
			},
			{
				partIdx: 7,
				frames: [-1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1],
				parts: [
					// 204
					{
						ref: ref.pigmou.head_acc_15
					}
				]
			}
		],
		// 220
		back_left_leg: [
			// 216
			{
				colorIdx: 0,
				ref: ref.pigmou.back_leg,
				transform: {
					tx: 0.05
				}
			},
			{
				partIdx: 6,
				frames: [-1, 0],
				parts: [
					// 172
					{
						colorIdx: 1,
						ref: ref.pigmou.leg_fur,
						transform: {
							tx: 0.1,
							ty: -2.45
						}
					}
				]
			},
			// 219 - There was some "stop" callbacks which were ignored, to see later if they are really needed.
			{
				special: true,
				colorIdx: 0,
				ref: ref.pigmou.back_leg_special,
				blend: [BLEND_MODES.MULTIPLY],
				transform: {
					tx: -2.85,
					ty: -2.85
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
		]
	},
	animations: {
		// missing cast, release
		// 221
		stand: stand,
		// 222
		walk: walk,
		// 223
		run: run,
		// 224
		hit: hit,
		// 226
		jump: jump,
		// 227
		attack: attack,
		// 228
		land: land,
		// 229
		dead: dead,
		// 229 idx 5
		sleep: { offset: 5, anim: dead },
		// 229 idx 10
		ill: { offset: 10, anim: dead },
		// 226
		fly: jump
	}
};
