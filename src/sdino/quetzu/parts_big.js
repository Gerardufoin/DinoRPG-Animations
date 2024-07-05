// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// 2895
const flames = {
	ref: ref.quetzu.back_flames,
	glow: {
		distance: 10,
		color: '#FF8800',
		quality: 1,
		strength: 2
	},
	blur: {
		x: 1,
		y: 1
	}
};

// 2897
const back_flames = {
	partIdx: 5,
	frames: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
	parts: [
		[
			// 2896
			{
				partIdx: 2,
				frames: [0, 1, 2],
				transform: {
					tx: 1,
					ty: 4.5
				},
				parts: [
					// 2895
					{
						...flames
					},
					// 2895
					{
						...flames,
						transform: {
							ty: 3.7,
							a: 0.896,
							d: 0.904
						}
					},
					// 2895
					{
						...flames,
						transform: {
							ty: 19.05,
							a: 0.502,
							d: 0.508
						}
					}
				]
			}
		]
	]
};

// 2924
const back = {
	partIdx: 5,
	frames: [0, 0, 0, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, -1],
	parts: [
		// 2903
		{
			transform: {
				tx: -3.6,
				ty: -0.05
			},
			parts: [
				[
					// 2900
					{
						colorIdx: 1,
						ref: ref.quetzu.back_spike
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 2901
							{
								ref: ref.quetzu.back_spike_hurt_cut_1
							},
							// 2902
							{
								ref: ref.quetzu.back_spike_hurt_cut_2
							}
						]
					}
				]
			]
		},
		// 2908
		{
			transform: {
				tx: 1.1,
				ty: -4.15,
				a: 1.064,
				d: 1.064
			},
			parts: [
				[
					// 2905
					{
						colorIdx: 1,
						ref: ref.quetzu.back_fur
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 2906
							{
								ref: ref.quetzu.back_fur_hurt_cut_1
							},
							// 2907
							{
								ref: ref.quetzu.back_fur_hurt_cut_2
							}
						]
					}
				]
			]
		},
		// 2913
		{
			transform: {
				tx: -1.1,
				ty: -6.1
			},
			parts: [
				[
					// 2910
					{
						colorIdx: 1,
						ref: ref.quetzu.back_small_wing
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 2911
							{
								ref: ref.quetzu.back_small_wing_hurt_cut_1
							},
							// 2912
							{
								ref: ref.quetzu.back_small_wing_hurt_cut_2
							}
						]
					}
				]
			]
		},
		// 2918
		{
			transform: {
				tx: -3.9,
				ty: 11,
				a: 1,
				d: 1,
				b: -0.097,
				c: 0
			},
			parts: [
				[
					// 2915
					{
						colorIdx: 1,
						ref: ref.quetzu.back_wing
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 2916
							{
								ref: ref.quetzu.back_wing_hurt_cut_1
							},
							// 2917
							{
								ref: ref.quetzu.back_wing_hurt_cut_2
							}
						]
					}
				]
			]
		},
		// 2923
		{
			transform: {
				tx: -3.05,
				ty: 9.4
			},
			parts: [
				[
					// 2920
					{
						colorIdx: 0,
						ref: ref.quetzu.back_stub
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 2921
							{
								ref: ref.quetzu.back_stub_hurt_cut_1
							},
							// 2922
							{
								ref: ref.quetzu.back_stub_hurt_cut_2
							}
						]
					}
				]
			]
		}
	]
};

// 3091
const eye = {
	parts: [
		[
			// 3089
			{
				colorIdx: 2,
				ref: ref.quetzu.head_eye,
				transform: {
					tx: 2,
					ty: 0.2
				}
			},
			// 3090
			{
				ref: ref.quetzu.head_eye_pupil
			}
		]
	]
};

// 3098
const head = {
	transform: {
		tx: 4.15,
		ty: 15.05
	},
	parts: [
		[
			// 3087
			{
				ref: ref.quetzu.head_eyes_back
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 11.9,
					ty: 8.05,
					a: 1.133,
					d: 1.133
				}
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 1.7,
					ty: 7.65,
					a: 0.697,
					d: 1.026
				}
			},
			// 3086
			{
				colorIdx: 0,
				ref: ref.quetzu.head
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
								tx: 11.75,
								ty: 15.65,
								a: 0.613,
								d: 0.613
							}
						},
						// 113
						{
							ref: ref.hurt.bruise_red,
							transform: {
								tx: 25.7,
								ty: 7.45,
								a: 0.392,
								d: 0.238,
								b: -0.679,
								c: 0.412
							}
						},
						// 3093
						{
							colorIdx: 0,
							ref: ref.quetzu.head_hurt_eyelid_1,
							transform: {
								tx: 10.8,
								ty: 5.35
							}
						}
					],
					[
						// 3094
						{
							ref: ref.quetzu.head_hurt_blood_1
						},
						// 110
						{
							ref: ref.hurt.bruise_blue,
							transform: {
								tx: 24.35,
								ty: 8.75,
								a: 0.312,
								d: 0.555,
								b: 0.084,
								c: -0.149
							}
						},
						// 3096
						{
							colorIdx: 0,
							ref: ref.quetzu.head_hurt_eyelid_2,
							transform: {
								tx: 2.05,
								ty: 5.35
							}
						},
						// 3097
						{
							ref: ref.quetzu.head_hurt_blood_2
						}
					]
				]
			}
		]
	]
};

