// @ts-check
import { ref } from '../references_big.js';

export const parts_big = {
	// 1902
	left_back_leg: [
		// 1899
		{
			ref: ref.santaz.left_leg_hoof,
			transform: {
				tx: -4.1,
				ty: 5.8,
				a: 0.796,
				d: 0.737,
				b: -0.22,
				c: 0.345
			},
			colorOffset: {
				r: -108,
				g: -113,
				b: -133
			}
		},
		// 1901
		{
			colorIdx: 1,
			ref: ref.santaz.left_back_leg
		}
	],
	// 1909 p3b
	right_eye: [
		// 1903
		{
			ref: ref.santaz.right_eye
		},
		// 1905
		{
			colorIdx: 1,
			ref: ref.santaz.right_eye_socket,
			transform: {
				ty: 0.1
			}
		},
		// 1906
		{
			ref: ref.santaz.right_eye_highlight
		},
		// 1908
		{
			partIdx: 3,
			frames: [-1, 0],
			parts: [
				{
					colorIdx: 1,
					ref: ref.santaz.right_eye_eyelid,
					transform: {
						tx: 0.7,
						ty: 3.65
					}
				}
			]
		}
	],
	// 1915
	right_front_leg: [
		// 1911
		{
			ref: ref.santaz.right_front_leg_hoof,
			transform: {
				tx: 20.05,
				ty: -4.7
			},
			colorOffset: {
				r: -108,
				g: -113,
				b: -133
			}
		},
		// 1913
		{
			colorIdx: 1,
			ref: ref.santaz.right_front_leg,
			transform: {
				tx: 38.55,
				ty: -2.95
			}
		},
		// 1914
		{
			ref: ref.santaz.right_front_leg_highlight
		}
	],
	// 1921
	body: [
		// 1917
		{
			colorIdx: 1,
			ref: ref.santaz.body
		},
		// 1920 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -0.5,
				ty: 0.2
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 11.6,
							ty: 4.8,
							a: 1.216,
							d: 1.216
						}
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: -3.95,
							ty: 10
						}
					}
				],
				[
					// 1918
					{
						ref: ref.santaz.body_hurt_blood
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 6.8,
							ty: 9.2
						}
					},
					// 1919
					{
						ref: ref.santaz.body_hurt_scratch_blood
					}
				]
			]
		}
	],
	// 1925
	left_front_leg: [
		// 1899
		{
			ref: ref.santaz.left_leg_hoof,
			transform: {
				tx: -4.3,
				ty: 8.95
			},
			colorOffset: {
				r: -108,
				g: -113,
				b: -133
			}
		},
		// 1922
		{
			ref: ref.santaz.left_front_leg_highlight
		},
		// 1924
		{
			colorIdx: 1,
			ref: ref.santaz.left_front_leg
		}
	],
	// 1934 p6
	back: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 1927
				{
					colorIdx: 2,
					ref: ref.santaz.back
				},
				// 1929
				{
					colorIdx: 2,
					ref: ref.santaz.back_curly
				},
				// 1931
				{
					colorIdx: 2,
					ref: ref.santaz.back_pointy
				},
				// 1933
				{
					colorIdx: 2,
					ref: ref.santaz.back_long
				},
				// 1931
				{
					colorIdx: 2,
					ref: ref.santaz.back_pointy,
					transform: {
						tx: 0,
						ty: -6,
						a: 1,
						d: 1.933
					}
				}
			]
		}
	],
	// 1941 special
	special: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				[
					// 1936
					{
						colorIdx: 1,
						ref: ref.santaz.special_fur,
						transform: {
							tx: -0.65
						}
					},
					// 1938
					{
						ref: ref.santaz.special_collar,
						transform: {
							tx: 17.65,
							ty: 31.1
						},
						colorAdjust: {
							contrast: 22,
							saturation: 65,
							hue: -3
						}
					},
					// 1940
					{
						ref: ref.santaz.special_bell,
						transform: {
							tx: 22.85,
							ty: 61.9
						},
						colorAdjust: {
							contrast: 16,
							saturation: 17,
							hue: -3
						}
					}
				]
			]
		}
	],
	// 1967 p8
	antlers: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 4, 5, 6, 7],
			parts: [
				[
					// 1943
					{
						colorIdx: 3,
						ref: ref.santaz.antlers_split,
						transform: {
							tx: 42.25,
							ty: -24.55
						}
					},
					// 1945
					{
						colorIdx: 1,
						ref: ref.santaz.antlers_fur,
						transform: {
							tx: 34.65,
							ty: -7.45
						}
					},
					// 1946
					{
						ref: ref.santaz.antlers_split_highlight
					}
				],
				[
					// 1948
					{
						colorIdx: 3,
						ref: ref.santaz.antlers,
						transform: {
							tx: 42.55,
							ty: -24.45
						}
					},
					// 1945
					{
						colorIdx: 1,
						ref: ref.santaz.antlers_fur,
						transform: {
							tx: 34.65,
							ty: -7.45
						}
					},
					// 1949
					{
						ref: ref.santaz.antlers_highlight
					}
				],
				[
					// 1951
					{
						colorIdx: 3,
						ref: ref.santaz.antlers_dot,
						transform: {
							tx: 42.25,
							ty: -24.55
						}
					},
					// 1945
					{
						colorIdx: 1,
						ref: ref.santaz.antlers_fur,
						transform: {
							tx: 34.65,
							ty: -7.45
						}
					},
					// 1952
					{
						ref: ref.santaz.antlers_dot_highlight
					}
				],
				[
					// 1954
					{
						colorIdx: 3,
						ref: ref.santaz.antlers_wave,
						transform: {
							tx: 42.25,
							ty: -24.55
						}
					},
					// 1945
					{
						colorIdx: 1,
						ref: ref.santaz.antlers_fur,
						transform: {
							tx: 34.65,
							ty: -7.45
						}
					},
					// 1955
					{
						ref: ref.santaz.antlers_wave_highlight
					}
				],
				[
					// 1957
					{
						colorIdx: 3,
						ref: ref.santaz.antler_goat,
						transform: {
							tx: 42.25,
							ty: -24.55
						}
					},
					// 1958
					{
						ref: ref.santaz.antler_goat_highlight
					}
				],
				[
					// 1960
					{
						colorIdx: 3,
						ref: ref.santaz.antler_small,
						transform: {
							tx: 42.25,
							ty: -24.55
						}
					},
					// 1945
					{
						colorIdx: 1,
						ref: ref.santaz.antlers_fur,
						transform: {
							tx: 34.65,
							ty: -7.45
						}
					},
					// 1961
					{
						ref: ref.santaz.antler_small_highlight
					}
				],
				[
					// 1963
					{
						colorIdx: 3,
						ref: ref.santaz.antler_hook,
						transform: {
							tx: 42.25,
							ty: -24.55
						}
					},
					// 1945
					{
						colorIdx: 1,
						ref: ref.santaz.antlers_fur,
						transform: {
							tx: 34.65,
							ty: -7.45
						}
					},
					// 1964
					{
						ref: ref.santaz.antler_hook_highlight
					}
				],
				[
					// 1966
					{
						colorIdx: 3,
						ref: ref.santaz.antler_spiral,
						transform: {
							tx: 42.25,
							ty: -24.55
						}
					},
					// 1945
					{
						colorIdx: 1,
						ref: ref.santaz.antlers_fur,
						transform: {
							tx: 34.65,
							ty: -7.45
						}
					}
				]
			]
		}
	],
	// 1974 p5c
	right_sideburn: [
		{
			partIdx: 5,
			frames: [0, 1, 2],
			parts: [
				// 1969
				{
					colorIdx: 1,
					ref: ref.santaz.right_sideburn
				},
				// 1971
				{
					colorIdx: 1,
					ref: ref.santaz.right_sideburn_up
				},
				// 1973
				{
					colorIdx: 1,
					ref: ref.santaz.right_sideburn_long,
					transform: {
						tx: 1,
						ty: 0,
						a: 0.926,
						d: 0.926,
						b: -0.375,
						c: 0.375
					}
				}
			]
		}
	],
	// 1977 p7b
	right_ear: [
		{
			partIdx: 7,
			frames: [0, 1],
			parts: [
				// 1976
				{
					colorIdx: 1,
					ref: ref.santaz.right_ear
				},
				// 1976
				{
					colorIdx: 1,
					ref: ref.santaz.right_ear,
					transform: {
						tx: -0.3,
						ty: -0.95,
						a: 0.678,
						d: 0.678,
						b: 0.274,
						c: -0.274
					}
				}
			]
		}
	],
	// 1982
	head: [
		// 1979
		{
			colorIdx: 1,
			ref: ref.santaz.head
		},
		// 1981 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: 4.6,
				ty: -7.8
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 4.65,
							ty: 16.5,
							a: 1.627,
							d: 1.627
						}
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: -15,
							ty: 4.95
						}
					}
				],
				[
					// 1980
					{
						ref: ref.santaz.head_hurt_blood
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 15.8,
							ty: 5.35
						}
					},
					// 357
					{
						ref: ref.hurt.bruise_purple,
						transform: {
							tx: 7.75,
							ty: 18.95,
							a: 1.127,
							d: 0.768,
							b: -0.576,
							c: 0.393
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -14.1,
							ty: 3.7,
							a: 1.072,
							d: 1.072
						}
					}
				]
			]
		}
	],
	// 2009 p4
	nose: [
		{
			partIdx: 4,
			frames: [
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,
				2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4
			],
			parts: [
				[
					// 1984
					{
						colorIdx: 1,
						ref: ref.santaz.nose_shadow,
						transform: {
							tx: 6.45,
							ty: 1.35
						}
					},
					// 1986
					{
						colorIdx: 0,
						ref: ref.santaz.nose
					},
					// 1988
					{
						colorIdx: 1,
						ref: ref.santaz.nose_wrinkles,
						transform: {
							tx: 0.9,
							ty: -10.45
						}
					},
					// 1989
					{
						ref: ref.santaz.nose_highlight,
						transform: {
							tx: -0.45,
							ty: 3.1,
							a: 1.277,
							d: 1.286
						}
					}
				],
				[
					// 1990
					{
						colorIdx: 1,
						ref: ref.santaz.nose_vertical_shadow,
						transform: {
							tx: -24.9,
							ty: 15.8,
							a: 0.865,
							d: 0.865
						}
					},
					// 1993
					{
						colorIdx: 1,
						ref: ref.santaz.nose_vertical_wrinkles,
						transform: {
							tx: 3.65,
							ty: -8.5,
							a: 0.92,
							d: 1.073
						}
					},
					// 1995
					{
						colorIdx: 0,
						ref: ref.santaz.nose_vertical,
						transform: {
							tx: -2.95,
							ty: 1.85,
							a: 0.729,
							d: 0.858
						}
					},
					// 1996
					{
						ref: ref.santaz.nose_vertical_highlight
					}
				],
				[
					// 1998
					{
						colorIdx: 1,
						ref: ref.santaz.nose_heart_shadow,
						transform: {
							tx: 2.9,
							ty: 0.75
						}
					},
					// 2000
					{
						colorIdx: 0,
						ref: ref.santaz.nose_heart
					},
					// 1988
					{
						colorIdx: 1,
						ref: ref.santaz.nose_wrinkles,
						transform: {
							tx: 0.9,
							ty: -10.45
						}
					},
					// 2001
					{
						ref: ref.santaz.nose_heart_highlight
					}
				],
				[
					// 2003
					{
						colorIdx: 1,
						ref: ref.santaz.nose_wide_shadow,
						transform: {
							tx: 8.75,
							ty: 1
						}
					},
					// 2005
					{
						colorIdx: 0,
						ref: ref.santaz.nose_wide,
						transform: {
							tx: -1.2
						}
					},
					// 2007
					{
						colorIdx: 1,
						ref: ref.santaz.nose_wide_wrinkles,
						transform: {
							tx: 1.8,
							ty: -11.4
						}
					},
					// 2008
					{
						ref: ref.santaz.nose_wide_highlight
					}
				],
				[
					// 1984
					{
						colorIdx: 1,
						ref: ref.santaz.nose_shadow,
						transform: {
							tx: 5.45,
							ty: -1.3,
							a: 0.789,
							d: 0.789
						}
					},
					// 1986
					{
						ref: ref.santaz.nose,
						transform: {
							tx: 0.35,
							ty: -2.35,
							a: 0.789,
							d: 0.789
						},
						colorOffset: {
							r: -108,
							g: -57,
							b: 20
						}
					},
					// 1988
					{
						colorIdx: 1,
						ref: ref.santaz.nose_wrinkles,
						transform: {
							tx: 1.05,
							ty: -10.6,
							a: 0.789,
							d: 0.789
						}
					},
					// 1989
					{
						ref: ref.santaz.nose_highlight
					}
				]
			]
		}
	],
	// 2016 p3a
	left_eye: [],
	// 2025 p5a
	beard: [],
	// 2028
	mouth: [],
	// 2035 p5b
	left_sideburn: [],
	// 2038 p7a
	left_ear: [],
	// 2057_p9
	hair: [],
	// 2060 p8c
	antlers_side: [],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
