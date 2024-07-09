// @ts-check
import { demon_glow } from '../moueffe/parts_big.js';
import { ref } from '../references_big.js';

export const parts_big = {
	// 2215 p6b
	right_leg: [
		{
			partIdx: 6,
			frames: [0, 1],
			parts: [
				// 2209
				[
					// 2205
					{
						ref: ref.kabuki.right_leg_claws
					},
					// 2207
					{
						colorIdx: 1,
						ref: ref.kabuki.right_leg,
						transform: {
							tx: 2.95,
							ty: -0.5
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: 9.95,
									ty: -8.35,
									a: 0.647,
									d: 0.934,
									b: 0.632,
									c: -0.934
								}
							},
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 9.95,
										ty: -8.35,
										a: 0.647,
										d: 0.934,
										b: 0.632,
										c: -0.934
									}
								},
								// 2208
								{
									ref: ref.kabuki.right_leg_hurt_blood
								}
							]
						]
					}
				],
				// 2214
				[
					// 2210
					{
						ref: ref.kabuki.right_leg_fold_claws,
						transform: {
							tx: 6,
							ty: -1.95
						}
					},
					// 2211
					{
						colorIdx: 1,
						ref: ref.kabuki.right_leg_fold,
						transform: {
							tx: 6,
							ty: -6.1
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 6,
							ty: -1.95
						},
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -1.45,
									ty: -13.85,
									a: 0.942,
									d: 0.936,
									b: 0.529,
									c: -0.54
								}
							},
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -1.45,
										ty: -13.85,
										a: 0.942,
										d: 0.936,
										b: 0.529,
										c: -0.54
									}
								},
								// 2213
								{
									ref: ref.kabuki.right_leg_fold_hurt_blood
								}
							]
						]
					}
				]
			]
		}
	],
	// 2228 p5
	shoulder: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3],
			parts: [
				// 2218
				[
					// 2217
					{
						colorIdx: 2,
						ref: ref.kabuki.shoulder
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 0],
						transform: {
							tx: -0.05,
							ty: -4.2
						},
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: 0.9,
									ty: -6.25,
									a: 1.321,
									d: 1.321,
									b: -0.015,
									c: 0
								}
							}
						]
					}
				],
				// 2221
				[
					// 2220
					{
						colorIdx: 2,
						ref: ref.kabuki.shoulder_flower
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 0],
						transform: {
							tx: 4.05,
							ty: -3.85
						},
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -0.8,
									ty: 0.4,
									a: -0.559,
									d: -0.772,
									b: -0.758,
									c: 1.072
								}
							}
						]
					}
				],
				// 2224
				[
					// 2223
					{
						colorIdx: 2,
						ref: ref.kabuki.shoulder_wide
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 0],
						transform: {
							tx: 5,
							ty: -2.1
						},
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -5.1,
									ty: -4.75,
									a: 1.321,
									d: 1.321,
									b: -0.015,
									c: 0
								}
							}
						]
					}
				],
				// 2227
				[
					// 2226
					{
						colorIdx: 2,
						ref: ref.kabuki.shoulder_long
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 0],
						transform: {
							tx: -2.95,
							ty: 3.65
						},
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: 0.1,
									ty: -9.75,
									a: 1.321,
									d: 1.321,
									b: -0.015,
									c: 0
								}
							}
						]
					}
				]
			]
		}
	],
	// 2241 p9a
	right_arm: [
		{
			partIdx: 9,
			frames: [0, 1],
			parts: [
				// 2234
				[
					// 2229
					{
						ref: ref.kabuki.right_arm_claws
					},
					// 2231
					{
						colorIdx: 1,
						ref: ref.kabuki.right_arm,
						transform: {
							ty: -3.75
						}
					},
					// 2232
					{
						colorIdx: 2,
						ref: ref.kabuki.right_arm,
						transform: {
							ty: -3.75
						},
						alpha: 0.4
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, -1, 0],
						parts: [
							// 2233
							{
								ref: ref.kabuki.right_arm_hurt_blood
							}
						]
					}
				],
				// 2240
				{
					transform: {
						tx: 5.35,
						ty: 16
					},
					parts: [
						[
							// 2236
							{
								colorIdx: 1,
								ref: ref.kabuki.right_arm_stretch,
								transform: {
									tx: 3.5,
									ty: 0,
									a: 1.12,
									d: 1.12
								}
							},
							// 2237
							{
								colorIdx: 2,
								ref: ref.kabuki.right_arm_stretch,
								transform: {
									tx: 3.5,
									ty: 0,
									a: 1.12,
									d: 1.12
								},
								alpha: 0.4
							},
							// 2238
							{
								ref: ref.kabuki.right_arm_stretch_claws
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, -1, 0],
								parts: [
									// 2239
									{
										ref: ref.kabuki.right_arm_stretch_hurt_blood
									}
								]
							}
						]
					]
				}
			]
		}
	],
	// 2252 p8
	hair: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 2243
				{
					colorIdx: 1,
					ref: ref.kabuki.hair
				},
				// 2245
				{
					colorIdx: 1,
					ref: ref.kabuki.hair_smooth,
					transform: {
						tx: -70.6,
						ty: -1.4
					}
				},
				// 2247
				{
					colorIdx: 1,
					ref: ref.kabuki.hair_messy,
					transform: {
						tx: -14.3,
						ty: -2.65
					}
				},
				// 2248
				{
					colorIdx: 1,
					ref: ref.kabuki.hair_pointy,
					transform: {
						tx: -1.85,
						ty: -6.3
					}
				},
				// 2251
				{
					colorIdx: 1,
					ref: ref.kabuki.hair_fluffy,
					transform: {
						tx: -6.05,
						ty: -4.05
					}
				}
			]
		}
	],
	// 2263 p6
	left_leg: [
		{
			partIdx: 6,
			frames: [0, 1],
			parts: [
				// 2257
				[
					// 2253
					{
						ref: ref.kabuki.left_leg_claws
					},
					// 2254
					{
						colorIdx: 1,
						ref: ref.kabuki.left_leg,
						transform: {
							tx: -0.3,
							ty: -2.3
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: 2.15,
									ty: -13.8,
									a: 1.321,
									d: 0.698,
									b: -0.015,
									c: 0
								}
							},
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 2.15,
										ty: -13.8,
										a: 1.321,
										d: 0.698,
										b: -0.015,
										c: 0
									}
								},
								// 2256
								{
									ref: ref.kabuki.left_leg_hurt_blood
								}
							]
						]
					}
				],
				// 2262
				{
					transform: {
						tx: -4.65,
						ty: 2.3
					},
					parts: [
						[
							// 2258
							{
								ref: ref.kabuki.left_leg_stretch_claws
							},
							// 2260
							{
								colorIdx: 1,
								ref: ref.kabuki.left_leg_stretch,
								transform: {
									tx: -0.9,
									ty: -3
								}
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 318
									{
										ref: ref.hurt.scratch_small,
										transform: {
											tx: -0.15,
											ty: -6.2,
											a: -0.848,
											d: 0.848,
											b: -1.468,
											c: -1.468
										}
									},
									[
										// 2261
										{
											ref: ref.kabuki.left_leg_stretch_hurt_blood
										},
										// 318
										{
											ref: ref.hurt.scratch_small,
											transform: {
												tx: -0.15,
												ty: -6.2,
												a: -0.848,
												d: 0.848,
												b: -1.468,
												c: -1.468
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
	// 2267
	body: [
		// 2265
		{
			colorIdx: 1,
			ref: ref.kabuki.body
		},
		// 2266
		{
			colorIdx: 2,
			ref: ref.kabuki.body,
			alpha: 0.4
		}
	],
	// 2271 p2
	head: [
		// 2269
		{
			ref: ref.kabuki.head,
			colorOffset: {
				r: -153,
				g: -138,
				b: -128
			}
		},
		// hurt
		{
			partIdx: 2,
			frames: [-1, -1, 0],
			parts: [
				// 2270
				{
					ref: ref.kabuki.head_hurt_blood
				}
			]
		}
	],
	// 2274 p4
	mouth: [
		{
			partIdx: 4,
			frames: [0, 1, -1],
			parts: [
				// 2272
				{
					ref: ref.kabuki.mouth
				},
				// 2273
				{
					ref: ref.kabuki.mouth_grin
				}
			]
		}
	],
	// 2290 p3
	eyes: [
		{
			partIdx: 3,
			frames: [0, 1, 2],
			parts: [
				// 2279
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					transform: {
						tx: -13.45,
						ty: -7.95
					},
					parts: [
						// 2275
						{
							ref: ref.kabuki.eyes
						},
						[
							// 2276
							{
								ref: ref.kabuki.eyes_demon_sockets
							},
							// 2278
							{
								ref: ref.kabuki.eyes_demon,
								transform: {
									tx: 1.7,
									ty: 1.55
								},
								glow: demon_glow
							}
						]
					]
				},
				// 2284
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					transform: {
						tx: -12.8,
						ty: -3.85
					},
					parts: [
						// 2280
						{
							ref: ref.kabuki.eyes_round
						},
						[
							// 2281
							{
								ref: ref.kabuki.eyes_round_demon_sockets
							},
							// 2283
							{
								ref: ref.kabuki.eyes_round_demon,
								transform: {
									tx: 0.75,
									ty: 1.05
								},
								glow: demon_glow
							}
						]
					]
				},
				// 2289
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					transform: {
						tx: -12.9,
						ty: -3.3
					},
					parts: [
						// 2285
						{
							ref: ref.kabuki.eyes_serious
						},
						[
							// 2286
							{
								ref: ref.kabuki.eyes_serious_demon_sockets
							},
							// 2288
							{
								ref: ref.kabuki.eyes_serious_demon,
								transform: {
									tx: 0.9,
									ty: 0.8
								},
								glow: demon_glow
							}
						]
					]
				}
			]
		}
	],
	// 2309 p8b
	left_arm: [
		{
			partIdx: 8,
			frames: [0, 1, 2, -1],
			parts: [
				// 2296
				[
					// 2292
					{
						colorIdx: 1,
						ref: ref.kabuki.left_arm_stretch,
						transform: {
							tx: 5.05,
							ty: 0
						}
					},
					// 2293
					{
						colorIdx: 2,
						ref: ref.kabuki.left_arm_stretch,
						transform: {
							tx: 5.05,
							ty: 0
						},
						alpha: 0.4
					},
					// 2294
					{
						ref: ref.kabuki.left_arm_stretch_claws
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: 5.6,
									ty: -7.25,
									a: 1.321,
									d: 0.886,
									b: -0.015,
									c: 0
								}
							},
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 5.6,
										ty: -7.25,
										a: 1.321,
										d: 0.886,
										b: -0.015,
										c: 0
									}
								},
								// 2295
								{
									ref: ref.kabuki.left_arm_stretch_hurt_blood
								}
							]
						]
					}
				],
				// 2302
				{
					transform: {
						tx: 4.6,
						ty: 1.6
					},
					parts: [
						[
							// 2297
							{
								ref: ref.kabuki.left_arm_claws
							},
							// 2299
							{
								colorIdx: 1,
								ref: ref.kabuki.left_arm,
								transform: {
									tx: 1.35,
									ty: -1.5
								}
							},
							// 2300
							{
								colorIdx: 2,
								ref: ref.kabuki.left_arm,
								transform: {
									tx: 1.35,
									ty: -1.5
								},
								alpha: 0.4
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 155
									{
										ref: ref.hurt.scratch,
										transform: {
											tx: -0.45,
											ty: 5.1,
											a: 1.321,
											d: 1.826,
											b: -0.015,
											c: -0.143
										}
									},
									[
										// 155
										{
											ref: ref.hurt.scratch,
											transform: {
												tx: -0.45,
												ty: 5.1,
												a: 1.321,
												d: 1.826,
												b: -0.015,
												c: -0.143
											}
										},
										// 2301
										{
											ref: ref.kabuki.left_arm_hurt_blood
										}
									]
								]
							}
						]
					]
				},
				// 2308
				{
					transform: {
						tx: 1.4,
						ty: -2.15
					},
					parts: [
						[
							// 2303
							{
								ref: ref.kabuki.left_arm_curve_claws
							},
							// 2305
							{
								colorIdx: 1,
								ref: ref.kabuki.left_arm_curve,
								transform: {
									tx: 4.25,
									ty: 0
								}
							},
							// 2306
							{
								colorIdx: 2,
								ref: ref.kabuki.left_arm_curve,
								transform: {
									tx: 4.25,
									ty: 0
								},
								alpha: 0.4
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 155
									{
										ref: ref.hurt.scratch,
										transform: {
											tx: -2.3,
											ty: 7.2,
											a: 0.516,
											d: 0.931,
											b: 0.87,
											c: -1.612
										}
									},
									[
										// 155
										{
											ref: ref.hurt.scratch,
											transform: {
												tx: -2.3,
												ty: 7.2,
												a: 0.516,
												d: 0.931,
												b: 0.87,
												c: -1.612
											}
										},
										// 2307
										{
											ref: ref.kabuki.left_arm_curve_hurt_blood
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
	// 2311
	ears: [
		{
			ref: ref.kabuki.ears,
			colorOffset: {
				r: -153,
				g: -138,
				b: -128
			}
		}
	],
	// 2341 p7
	front_hair: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 4],
			parts: [
				[
					// 2313
					{
						colorIdx: 1,
						ref: ref.kabuki.front_hair_bang,
						transform: {
							tx: -30,
							ty: 6.45
						}
					},
					// 2316
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
						transform: {
							tx: -32.4,
							ty: 6.65
						},
						parts: [
							// 2314
							{
								ref: ref.kabuki.front_hair_right_horn
							},
							// 2315
							{
								ref: ref.kabuki.front_hair_right_horn_demon
							}
						]
					},
					// 2320
					// 2318
					{
						colorIdx: 1,
						ref: ref.kabuki.front_hair,
						transform: {
							tx: 3.1
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 1
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -1.65,
										ty: -6.35,
										a: 1.474,
										d: 1.222
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -16.55,
										ty: 4.65,
										a: 0.805,
										d: 0.805,
										b: -0.805,
										c: 0.805
									}
								}
							],
							[
								// 2319
								{
									ref: ref.kabuki.front_hair_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -1.65,
										ty: -6.35,
										a: 1.474,
										d: 1.222
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -16.55,
										ty: 4.65,
										a: 0.805,
										d: 0.805,
										b: -0.805,
										c: 0.805
									}
								}
							]
						]
					},
					// 2324
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
						transform: {
							tx: -0.55,
							ty: 5.55
						},
						parts: [
							// 2321
							{
								ref: ref.kabuki.front_hair_left_horn
							},
							// 2322
							{
								ref: ref.kabuki.front_hair_left_horn_demon
							}
						]
					}
				],
				// 2328
				[
					// 2326
					{
						colorIdx: 1,
						ref: ref.kabuki.front_hair_down,
						transform: {
							tx: -11.2,
							ty: 4.05
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -11.2,
							ty: 4.05
						},
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -13.55,
									ty: -12.1,
									a: 0.958,
									d: 1.643,
									b: 0.671,
									c: -0.949
								}
							},
							[
								// 2327
								{
									ref: ref.kabuki.front_hair_down_hurt_blood
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: 11.7,
										ty: -4,
										a: 0.735,
										d: 0.735,
										b: -1.272,
										c: 1.272
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -13.55,
										ty: -12.1,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								}
							]
						]
					}
				],
				[
					// 2332
					{
						transform: {
							tx: 0.25,
							ty: -6.25
						},
						parts: [
							[
								// 2330
								{
									colorIdx: 1,
									ref: ref.kabuki.front_hair_spiky
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										[
											// 318
											{
												ref: ref.hurt.scratch_small,
												transform: {
													tx: 12.6,
													ty: -13.95,
													a: -1.419,
													d: -1.419,
													b: -0.38,
													c: 0.38
												}
											},
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: -13.7,
													ty: 4.95,
													a: 0.958,
													d: 1.643,
													b: 0.671,
													c: -0.949
												}
											}
										],
										[
											// 2331
											{
												ref: ref.kabuki.front_hair_spiky_hurt_blood
											},
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: -25.8,
													ty: -9.7,
													a: 0.958,
													d: 1.643,
													b: 0.671,
													c: -0.949
												}
											},
											// 318
											{
												ref: ref.hurt.scratch_small,
												transform: {
													tx: 12.6,
													ty: -13.95,
													a: -1.419,
													d: -1.419,
													b: -0.38,
													c: 0.38
												}
											},
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: -13.7,
													ty: 4.95,
													a: 0.958,
													d: 1.643,
													b: 0.671,
													c: -0.949
												}
											}
										]
									]
								}
							]
						]
					},
					// 2316
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
						transform: {
							tx: -32.4,
							ty: 6.65
						},
						parts: [
							// 2314
							{
								ref: ref.kabuki.front_hair_right_horn
							},
							// 2315
							{
								ref: ref.kabuki.front_hair_right_horn_demon
							}
						]
					},
					// 2324
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
						transform: {
							tx: -0.55,
							ty: 5.55
						},
						parts: [
							// 2321
							{
								ref: ref.kabuki.front_hair_left_horn
							},
							// 2322
							{
								ref: ref.kabuki.front_hair_left_horn_demon
							}
						]
					}
				],
				// 2336
				[
					// 2334
					{
						colorIdx: 1,
						ref: ref.kabuki.front_hair_side,
						transform: {
							tx: 0.25,
							ty: -6.25
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -4.85,
							ty: -3.25
						},
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -14.2,
									ty: 0.9,
									a: 1.114,
									d: 1.643,
									b: 0.4,
									c: -0.949
								}
							},
							[
								// 2335
								{
									ref: ref.kabuki.front_hair_side_hurt_blood
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: 1.15,
										ty: -5.15,
										a: -1.722,
										d: 1.722
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -14.2,
										ty: 0.9,
										a: 1.114,
										d: 1.643,
										b: 0.4,
										c: -0.949
									}
								}
							]
						]
					}
				],
				// 2340
				[
					// 2338
					{
						colorIdx: 1,
						ref: ref.kabuki.front_hair_emo,
						transform: {
							tx: 0.25,
							ty: -6.25
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -8.25,
							ty: -1.15
						},
						parts: [
							[
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -11.55,
										ty: -12.8,
										a: 1.491,
										d: 1.491,
										b: 0.861,
										c: -0.861
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -9.75,
										ty: -1.25,
										a: 0.64,
										d: 1.024,
										b: 0.67,
										c: -1.024
									}
								}
							],
							[
								// 2339
								{
									ref: ref.kabuki.front_hair_emo_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 4.75,
										ty: -12.8,
										a: 1.448,
										d: 1.448
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -11.55,
										ty: -12.8,
										a: 1.491,
										d: 1.491,
										b: 0.861,
										c: -0.861
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -9.75,
										ty: -1.25,
										a: 0.64,
										d: 1.024,
										b: 0.67,
										c: -1.024
									}
								}
							]
						]
					}
				]
			]
		}
	],
	// 2348 p8c
	left_arm_front: [
		{
			partIdx: 8,
			frames: [-1, -1, -1, 0],
			transform: {
				tx: 23.5,
				ty: -24.55
			},
			parts: [
				[
					// 2342
					{
						ref: ref.kabuki.left_arm_front_claws
					},
					// 2344
					{
						colorIdx: 1,
						ref: ref.kabuki.left_arm_front,
						transform: {
							tx: 4.45,
							ty: -0.35,
							a: 1.132,
							d: 1.132,
							b: 0.149,
							c: -0.149
						}
					},
					// 2344
					{
						colorIdx: 2,
						ref: ref.kabuki.left_arm_front,
						transform: {
							tx: 4.45,
							ty: -0.35,
							a: 1.132,
							d: 1.132,
							b: 0.149,
							c: -0.149
						},
						alpha: 0.4
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -3,
									ty: -2.9,
									a: 1.692,
									d: 1.321,
									b: -0.02,
									c: 0
								}
							},
							[
								// 2346
								{
									ref: ref.kabuki.left_arm_front_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -3,
										ty: -2.9,
										a: 1.692,
										d: 1.321,
										b: -0.02,
										c: 0
									}
								}
							]
						]
					}
				]
			]
		}
	],
	// 2353 special
	special: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				[
					// 2350
					{
						ref: ref.kabuki.special_mask_shadow,
						transform: {
							tx: 5.2,
							ty: 9.1
						},
						blur: {
							x: 1,
							y: 1
						}
					},
					// 2351
					{
						ref: ref.kabuki.special_mask
					}
				]
			]
		}
	],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
