// @ts-check

import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

const demon_array = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0];
// 87
const right_arm = [
	// 83
	{
		colorIdx: 0,
		ref: ref.moueffe.right_arm
	},
	// 84
	{
		ref: ref.moueffe.right_arm_highlight
	},
	// hurt
	{
		partIdx: 2,
		frames: [-1, 0, 1],
		parts: [
			// 85
			{
				ref: ref.moueffe.right_arm_hurt_1
			},
			// 86
			{
				ref: ref.moueffe.right_arm_hurt_2
			}
		]
	},
	// 89
	{
		partIdx: 1,
		frames: demon_array,
		transform: {
			tx: -18.35,
			ty: -15.9
		},
		parts: [
			// 88
			{
				colorIdx: 0,
				ref: ref.moueffe.right_arm_angry
			}
		]
	}
];
const right_arm_stretched = [
	// 98 p2
	{
		colorIdx: 0,
		ref: ref.moueffe.right_arm_stretched,
		transform: {
			tx: 2.1,
			ty: 13.85
		}
	},
	// 100
	{
		partIdx: 1,
		frames: demon_array,
		transform: {
			tx: -4.75,
			ty: 15.45
		},
		parts: [
			// 99
			{
				colorIdx: 0,
				ref: ref.moueffe.right_arm_stretched_angry
			}
		]
	}
];
const right_leg_hurt = {
	partIdx: 2,
	frames: [-1, 0, 1],
	parts: [
		// 109
		{
			ref: ref.moueffe.hurt_bruise_blue,
			transform: {
				tx: 1.7,
				ty: -1.2,
				a: 0.564,
				d: 1.003,
				b: -0.326,
				c: 0.579
			}
		},
		[
			// 111
			{
				ref: ref.moueffe.right_leg_hurt_blood
			},
			// 113
			{
				ref: ref.moueffe.hurt_bruise_red,
				transform: {
					tx: 0.65,
					ty: -3.4,
					a: 1.009,
					d: 0.802,
					b: -1.009,
					c: 0.802
				}
			}
		]
	]
};
// 142
const tail = {
	parts: [
		[
			// 139
			{
				colorIdx: 0,
				ref: ref.moueffe.tail
			},
			// 141
			{
				ref: ref.moueffe.tail_under,
				blend: BLEND_MODES.ADD,
				alpha: 0.238
			}
		]
	]
};
const tail_acc = {
	partIdx: 5,
	frames: [0, 1, -1, 2, -1, -1, -1, -1],
	parts: [
		[
			// 144
			{
				colorIdx: 1,
				ref: ref.moueffe.tail_acc_dino
			}
		],
		[
			// 146
			{
				colorIdx: 1,
				ref: ref.moueffe.tail_acc_dino_big,
				transform: {
					tx: 10.55,
					ty: -3.95
				}
			}
		],
		[
			// 148
			{
				colorIdx: 1,
				ref: ref.moueffe.tail_acc_mohawk,
				transform: {
					tx: 5.95,
					ty: -7.1
				}
			}
		]
	]
};
// 157
const body_muscular = [
	// 151
	{
		colorIdx: 0,
		ref: ref.moueffe.body_muscular
	},
	// 153
	{
		ref: ref.moueffe.body_muscular_belly,
		blend: BLEND_MODES.ADD,
		alpha: 0.238
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
						tx: -18.2,
						ty: 7.1
					}
				},
				// 113
				{
					ref: ref.moueffe.hurt_bruise_red,
					transform: {
						tx: 1.4,
						ty: 11.5,
						a: 1.009,
						d: 0.612,
						b: -1.009,
						c: 0.612
					}
				}
			],
			[
				// 156
				{
					ref: ref.moueffe.body_muscular_hurt_blood
				},
				// 110
				{
					ref: ref.moueffe.hurt_bruise_blue,
					transform: {
						tx: -21.9,
						ty: 2.2,
						a: 0.564,
						d: 1.003,
						b: -0.326,
						c: 0.579
					}
				}
			]
		]
	},
	// 159
	{
		partIdx: 8,
		frames: [0, -1, -1, -1],
		transform: {
			tx: -12.6,
			ty: 7.3
		},
		parts: [
			// 158
			{
				ref: ref.moueffe.body_muscular_bandage
			}
		]
	}
];
// 169
const body_fat = [
	// 163
	{
		colorIdx: 0,
		ref: ref.moueffe.body_fat,
		transform: {
			tx: -30,
			ty: -25.9
		}
	},
	// 167
	{
		colorIdx: 0,
		ref: ref.moueffe.body_fat_belly,
		blend: BLEND_MODES.ADD,
		alpha: 0.238,
		transform: {
			tx: -30,
			ty: -25.9
		}
	},
	// hurt
	{
		partIdx: 2,
		frames: [-1, 0, 1],
		transform: {
			tx: -2.5,
			ty: 1.35
		},
		parts: [
			[
				// 155
				{
					ref: ref.hurt.scratch,
					transform: {
						tx: -18.85,
						ty: -0.6
					}
				},
				// 113
				{
					ref: ref.moueffe.hurt_bruise_red,
					transform: {
						tx: 1.4,
						ty: 11.5,
						a: 1.009,
						d: 0.612,
						b: -1.009,
						c: 0.612
					}
				}
			],
			[
				// 168
				{
					ref: ref.moueffe.body_fat_hurt_blood
				},
				// 110
				{
					ref: ref.moueffe.hurt_bruise_blue,
					transform: {
						tx: -19.5,
						ty: -1.75,
						a: 0.651,
						d: 1.158
					}
				},
				// 155
				{
					ref: ref.hurt.scratch,
					transform: {
						tx: -1.45,
						ty: 7.8
					}
				}
			]
		]
	}
];
const head_smile = [
	// 207
	{
		colorIdx: 0,
		ref: ref.moueffe.head_smile,
		transform: {
			tx: 2.0,
			ty: 7.75
		}
	},
	// 212
	{
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
		transform: {
			tx: 9.45,
			ty: -9.1
		},
		parts: [
			// 208
			{
				ref: ref.moueffe.head_smile_eyes_big
			},
			// 209
			{
				ref: ref.moueffe.head_smile_eyes_small
			},
			// 211
			{
				ref: ref.moueffe.head_smile_eyes_demon,
				transform: {
					tx: -7.55,
					ty: -2.45
				},
				glow: {
					distance: 5,
					color: 0xff0000,
					strength: 1,
					quality: 0.5
				}
			}
		]
	},
	// hurt
	{
		partIdx: 2,
		frames: [-1, 0, 1],
		transform: {
			tx: 2.0,
			ty: 7.75
		},
		parts: [
			// 213
			{
				ref: ref.moueffe.head_smile_hurt_1
			},
			// 214
			{
				ref: ref.moueffe.head_smile_hurt_2
			}
		]
	}
];
// 227
const head_puff = [
	// 218
	{
		colorIdx: 0,
		ref: ref.moueffe.head_puff,
		transform: {
			tx: 4.2,
			ty: 6.75
		}
	},
	// 223
	{
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
		transform: {
			tx: 5.55,
			ty: -14.4
		},
		parts: [
			// 219
			{
				ref: ref.moueffe.head_puff_eyes_big
			},
			// 220
			{
				ref: ref.moueffe.head_puff_eyes_small
			},
			// 222
			{
				ref: ref.moueffe.head_puff_eyes_demon,
				glow: {
					distance: 5,
					color: 0xff0000,
					strength: 1,
					quality: 0.5
				}
			}
		]
	},
	// 224
	{
		ref: ref.moueffe.head_puff_highlight,
		transform: {
			tx: 4.2,
			ty: 6.75
		}
	},
	// hurt
	{
		partIdx: 2,
		frames: [-1, 0, 1],
		transform: {
			tx: 4.2,
			ty: 6.75
		},
		parts: [
			// 225
			{
				ref: ref.moueffe.head_puff_hurt_1
			},
			// 226
			{
				ref: ref.moueffe.head_puff_hurt_2
			}
		]
	}
];
// 239
const head_worry = [
	// 230
	{
		colorIdx: 0,
		ref: ref.moueffe.head_worry,
		transform: {
			tx: -0.05,
			ty: 6.9
		}
	},
	// 236
	{
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
		transform: {
			tx: 8.6,
			ty: -10.5
		},
		parts: [
			[
				// 231
				{
					ref: ref.moueffe.head_worry_eyes_back
				},
				// 232
				{
					ref: ref.moueffe.head_worry_eyes_big
				}
			],
			[
				// 231
				{
					ref: ref.moueffe.head_worry_eyes_back
				},
				// 233
				{
					ref: ref.moueffe.head_worry_eyes_small
				}
			],
			{
				ref: ref.moueffe.head_worry_eyes_demon
			}
		]
	},
	// hurt
	{
		partIdx: 2,
		frames: [-1, 0, 1],
		transform: {
			ty: 6.9
		},
		parts: [
			// 237
			{
				ref: ref.moueffe.head_worry_hurt_1
			},
			// 238
			{
				ref: ref.moueffe.head_worry_hurt_2
			}
		]
	}
];
// 259
const left_arm = [
	// 254
	{
		colorIdx: 0,
		ref: ref.moueffe.left_arm
	},
	// 256
	{
		ref: ref.moueffe.left_arm_highlight,
		transform: {
			tx: -35.75,
			ty: -33.65
		}
	},
	// hurt
	{
		partIdx: 2,
		frames: [-1, 0, 1],
		transform: {
			tx: -35.75,
			ty: -33.65
		},
		parts: [
			// 257
			{
				ref: ref.moueffe.left_arm_hurt_1
			},
			// 258
			{
				ref: ref.moueffe.left_arm_hurt_2
			}
		]
	},
	// 261
	{
		partIdx: 1,
		frames: demon_array,
		transform: {
			tx: -5.85,
			ty: -29.05
		},
		parts: [
			// 260
			{
				colorIdx: 0,
				ref: ref.moueffe.left_arm_angry
			}
		]
	}
];
const left_arm_stretched = [
	// 282 p2
	{
		colorIdx: 0,
		ref: ref.moueffe.left_arm_stretched,
		transform: {
			tx: -2.2,
			ty: 11.4
		}
	},
	// 284
	{
		partIdx: 1,
		frames: demon_array,
		transform: {
			tx: -15.55,
			ty: -7.5
		},
		parts: [
			// 283
			{
				colorIdx: 0,
				ref: ref.moueffe.left_arm_stretched_angry
			}
		]
	}
];
const left_arm_marks = {
	partIdx: 8,
	frames: [0, 1, 2, 3, 4, -1, -1, -1, -1, -1],
	transform: {
		tx: 19.3,
		ty: -7.2
	},
	parts: [
		// 263
		{
			colorIdx: 2,
			ref: ref.moueffe.left_arm_mark_lines,
			alpha: 0.9,
			transform: {
				tx: -1.25,
				ty: -0.5
			}
		},
		// 265
		{
			colorIdx: 2,
			ref: ref.moueffe.left_arm_mark_circle,
			alpha: 0.9,
			transform: {
				tx: 0.55,
				ty: 0.05
			}
		},
		// 267
		{
			colorIdx: 2,
			ref: ref.moueffe.left_arm_mark_sigil,
			alpha: 0.9,
			transform: {
				tx: 0.75,
				ty: 2.3
			}
		},
		// 269
		{
			colorIdx: 2,
			ref: ref.moueffe.left_arm_mark_star,
			alpha: 0.9
		},
		// 270
		{
			colorIdx: 2,
			ref: ref.moueffe.left_arm_mark_anchor,
			alpha: 0.9
		}
	]
};