// 3160
const head_bored = {
	transform: {
		tx: -4,
		ty: 14.95
	},
	parts: [
		[
			// 3154
			{
				ref: ref.quetzu.head_bored_eyes_back
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 19.1,
					ty: 8.55,
					a: 1.133,
					d: 1.133
				}
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 5.2,
					ty: 7.45,
					a: 1.12,
					d: 1.088,
					b: 0,
					c: 0.019
				}
			},
			// 3153
			{
				colorIdx: 0,
				ref: ref.quetzu.head_bored
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
								tx: 29.9,
								ty: 20.6
							}
						},
						// 113
						{
							ref: ref.hurt.bruise_red,
							transform: {
								tx: 32.05,
								ty: 5.45,
								a: -0.374,
								d: -0.227,
								b: -0.647,
								c: 0.393
							}
						},
						// 3156
						{
							colorIdx: 0,
							ref: ref.quetzu.head_bored_hurt_eyelid_1,
							transform: {
								tx: 19.25,
								ty: 5.6
							}
						}
					],
					[
						// 3159
						{
							colorIdx: 0,
							ref: ref.quetzu.head_bored_hurt_eyelid_2,
							transform: {
								tx: 5.1,
								ty: 4.2
							}
						},
						// 3157
						{
							ref: ref.quetzu.head_bored_hurt_blood
						}
					]
				]
			}
		]
	]
};

// 3168
const head_trunk = {
	transform: {
		tx: 0.75,
		ty: 15
	},
	parts: [
		[
			// 3163
			{
				ref: ref.quetzu.head_trunk_eyes_back
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 13.75,
					ty: 7.95,
					a: 1.133,
					d: 1.133
				}
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 3.5,
					ty: 7.85,
					a: 0.723,
					d: 0.82,
					b: 0,
					c: 0.015
				}
			},
			// 3162
			{
				colorIdx: 0,
				ref: ref.quetzu.head_trunk
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
								tx: 22.9,
								ty: 13.75,
								a: 0.744,
								d: 0.744
							}
						}
					],
					[
						// 3167
						{
							colorIdx: 0,
							ref: ref.quetzu.head_trunk_hurt_eyelid_2,
							transform: {
								tx: 3.8,
								ty: 4.1
							}
						},
						// 3165
						{
							ref: ref.quetzu.head_trunk_hurt_blood
						}
					]
				]
			}
		]
	]
};

// 3175
const head_cat = {
	transform: {
		tx: 0.15,
		ty: 15.05
	},
	parts: [
		[
			// 3171
			{
				ref: ref.quetzu.head_cat_eyes_back
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 15.35,
					ty: 9.35,
					a: 0.774,
					d: 0.774,
					b: 0,
					c: -0.014
				}
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 4.6,
					ty: 9.1,
					a: 0.723,
					d: 0.702,
					b: 0
				}
			},
			// 3170
			{
				colorIdx: 0,
				ref: ref.quetzu.head_cat,
				transform: {
					tx: 0.5,
					c: -0.018
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
								tx: 20.45,
								ty: 19.3
							}
						},
						// 113
						{
							ref: ref.hurt.bruise_red,
							transform: {
								tx: 12.6,
								ty: 5.7,
								a: 0.831,
								d: 0.504,
								b: -0.831,
								c: 0.504
							}
						}
					],
					[
						// 3174
						{
							colorIdx: 0,
							ref: ref.quetzu.head_cat_hurt_eyelid_2,
							transform: {
								tx: 4.5,
								ty: 7.2
							}
						},
						// 3172
						{
							ref: ref.quetzu.head_cat_hurt_blood
						},
						// 110
						{
							ref: ref.hurt.bruise_blue,
							transform: {
								tx: 30.05,
								ty: 5,
								a: 0.295,
								d: 0.525,
								b: -0.17,
								c: 0.303
							}
						}
					]
				]
			}
		]
	]
};

// 3183
const head_dog = {
	transform: {
		tx: -0.15,
		ty: 15.05
	},
	parts: [
		[
			// 3178
			{
				ref: ref.quetzu.head_dog_eyes_back
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 17.85,
					ty: 7.3,
					a: 0.898,
					d: 0.898
				}
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 6.4,
					ty: 7.4,
					a: 0.723,
					d: 0.702,
					b: 0,
					c: 0.013
				}
			},
			// 3177
			{
				colorIdx: 0,
				ref: ref.quetzu.head_dog
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
								tx: 24.4,
								ty: 15.2
							}
						},
						// 113
						{
							ref: ref.hurt.bruise_red,
							transform: {
								tx: 17.2,
								ty: 3.9,
								a: 0.457,
								d: 0.277,
								b: -0.457,
								c: 0.277
							}
						}
					],
					[
						// 3182
						{
							colorIdx: 0,
							ref: ref.quetzu.head_dog_hurt_eyelid_2,
							transform: {
								tx: 6.45,
								ty: 7.3
							}
						},
						// 3180
						{
							ref: ref.quetzu.head_dog_hurt_blood
						}
					]
				]
			}
		]
	]
};

