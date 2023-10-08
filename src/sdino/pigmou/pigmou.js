// @ts-check

import { BLEND_MODES } from 'pixi.js';
import { stand } from './animations/stand';

export let pigmou = {
	name: 'pigmou',
	center: 20,
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
		ref: 'fx_shadow.svg',
		offset: { x: 14.25, y: 8.95 },
		transform: {
			tx: 0.3 + 16.8,
			ty: 8.55 + 20.9,
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
				ref: 'front_leg.svg',
				offset: { x: 7.25, y: 5.4 },
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
						ref: 'front_leg_acc_1.svg',
						offset: { x: 4.1, y: 3.35 },
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
				partIdx: 6,
				frames: [0, -1],
				parts: [
					// 169
					{
						special: true,
						ref: 'front_leg_special.svg',
						blend: [BLEND_MODES.MULTIPLY],
						colorIdx: 0,
						offset: { x: 1, y: 1 },
						transform: {
							tx: -4.85,
							ty: -3.2
						}
					}
				]
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
						ref: 'tail_fur.svg',
						offset: { x: 3.65, y: 3.2 },
						colorIdx: 1,
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
						ref: 'tail_fur.svg',
						offset: { x: 3.65, y: 3.2 },
						colorIdx: 1,
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
						ref: 'tail_fur.svg',
						offset: { x: 3.65, y: 3.2 },
						colorIdx: 1,
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
						ref: 'tail_fur.svg',
						offset: { x: 3.65, y: 3.2 },
						colorIdx: 1,
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
						ref: 'tail.svg',
						offset: { x: 4, y: 4.9 },
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
				ref: 'body.svg',
				offset: { x: 6.35, y: 5.35 }
			},
			// 183
			{
				partIdx: 15,
				frames: [-1, 0],
				parts: [
					// 182
					{
						colorIdx: 0,
						ref: 'body_special.svg',
						blend: [BLEND_MODES.MULTIPLY],
						offset: { x: 1, y: 1 },
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
				ref: 'front_leg.svg',
				offset: { x: 7.25, y: 5.4 },
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
						ref: 'front_leg_acc_1.svg',
						offset: { x: 4.1, y: 3.35 },
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
				partIdx: 6,
				frames: [0, -1],
				parts: [
					// 169
					{
						special: true,
						ref: 'front_leg_special.svg',
						blend: [BLEND_MODES.MULTIPLY],
						colorIdx: 0,
						offset: { x: 1, y: 1 },
						transform: {
							tx: -4.85,
							ty: -3.2
						}
					}
				]
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
						ref: 'head_acc_1.svg',
						offset: { x: 4.7, y: 4.8 },
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
						ref: 'head_acc_2.svg',
						offset: { x: 3.65, y: 3.75 },
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
						ref: 'head_acc_3.svg',
						offset: { x: 2.1, y: 9.8 },
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
				ref: 'head.svg',
				offset: { x: 8, y: 8.8 },
				transform: {
					tx: -0.1,
					ty: 0
				}
			},
			// 189
			{
				partIdx: 15,
				frames: [-1, 0],
				parts: [
					// 188
					{
						special: true,
						ref: 'head_special.svg',
						blend: [BLEND_MODES.MULTIPLY],
						colorIdx: 0,
						offset: { x: 1, y: 1 },
						transform: {
							tx: -6.65,
							ty: -7.8
						}
					}
				]
			},
			{
				partIdx: 7,
				frames: [0, 1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 8, 8, 8],
				parts: [
					// 190
					{
						ref: 'head_acc_4.svg',
						offset: { x: 3, y: 6.45 }
					},
					// 193
					{
						partIdx: 1,
						frames: [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1],
						parts: [
							// 191
							{
								ref: 'head_acc_5.svg',
								offset: { x: 4.15, y: 3.85 },
								transform: {
									tx: -0.75,
									ty: -2.04
								}
							},
							// 192
							{
								ref: 'head_acc_6.svg',
								offset: { x: 4.15, y: 9.55 },
								transform: {
									tx: -0.75,
									ty: -2.04
								}
							}
						]
					},
					// 195
					{
						ref: 'head_acc_7.svg',
						offset: { x: 3.9, y: 13.85 },
						transform: {
							tx: -2.85,
							ty: -3.85,
							a: 0.845,
							d: 0.845
						},
						glow: {
							distance: 1,
							color: '#FF9900',
							quality: 1,
							strengh: 1
						}
					},
					// 198
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
						parts: [
							// 196
							{
								ref: 'head_acc_8.svg',
								offset: { x: 6, y: 5.6 },
								transform: {
									tx: 1,
									ty: -2.55
								}
							},
							// 197
							{
								ref: 'head_acc_9.svg',
								offset: { x: 7.45, y: 7.75 },
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
						ref: 'head_acc_1.svg',
						offset: { x: 4.7, y: 4.8 },
						transform: {
							tx: 5.3,
							ty: 2.35
						}
					},
					// 203
					{
						colorIdx: 2,
						blend: [BLEND_MODES.MULTIPLY],
						part: 'head_acc_10.svg',
						offset: { x: 5.15, y: 5.4 },
						transform: {
							tx: 1.9,
							ty: -3.05
						}
					},
					// 206
					{
						colorIdx: 1,
						ref: 'head_acc_2.svg',
						offset: { x: 3.65, y: 3.75 },
						transform: {
							tx: 3.8,
							ty: 6.4
						}
					},
					// 208
					{
						colorIdx: 0,
						ref: 'head_acc_11.svg',
						offset: { x: 6.9, y: 6.1 },
						transform: {
							tx: 3.05,
							ty: -4.65
						}
					},
					// 212
					{
						colorIdx: 1,
						ref: 'head_acc_12.svg',
						offset: { x: 3.2, y: 4.85 },
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
						ref: 'head_acc_7.svg',
						offset: { x: 3.9, y: 13.85 },
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
						ref: 'head_acc_13.svg',
						offset: { x: 3, y: 6.45 }
					},
					// 193
					{
						partIdx: 1,
						frames: [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1],
						parts: [
							// 191
							{
								ref: 'head_acc_5.svg',
								offset: { x: 4.15, y: 3.85 },
								transform: {
									tx: -0.75,
									ty: -2.05
								}
							},
							// 192
							{
								ref: 'head_acc_6.svg',
								offset: { x: 4.15, y: 9.55 },
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
								ref: 'head_acc_8.svg',
								offset: { x: 6, y: 5.6 },
								transform: {
									tx: 1,
									ty: -2.55
								}
							},
							// 197
							{
								ref: 'head_acc_9.svg',
								offset: { x: 7.45, y: 7.75 },
								transform: {
									tx: 1,
									ty: -2.55
								}
							}
						]
					},
					// 213
					{
						ref: 'head_acc_14.svg',
						offset: { x: 3, y: 6.45 }
					}
				]
			},
			{
				partIdx: 7,
				frames: [-1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1],
				parts: [
					// 204
					{
						ref: 'head_acc_15.svg',
						offset: { x: 3, y: 6.45 }
					}
				]
			}
		],
		// 220
		back_left_leg: []
	},
	animations: {
		cast: stand,
		stand: stand,
		walk: undefined,
		run: undefined,
		hit: undefined,
		jump: undefined,
		attack: undefined,
		land: undefined,
		dead: undefined,
		sleep: undefined,
		release: undefined
	}
};
