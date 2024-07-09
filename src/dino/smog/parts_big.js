// @ts-check
import { demon_glow } from '../moueffe/parts_big.js';
import { ref } from '../references_big.js';

// 3359
const eye = {
	partIdx: 1,
	frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	parts: [
		// 3356
		{
			colorIdx: 2,
			ref: ref.smog.left_eye,
			transform: {
				tx: -0.05
			}
		},
		// 3358
		{
			ref: ref.smog.left_eye_demon,
			glow: demon_glow
		}
	]
};

export const parts_big = {
	// 3200 p9b
	right_leg: [
		// 3195
		{
			colorIdx: 0,
			ref: ref.smog.right_leg
		},
		// 3199 special
		{
			partIdx: 15,
			frames: [-1, 0, -1],
			transform: {
				tx: -2.65,
				ty: 9.1
			},
			parts: [
				// 3198
				{
					colorIdx: 2,
					ref: ref.smog.right_leg_special,
					transform: {
						tx: -15.9,
						ty: -12.35
					}
				}
			]
		}
	],
	// 3203
	right_arm: [
		{
			colorIdx: 0,
			ref: ref.smog.right_arm
		}
	],
	// 3210
	body: [
		// 3205
		{
			colorIdx: 0,
			ref: ref.smog.body
		},
		// 3208
		{
			colorIdx: 1,
			ref: ref.smog.body_tummy
		},
		// 3209 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -14.25,
				ty: 4.55
			},
			parts: [
				[
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: -4.2,
							ty: -3.75,
							a: 1.111,
							d: 1.111
						}
					}
				],
				[
					// 359
					{
						ref: ref.hurt.scratch_blood,
						transform: {
							tx: -6.25,
							ty: -3.7,
							a: 0.626,
							d: 0.626
						}
					},
					// 357
					{
						ref: ref.hurt.bruise_purple,
						transform: {
							tx: 0.6,
							ty: 0.5,
							a: -0.487,
							d: -0.487,
							b: -0.844,
							c: 0.844
						}
					}
				]
			]
		}
	],
	// 3213
	left_arm: [
		{
			colorIdx: 0,
			ref: ref.smog.left_arm
		}
	],
	// 3229 p8
	tail: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				// 3215
				{
					colorIdx: 0,
					ref: ref.smog.tail
				},
				[
					// 3217
					{
						colorIdx: 0,
						ref: ref.smog.tail_curled,
						transform: {
							tx: -2.8,
							ty: -3.4
						}
					},
					// 3218
					{
						ref: ref.smog.tail_curled_highlight
					}
				],
				[
					// 3220
					{
						colorIdx: 0,
						ref: ref.smog.tail_bent,
						transform: {
							tx: 0.95,
							ty: -0.6
						}
					},
					// 3221
					{
						ref: ref.smog.tail_bent_highlight
					}
				],
				// 3223
				{
					colorIdx: 0,
					ref: ref.smog.tail_long
				},
				[
					// 3225
					{
						colorIdx: 0,
						ref: ref.smog.tail_pig
					},
					// 3226
					{
						ref: ref.smog.tail_pig_highlight
					}
				],
				// 3228
				{
					colorIdx: 0,
					ref: ref.smog.tail_curved
				}
			]
		}
	],
	// 3248 p7
	back: [
		// 3233 wingB special
		{
			partIdx: 15,
			frames: [-1, -1, 0, -1],
			transform: {
				tx: -23.45,
				ty: -60.15,
				a: 0.716,
				d: 1,
				b: 0,
				c: 0.27
			},
			parts: [
				// 3230
				{
					colorIdx: 0,
					ref: ref.smog.back_wing,
					transform: {
						tx: -0.5,
						ty: -1.9
					},
					colorAdjust: {
						brightness: -18
					}
				}
			]
		},
		{
			partIdx: 7,
			frames: [0, 1, 2, -1],
			parts: [
				// 3235
				{
					colorIdx: 3,
					ref: ref.smog.back_fin,
					transform: {
						tx: 5.9,
						ty: -7.8
					}
				},
				// 3245
				{
					colorIdx: 3,
					ref: ref.smog.back_plates,
					transform: {
						tx: 5.9,
						ty: -7.8
					}
				},
				// 3247
				{
					colorIdx: 3,
					ref: ref.smog.back_small_plates,
					transform: {
						tx: 0.6,
						ty: -6.45
					}
				}
			]
		},
		// 3243 special
		{
			partIdx: 15,
			frames: [-1, 0, -1],
			parts: [
				// 3240
				{
					colorIdx: 3,
					ref: ref.smog.back_scarf,
					transform: {
						tx: -18.85,
						ty: 1.85
					}
				}
			]
		},
		// 3233 wingA special
		{
			partIdx: 15,
			frames: [-1, -1, 0, -1],
			transform: {
				tx: 2.45,
				ty: -60.65
			},
			parts: [
				// 3230
				{
					colorIdx: 0,
					ref: ref.smog.back_wing,
					transform: {
						tx: -0.5,
						ty: -1.9
					}
				}
			]
		}
	],
	// 3256 p9a
	left_leg: [
		// 3250
		{
			colorIdx: 0,
			ref: ref.smog.left_leg
		},
		// 3251
		{
			ref: ref.smog.left_leg_highlight
		},
		// 3255 special
		{
			partIdx: 15,
			frames: [-1, 0, -1],
			transform: {
				tx: 0.65,
				ty: 11.9
			},
			parts: [
				// 3253
				{
					colorIdx: 2,
					ref: ref.smog.left_leg_special,
					transform: {
						tx: -18.5,
						ty: -11.8
					}
				}
			]
		}
	],
	// 3267 p3b
	right_eye: [
		// eye
		{
			partIdx: 3,
			frames: [0, 0, 0, 0, 1, 1, 1, 1],
			parts: [
				[
					// 3257
					{
						ref: ref.smog.right_eye_border
					},
					// 3258
					{
						colorIdx: 0,
						ref: ref.smog.right_eye,
						transform: {
							tx: 0.9,
							ty: -0.55
						}
					},
					// 3260
					{
						ref: ref.smog.right_eye_highlight,
						transform: {
							ty: 0.2,
							a: 1.048,
							d: 0.8
						}
					}
				],
				[
					// 3263
					{
						ref: ref.smog.right_eye_big_border
					},
					// 3258
					{
						colorIdx: 0,
						ref: ref.smog.right_eye,
						transform: {
							tx: 0.85,
							ty: -0.65,
							a: 0.953,
							d: 1.297,
							b: 0.279,
							c: 0
						}
					},
					// 3260
					{
						ref: ref.smog.right_eye_highlight
					}
				]
			]
		},
		// eyelid
		{
			partIdx: 3,
			frames: [0, -1, 1, -1, 2, -1, 3, -1],
			parts: [
				// 3261
				{
					ref: ref.smog.right_eye_eyelid_faint
				},
				// 3262
				{
					ref: ref.smog.right_eye_eyelid
				},
				// 3264
				{
					ref: ref.smog.right_eye_big_eyelid_faint
				},
				// 3266
				{
					ref: ref.smog.right_eye_big_eyelid
				}
			]
		}
	],
	// 3307 p4
	head: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			parts: [
				[
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					}
				],
				[
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3271
					{
						colorIdx: 3,
						ref: ref.smog.head_hair,
						transform: {
							tx: 16.1,
							ty: -22.15
						}
					}
				],
				[
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3273
					{
						colorIdx: 0,
						ref: ref.smog.head_wave,
						transform: {
							tx: 11.4,
							ty: -20.9
						}
					},
					// 3274
					{
						ref: ref.smog.head_wave_highlight
					}
				],
				[
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3277
					{
						colorIdx: 0,
						ref: ref.smog.head_axe,
						transform: {
							tx: 6.05,
							ty: -26.9
						}
					},
					// 3278
					{
						ref: ref.smog.head_axe_highlight
					}
				],
				[
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3280
					{
						colorIdx: 0,
						ref: ref.smog.head_curled,
						transform: {
							tx: 20.3,
							ty: -29.7
						}
					},
					// 3281
					{
						ref: ref.smog.head_curled_highlight
					}
				],
				[
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3283
					{
						colorIdx: 3,
						ref: ref.smog.head_hair_curled,
						transform: {
							tx: -23.5,
							ty: -26.35
						}
					}
				],
				[
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3285
					{
						colorIdx: 0,
						ref: ref.smog.head_bald,
						transform: {
							tx: 2,
							ty: -18.95
						}
					},
					// 3286
					{
						ref: ref.smog.head_bald_highlight
					}
				],
				[
					// 3288
					{
						colorIdx: 0,
						ref: ref.smog.head_chicken,
						transform: {
							tx: 17.3,
							ty: -12.4
						}
					},
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3290
					{
						colorIdx: 0,
						ref: ref.smog.head_chicken_front,
						transform: {
							tx: -6.1,
							ty: -22.95,
							b: 0,
							c: -0.192
						}
					},
					// 3291
					{
						ref: ref.smog.head_chicken_highlight
					}
				],
				[
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3293
					{
						colorIdx: 0,
						ref: ref.smog.head_big_curl,
						transform: {
							tx: 26.5,
							ty: -24.5
						}
					},
					// 3294
					{
						ref: ref.smog.head_big_curl_highlight
					}
				],
				[
					// 3296
					{
						colorIdx: 3,
						ref: ref.smog.head_arc,
						transform: {
							tx: 26.5,
							ty: -24.5
						}
					},
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3298
					{
						colorIdx: 3,
						ref: ref.smog.head_arc_front,
						transform: {
							tx: 26.5,
							ty: -24.5
						}
					}
				],
				[
					// 3300
					{
						colorIdx: 3,
						ref: ref.smog.head_small_plates,
						transform: {
							tx: 12.55,
							ty: -16.25
						}
					},
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3302
					{
						colorIdx: 3,
						ref: ref.smog.head_small_plates_front,
						transform: {
							tx: -7.4,
							ty: -23.35
						}
					}
				],
				[
					// 3304
					{
						colorIdx: 3,
						ref: ref.smog.head_plates,
						transform: {
							tx: 12.55,
							ty: -16.25
						}
					},
					// 3269
					{
						colorIdx: 0,
						ref: ref.smog.head
					},
					// 3306
					{
						colorIdx: 3,
						ref: ref.smog.head_plates_front,
						transform: {
							tx: -7.4,
							ty: -23.35
						}
					}
				]
			]
		}
	],
	// 3309 col1
	neck: [
		{
			colorIdx: 1,
			ref: ref.smog.neck
		}
	],
	// 3346 p5
	nose: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				// 3314
				[
					// 3311
					{
						colorIdx: 0,
						ref: ref.smog.nose,
						transform: {
							tx: 6.1,
							ty: 3.9
						}
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
										tx: -2.65,
										ty: 1.8,
										a: 1.305,
										d: 1.305
									}
								}
							],
							[
								// 357
								{
									ref: ref.hurt.bruise_purple,
									transform: {
										tx: 2.05,
										ty: 7.1,
										a: -0.512,
										d: -0.512,
										b: -0.887,
										c: 0.887
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -2.65,
										ty: 1.8,
										a: 1.305,
										d: 1.305
									}
								}
							]
						]
					},
					// 3315
					{
						ref: ref.smog.nose_highlight
					}
				],
				[
					// 3320
					{
						transform: {
							tx: 5.7,
							ty: -0.2
						},
						parts: [
							[
								// 3317
								{
									colorIdx: 0,
									ref: ref.smog.nose_capybara,
									transform: {
										tx: 0.4,
										ty: 4.1
									}
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
													tx: -9.65,
													ty: 1.8,
													a: 1.305,
													d: 1.305
												}
											}
										],
										[
											// 357
											{
												ref: ref.hurt.bruise_purple,
												transform: {
													tx: -0.55,
													ty: 6.15,
													a: -0.512,
													d: -0.512,
													b: -0.887,
													c: 0.887
												}
											},
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: -9.65,
													ty: 1.8,
													a: 1.305,
													d: 1.305
												}
											}
										]
									]
								}
							]
						]
					},
					// 3321
					{
						ref: ref.smog.nose_capybara_highlight
					}
				],
				[
					// 3326
					{
						transform: {
							tx: -4.2,
							ty: 0.25
						},
						parts: [
							[
								// 3323
								{
									colorIdx: 0,
									ref: ref.smog.nose_crumpled,
									transform: {
										tx: 10.3,
										ty: 3.65
									}
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
													tx: -7.65,
													ty: 1.8,
													a: 1.305,
													d: 1.305
												}
											}
										],
										[
											// 357
											{
												ref: ref.hurt.bruise_purple,
												transform: {
													tx: 2.75,
													ty: 6.35,
													a: -0.512,
													d: -0.512,
													b: -0.887,
													c: 0.887
												}
											},
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: -7.65,
													ty: 1.8,
													a: 1.305,
													d: 1.305
												}
											}
										]
									]
								}
							]
						]
					},
					// 3327
					{
						ref: ref.smog.nose_crumpled_highlight
					}
				],
				[
					// 3332
					{
						transform: {
							tx: -3.05,
							ty: 0.15
						},
						parts: [
							[
								// 3329
								{
									colorIdx: 0,
									ref: ref.smog.nose_small
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
													tx: -2.65,
													ty: -1.2,
													a: 1.305,
													d: 1.305
												}
											}
										],
										[
											// 357
											{
												ref: ref.hurt.bruise_purple,
												transform: {
													tx: 5.55,
													ty: 4.75,
													a: -0.512,
													d: -0.512,
													b: -0.887,
													c: 0.887
												}
											},
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: -2.65,
													ty: -2.2,
													a: 1.305,
													d: 1.305
												}
											}
										]
									]
								}
							]
						]
					},
					// 3333
					{
						ref: ref.smog.nose_small_highlight
					}
				],
				[
					// 3338
					{
						transform: {
							tx: 2.85,
							ty: -1.1
						},
						parts: [
							[
								// 3335
								{
									colorIdx: 0,
									ref: ref.smog.nose_small_crumpled,
									transform: {
										tx: 3.25,
										ty: 5
									}
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
													tx: -2.65,
													ty: 1.8,
													a: 1.305,
													d: 1.305
												}
											}
										],
										[
											// 357
											{
												ref: ref.hurt.bruise_purple,
												transform: {
													tx: 2.05,
													ty: 7.1,
													a: -0.512,
													d: -0.512,
													b: -0.887,
													c: 0.887
												}
											},
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: -2.65,
													ty: 1.8,
													a: 1.305,
													d: 1.305
												}
											}
										]
									]
								}
							]
						]
					},
					// 3339
					{
						ref: ref.smog.nose_small_crumpled_highlight
					}
				],
				// 3344
				[
					// 3341
					{
						colorIdx: 0,
						ref: ref.smog.nose_snake,
						transform: {
							tx: 6.1,
							ty: 3.9
						}
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
										tx: -10.65,
										ty: 1.8,
										a: 1.305,
										d: 1.305
									}
								}
							],
							[
								// 357
								{
									ref: ref.hurt.bruise_purple,
									transform: {
										tx: -0.2,
										ty: -6.8,
										a: -0.512,
										d: -0.512,
										b: -0.887,
										c: 0.887
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -10.65,
										ty: 1.8,
										a: 1.305,
										d: 1.305
									}
								}
							]
						]
					},
					// 3345
					{
						ref: ref.smog.nose_snake_highlight
					}
				]
			]
		}
	],
	// 3353 p6
	mouth: [
		{
			partIdx: 6,
			frames: [0, 1, 2],
			parts: [
				// 3348
				{
					colorIdx: 0,
					ref: ref.smog.mouth,
					transform: {
						ty: -0.5
					}
				},
				// 3350
				{
					colorIdx: 0,
					ref: ref.smog.mouth_smile
				},
				// 3352
				{
					colorIdx: 0,
					ref: ref.smog.mouth_big,
					transform: {
						ty: -0.5
					}
				}
			]
		}
	],
	// 3376 p3a
	left_eye: [
		// eyes
		{
			partIdx: 3,
			frames: [0, 0, 1, 1, 2, 2, 3, 3],
			parts: [
				[
					// 3354
					{
						ref: ref.smog.left_eye_back,
						transform: {
							tx: -2.05,
							ty: 1.95,
							a: 1.129,
							d: 0.875
						}
					},
					// 3359
					{
						...eye,
						transform: {
							tx: -0.35,
							ty: 2.9
						}
					},
					// 3361
					{
						colorIdx: 0,
						ref: ref.smog.left_eye_socket
					},
					// 3362
					{
						ref: ref.smog.left_eye_highlight
					}
				],
				[
					// 3364
					{
						ref: ref.smog.left_eye_wide_back
					},
					// 3359
					{
						...eye,
						transform: {
							tx: 1.45,
							ty: 1.5,
							a: 1.119,
							d: 0.966,
							b: -0.228,
							c: 0.166
						}
					},
					// 3366
					{
						colorIdx: 0,
						ref: ref.smog.left_eye_wide_socket,
						transform: {
							tx: 0.35,
							ty: -2.3
						}
					},
					// 3367
					{
						ref: ref.smog.left_eye_wide_highlight
					}
				],
				[
					// 3354
					{
						ref: ref.smog.left_eye_back
					},
					// 3359
					{
						...eye,
						transform: {
							tx: 2.05,
							ty: 1.15,
							a: 1.398,
							d: 1.142
						}
					},
					// 3361
					{
						colorIdx: 0,
						ref: ref.smog.left_eye_socket,
						transform: {
							tx: 1.8,
							ty: -2.2,
							a: 0.887,
							d: 1.142
						}
					},
					// 3369
					{
						ref: ref.smog.left_eye_silly_highlight
					}
				],
				[
					// 3371
					{
						ref: ref.smog.left_eye_big_back
					},
					// 3359
					{
						...eye,
						transform: {
							tx: 0.65,
							ty: 3.45,
							a: 0.879,
							d: 0.718
						}
					},
					// 3373
					{
						colorIdx: 0,
						ref: ref.smog.left_eye_big_socket,
						transform: {
							tx: 2.65,
							ty: -3.55
						}
					},
					// 3374
					{
						ref: ref.smog.left_eye_big_highlight
					}
				]
			]
		},
		// eyelide
		{
			partIdx: 3,
			frames: [0, -1, 1, -1, 2, -1, 3, -1],
			parts: [
				// 3363
				{
					ref: ref.smog.left_eye_eyelid
				},
				// 3368
				{
					ref: ref.smog.left_eye_wide_eyelid
				},
				// 3370
				{
					ref: ref.smog.left_eye_silly_eyelid
				},
				// 3375
				{
					ref: ref.smog.left_eye_big_eyelid
				}
			]
		}
	],
	// 3380 special
	special_head: [
		{
			partIdx: 15,
			frames: [-1, -1, 0, 1],
			parts: [
				// 3377
				{
					ref: ref.smog.special_glasses,
					transform: {
						tx: 17.55,
						ty: 11,
						a: 0.936,
						d: 0.936
					}
				},
				// 3379
				{
					ref: ref.smog.special_headset,
					transform: {
						tx: 32.4,
						ty: -5.85
					}
				}
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