// 3191
const head_smug = {
	transform: {
		tx: 1.2,
		ty: 15.1
	},
	parts: [
		[
			// 3186
			{
				ref: ref.quetzu.head_smug_eyes_back
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 13.75,
					ty: 8.3,
					a: 1.133,
					d: 1.133
				}
			},
			// 3091
			{
				...eye,
				transform: {
					tx: 2.6,
					ty: 7.75,
					a: 0.81,
					d: 1.097,
					b: 0,
					c: 0.02
				}
			},
			// 3185
			{
				colorIdx: 0,
				ref: ref.quetzu.head_smug
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
								tx: 27,
								ty: 9.75
							}
						},
						// 113
						{
							ref: ref.hurt.bruise_red,
							transform: {
								tx: 14.6,
								ty: 26.95,
								a: 0.935,
								d: 0.567,
								b: -0.251,
								c: 0.152
							}
						}
					],
					[
						// 3190
						{
							colorIdx: 0,
							ref: ref.quetzu.head_smug_hurt_eyelid_2,
							transform: {
								tx: 3.05,
								ty: 5.7
							}
						},
						// 3188
						{
							ref: ref.quetzu.head_smug_hurt_blood
						}
					]
				]
			}
		]
	]
};

// 3104
const head_horns = {
	parts: [
		[
			// 3100
			{
				colorIdx: 0,
				ref: ref.quetzu.head_horns
			},
			// hurt
			{
				partIdx: 2,
				frames: [-1, 0, 1],
				parts: [
					// 3101
					{
						ref: ref.quetzu.head_horns_hurt_cut_1
					},
					// 3102
					{
						ref: ref.quetzu.head_horns_hurt_cut_2
					}
				]
			}
		]
	]
};

// 3110
const head_horns_ghost = {
	parts: [
		[
			// 3106
			{
				colorIdx: 0,
				transform: {
					tx: -2.95,
					c: 0.149
				},
				ref: ref.quetzu.head_horns_ghost
			},
			// hurt
			{
				partIdx: 2,
				frames: [-1, 0, 1],
				transform: {
					tx: -2.95,
					c: 0.149
				},
				parts: [
					// 3107
					{
						ref: ref.quetzu.head_horns_ghost_hurt_cut_1
					},
					// 3108
					{
						ref: ref.quetzu.head_horns_ghost_hurt_cut_2
					}
				]
			}
		]
	]
};

// 3116
const head_horns_rabbit = {
	parts: [
		[
			// 3112
			{
				colorIdx: 0,
				ref: ref.quetzu.head_horns_rabbit
			},
			// hurt
			{
				partIdx: 2,
				frames: [-1, 0, 1],
				parts: [
					// 3113
					{
						ref: ref.quetzu.head_horns_rabbit_hurt_cut_1
					},
					// 3114
					{
						ref: ref.quetzu.head_horns_rabbit_hurt_cut_2
					}
				]
			}
		]
	]
};

// 3123
const head_horns_goat = {
	parts: [
		[
			// 3118
			{
				colorIdx: 0,
				ref: ref.quetzu.head_horns_goat_socket
			},
			// 3119
			{
				ref: ref.quetzu.head_horns_goat
			},
			// hurt
			{
				partIdx: 2,
				frames: [-1, 0, 1],
				parts: [
					// 3120
					{
						ref: ref.quetzu.head_horns_goat_hurt_cut_1
					},
					// 3121
					{
						ref: ref.quetzu.head_horns_goat_hurt_cut_2
					}
				]
			}
		]
	]
};

// 3133
const head_horns_triple = {
	parts: [
		[
			// 3127
			{
				colorIdx: 0,
				ref: ref.quetzu.head_horns_triple_socket
			},
			// 3129
			{
				ref: ref.quetzu.head_horns_triple,
				transform: {
					tx: 7.05
				}
			},
			// hurt
			{
				partIdx: 2,
				frames: [-1, 0, 1],
				parts: [
					// 3130
					{
						ref: ref.quetzu.head_horns_triple_hurt_cut_1
					},
					// 3131
					{
						ref: ref.quetzu.head_horns_triple_hurt_cut_2
					}
				]
			}
		]
	]
};

// 3141
const head_horns_hair = {
	parts: [
		[
			// 3135
			{
				colorIdx: 0,
				ref: ref.quetzu.head_horns_hair_skin
			},
			// 3137
			{
				colorIdx: 2,
				ref: ref.quetzu.head_horns_hair,
				transform: {
					tx: 4.75
				}
			},
			// hurt
			{
				partIdx: 2,
				frames: [-1, 0, 1],
				parts: [
					// 3138
					{
						ref: ref.quetzu.head_horns_hair_hurt_cut_1
					},
					// 3139
					{
						ref: ref.quetzu.head_horns_hair_hurt_cut_2
					}
				]
			}
		]
	]
};

// 3151
const head_horns_unicorn = {
	parts: [
		[
			// 3143
			{
				colorIdx: 0,
				ref: ref.quetzu.head_horns_unicorn_socket,
				transform: {
					ty: 0.2
				}
			},
			// 3145
			{
				ref: ref.quetzu.head_horns_unicorn,
				transform: {
					tx: 10.1,
					ty: 0.2
				}
			},
			// 3147
			{
				colorIdx: 2,
				ref: ref.quetzu.head_horns_unicorn_hair,
				transform: {
					tx: 17.75,
					ty: 6.15
				}
			},
			// hurt
			{
				partIdx: 2,
				frames: [-1, 0, 1],
				parts: [
					// 3148
					{
						ref: ref.quetzu.head_horns_unicorn_hurt_cut_1
					},
					// 3149
					{
						ref: ref.quetzu.head_horns_unicorn_hurt_cut_2
					}
				]
			}
		]
	]
};

