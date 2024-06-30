// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// 2525
const stinger = {
	partIdx: 4,
	frames: [0, 1, 2],
	parts: [
		// 2520
		{
			colorIdx: 0,
			ref: ref.soufflet.butt_stinger,
			transform: {
				a: 0.5,
				d: 0.5,
				b: 0.866,
				c: -0.866
			}
		},
		// 2522
		{
			colorIdx: 0,
			ref: ref.soufflet.butt_stinger_composite,
			transform: {
				a: 0.5,
				d: 0.5,
				b: 0.866,
				c: -0.866
			}
		},
		// 2524
		{
			colorIdx: 0,
			ref: ref.soufflet.butt_stinger_big,
			transform: {
				tx: 2.2,
				ty: 0.8,
				a: 0.234,
				d: 0.234,
				b: 0.893,
				c: -0.893
			}
		}
	]
};

export const parts_big = {
	// 2577 p3
	butt: [
		{
			partIdx: 3,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 2525
					{
						...stinger,
						transform: {
							tx: -26.55,
							ty: 22.6,
							a: 0.39,
							d: 0.39,
							b: -0.92,
							c: 0.92
						}
					},
					// 2526
					{
						ref: ref.soufflet.butt_big_spikes_back
					},
					// 2528
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_big_sack,
						transform: {
							tx: 22.35,
							ty: -40.45,
							a: 0.992,
							d: 0.992,
							b: -0.122,
							c: 0.122
						}
					},
					// 2530
					{
						ref: ref.soufflet.butt_big_end,
						transform: {
							tx: -24.95,
							ty: 0.25,
							a: 0.992,
							d: 0.992,
							b: -0.122,
							c: 0.122
						},
						colorOffset: {
							r: -138,
							g: -148,
							b: -148
						}
					},
					// 2532
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_big,
						transform: {
							tx: 4.3,
							ty: -24.55,
							a: 0.992,
							d: 0.992,
							b: -0.122,
							c: 0.122
						}
					},
					// 2534
					{
						ref: ref.soufflet.butt_big_marks,
						transform: {
							tx: 4.3,
							ty: -24.55,
							a: 0.992,
							d: 0.992,
							b: -0.122,
							c: 0.122
						},
						colorOffset: {
							r: -138,
							g: -138,
							b: -148
						}
					},
					// 2535
					{
						ref: ref.soufflet.butt_big_spikes
					},
					// 2528
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_big_sack,
						transform: {
							tx: -11.8,
							ty: -33.55,
							a: 0.992,
							d: 0.992,
							b: -0.122,
							c: 0.122
						}
					},
					// 2536
					{
						ref: ref.soufflet.butt_big_sack_highlight
					},
					// 2538
					{
						ref: ref.soufflet.butt_big_shadow,
						transform: {
							tx: 4.8,
							ty: 10.9,
							a: 0.887,
							d: 0.887
						},
						alpha: 0.7,
						/*blur: {
							x: 0.5,
							y: 0.5
						},*/
						blend: BLEND_MODES.OVERLAY
					}
				],
				[
					// 2525
					{
						...stinger,
						transform: {
							tx: -30.65,
							ty: 9.15,
							a: 1.302,
							d: -1.302,
							b: -0.346,
							c: -0.346
						}
					},
					// 2540
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_small,
						transform: {
							tx: 3.95,
							ty: 0.6
						}
					},
					// 2543
					{
						transform: {
							tx: 3.95,
							ty: 0.6
						},
						parts: [
							[
								// 2540 + 2541
								{
									colorIdx: 2,
									ref: ref.soufflet.butt_small_dots
								},
								// 2542
								{
									ref: ref.soufflet.butt_small_dots_edges
								}
							]
						]
					},
					// 2545
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_small_spikes_sockets,
						transform: {
							tx: -4.15,
							ty: 15.45
						}
					},
					// 2546
					{
						ref: ref.soufflet.butt_small_spikes
					},
					// 2548
					{
						ref: ref.soufflet.butt_small_highlight,
						transform: {
							tx: -6.45,
							ty: -9.75,
							a: 0.887,
							d: 0.887
						},
						alpha: 0.48,
						blend: BLEND_MODES.ADD
						// Glow 0xff0000 d5 s1
					},
					// 2550
					{
						ref: ref.soufflet.butt_small_shadow,
						transform: {
							tx: 4.8,
							ty: 10.9,
							a: 0.887,
							d: 0.887
						},
						alpha: 0.7,
						/*blur: {
							x: 0.5,
							y: 0.5
						},*/
						blend: BLEND_MODES.OVERLAY
					}
				],
				[
					// 2525
					{
						...stinger,
						transform: {
							tx: -50.3,
							ty: 4.35
						}
					},
					// 2552
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segments_big,
						transform: {
							tx: -17.5,
							ty: 0.55,
							a: 0.887,
							d: 0.887
						}
					},
					// 2553
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_segments_middle,
						transform: {
							tx: -5.45,
							ty: -3.25,
							a: 0.887,
							d: 0.887
						}
					},
					// 2556
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segments_small,
						transform: {
							tx: 12.95,
							ty: -3.25,
							a: 0.887,
							d: 0.887
						}
					},
					// 2558
					{
						ref: ref.soufflet.butt_segments_highlight,
						transform: {
							tx: -6.45,
							ty: -9.75,
							a: 0.887,
							d: 0.887
						},
						alpha: 0.48,
						blend: BLEND_MODES.ADD
						// Glow 0xff0000 d5 s1
					},
					// 2560
					{
						ref: ref.soufflet.butt_segments_shadow,
						transform: {
							tx: 4.8,
							ty: 10.9,
							a: 0.887,
							d: 0.887
						},
						alpha: 0.7,
						/*blur: {
							x: 0.5,
							y: 0.5
						},*/
						blend: BLEND_MODES.OVERLAY
					}
				],
				[
					// 2525
					{
						...stinger,
						transform: {
							tx: -27.65,
							ty: 27.95,
							a: 0.497,
							d: 0.497,
							b: -0.866,
							c: 0.866
						}
					},
					// 2562
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_camo_segment_1,
						transform: {
							tx: -19.6,
							ty: 12.1
						}
					},
					// 2564
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_camo_segment_1_marks,
						transform: {
							tx: -17.9,
							ty: 17.05
						}
					},
					// 2566
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_camo_segment_2,
						transform: {
							tx: -3.45,
							ty: -2.75
						}
					},
					// 2568
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_camo_segment_2_marks,
						transform: {
							tx: -3.8,
							ty: -2.75
						}
					},
					// 2570
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_camo_segment_3,
						transform: {
							tx: 13.8,
							ty: -6.6
						}
					},
					// 2572
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_camo_segment_3_marks,
						transform: {
							tx: 13.05,
							ty: -6.6
						}
					},
					// 2574
					{
						ref: ref.soufflet.butt_camo_highlight,
						transform: {
							tx: -10.7,
							ty: -10.65
						},
						alpha: 0.48,
						blend: BLEND_MODES.ADD
						// Glow 0xff0000 d5 s1
					},
					// 2576
					{
						ref: ref.soufflet.butt_camo_shadow,
						transform: {
							tx: 1.95,
							ty: 12.6
						},
						alpha: 0.7,
						/*blur: {
							x: 0.5,
							y: 0.5
						},*/
						blend: BLEND_MODES.OVERLAY
					}
				]
			]
		}
	],
	// 2596 p7b
	right_arm: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 4],
			parts: [
				[
					// 2578
					{
						ref: ref.soufflet.right_arm_ball_spikes_bottom
					},
					// 2580
					{
						ref: ref.soufflet.right_arm_ball,
						transform: {
							tx: 2.1
						},
						colorOffset: {
							r: -138,
							g: -138,
							b: -148
						}
					},
					// 2582
					{
						colorIdx: 0,
						ref: ref.soufflet.right_arm_ball_arm
					},
					// 2583
					{
						ref: ref.soufflet.right_arm_ball_spikes_top
					}
				],
				[
					// 2585
					{
						colorIdx: 0,
						ref: ref.soufflet.right_arm_segments
					},
					// 2587
					{
						ref: ref.soufflet.right_arm_segments_hard,
						colorOffset: {
							r: -138,
							g: -138,
							b: -148
						}
					}
				],
				[
					// 2589
					{
						colorIdx: 0,
						ref: ref.soufflet.right_arm_long
					},
					// 2591
					{
						ref: ref.soufflet.right_arm_long_hard,
						colorOffset: {
							r: -138,
							g: -138,
							b: -148
						}
					}
				],
				// 2593
				{
					colorIdx: 0,
					ref: ref.soufflet.right_arm_small
				},
				// 2595
				{
					colorIdx: 0,
					ref: ref.soufflet.right_arm
				}
			]
		}
	],
	// 2599
	body: [
		{
			colorIdx: 0,
			ref: ref.soufflet.body,
			colorAdjust: {
				brightness: -46,
				contrast: 14,
				saturation: 4
			}
		}
	],
	// 2620 p7a
	left_arm: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 4],
			parts: [
				[
					// 2600
					{
						ref: ref.soufflet.left_arm_ball_spikes_bottom
					},
					// 2602
					{
						ref: ref.soufflet.left_arm_ball,
						transform: {
							tx: -1.5,
							ty: 3.35,
							a: 1.146,
							d: 1.146
						},
						colorOffset: {
							r: -138,
							g: -138,
							b: -148
						}
					},
					// 2604
					{
						colorIdx: 0,
						ref: ref.soufflet.left_arm_ball_arm,
						transform: {
							tx: -1.4,
							ty: 1.85,
							a: 1.146,
							d: 1.146
						}
					},
					// 2605
					{
						ref: ref.soufflet.left_arm_ball_spikes_top
					}
				],
				[
					// 2607
					{
						ref: ref.soufflet.left_arm_segments_hard_end,
						colorOffset: {
							r: -138,
							g: -138,
							b: -148
						}
					},
					// 2609
					{
						colorIdx: 0,
						ref: ref.soufflet.left_arm_segments
					},
					// 2611
					{
						ref: ref.soufflet.left_arm_segments_hard,
						colorOffset: {
							r: -138,
							g: -138,
							b: -148
						}
					}
				],
				[
					// 2613
					{
						colorIdx: 0,
						ref: ref.soufflet.left_arm_long
					},
					// 2615
					{
						ref: ref.soufflet.left_arm_long_hard,
						colorOffset: {
							r: -138,
							g: -138,
							b: -148
						}
					}
				],
				// 2617
				{
					colorIdx: 0,
					ref: ref.soufflet.left_arm_small
				},
				// 2619
				{
					colorIdx: 0,
					ref: ref.soufflet.left_arm
				}
			]
		}
	],
	// 2632 p5b
	right_antennae: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3],
			parts: [
				// 2622
				{
					colorIdx: 0,
					ref: ref.soufflet.right_antennae
				},
				[
					// 2624
					{
						colorIdx: 0,
						ref: ref.soufflet.right_antennae_straight
					},
					// 2625
					{
						ref: ref.soufflet.right_antennae_straight_highlight
					}
				],
				[
					// 2627
					{
						colorIdx: 0,
						ref: ref.soufflet.right_antennae_big
					},
					// 2628
					{
						ref: ref.soufflet.right_antennae_big_highlight
					}
				],
				[
					// 2630
					{
						colorIdx: 0,
						ref: ref.soufflet.right_antennae_back
					},
					// 2631
					{
						ref: ref.soufflet.right_antennae_back_highlight
					}
				]
			]
		}
	],
	// 2637
	head: [
		// 2634
		{
			colorIdx: 0,
			ref: ref.soufflet.head
		},
		// 2636
		{
			ref: ref.soufflet.head_shadow,
			transform: {
				tx: -30.7,
				ty: 2.05,
				a: 0.887,
				d: 0.887
			},
			/*blur: {
				x: 0.5,
				y: 0.5
			},*/
			blend: BLEND_MODES.OVERLAY
		}
	],
	// 2648 p6b
	right_eye: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 2638
					{
						ref: ref.soufflet.right_eye_silly_back
					},
					// 2640
					{
						colorIdx: 0,
						ref: ref.soufflet.right_eye_socket,
						transform: {
							tx: 0.35,
							ty: -1.6,
							a: 1.183,
							d: 0.804,
							b: 0,
							c: -0.379
						}
					},
					// 2641
					{
						ref: ref.soufflet.right_eye_silly
					}
				],
				[
					// 2642
					{
						ref: ref.soufflet.right_eye_back
					},
					// 2640
					{
						colorIdx: 0,
						ref: ref.soufflet.right_eye_socket
					},
					// 2643
					{
						ref: ref.soufflet.right_eye
					}
				],
				[
					// 2645
					{
						ref: ref.soufflet.eye_black,
						transform: {
							tx: 0.05,
							ty: -0.2,
							a: 0.39,
							d: 0.707,
							b: -0.157,
							c: 0.203
						},
						colorOffset: {
							r: -174,
							g: -164,
							b: -159
						}
					},
					// 2646
					{
						ref: ref.soufflet.right_eye_black_highlight
					}
				],
				[
					// 2647
					{
						ref: ref.soufflet.right_eye_shocked
					},
					// 2640
					{
						colorIdx: 0,
						ref: ref.soufflet.right_eye_socket
					}
				]
			]
		}
	],
	// 2657 p6a
	left_eye: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 2649
					{
						ref: ref.soufflet.left_eye_silly_back
					},
					// 2651
					{
						colorIdx: 0,
						ref: ref.soufflet.left_eye_socket,
						transform: {
							tx: -0.85,
							ty: 0,
							a: 1,
							d: 0.81,
							b: 0,
							c: -0.336
						}
					},
					// 2652
					{
						ref: ref.soufflet.left_eye_silly
					}
				],
				[
					// 2653
					{
						ref: ref.soufflet.left_eye_back
					},
					// 2651
					{
						colorIdx: 0,
						ref: ref.soufflet.left_eye_socket
					},
					// 2654
					{
						ref: ref.soufflet.left_eye
					}
				],
				[
					// 2645
					{
						ref: ref.soufflet.eye_black,
						transform: {
							a: 0.902,
							d: 0.902
						},
						colorOffset: {
							r: -174,
							g: -164,
							b: -159
						}
					},
					// 2655
					{
						ref: ref.soufflet.left_eye_black_highlight
					}
				],
				[
					// 2656
					{
						ref: ref.soufflet.left_eye_shocked
					},
					// 2651
					{
						colorIdx: 0,
						ref: ref.soufflet.left_eye_socket
					}
				]
			]
		}
	],
	// 2670 p5a
	left_antennae: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 2659
					{
						colorIdx: 0,
						ref: ref.soufflet.left_antennae
					},
					// 2660
					{
						ref: ref.soufflet.left_antennae_highlight
					}
				],
				[
					// 2662
					{
						colorIdx: 0,
						ref: ref.soufflet.left_antennae_straight
					},
					// 2663
					{
						ref: ref.soufflet.left_antennae_straight_highlight
					}
				],
				[
					// 2665
					{
						colorIdx: 0,
						ref: ref.soufflet.left_antennae_big
					},
					// 2666
					{
						ref: ref.soufflet.left_antennae_big_highlight
					}
				],
				[
					// 2668
					{
						colorIdx: 0,
						ref: ref.soufflet.left_antennae_back,
						transform: {
							tx: -50.85,
							ty: 18.05
						}
					},
					// 2669
					{
						ref: ref.soufflet.left_antennae_back_highlight
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
