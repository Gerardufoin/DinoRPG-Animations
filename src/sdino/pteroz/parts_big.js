// @ts-check
import { ref } from '../references_big.js';

// 1172
const left_wing_shoulder = {
	partIdx: 7,
	frames: [0, 0, 1],
	parts: [
		// 1170
		{
			ref: ref.pteroz.left_wing_shoulder,
			colorOffset: {
				r: -108,
				g: -113,
				b: -82
			}
		},
		// 1171
		{
			ref: ref.pteroz.left_wing_shoulder_sharp,
			colorOffset: {
				r: -108,
				g: -113,
				b: -82
			}
		}
	]
};

export const parts_big = {
	// 1120
	left_leg: [
		{
			ref: ref.pteroz.left_leg
		}
	],
	// 1133 p6b
	right_wing: [
		// 1122
		{
			ref: ref.pteroz.right_wing_shoulder,
			transform: {
				tx: 41.5,
				ty: -21.35
			},
			colorOffset: {
				r: -108,
				g: -113,
				b: -82
			}
		},
		{
			partIdx: 6,
			frames: [0, 1],
			parts: [
				[
					// 1124
					{
						colorIdx: 1,
						ref: ref.pteroz.right_wing_big,
						transform: {
							tx: 21.45,
							ty: -38.5
						}
					},
					// 1125
					{
						colorIdx: 0,
						ref: ref.pteroz.right_wing_big_frame,
						transform: {
							tx: 17.95,
							ty: -39.05
						}
					}
				],
				[
					// 1129
					{
						colorIdx: 1,
						ref: ref.pteroz.right_wing_small,
						transform: {
							tx: 21.45,
							ty: -38.5
						}
					},
					// 1131
					{
						colorIdx: 0,
						ref: ref.pteroz.right_wing_small_frame,
						transform: {
							tx: 17.95,
							ty: -39.05
						}
					}
				]
			]
		},
		// 1127/1132
		{
			ref: ref.pteroz.right_wing_claws
		}
	],
	// 1135 col0
	body: [
		{
			colorIdx: 0,
			ref: ref.pteroz.body
		}
	],
	// 1140 p5col0
	fin: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 1136
					{
						colorIdx: 0,
						ref: ref.pteroz.fin
					}
				],
				[
					// 1136
					{
						colorIdx: 0,
						ref: ref.pteroz.fin
					},
					// 1137
					{
						colorIdx: 0,
						ref: ref.pteroz.fin_sharp
					}
				],
				[
					// 1138
					{
						colorIdx: 0,
						ref: ref.pteroz.fin_up
					}
				],
				[
					// 1139
					{
						colorIdx: 0,
						ref: ref.pteroz.fin_long
					}
				]
			]
		}
	],
	// 1169 p3
	beak: [
		{
			partIdx: 3,
			frames: [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6],
			parts: [
				// 1144
				[
					// 1142
					{
						colorIdx: 0,
						ref: ref.pteroz.beak
					},
					// 1143
					{
						ref: ref.pteroz.beak_highlight,
						transform: {
							ty: 4.5
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							ty: 4.5
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 4.8,
										ty: -8.35,
										a: 0.77,
										d: 0.77,
										b: -0.747,
										c: 0.747
									}
								}
							],
							[
								// 359
								{
									ref: ref.hurt.scratch_blood,
									transform: {
										tx: 2.25,
										ty: -7.05,
										a: 0.482,
										d: 0.363,
										b: -1.318,
										c: 0.993
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -21.7,
										ty: 1.15
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -12.05,
										ty: -9.35
									}
								}
							]
						]
					}
				],
				// 1148
				[
					// 1142
					{
						colorIdx: 0,
						ref: ref.pteroz.beak
					},
					// 1146
					{
						colorIdx: 0,
						ref: ref.pteroz.beak_sharp,
						transform: {
							tx: -19.65,
							ty: -2.5
						}
					},
					// 1147
					{
						ref: ref.pteroz.beak_sharp_highlight,
						transform: {
							ty: 4.5
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							ty: 4.5
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 4.8,
										ty: -8.35,
										a: 0.77,
										d: 0.77,
										b: -0.747,
										c: 0.747
									}
								}
							],
							[
								// 359
								{
									ref: ref.hurt.scratch_blood,
									transform: {
										tx: 2.25,
										ty: -7.05,
										a: 0.482,
										d: 0.363,
										b: -1.318,
										c: 0.993
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -21.7,
										ty: 1.15
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -12.05,
										ty: -9.35
									}
								}
							]
						]
					}
				],
				// 1152
				[
					// 1150
					{
						colorIdx: 0,
						ref: ref.pteroz.beak_carnivor
					},
					// 1151
					{
						ref: ref.pteroz.beak_carnivor_highlight,
						transform: {
							tx: -0.75,
							ty: 4.5
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -0.75,
							ty: 4.5
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 4.8,
										ty: -8.35,
										a: 0.77,
										d: 0.77,
										b: -0.747,
										c: 0.747
									}
								}
							],
							[
								// 359
								{
									ref: ref.hurt.scratch_blood,
									transform: {
										tx: 2.25,
										ty: -7.05,
										a: 0.482,
										d: 0.363,
										b: -1.318,
										c: 0.993
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -21.7,
										ty: 1.15
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -12.05,
										ty: -9.35
									}
								}
							]
						]
					}
				],
				// 1156
				[
					// 1154
					{
						colorIdx: 0,
						ref: ref.pteroz.beak_long
					},
					// 1155
					{
						ref: ref.pteroz.beak_long_highlight,
						transform: {
							tx: -5.3,
							ty: 12.25
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -5.3,
							ty: 12.25
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 4.8,
										ty: -11.15,
										a: 0.77,
										d: 0.77,
										b: -0.747,
										c: 0.747
									}
								}
							],
							[
								// 359
								{
									ref: ref.hurt.scratch_blood,
									transform: {
										tx: 4.85,
										ty: -15.35,
										a: 0.482,
										d: 0.363,
										b: -1.318,
										c: 0.993
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -32,
										ty: 6.75
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -12.05,
										ty: -13.55
									}
								}
							]
						]
					}
				],
				// 1160
				[
					// 1158
					{
						colorIdx: 0,
						ref: ref.pteroz.beak_broken
					},
					// 1159
					{
						ref: ref.pteroz.beak_broken_highlight,
						transform: {
							tx: -2.7,
							ty: 6.05
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -2.7,
							ty: 6.05
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 4.8,
										ty: -8.35,
										a: 0.77,
										d: 0.77,
										b: -0.747,
										c: 0.747
									}
								}
							],
							[
								// 359
								{
									ref: ref.hurt.scratch_blood,
									transform: {
										tx: 2.25,
										ty: -7.05,
										a: 0.482,
										d: 0.363,
										b: -1.318,
										c: 0.993
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -21.7,
										ty: 1.15
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -12.05,
										ty: -9.35
									}
								}
							]
						]
					}
				],
				// 1164
				[
					// 1162
					{
						colorIdx: 0,
						ref: ref.pteroz.beak_hole
					},
					// 1163
					{
						ref: ref.pteroz.beak_hole_tongue,
						transform: {
							tx: -6.75,
							ty: 7.75
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -6.75,
							ty: 7.75
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 4.8,
										ty: -8.35,
										a: 0.77,
										d: 0.77,
										b: -0.747,
										c: 0.747
									}
								}
							],
							[
								// 359
								{
									ref: ref.hurt.scratch_blood,
									transform: {
										tx: 2.25,
										ty: -7.05,
										a: 0.482,
										d: 0.363,
										b: -1.318,
										c: 0.993
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -21.7,
										ty: 1.15
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -12.05,
										ty: -9.35
									}
								}
							]
						]
					}
				],
				// 1168
				[
					// 1166
					{
						colorIdx: 0,
						ref: ref.pteroz.beak_plunger
					},
					// 1167
					{
						ref: ref.pteroz.beak_plunger_teeth,
						transform: {
							tx: 2.95,
							ty: 4.5
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -6.75,
							ty: 7.75
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 4.8,
										ty: -8.35,
										a: 0.77,
										d: 0.77,
										b: -0.747,
										c: 0.747
									}
								}
							],
							[
								// 359
								{
									ref: ref.hurt.scratch_blood,
									transform: {
										tx: 2.25,
										ty: -7.05,
										a: 0.482,
										d: 0.363,
										b: -1.318,
										c: 0.993
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -21.7,
										ty: 1.15
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -12.05,
										ty: -9.35
									}
								}
							]
						]
					}
				]
			]
		}
	],
	// 1186 p6
	left_wing: [
		{
			partIdx: 6,
			frames: [0, 1],
			parts: [
				// 1179
				{
					transform: {
						tx: 79.35,
						ty: -26.65
					},
					parts: [
						[
							// 1172
							{
								...left_wing_shoulder,
								transform: {
									tx: -16.1,
									ty: 10.95
								}
							},
							// 1174
							{
								colorIdx: 1,
								ref: ref.pteroz.left_wing_big,
								transform: {
									tx: 9.65,
									ty: 5.15
								}
							},
							// 1176
							{
								colorIdx: 0,
								ref: ref.pteroz.left_wing_big_frame,
								transform: {
									tx: 2.45,
									ty: -2.05
								}
							},
							// 1177
							{
								ref: ref.pteroz.left_wing_big_claws
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									[
										// 155
										{
											ref: ref.hurt.scratch,
											transform: {
												tx: 12.35,
												ty: 15.65,
												a: 0.957,
												d: 1.506,
												b: 0.369,
												c: -0.581
											}
										},
										// 318
										{
											ref: ref.hurt.scratch_small,
											transform: {
												tx: -20.55,
												ty: 31
											}
										}
									],
									[
										// 1178
										{
											ref: ref.pteroz.left_wing_hurt_blood,
											transform: {
												tx: -2.7,
												ty: 9.45
											}
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: -19.5,
												ty: 30.15,
												a: 0.728,
												d: 0.728,
												b: 0.352,
												c: -0.352
											}
										}
									]
								]
							}
						]
					]
				},
				// 1185
				{
					transform: {
						tx: 72.85,
						ty: -17.6
					},
					parts: [
						[
							// 1172
							{
								...left_wing_shoulder,
								transform: {
									tx: -9.6,
									ty: 1.9
								}
							},
							// 1181
							{
								colorIdx: 1,
								ref: ref.pteroz.left_wing_small,
								transform: {
									tx: 11.2,
									ty: -2.4
								}
							},
							// 1183
							{
								colorIdx: 0,
								ref: ref.pteroz.left_wing_small_frame,
								transform: {
									tx: -20.2,
									ty: 19.9
								}
							},
							// 1184
							{
								ref: ref.pteroz.left_wing_small_claws
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									[
										// 155
										{
											ref: ref.hurt.scratch,
											transform: {
												tx: 16.4,
												ty: 4.85,
												a: 0.957,
												d: 1.506,
												b: 0.369,
												c: -0.581
											}
										},
										// 318
										{
											ref: ref.hurt.scratch_small,
											transform: {
												tx: -16.5,
												ty: 22.9
											}
										}
									],
									[
										// 1178
										{
											ref: ref.pteroz.left_wing_hurt_blood
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: -15.45,
												ty: 22.05,
												a: 0.728,
												d: 0.728,
												b: 0.352,
												c: -0.352
											}
										}
									]
								]
							}
						]
					]
				}
			]
		}
	],
	// 1206 p4
	eyes: [],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