export const parts_big = {
	// 2898
	back_fire: [
		{
			partIdx: 1,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			transform: {
				tx: 18.75,
				ty: -67.45
			},
			parts: [
				back_flames,
				{
					...back_flames,
					transform: {
						tx: 0.65,
						ty: -1.45
					}
				},
				{
					...back_flames,
					transform: {
						tx: 1.3,
						ty: -2.9
					}
				},
				{
					...back_flames,
					transform: {
						tx: 1.95,
						ty: -4.4
					}
				},
				{
					...back_flames,
					transform: {
						tx: 2.6,
						ty: -5.85
					}
				},
				{
					...back_flames,
					transform: {
						tx: 3.25,
						ty: -7.3
					}
				},
				{
					...back_flames,
					transform: {
						tx: 3.9,
						ty: -8.75
					}
				},
				{
					...back_flames,
					transform: {
						tx: 4.55,
						ty: -10.25
					}
				},
				{
					...back_flames,
					transform: {
						tx: 5.2,
						ty: -11.7
					}
				},
				{
					...back_flames,
					transform: {
						tx: 5.8,
						ty: -14
					}
				},
				{
					...back_flames,
					transform: {
						tx: 5.8,
						ty: -14
					}
				}
			]
		}
	],
	// 2924 p5a
	right_back: [back],
	// 2924 p5b
	left_back: [back],
	// 2955 p6
	tail_end: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				// 2929
				{
					transform: {
						tx: 1,
						ty: 1.05
					},
					parts: [
						[
							// 2926
							{
								colorIdx: 0,
								ref: ref.quetzu.tail_end
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 2927
									{
										ref: ref.quetzu.tail_end_hurt_cut_1
									},
									// 2928
									{
										ref: ref.quetzu.tail_end_hurt_cut_2
									}
								]
							}
						]
					]
				},
				// 2934
				{
					transform: {
						tx: -2.8,
						ty: 0.1
					},
					parts: [
						[
							// 2931
							{
								colorIdx: 0,
								ref: ref.quetzu.tail_end_curl
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 2932
									{
										ref: ref.quetzu.tail_end_curl_hurt_cut_1
									},
									// 2933
									{
										ref: ref.quetzu.tail_end_curl_hurt_cut_2
									}
								]
							}
						]
					]
				},
				// 2939
				{
					transform: {
						tx: 0.5,
						ty: 0.25
					},
					parts: [
						[
							// 2936
							{
								colorIdx: 0,
								ref: ref.quetzu.tail_end_double
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 2937
									{
										ref: ref.quetzu.tail_end_double_hurt_cut_1
									},
									// 2938
									{
										ref: ref.quetzu.tail_end_double_hurt_cut_2
									}
								]
							}
						]
					]
				},
				// 2944
				{
					transform: {
						tx: -2.55,
						ty: 0.85
					},
					parts: [
						[
							// 2940
							{
								colorIdx: 0,
								ref: ref.quetzu.tail_end_dot
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 2942
									{
										ref: ref.quetzu.tail_end_dot_hurt_cut_1
									},
									// 2943
									{
										ref: ref.quetzu.tail_end_dot_hurt_cut_2
									}
								]
							}
						]
					]
				},
				// 2949
				{
					transform: {
						tx: -8.55,
						ty: -24.45,
						a: 0.846,
						d: 0.846,
						b: 0,
						c: 0.177
					},
					parts: [
						[
							// 2946
							{
								colorIdx: 0,
								ref: ref.quetzu.tail_end_wave
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 2947
									{
										ref: ref.quetzu.tail_end_wave_hurt_cut_1
									},
									// 2948
									{
										ref: ref.quetzu.tail_end_wave_hurt_cut_2
									}
								]
							}
						]
					]
				},
				// 2954
				{
					transform: {
						tx: 4.35,
						ty: 0.55,
						a: 0.868,
						d: 0.868,
						b: 0,
						c: -0.126
					},
					parts: [
						[
							// 2951
							{
								colorIdx: 0,
								ref: ref.quetzu.tail_end_hook
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									// 2952
									{
										ref: ref.quetzu.tail_end_hook_hurt_cut_1
									},
									// 2953
									{
										ref: ref.quetzu.tail_end_hook_hurt_cut_2
									}
								]
							}
						]
					]
				}
			]
		}
	],
	// 3006 p4b
	right_arm: [
		// arm
		{
			partIdx: 4,
			frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
			parts: [
				[
					// 2958
					{
						transform: {
							tx: 0.9,
							ty: -4.75
						},
						parts: [
							[
								// 2957
								{
									colorIdx: 0,
									ref: ref.quetzu.right_arm
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 2984
										{
											ref: ref.quetzu.right_arm_tres_hurt_scratch
										},
										// 2985
										{
											ref: ref.quetzu.right_arm_tres_hurt_blood
										}
									]
								}
							]
						]
					},
					// 2960
					{
						ref: ref.quetzu.right_arm_claws,
						transform: {
							tx: 4.2,
							ty: 62
						}
					}
				],
				[
					// 2968
					{
						transform: {
							ty: -4.75
						},
						parts: [
							[
								// 2983
								{
									colorIdx: 0,
									ref: ref.quetzu.right_arm_tres
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 2984
										{
											ref: ref.quetzu.right_arm_tres_hurt_scratch
										},
										// 2985
										{
											ref: ref.quetzu.right_arm_tres_hurt_blood
										}
									]
								}
							]
						]
					},
					// 2988
					{
						ref: ref.quetzu.right_arm_tres_claws,
						transform: {
							tx: -1,
							ty: 58.6
						}
					}
				],
				[
					// 2994
					{
						transform: {
							tx: 0.9,
							ty: -4.75
						},
						parts: [
							[
								// 2991
								{
									colorIdx: 0,
									ref: ref.quetzu.right_arm_uno
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 2992
										{
											ref: ref.quetzu.right_arm_uno_hurt_scratch
										},
										// 2993
										{
											ref: ref.quetzu.right_arm_uno_hurt_blood
										}
									]
								}
							]
						]
					},
					// 2996
					{
						ref: ref.quetzu.right_arm_uno_claws,
						transform: {
							tx: 7.65,
							ty: 66.95
						}
					}
				],
				[
					// 3002
					{
						transform: {
							tx: 0.9,
							ty: -4.75
						},
						parts: [
							[
								// 2999
								{
									colorIdx: 0,
									ref: ref.quetzu.right_arm_dos
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 3000
										{
											ref: ref.quetzu.right_arm_dos_hurt_scratch
										},
										// 3001
										{
											ref: ref.quetzu.right_arm_dos_hurt_blood
										}
									]
								}
							]
						]
					},
					// 3004
					{
						ref: ref.quetzu.right_arm_dos_claws,
						transform: {
							tx: 5.75,
							ty: 60.3
						}
					}
				]
			]
		},
		// tatoos
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6],
			parts: [
				// 2962
				{
					colorIdx: 0,
					ref: ref.quetzu.right_arm_mark_dots,
					transform: {
						tx: 4.1,
						ty: 40.85
					}
				},
				// 2968
				{
					colorIdx: 0,
					ref: ref.quetzu.right_arm_mark_spiral,
					transform: {
						tx: 1.15,
						ty: 35.95
					}
				},
				// 2970
				{
					colorIdx: 0,
					ref: ref.quetzu.right_arm_mark_triangles,
					transform: {
						tx: 1.35,
						ty: 37.55
					}
				},
				// 2972
				{
					colorIdx: 0,
					ref: ref.quetzu.right_arm_mark_circles,
					transform: {
						tx: 1.1,
						ty: 34.8
					}
				},

				// 2974
				{
					ref: ref.quetzu.right_arm_spike,
					transform: {
						tx: -11.55,
						ty: 21.05
					}
				},
				// 2976
				{
					colorIdx: 0,
					ref: ref.quetzu.right_arm_mark_waves,
					transform: {
						tx: 1.5,
						ty: 38.9
					}
				},
				[
					// 2979
					{
						ref: ref.quetzu.right_arm_spike_small,
						transform: {
							tx: -6.35,
							ty: 45.1
						}
					},
					// 2981
					{
						colorIdx: 0,
						ref: ref.quetzu.right_arm_spike_small_socket,
						transform: {
							tx: -0.5,
							ty: 44
						}
					}
				]
			]
		},
		// 2966
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 12.85,
				ty: -12.05,
				a: -0.84,
				d: 0.814
			},
			parts: [
				[
					// 2963
					{
						ref: ref.quetzu.arm_special_shadow,
						colorAdjust: {
							brightness: -33
						}
					},
					// 2965
					{
						colorIdx: 2,
						ref: ref.quetzu.arm_special,
						transform: {
							ty: -2.7
						},
						colorAdjust: {
							brightness: -33
						}
					}
				]
			]
		}
	],
	// 3011 p2
	tail: [
		// 3007
		{
			colorIdx: 0,
			ref: ref.quetzu.tail,
			transform: {
				tx: 0.7,
				ty: -2.75
			}
		},
		// hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			parts: [
				[
					// 3009
					{
						ref: ref.quetzu.tail_hurt_cut_1
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 10.9,
							ty: 16.5,
							a: 0.795,
							d: 0.795
						}
					},
					// 113
					{
						ref: ref.hurt.bruise_red,
						transform: {
							tx: 57.7,
							ty: 29,
							a: 1.009,
							d: 0.612,
							b: -1.009,
							c: 0.612
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 43.2,
							ty: 34.8,
							a: 0.415,
							d: 0.415,
							b: 1.548,
							c: -1.548
						}
					}
				],
				// 3010
				{
					ref: ref.quetzu.tail_hurt_cut_2
				}
			]
		}
	],
	// 3036 p3
	body: [
		{
			partIdx: 3,
			frames: [0, 1, 2],
			parts: [
				// 3017
				{
					transform: {
						tx: 2.85,
						ty: 3
					},
					parts: [
						[
							// 3013
							{
								colorIdx: 0,
								ref: ref.quetzu.body
							},
							// 3015
							{
								colorIdx: 1,
								ref: ref.quetzu.body_tummy,
								transform: {
									tx: 11.85,
									ty: 32.05
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
												tx: 28.2,
												ty: 50.25
											}
										},
										// 113
										{
											ref: ref.hurt.bruise_red,
											transform: {
												tx: 39.05,
												ty: 63.8,
												a: 1.009,
												d: 0.612,
												b: -1.009,
												c: 0.612
											}
										}
									],
									[
										// 3016
										{
											ref: ref.quetzu.body_hurt_blood
										},
										// 110
										{
											ref: ref.hurt.bruise_blue,
											transform: {
												tx: 30.65,
												ty: 69,
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
				// 3029
				{
					transform: {
						tx: 4.5,
						ty: 4.3,
						b: 0,
						c: -0.018
					},
					parts: [
						[
							// 3025
							{
								colorIdx: 0,
								ref: ref.quetzu.body_crook
							},
							// 3027
							{
								colorIdx: 1,
								ref: ref.quetzu.body_crook_tummy,
								transform: {
									tx: 19.15,
									ty: 34.05
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
												tx: 25.3,
												ty: 41.2
											}
										},
										// 113
										{
											ref: ref.hurt.bruise_red,
											transform: {
												tx: 33.1,
												ty: 70.75,
												a: 1.009,
												d: 0.612,
												b: -1.009,
												c: 0.612
											}
										},
										// 155
										{
											ref: ref.hurt.scratch,
											transform: {
												tx: 39.7,
												ty: 7.8,
												a: 1,
												d: -1
											}
										}
									],
									[
										// 3028
										{
											ref: ref.quetzu.body_crook_hurt_blood
										},
										// 110
										{
											ref: ref.hurt.bruise_blue,
											transform: {
												tx: 33.25,
												ty: 48.3,
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
				// 3035
				{
					transform: {
						tx: 1.35,
						ty: 2.25
					},
					parts: [
						[
							// 3031
							{
								colorIdx: 0,
								ref: ref.quetzu.body_buff
							},
							// 3027
							{
								colorIdx: 1,
								ref: ref.quetzu.body_buff_tummy,
								transform: {
									tx: 2.2,
									ty: 19
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
												tx: 22.95,
												ty: 35.35
											}
										},
										// 113
										{
											ref: ref.hurt.bruise_red,
											transform: {
												tx: 43.1,
												ty: 48.95,
												a: 1.009,
												d: 0.612,
												b: -1.009,
												c: 0.612
											}
										},
										// 155
										{
											ref: ref.hurt.scratch,
											transform: {
												tx: 31.2,
												ty: 72.85,
												a: -0.259,
												d: -0.259,
												b: 0.966,
												c: -0.966
											}
										}
									],
									[
										// 3034
										{
											ref: ref.quetzu.body_buff_hurt_blood
										},
										// 110
										{
											ref: ref.hurt.bruise_blue,
											transform: {
												tx: 37.05,
												ty: 28.5,
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
				}
			]
		},
		// 2023 special
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 24.8,
				ty: 58.2
			},
			parts: [
				[
					// 3019
					{
						colorIdx: 2,
						ref: ref.quetzu.body_special
					},
					// 3020
					{
						ref: ref.quetzu.body_special_belt
					},
					// 3022
					{
						ref: ref.quetzu.body_special_belt_highlight,
						transform: {
							tx: 7.2,
							ty: 8.35,
							a: 1.25,
							d: 1.25
						},
						// blur x5 y5
						blend: BLEND_MODES.OVERLAY
					}
				]
			]
		}
	],
	// 3081 p4a
	left_arm: [
		// arm
		{
			partIdx: 4,
			frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
			parts: [
				[
					// 3041
					{
						transform: {
							tx: 2.75,
							ty: -4.9
						},
						parts: [
							[
								// 3038
								{
									colorIdx: 0,
									ref: ref.quetzu.left_arm
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 3039
										{
											ref: ref.quetzu.left_arm_hurt_scratch
										},
										// 3040
										{
											ref: ref.quetzu.left_arm_hurt_blood
										}
									]
								}
							]
						]
					},
					// 3043
					{
						ref: ref.quetzu.left_arm_claws,
						transform: {
							tx: 2.75,
							ty: 64.15
						}
					}
				],
				[
					// 3064
					{
						transform: {
							tx: 1.75,
							ty: -4.9
						},
						parts: [
							[
								// 3063
								{
									colorIdx: 0,
									ref: ref.quetzu.left_arm_tres
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 3039
										{
											ref: ref.quetzu.left_arm_hurt_scratch
										},
										// 3040
										{
											ref: ref.quetzu.left_arm_hurt_blood
										}
									]
								}
							]
						]
					},
					// 3066
					{
						ref: ref.quetzu.left_arm_tres_claws,
						transform: {
							tx: -0.55,
							ty: 59.9
						}
					}
				],
				[
					// 3071
					{
						transform: {
							tx: 2.5,
							ty: -4.9,
							a: 1,
							d: 0.972
						},
						parts: [
							[
								// 3068
								{
									colorIdx: 0,
									ref: ref.quetzu.left_arm_uno
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 3069
										{
											ref: ref.quetzu.left_arm_uno_hurt_scratch
										},
										// 3070
										{
											ref: ref.quetzu.left_arm_uno_hurt_blood
										}
									]
								}
							]
						]
					},
					// 3073
					{
						ref: ref.quetzu.left_arm_uno_claws,
						transform: {
							tx: 9,
							ty: 71.1,
							a: 1,
							d: 0.972
						}
					}
				],
				[
					// 3078
					{
						transform: {
							tx: 2.75,
							ty: -4.9
						},
						parts: [
							[
								// 3075
								{
									colorIdx: 0,
									ref: ref.quetzu.left_arm_dos
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 3076
										{
											ref: ref.quetzu.left_arm_dos_hurt_scratch
										},
										// 3077
										{
											ref: ref.quetzu.left_arm_dos_hurt_blood
										}
									]
								}
							]
						]
					},
					// 3080
					{
						ref: ref.quetzu.left_arm_dos_claws,
						transform: {
							tx: 7.3,
							ty: 66.6
						}
					}
				]
			]
		},
		// tatoos
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6],
			parts: [
				// 3045
				{
					colorIdx: 0,
					ref: ref.quetzu.left_arm_mark_dots,
					transform: {
						tx: 16.8,
						ty: 36.15
					}
				},
				// 3047
				{
					colorIdx: 0,
					ref: ref.quetzu.left_arm_mark_spiral,
					transform: {
						tx: 17.65,
						ty: 38.85
					}
				},
				// 3049
				{
					colorIdx: 0,
					ref: ref.quetzu.left_arm_mark_triangles,
					transform: {
						tx: 13,
						ty: 43.15
					}
				},
				// 3051
				{
					colorIdx: 0,
					ref: ref.quetzu.left_arm_mark_circles,
					transform: {
						tx: 14.3,
						ty: 40.75
					}
				},
				[
					// 3053
					{
						colorIdx: 0,
						ref: ref.quetzu.left_arm_spike_socket,
						transform: {
							tx: 20.75,
							ty: 22.8
						}
					},
					// 3055
					{
						ref: ref.quetzu.left_arm_spike,
						transform: {
							tx: 27.7,
							ty: 22.95
						}
					}
				],
				// 3057
				{
					colorIdx: 0,
					ref: ref.quetzu.left_arm_mark_waves,
					transform: {
						tx: 17,
						ty: 42.1
					}
				},
				[
					// 3059
					{
						colorIdx: 0,
						ref: ref.quetzu.left_arm_spike_small_socket,
						transform: {
							tx: 14.55,
							ty: 45.7,
							a: 1.121,
							d: 1.121
						}
					},
					// 3061
					{
						ref: ref.quetzu.left_arm_spike_small,
						transform: {
							tx: 18.85,
							ty: 48.7
						}
					}
				]
			]
		},
		// 2966
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 21.35,
				ty: -1.45,
				a: 1,
				d: 0.866
			},
			parts: [
				[
					// 2963
					{
						ref: ref.quetzu.arm_special_shadow,
						colorAdjust: {
							brightness: -33
						}
					},
					// 2965
					{
						colorIdx: 2,
						ref: ref.quetzu.arm_special,
						transform: {
							ty: -2.7
						},
						colorAdjust: {
							brightness: -33
						}
					}
				]
			]
		}
	],
	// 3084 special
	left_sideburn_sp: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 3083
				{
					colorIdx: 2,
					ref: ref.quetzu.head_special
				}
			]
		}
	],
	// 3192 p7
	head: [
		// 3084
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 5.8,
				ty: 39.25,
				a: -1,
				d: 1
			},
			parts: [
				// 3083
				{
					colorIdx: 2,
					ref: ref.quetzu.head_special
				}
			]
		},
		{
			partIdx: 7,
			frames: [
				0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
				28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41
			],
			parts: [
				[
					head,
					// 3104
					{
						...head_horns,
						transform: {
							tx: 6.3,
							ty: 2
						}
					}
				],
				[
					head,
					// 3110
					{
						...head_horns_ghost,
						transform: {
							tx: 6.35,
							ty: -4
						}
					}
				],
				[
					head,
					// 3116
					{
						...head_horns_rabbit,
						transform: {
							tx: 6.3,
							ty: -9
						}
					}
				],
				[
					head,
					// 3123
					{
						...head_horns_goat,
						transform: {
							tx: 4,
							ty: 4
						}
					}
				],
				[
					// 3125
					{
						ref: ref.quetzu.head_horns_triple_back,
						transform: {
							tx: 1.55,
							ty: 10.3
						}
					},
					head,
					// 3133
					{
						...head_horns_triple,
						transform: {
							tx: 6.2,
							ty: -2
						}
					}
				],
				[
					head,
					// 3141
					{
						...head_horns_hair,
						transform: {
							tx: 6.45,
							ty: -13
						}
					}
				],
				[
					head,
					// 3151
					{
						...head_horns_unicorn,
						transform: {
							tx: -1,
							ty: -10
						}
					}
				],
				[
					head_bored,
					// 3104
					{
						...head_horns,
						transform: {
							tx: 2.3,
							ty: 2
						}
					}
				],
				[
					head_bored,
					// 3110
					{
						...head_horns_ghost,
						transform: {
							tx: 2.35,
							ty: -4
						}
					}
				],
				[
					head_bored,
					// 3116
					{
						...head_horns_rabbit,
						transform: {
							tx: 2.3,
							ty: -9
						}
					}
				],
				[
					head_bored,
					// 3123
					{
						...head_horns_goat,
						transform: {
							ty: 4
						}
					}
				],
				[
					// 3125
					{
						ref: ref.quetzu.head_horns_triple_back,
						transform: {
							tx: -2.45,
							ty: 10.3
						}
					},
					head_bored,
					// 3133
					{
						...head_horns_triple,
						transform: {
							tx: 2.2,
							ty: -2
						}
					}
				],
				[
					head_bored,
					// 3141
					{
						...head_horns_hair,
						transform: {
							tx: 2.45,
							ty: -13
						}
					}
				],
				[
					head_bored,
					// 3151
					{
						...head_horns_unicorn,
						transform: {
							tx: -5,
							ty: -10
						}
					}
				],
				[
					head_trunk,
					// 3104
					{
						...head_horns,
						transform: {
							tx: 4.5,
							ty: 2
						}
					}
				],
				[
					head_trunk,
					// 3110
					{
						...head_horns_ghost,
						transform: {
							tx: 4.65,
							ty: -4,
							a: 0.992,
							d: 1
						}
					}
				],
				[
					head_trunk,
					// 3116
					{
						...head_horns_rabbit,
						transform: {
							tx: 4.45,
							ty: -9
						}
					}
				],
				[
					head_trunk,
					// 3123
					{
						...head_horns_goat,
						transform: {
							tx: 2.25,
							ty: 4
						}
					}
				],
				[
					// 3125
					{
						ref: ref.quetzu.head_horns_triple_back,
						transform: {
							tx: -0.45,
							ty: 10.3
						}
					},
					head_trunk,
					// 3133
					{
						...head_horns_triple,
						transform: {
							tx: 4.45,
							ty: -2
						}
					}
				],
				[
					head_trunk,
					// 3141
					{
						...head_horns_hair,
						transform: {
							tx: 4.5,
							ty: -13
						}
					}
				],
				[
					head_trunk,
					// 3151
					{
						...head_horns_unicorn,
						transform: {
							tx: -2.9,
							ty: -10
						}
					}
				],
				[
					head_cat,
					// 3104
					{
						...head_horns,
						transform: {
							tx: 6.4,
							ty: 2
						}
					}
				],
				[
					head_cat,
					// 3110
					{
						...head_horns_ghost,
						transform: {
							tx: 6.35,
							ty: -4
						}
					}
				],
				[
					head_cat,
					// 3116
					{
						...head_horns_rabbit,
						transform: {
							tx: 6.25,
							ty: -9
						}
					}
				],
				[
					head_cat,
					// 3123
					{
						...head_horns_goat,
						transform: {
							tx: 4,
							ty: 4
						}
					}
				],
				[
					// 3125
					{
						ref: ref.quetzu.head_horns_triple_back,
						transform: {
							tx: 1.55,
							ty: 10.3
						}
					},
					head_cat,
					// 3133
					{
						...head_horns_triple,
						transform: {
							tx: 6.2,
							ty: -2
						}
					}
				],
				[
					head_cat,
					// 3141
					{
						...head_horns_hair,
						transform: {
							tx: 6.45,
							ty: -13
						}
					}
				],
				[
					head_cat,
					// 3151
					{
						...head_horns_unicorn,
						transform: {
							tx: -1,
							ty: -10
						}
					}
				],
				[
					head_dog,
					// 3104
					{
						...head_horns,
						transform: {
							tx: 6.3,
							ty: 2
						}
					}
				],
				[
					head_dog,
					// 3110
					{
						...head_horns_ghost,
						transform: {
							tx: 6.35,
							ty: -4
						}
					}
				],
				[
					head_dog,
					// 3116
					{
						...head_horns_rabbit,
						transform: {
							tx: 6.25,
							ty: -9
						}
					}
				],
				[
					head_dog,
					// 3123
					{
						...head_horns_goat,
						transform: {
							tx: 4,
							ty: 4
						}
					}
				],
				[
					// 3125
					{
						ref: ref.quetzu.head_horns_triple_back,
						transform: {
							tx: 1.55,
							ty: 10.3
						}
					},
					head_dog,
					// 3133
					{
						...head_horns_triple,
						transform: {
							tx: 6.2,
							ty: -2
						}
					}
				],
				[
					head_dog,
					// 3141
					{
						...head_horns_hair,
						transform: {
							tx: 6.45,
							ty: -13
						}
					}
				],
				[
					head_dog,
					// 3151
					{
						...head_horns_unicorn,
						transform: {
							tx: -1,
							ty: -10
						}
					}
				],
				[
					head_smug,
					// 3104
					{
						...head_horns,
						transform: {
							tx: 6.3,
							ty: 2
						}
					}
				],
				[
					head_smug,
					// 3110
					{
						...head_horns_ghost,
						transform: {
							tx: 6.35,
							ty: -4
						}
					}
				],
				[
					head_smug,
					// 3116
					{
						...head_horns_rabbit,
						transform: {
							tx: 6.3,
							ty: -9
						}
					}
				],
				[
					head_smug,
					// 3123
					{
						...head_horns_goat,
						transform: {
							tx: 4,
							ty: 4
						}
					}
				],
				[
					// 3125
					{
						ref: ref.quetzu.head_horns_triple_back,
						transform: {
							tx: 1.55,
							ty: 10.3
						}
					},
					head_smug,
					// 3133
					{
						...head_horns_triple,
						transform: {
							tx: 6.2,
							ty: -2
						}
					}
				],
				[
					head_smug,
					// 3141
					{
						...head_horns_hair,
						transform: {
							tx: 6.45,
							ty: -13
						}
					}
				],
				[
					head_smug,
					// 3151
					{
						...head_horns_unicorn,
						transform: {
							tx: -1,
							ty: -10
						}
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
