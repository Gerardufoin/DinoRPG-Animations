// @ts-check
import { ref } from '../references_big.js';

export const parts_big = {
	// 2069 p4d
	right_front_leg: [
		{
			partIdx: 4,
			frames: [0, 1],
			parts: [
				[
					// 2063
					{
						colorIdx: 0,
						ref: ref.feross.right_front_leg
					},
					// 2064
					{
						ref: ref.feross.right_front_leg_nails
					}
				],
				[
					// 2065
					{
						ref: ref.feross.right_front_leg_big_nails_back
					},
					// 2067
					{
						colorIdx: 0,
						ref: ref.feross.right_front_leg_big,
						transform: {
							tx: -1.5
						}
					},
					// 2068
					{
						ref: ref.feross.right_front_leg_big_nail_front
					}
				]
			]
		}
	],
	// 2072
	butt: [
		{
			colorIdx: 1,
			ref: ref.feross.butt
		}
	],
	// 2081 p4c
	left_back_leg: [
		{
			partIdx: 4,
			frames: [0, 1],
			parts: [
				[
					// 2074
					{
						colorIdx: 0,
						ref: ref.feross.left_back_leg,
						transform: {
							tx: -0.65,
							ty: 1.3
						}
					},
					// 2075
					{
						ref: ref.feross.left_back_leg_nails
					}
				],
				[
					// 2079
					{
						colorIdx: 0,
						ref: ref.feross.left_back_leg_big,
						transform: {
							tx: -0.65,
							ty: 1.3
						}
					},
					// 2080
					{
						ref: ref.feross.left_back_leg_big_nails
					}
				]
			]
		},
		// 2077
		{
			colorIdx: 1,
			ref: ref.feross.left_back_leg_shoulder,
			transform: {
				tx: 1.8,
				ty: -4.2
			}
		}
	],
	// 2099 p7
	body: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 3, 3, 3],
			parts: [
				[
					// 2083
					{
						colorIdx: 1,
						ref: ref.feross.body_grains
					}
				],
				[
					// 2086
					{
						colorIdx: 1,
						ref: ref.feross.body
					},
					// 2088
					{
						colorIdx: 1,
						ref: ref.feross.body_vent,
						transform: {
							tx: 2.4,
							ty: -17.15
						}
					}
				],
				[
					// 2091
					{
						colorIdx: 1,
						ref: ref.feross.body_bumps
					}
				],
				[
					// 2092 (same as 2086)
					{
						colorIdx: 1,
						ref: ref.feross.body
					},
					// 2097 (combined with masked part)
					{
						partIdx: 9,
						frames: [0, 1, 2],
						parts: [
							// 2094
							{
								colorIdx: 3,
								ref: ref.feross.body_marking_dots
							},
							// 2095
							{
								colorIdx: 3,
								ref: ref.feross.body_marking_snakes
							},
							// 2096
							{
								colorIdx: 3,
								ref: ref.feross.body_marking_waves
							}
						]
					},
					// 2098
					{
						ref: ref.feross.body_highlight
					}
				]
			]
		},
		// 2085 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: 4.75,
				ty: -13.4
			},
			parts: [
				// 155
				{
					ref: ref.hurt.scratch,
					transform: {
						tx: -2.15,
						ty: -1.45,
						a: 1.432,
						d: 0.92,
						b: 0.384,
						c: -0.246
					}
				},
				// 2084
				{
					ref: ref.feross.body_hurt_cracks
				}
			]
		}
	],
	// 2109 p4b
	left_front_leg: [
		{
			partIdx: 4,
			frames: [0, 1],
			parts: [
				[
					// 2101
					{
						colorIdx: 0,
						ref: ref.feross.left_front_leg,
						transform: {
							tx: -26.9,
							ty: 5.85
						}
					},
					// 2102
					{
						ref: ref.feross.left_front_leg_nails
					}
				],
				[
					// 2107
					{
						colorIdx: 0,
						ref: ref.feross.left_front_leg_big,
						transform: {
							tx: -26.9,
							ty: 5.85
						}
					},
					// 2108
					{
						ref: ref.feross.left_front_leg_big_nails
					}
				]
			]
		},
		// 2104
		{
			colorIdx: 1,
			ref: ref.feross.left_front_leg_shoulder,
			transform: {
				tx: 3.75,
				ty: -9.1
			}
		},
		// 2105
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: 1.4,
				ty: 0.15
			},
			parts: [
				// 318
				{
					ref: ref.hurt.scratch_small,
					transform: {
						tx: 0.05,
						ty: 0.05
					}
				},
				// 155
				{
					ref: ref.hurt.scratch,
					transform: {
						tx: -1.5,
						ty: 3.2,
						b: 0.129,
						c: 0
					}
				}
			]
		}
	],
	// 2120 p6b
	right_ear: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 2111
				{
					colorIdx: 0,
					ref: ref.feross.right_ear
				},
				// 2113
				{
					colorIdx: 0,
					ref: ref.feross.right_ear_flame
				},
				// 2115
				{
					colorIdx: 0,
					ref: ref.feross.right_ear_square
				},
				// 2117
				{
					colorIdx: 0,
					ref: ref.feross.right_ear_spike
				},
				// 2119
				{
					colorIdx: 0,
					ref: ref.feross.right_ear_small
				}
			]
		}
	],
	// 2136 p8
	head: [
		{
			partIdx: 8,
			frames: [0, 1, 2],
			parts: [
				// 2122
				{
					colorIdx: 0,
					ref: ref.feross.head
				},
				// 2132
				{
					colorIdx: 0,
					ref: ref.feross.head_beak
				},
				[
					// 2133
					{
						colorIdx: 0,
						ref: ref.feross.head_split
					},
					// 2135
					{
						ref: ref.feross.head_split_highlight
					}
				]
			]
		},
		// 2127
		{
			partIdx: 7,
			frames: [-1, -1, -1, 0, 0, 0, 0],
			transform: {
				tx: -37.75,
				ty: -14.65
			},
			parts: [
				// 2126 (merged with mask)
				{
					partIdx: 9,
					frames: [0, 1, 2],
					parts: [
						// 2123
						{
							colorIdx: 1,
							ref: ref.feross.head_marking_dots
						},
						// 2124
						{
							colorIdx: 1,
							ref: ref.feross.head_marking_snakes
						},
						// 2125
						{
							colorIdx: 1,
							ref: ref.feross.head_marking_waves
						}
					]
				}
			]
		},
		// 2128
		{
			ref: ref.feross.head_highlight
		},
		// 2130 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -40.15,
				ty: -5.85
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -0.05,
							a: 1.542,
							d: 1.542
						}
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: -16.45,
							ty: 33.8,
							a: 1.263,
							d: 1.263
						}
					}
				],
				[
					// 2129
					{
						ref: ref.feross.head_hurt_blood
					},
					// 357
					{
						ref: ref.hurt.bruise_purple,
						transform: {
							tx: 2.45,
							ty: 1.35,
							a: 1.706,
							d: 1.388,
							b: -0.158,
							c: 0
						}
					},
					// 359
					{
						ref: ref.hurt.scratch_blood,
						transform: {
							tx: -10.55,
							ty: -4.2,
							a: 0.921,
							d: 0.921,
							b: 0.387,
							c: -0.387
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -13.55,
							ty: 32.7,
							a: 1.542,
							d: 1.542
						}
					}
				]
			]
		}
	],
	// 2155 p3
	left_eye: [
		{
			partIdx: 3,
			frames: [0, 1, 2],
			parts: [
				[
					// 2137
					{
						ref: ref.feross.left_eye
					},
					// 2139
					{
						colorIdx: 2,
						ref: ref.feross.left_eye_pupil,
						transform: {
							tx: -31.75,
							ty: 3.6
						}
					},
					// 2141
					{
						colorIdx: 0,
						ref: ref.feross.left_eye_socket
					},
					// 2142
					{
						ref: ref.feross.left_eye_highlight
					}
				],
				[
					// 2143
					{
						ref: ref.feross.left_eye_weird
					},
					// 2145
					{
						colorIdx: 2,
						ref: ref.feross.left_eye_weird_pupil,
						transform: {
							tx: -29.95,
							ty: 5.3
						}
					},
					// 2147
					{
						colorIdx: 0,
						ref: ref.feross.left_eye_weird_socket
					},
					// 2148
					{
						ref: ref.feross.left_eye_weird_highlight
					}
				],
				[
					// 2149
					{
						ref: ref.feross.left_eye_big
					},
					// 2151
					{
						colorIdx: 2,
						ref: ref.feross.left_eye_big_pupil,
						transform: {
							tx: -32.7,
							ty: 6
						}
					},
					// 2153
					{
						colorIdx: 0,
						ref: ref.feross.left_eye_big_socket
					},
					// 2154
					{
						ref: ref.feross.left_eye_big_highlight
					}
				]
			]
		}
	],
	// 2166 p6a
	left_ear: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4],
			transform: {
				tx: 36.65,
				ty: -8.6
			},
			parts: [
				// 2157
				{
					colorIdx: 0,
					ref: ref.feross.left_ear
				},
				// 2159
				{
					colorIdx: 0,
					ref: ref.feross.left_ear_flame
				},
				// 2161
				{
					colorIdx: 0,
					ref: ref.feross.left_ear_square
				},
				// 2163
				{
					colorIdx: 0,
					ref: ref.feross.left_ear_spike
				},
				// 2165
				{
					colorIdx: 0,
					ref: ref.feross.left_ear_small
				}
			]
		}
	],
	// 2173 special
	special: [
		{
			partIdx: 15,
			frames: [-1, 0, 1],
			parts: [
				[
					// 2167
					{
						ref: ref.feross.special_skull
					},
					// 2169
					{
						colorIdx: 2,
						ref: ref.feross.special_skull_feather,
						transform: {
							tx: 19.65,
							ty: -29.65
						}
					},
					// 2170
					{
						ref: ref.feross.special_skull_shadows
					}
				],
				// 2172
				{
					ref: ref.feross.special_christmas,
					transform: {
						tx: 8.75,
						ty: -21.4
					}
				}
			]
		}
	],
	// 2183 p4
	nostrils: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 2175
					{
						colorIdx: 0,
						ref: ref.feross.nostrils
					},
					// 2176
					{
						ref: ref.feross.nostrils_highlight
					}
				],
				// 2178
				{
					colorIdx: 0,
					ref: ref.feross.nostrils_round
				},
				// 2180
				{
					colorIdx: 0,
					ref: ref.feross.nostrils_small
				},
				// 2182
				{
					colorIdx: 0,
					ref: ref.feross.nostrils_pointy,
					transform: {
						tx: 26.3,
						ty: -6.55
					}
				}
			]
		}
	],
	// 2203 p5
	horn: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 1, 2, 2, 3, 4],
			parts: [
				[
					// 2185
					{
						colorIdx: 0,
						ref: ref.feross.horn_socket,
						transform: {
							tx: 1.55,
							ty: 3.25
						}
					},
					// 2186 (should be part of 2190...)
					{
						ref: ref.feross.horn_adds
					},
					// 2190
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2],
						transform: {
							tx: -1.7,
							ty: -2
						},
						parts: [
							// 2187
							{
								ref: ref.feross.horn_young
							},
							// 2188
							{
								ref: ref.feross.horn_adolescent
							},
							// 2189
							{
								ref: ref.feross.horn_adult
							}
						]
					}
				],
				[
					// 2192
					{
						colorIdx: 0,
						ref: ref.feross.horn_socket_alt,
						transform: {
							tx: 1.7,
							ty: 5.55
						}
					},
					// 2196
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2],
						transform: {
							tx: -0.55,
							ty: 2.85
						},
						parts: [
							// 2193
							{
								ref: ref.feross.horn_curled_young
							},
							// 2194
							{
								ref: ref.feross.horn_curled_adolescent
							},
							// 2195
							{
								ref: ref.feross.horn_curled_adult
							}
						]
					}
				],
				[
					// 2192
					{
						colorIdx: 0,
						ref: ref.feross.horn_socket_alt,
						transform: {
							tx: 1.7,
							ty: 5.55
						}
					},
					// 2192
					{
						colorIdx: 0,
						ref: ref.feross.horn_socket_alt,
						transform: {
							tx: 5.55,
							ty: -8.75,
							a: 0.642,
							d: 0.642
						}
					},
					// 2200
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2],
						transform: {
							tx: 4.15,
							ty: -10.35,
							a: 0.634,
							d: 0.634
						},
						parts: [
							// 2197
							{
								ref: ref.feross.horn_small_young
							},
							// 2198
							{
								ref: ref.feross.horn_small_adolescent
							},
							// 2199
							{
								ref: ref.feross.horn_small_adult
							}
						]
					},
					// 2200
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2],
						transform: {
							tx: -0.55,
							ty: 2.85
						},
						parts: [
							// 2197
							{
								ref: ref.feross.horn_small_young
							},
							// 2198
							{
								ref: ref.feross.horn_small_adolescent
							},
							// 2199
							{
								ref: ref.feross.horn_small_adult
							}
						]
					}
				],
				[
					// 2192
					{
						colorIdx: 0,
						ref: ref.feross.horn_socket_alt,
						transform: {
							tx: 1.7,
							ty: 5.55
						}
					},
					// 2201
					{
						ref: ref.feross.horn_t
					}
				],
				[
					// 2192
					{
						colorIdx: 0,
						ref: ref.feross.horn_socket_alt,
						transform: {
							tx: 1.7,
							ty: 5.55
						}
					},
					// 2202
					{
						ref: ref.feross.horn_l
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