export const parts_big = {
	// 81_p1
	back_bones: [
		{
			partIdx: 1,
			frames: demon_array,
			parts: [
				// 80
				{
					ref: ref.moueffe.back_bones
				}
			]
		}
	],
	// 102_p6b
	right_arm: [
		{
			partIdx: 6,
			frames: [0, 0, 0, 1, 2, 3, 4],
			parts: [
				// 87
				right_arm,
				[
					// 94
					{
						ref: ref.moueffe.right_arm_shoulder_bone
					},
					// 87
					...right_arm
				],
				[
					// 93 p1
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
						transform: {
							tx: -19.4,
							ty: 22.0
						},
						parts: [
							// 91
							{
								ref: ref.moueffe.right_arm_bone_small
							},
							// 92
							{
								ref: ref.moueffe.right_arm_bone_long
							}
						]
					},
					// 95
					{
						colorIdx: 0,
						ref: ref.moueffe.right_arm_bone_skin,
						transform: {
							tx: -20.25,
							ty: -2.75
						}
					},
					// 94
					{
						ref: ref.moueffe.right_arm_shoulder_bone
					},
					// 87
					...right_arm
				],
				right_arm_stretched,
				[
					// 101
					{
						ref: ref.moueffe.right_arm_claws
					},
					...right_arm_stretched
				]
			]
		}
	],
	// 120_p3b
	right_leg: [
		{
			partIdx: 3,
			frames: [0, 1],
			transform: {
				tx: -1.6,
				ty: 1.25
			},
			parts: [
				// 114
				[
					// 104
					{
						colorIdx: 0,
						ref: ref.moueffe.right_leg,
						transform: {
							tx: 1.6,
							ty: -1.25
						}
					},
					// 105
					{
						ref: ref.moueffe.right_leg_claws_w_highlight
					},
					// 107
					{
						colorIdx: 0,
						ref: ref.moueffe.right_leg_bone_skin,
						transform: {
							tx: 4.4,
							ty: -7.8,
							a: 0.827,
							d: 0.827,
							b: -0.091,
							c: 0.091
						}
					},
					// 108
					{
						ref: ref.moueffe.right_leg_bone
					},
					right_leg_hurt
				],
				// 119
				[
					// 117
					{
						ref: ref.moueffe.right_leg_claws
					},
					// 104
					{
						colorIdx: 0,
						ref: ref.moueffe.right_leg,
						transform: {
							tx: 1.6,
							ty: -1.25
						}
					},
					// 118
					{
						ref: ref.moueffe.right_leg_highlight
					},
					right_leg_hurt
				]
			]
		},
		// 116 special
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: -37.0,
				ty: -12.35
			},
			parts: [
				// 115
				{
					ref: ref.moueffe.right_leg_special
				}
			]
		}
	],
	// 136_p5a
	hair: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3, 4, 5, 6, 7],
			parts: [
				// 122
				{
					colorIdx: 1,
					ref: ref.moueffe.head_dino,
					transform: {
						ty: 0.05
					}
				},
				// 124
				{
					colorIdx: 1,
					ref: ref.moueffe.head_dino_big,
					transform: {
						tx: 1.8,
						ty: 0.7
					}
				},
				// 126
				{
					colorIdx: 0,
					ref: ref.moueffe.head_ear,
					transform: {
						tx: 4.0,
						ty: -1.3,
						a: 0.53,
						d: 0.814,
						b: -0.275,
						c: 0.422
					}
				},
				// 128
				{
					colorIdx: 1,
					ref: ref.moueffe.head_mohawk,
					transform: {
						tx: -0.85,
						ty: 3.15,
						a: 0.923,
						d: 1.0,
						b: 0.0,
						c: -0.08
					}
				},
				// 129
				{
					ref: ref.moueffe.head_horns
				},
				[
					// 131
					{
						colorIdx: 0,
						ref: ref.moueffe.head_unicorn_skin,
						transform: {
							tx: 2.3,
							ty: -5.4
						}
					},
					// 132
					{
						ref: ref.moueffe.head_unicorn
					}
				],
				// 135
				{
					colorIdx: 1,
					ref: ref.moueffe.head_hair_spikes,
					transform: {
						tx: 0.45,
						ty: 3.15,
						a: 0.923,
						d: 1.0,
						b: 0.0,
						c: -0.08
					}
				},
				{}
			]
		}
	],
	// 172_p7
	body: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 142 p5
					{
						...tail,
						transform: {
							tx: 18.8,
							ty: 22.7,
							a: 1.035,
							d: 1.0
						}
					},
					// 149 p5b
					{
						...tail_acc,
						transform: {
							tx: 20.95,
							ty: 23.0,
							a: 1.035,
							d: 1.0
						}
					},
					...body_muscular,
					// 161 special
					{
						partIdx: 15,
						frames: [-1, 0],
						parts: [
							{
								ref: ref.moueffe.body_muscular_special,
								transform: {
									tx: -29.6,
									ty: -28.6
								}
							}
						]
					}
				],
				[
					// 142 p5
					{
						...tail,
						transform: {
							tx: 22.5,
							ty: 20.3,
							a: 1.34,
							d: 1.34
						}
					},
					// 149 p5b
					{
						...tail_acc,
						transform: {
							tx: 25.3,
							ty: 20.7,
							a: 1.34,
							d: 1.34
						}
					},
					...body_muscular,
					// 161 special
					{
						partIdx: 15,
						frames: [-1, 0],
						parts: [
							{
								ref: ref.moueffe.body_muscular_special,
								transform: {
									tx: -29.6,
									ty: -28.6
								}
							}
						]
					}
				],
				[
					// 137
					{
						ref: ref.moueffe.body_armpit
					},
					// 142 p5
					{
						...tail,
						transform: {
							tx: 15.9,
							ty: 22.0,
							a: 0.996,
							d: 0.996,
							b: -0.074,
							c: 0.074
						}
					},
					// 149 p5b
					{
						...tail_acc,
						transform: {
							tx: 18.05,
							ty: 22.15,
							a: 0.996,
							d: 0.996,
							b: -0.074,
							c: 0.074
						}
					},
					...body_fat,
					// 171 special
					{
						partIdx: 15,
						frames: [-1, 0],
						parts: [
							{
								ref: ref.moueffe.body_fat_special,
								transform: {
									tx: -33.1,
									ty: -27.2
								}
							}
						]
					}
				],
				[
					// 137
					{
						ref: ref.moueffe.body_armpit
					},
					// 142 p5
					{
						...tail,
						transform: {
							tx: 22.35,
							ty: 17.0,
							a: 1.328,
							d: 1.328,
							b: -0.169,
							c: 0.169
						}
					},
					// 149 p5b
					{
						...tail_acc,
						transform: {
							tx: 25.15,
							ty: 16.9,
							a: 1.328,
							d: 1.328,
							b: -0.169,
							c: 0.169
						}
					},
					...body_fat,
					// 171 special
					{
						partIdx: 15,
						frames: [-1, 0],
						parts: [
							{
								ref: ref.moueffe.body_fat_special,
								transform: {
									tx: -33.1,
									ty: -27.2
								}
							}
						]
					}
				]
			]
		}
	],
	// 186_p3
	left_leg: [
		{
			partIdx: 3,
			frames: [0, 1],
			transform: {
				tx: 2.7,
				ty: 2.05
			},
			parts: [
				// 180
				[
					// 174
					{
						colorIdx: 0,
						ref: ref.moueffe.left_leg,
						transform: {
							tx: -2.7,
							ty: -2.05
						}
					},
					// 175
					{
						ref: ref.moueffe.left_leg_claws_w_highlight
					},
					// 177
					{
						colorIdx: 0,
						ref: ref.moueffe.left_leg_bone_skin,
						transform: {
							tx: -11.05,
							ty: -16.15
						}
					},
					// 178
					{
						ref: ref.moueffe.left_leg_bone
					},
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -4.8,
									ty: -5.5,
									a: 1.17,
									d: 1.17,
									b: -0.675,
									c: 0.675
								}
							},
							[
								// 179
								{
									ref: ref.moueffe.left_leg_hurt_blood_1
								},
								// 113
								{
									ref: ref.moueffe.hurt_bruise_red,
									transform: {
										tx: -1.65,
										ty: -9.1,
										a: 0.713,
										d: 0.515,
										b: -1.236,
										c: 0.891
									}
								},
								// 110
								{
									ref: ref.moueffe.hurt_bruise_blue,
									transform: {
										tx: -17.9,
										ty: -3.65,
										a: 0.461,
										d: 0.819,
										b: -0.461,
										c: 0.819
									}
								}
							]
						]
					}
				],
				// 185
				[
					// 174
					{
						colorIdx: 0,
						ref: ref.moueffe.left_leg,
						transform: {
							tx: -2.7,
							ty: -2.05
						}
					},
					// 183
					{
						ref: ref.moueffe.left_leg_claws
					},
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -8.65,
									ty: -16.1,
									a: 1.17,
									d: 1.17,
									b: -0.675,
									c: 0.675
								}
							},
							[
								// 184
								{
									ref: ref.moueffe.left_leg_hurt_blood_2
								},
								// 113
								{
									ref: ref.moueffe.hurt_bruise_red,
									transform: {
										tx: -9.5,
										ty: -17.45,
										a: 1.009,
										d: 0.974,
										b: -1.009,
										c: 0.974
									}
								},
								// 110
								{
									ref: ref.moueffe.hurt_bruise_blue,
									transform: {
										tx: -17.9,
										ty: -4.05,
										a: 0.564,
										d: 1.003,
										b: -0.326,
										c: 0.579
									}
								}
							]
						]
					}
				]
			]
		},
		// 182 special
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: -27.6,
				ty: -17.75
			},
			parts: [
				// 181
				{
					ref: ref.moueffe.left_leg_special
				}
			]
		}
	],
	// 253_p4
	head: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4, 5, 6, 7],
			parts: [
				[
					// 188
					{
						colorIdx: 0,
						ref: ref.moueffe.head_frown
					},
					// 194
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
						transform: {
							tx: 9.05,
							ty: -9
						},
						parts: [
							// 189
							{
								ref: ref.moueffe.head_frown_eye
							},
							// 190
							{
								ref: ref.moueffe.head_frown_eye_black
							},
							[
								// 191
								{
									ref: ref.moueffe.head_frown_eye_demon_back
								},
								// 193
								{
									ref: ref.moueffe.head_frown_eye_demon,
									transform: {
										tx: 1.45,
										ty: 0.45
									},
									glow: {
										distance: 5,
										color: 0xff0000,
										strength: 2,
										quality: 0.5
									}
								}
							]
						]
					},
					// 195
					{
						ref: ref.moueffe.head_frown_highlight,
						transform: {
							ty: 7.9
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							ty: 7.9
						},
						parts: [
							// 196
							{
								ref: ref.moueffe.head_frown_hurt_1
							},
							// 197
							{
								ref: ref.moueffe.head_frown_hurt_2
							}
						]
					}
				],
				[...head_smile],
				[
					// 216
					{
						ref: ref.moueffe.head_smile_teeth
					},
					...head_smile
				],
				[...head_puff],
				[
					// 228
					{
						ref: ref.moueffe.head_puff_tongue
					},
					...head_puff
				],
				[...head_worry],
				[
					...head_worry,
					// 240
					{
						colorIdx: 2,
						ref: ref.moueffe.head_worry_freckles,
						transform: {
							tx: -14.35,
							ty: 4.55
						}
					}
				],
				// 252
				[
					// 247
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
						transform: {
							tx: 9.45,
							ty: -9.1
						},
						parts: [
							[
								// 242
								{
									ref: ref.moueffe.head_dragon_eyes_back
								},
								// 243
								{
									ref: ref.moueffe.head_dragon_eyes_big
								}
							],
							[
								// 242
								{
									ref: ref.moueffe.head_dragon_eyes_back
								},
								// 243
								{
									ref: ref.moueffe.head_dragon_eyes_small
								}
							],
							// 246
							{
								ref: ref.moueffe.head_dragon_eyes_demon,
								transform: {
									tx: -7.55,
									ty: -2.45
								},
								glow: {
									distance: 5,
									color: 0xff0000,
									strength: 1,
									quality: 0.5
								}
							}
						]
					},
					// 249
					{
						colorIdx: 0,
						ref: ref.moueffe.head_dragon,
						transform: {
							tx: 2.0,
							ty: 7.75
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 2.0,
							ty: 7.75
						},
						parts: [
							// 250
							{
								ref: ref.moueffe.head_dragon_hurt_1
							},
							// 251
							{
								ref: ref.moueffe.head_dragon_hurt_2
							}
						]
					}
				]
			]
		},
		// 205
		{
			partIdx: 8,
			frames: [0, 1, 2, -1, -1, -1, -1, -1, -1, -1],
			transform: {
				tx: 17.6,
				ty: -2.2
			},
			parts: [
				// 200
				{
					colorIdx: 2,
					ref: ref.moueffe.head_mark_lines,
					alpha: 0.9,
					transform: {
						tx: -19.35,
						ty: 7.35
					}
				},
				// 202
				{
					colorIdx: 2,
					ref: ref.moueffe.head_mark_circle,
					alpha: 0.9,
					transform: {
						tx: 0.7,
						ty: 0.4
					}
				},
				// 204
				{
					colorIdx: 2,
					ref: ref.moueffe.head_mark_spiral,
					alpha: 0.9,
					transform: {
						tx: -0.3,
						ty: 1.15
					}
				}
			]
		}
	],
	// 286_p6
	left_arm: [
		{
			partIdx: 6,
			frames: [0, 0, 0, 1, 2, 3, 4],
			parts: [
				[...left_arm, left_arm_marks],
				[
					// 272
					{
						ref: ref.moueffe.left_arm_shoulder_bone
					},
					...left_arm,
					left_arm_marks
				],
				[
					// 272
					{
						ref: ref.moueffe.left_arm_shoulder_bone
					},
					...left_arm,
					// 274
					{
						colorIdx: 0,
						ref: ref.moueffe.left_arm_bone_hole,
						transform: {
							tx: 29.9,
							ty: 3.4
						}
					},
					// 277
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
						transform: {
							tx: 31.35,
							ty: 29.4
						},
						parts: [
							// 275
							{
								ref: ref.moueffe.left_arm_bone_small
							},
							// 276
							{
								ref: ref.moueffe.left_arm_bone_long
							}
						]
					},
					// 279
					{
						colorIdx: 0,
						ref: ref.moueffe.left_arm_bone_skin,
						transform: {
							tx: 27.05,
							ty: -4.65
						}
					}
				],
				[...left_arm_stretched],
				[
					...left_arm_stretched,
					// 285
					{
						ref: ref.moueffe.left_arm_claws
					}
				]
			]
		}
	],
	// 291_p5c
	hair_side: [
		{
			partIdx: 5,
			frames: [-1, -1, 0, -1, -1, 1, 2, -1],
			parts: [
				// 126
				{
					colorIdx: 0,
					ref: ref.moueffe.head_ear
				},
				// 288
				{
					colorIdx: 0,
					ref: ref.moueffe.head_unicorn_back,
					transform: {
						tx: -12.4,
						ty: -3.2
					}
				},
				// 290
				{
					colorIdx: 1,
					ref: ref.moueffe.head_hair_spikes_side,
					transform: {
						tx: -2.95,
						ty: 16.0
					}
				}
			]
		}
	],
	// 293
	view: [
		{
			ref: ref.view,
			alpha: 0
		}
	]
};
