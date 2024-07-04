// @ts-check
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
		x: 0.5,
		y: 0.5
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
						colorIdx: 1,
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

export const parts_big = {
	// 2898
	back_fire: [
		{
			partIdx: 1,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			transform: {
				tx: 45.45,
				ty: -65.6
			},
			parts: [
				back_flames,
				{
					...back_flames,
					transform: {
						tx: 0.65,
						ty: 1.45
					}
				},
				{
					...back_flames,
					transform: {
						tx: 1.3,
						ty: 2.9
					}
				},
				{
					...back_flames,
					transform: {
						tx: 1.95,
						ty: 4.4
					}
				},
				{
					...back_flames,
					transform: {
						tx: 2.6,
						ty: 5.85
					}
				},
				{
					...back_flames,
					transform: {
						tx: 3.25,
						ty: 7.3
					}
				},
				{
					...back_flames,
					transform: {
						tx: 3.9,
						ty: 8.75
					}
				},
				{
					...back_flames,
					transform: {
						tx: 4.55,
						ty: 10.25
					}
				},
				{
					...back_flames,
					transform: {
						tx: 5.2,
						ty: 11.7
					}
				},
				{
					...back_flames,
					transform: {
						tx: -9.8,
						ty: -6.2
					}
				},
				{
					...back_flames,
					transform: {
						tx: -9.8,
						ty: -7
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
								ref: ref.quetzu.tail_end_wave
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
						ref: ref.quetzu.right_arm_special_shadow,
						colorAdjust: {
							brightness: -33
						}
					},
					// 2965
					{
						colorIdx: 2,
						ref: ref.quetzu.right_arm_special,
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
	body: [],
	// 3081 p4a
	left_arm: [],
	// 3084 special
	left_sideburn_sp: [],
	// 3192 p7
	head: [],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
