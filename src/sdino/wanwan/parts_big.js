// @ts-check
import { ref } from '../references_big.js';

export const parts_big = {
	// 1760 p7
	tail: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 1748
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_thin
				},
				// 1753
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_multiple,
					transform: {
						tx: 21.15,
						ty: -9.2
					}
				},
				// 1755
				{
					colorIdx: 1,
					ref: ref.wanwan.tail,
					transform: {
						tx: 2.85,
						ty: -7.9
					}
				},
				// 1757
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_down,
					transform: {
						tx: 2.85,
						ty: -7.9
					}
				},
				// 1759
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_spike,
					transform: {
						tx: 8.2,
						ty: -7.75,
						a: 1.135,
						d: 1.135
					}
				}
			]
		},
		// 1751 special
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 1750
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_special,
					transform: {
						tx: -57.7,
						ty: -77.65
					}
				}
			]
		}
	],
	// 1767 p8c
	right_front_leg: [
		// 1762
		{
			colorIdx: 1,
			ref: ref.wanwan.right_front_leg
		},
		// 1766
		{
			partIdx: 8,
			frames: [0, -1],
			parts: [
				// 1765 + 1763
				{
					colorIdx: 2,
					ref: ref.wanwan.right_front_leg_fur,
					transform: {
						tx: -4.1,
						ty: 6.15
					}
				}
			]
		}
	],
	// 1770
	right_front_paw: [
		{
			colorIdx: 1,
			ref: ref.wanwan.right_front_paw
		}
	],
	// 1773 p8b
	left_back_lower_leg: [
		{
			partIdx: 8,
			frames: [0, 1],
			parts: [
				// 1772
				{
					colorIdx: 2,
					ref: ref.wanwan.left_back_lower_leg,
					transform: {
						a: 1.211,
						d: 1
					}
				},
				// 1772
				{
					colorIdx: 1,
					ref: ref.wanwan.left_back_lower_leg
				}
			]
		}
	],
	// 1776
	left_back_paw: [
		{
			colorIdx: 1,
			ref: ref.wanwan.left_back_paw
		}
	],
	// 1779
	left_back_upper_leg: [
		{
			colorIdx: 1,
			ref: ref.wanwan.left_back_upper_leg
		}
	],
	// 1783
	lower_body: [
		// 1781
		{
			colorIdx: 1,
			ref: ref.wanwan.lower_body
		},
		// 1782 hurt
		{
			partIdx: 2,
			frames: [-1, -1, 0],
			transform: {
				tx: -7.4,
				ty: 1.7
			},
			parts: [
				// 155
				{
					ref: ref.hurt.scratch,
					transform: {
						tx: 12.95,
						ty: -7.1,
						a: 1.216,
						d: 1.216
					}
				}
			]
		}
	],
	// 1786
	upper_body: [
		{
			colorIdx: 1,
			ref: ref.wanwan.upper_body
		}
	],
	// 1795 p8a
	left_front_leg: [
		// 1788
		{
			colorIdx: 1,
			ref: ref.wanwan.left_front_leg,
			transform: {
				tx: 0,
				ty: 1.95
			}
		},
		// 1792 (1789 + 1791)
		{
			partIdx: 8,
			frames: [0, -1],
			transform: {
				tx: -3.1,
				ty: 8.65
			},
			parts: [
				{
					colorIdx: 2,
					ref: ref.wanwan.left_front_leg_fur
				}
			]
		},
		// 1794 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -3.75,
				ty: 8.65
			},
			parts: [
				[
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 2.25,
							ty: 0.05,
							a: 1.404,
							d: 1.404
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 4.2,
							ty: -17.1
						}
					}
				],
				[
					// 1793
					{
						ref: ref.wanwan.left_front_leg_hurt_blood
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 1.75,
							ty: 0.6
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 3.8,
							ty: -18.3,
							a: 0.805,
							d: 0.805,
							b: -1.053,
							c: 1.053
						}
					}
				]
			]
		}
	],
	// 1798
	left_front_paw: [
		{
			colorIdx: 1,
			ref: ref.wanwan.left_front_paw
		}
	],
	// 1813 p6b
	right_ear: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				[
					// 1800
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear,
						transform: {
							tx: -3.65,
							ty: -0.05,
							a: 0.878,
							d: 0.878
						}
					}
				],
				[
					// 1802
					{
						colorIdx: 0,
						ref: ref.wanwan.right_ear_up_inside,
						transform: {
							tx: -3.05,
							ty: -2.1
						}
					},
					// 1804
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_up,
						transform: {
							tx: -3.65,
							ty: -0.05,
							a: 0.878,
							d: 0.878
						}
					}
				],
				[
					// 1806
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_round,
						transform: {
							tx: -3.65,
							ty: -0.05,
							a: 0.878,
							d: 0.878
						}
					}
				],
				[
					// 1808
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_pointy,
						transform: {
							tx: -3.5,
							ty: -0.05
						}
					}
				],
				[
					// 1810
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_sharp,
						transform: {
							tx: -4.95,
							ty: -2.4,
							a: 0.91,
							d: 0.91,
							b: -0.411,
							c: 0.411
						}
					}
				],
				[
					// 1812
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_lynx,
						transform: {
							tx: -1.05,
							ty: -6.1,
							a: 1,
							d: 1.102
						}
					}
				]
			]
		}
	],
	// 1818
	head: [
		// 1815
		{
			colorIdx: 1,
			ref: ref.wanwan.head,
			transform: {
				tx: 1.05,
				ty: -1.3
			}
		},
		// 1817 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -11.55,
				ty: -2.05
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 2.5,
							ty: -5.65,
							a: 1.511,
							d: 1.511
						}
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 25,
							ty: 9.2
						}
					}
				],
				[
					// 1816
					{
						ref: ref.wanwan.head_hurt_blood
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 26.15,
							ty: 9.35,
							a: 1.261,
							d: 1.261
						}
					}
				]
			]
		}
	],
	// 1843 p3
	eyes: [
		{
			partIdx: 3,
			frames: [0, 0, 1],
			parts: [
				// 1829
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					transform: {
						ty: 0.4
					},
					parts: [
						[
							// 1819
							{
								ref: ref.wanwan.eyes_back
							},
							// 1821
							{
								colorIdx: 3,
								ref: ref.wanwan.eyes,
								transform: {
									tx: -6.7,
									ty: 1.15
								}
							},
							// 1822
							{
								ref: ref.wanwan.eyes_pupils
							},
							// 1823
							{
								colorIdx: 1,
								ref: ref.wanwan.eyes_sockets,
								transform: {
									ty: 0.05,
									b: 0.082,
									c: 0
								}
							}
						],
						[
							// 1825
							{
								ref: ref.wanwan.eyes_demon_back
							},
							// 1827
							{
								colorIdx: 1,
								ref: ref.wanwan.eyes_demon_sockets,
								transform: {
									tx: 0,
									ty: 0.05,
									b: 0.082,
									c: 0
								}
							},
							// 1828
							{
								ref: ref.wanwan.eyes_demon_highlight
							}
						]
					]
				},
				// 1842
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					transform: {
						tx: -0.05,
						ty: -0.8
					},
					parts: [
						[
							// 1832
							{
								ref: ref.wanwan.eyes_small_back
							},
							// 1834
							{
								colorIdx: 3,
								ref: ref.wanwan.eyes_small,
								transform: {
									tx: -6.65,
									ty: 2.45,
									a: 1,
									d: 0.523,
									b: -0.022,
									c: 0.012
								}
							},
							// 1835
							{
								ref: ref.wanwan.eyes_small_pupils
							},
							// 1837
							{
								colorIdx: 1,
								ref: ref.wanwan.eyes_small_sockets,
								transform: {
									tx: 0.05,
									ty: 1.7,
									a: 1.001,
									d: 0.523,
									b: 0.02,
									c: 0.012
								}
							}
						],
						[
							// 1838
							{
								ref: ref.wanwan.eyes_small_demon_back
							},
							// 1840
							{
								colorIdx: 1,
								ref: ref.wanwan.eyes_small_demon_sockets,
								transform: {
									tx: 0.05,
									ty: 1.7,
									a: 1.001,
									d: 0.523,
									b: 0.02,
									c: 0.012
								}
							},
							// 1841
							{
								ref: ref.wanwan.eyes_small_demon_highlight
							}
						]
					]
				}
			]
		},
		// 1831 special
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					ref: ref.wanwan.eyes_special,
					transform: {
						tx: -29.65,
						ty: -10.15
					}
				}
			]
		}
	],
	// 1851 p4
	nose: [
		{
			partIdx: 4,
			frames: [0, 0, 1, 2],
			parts: [
				[
					// 1845
					{
						colorIdx: 0,
						ref: ref.wanwan.nose_highlight,
						transform: {
							tx: 0.35,
							ty: 3.35
						}
					},
					// 1847
					{
						colorIdx: 1,
						ref: ref.wanwan.nose
					}
				],
				[
					// 1845
					{
						colorIdx: 0,
						ref: ref.wanwan.nose_highlight,
						transform: {
							tx: -0.45,
							ty: 4.45,
							a: 0.713,
							d: 0.713,
							b: 0,
							c: -0.088
						}
					},
					// 1847
					{
						colorIdx: 1,
						ref: ref.wanwan.nose,
						transform: {
							tx: -0.4,
							ty: 2.05,
							a: 0.713,
							d: 0.713,
							b: 0,
							c: -0.088
						}
					}
				],
				[
					// 1848
					{
						colorIdx: 1,
						ref: ref.wanwan.nose_cute,
						transform: {
							tx: -0.4,
							ty: 2.05,
							a: 0.713,
							d: 0.713
						}
					},
					// 1850
					{
						ref: ref.wanwan.nose_cute_highlight
					}
				]
			]
		}
	],
	// 1872 p6a
	left_ear: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				[
					// 1853
					{
						colorIdx: 1,
						ref: ref.wanwan.left_ear,
						transform: {
							tx: 0.6,
							ty: -1.25
						}
					}
				],
				[
					// 1855
					{
						colorIdx: 0,
						ref: ref.wanwan.left_ear_up_inside,
						transform: {
							tx: -5.15,
							ty: -3.9
						}
					},
					// 1857
					{
						colorIdx: 1,
						ref: ref.wanwan.left_ear_up,
						transform: {
							tx: 1.7,
							ty: -2.75
						}
					}
				],
				[
					// 1859
					{
						colorIdx: 0,
						ref: ref.wanwan.left_ear_round_inside,
						transform: {
							tx: -4.85,
							ty: -1.05
						}
					},
					// 1861
					{
						colorIdx: 1,
						ref: ref.wanwan.left_ear_round,
						transform: {
							tx: -7.25,
							ty: -3.15,
							a: 0.839,
							d: 0.839
						}
					}
				],
				[
					// 1863
					{
						colorIdx: 1,
						ref: ref.wanwan.left_ear_pointy,
						transform: {
							tx: -5.8,
							ty: -2.05
						}
					}
				],
				[
					// 1865
					{
						colorIdx: 0,
						ref: ref.wanwan.left_ear_sharp_inside,
						transform: {
							tx: -6.1,
							ty: -1.05
						}
					},
					// 1867
					{
						colorIdx: 1,
						ref: ref.wanwan.left_ear_sharp,
						transform: {
							tx: -0.7,
							ty: -3.45
						}
					}
				],
				[
					// 1869
					{
						colorIdx: 0,
						ref: ref.wanwan.left_ear_lynx_inside,
						transform: {
							tx: -5.15,
							ty: -4.85
						}
					},
					// 1871
					{
						colorIdx: 1,
						ref: ref.wanwan.left_ear_lynx,
						transform: {
							tx: 1.85,
							ty: -1.25
						}
					}
				]
			]
		}
	],
	// 1885 p9
	hair: [
		{
			partIdx: 9,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 1874
					{
						colorIdx: 3,
						ref: ref.wanwan.hair_spots
					}
				],
				[
					// 1876
					{
						colorIdx: 1,
						ref: ref.wanwan.hair,
						transform: {
							tx: 4.1,
							ty: -13
						}
					},
					// 1874
					{
						colorIdx: 3,
						ref: ref.wanwan.hair_spots,
						transform: {
							tx: -1.6,
							ty: -1.45,
							a: 0.789,
							d: 0.789
						}
					}
				],
				[
					// 1878
					{
						colorIdx: 3,
						ref: ref.wanwan.hair_side_spots,
						transform: {
							tx: -1.6,
							ty: -1.45,
							a: 0.789,
							d: 0.789
						}
					},
					// 1880
					{
						colorIdx: 1,
						ref: ref.wanwan.hair_side,
						transform: {
							tx: 4.1,
							ty: -13
						}
					}
				],
				[
					// 1882
					{
						colorIdx: 3,
						ref: ref.wanwan.hair_up_spots,
						transform: {
							tx: -1.6,
							ty: -1.45,
							a: 0.789,
							d: 0.789
						}
					},
					// 1884
					{
						colorIdx: 1,
						ref: ref.wanwan.hair_up,
						transform: {
							tx: 4.1,
							ty: -13
						}
					}
				]
			]
		}
	],
	// 1896 p5
	mouth: [
		{
			partIdx: 5,
			frames: [0, 1, 2],
			parts: [
				[
					// 1887
					{
						colorIdx: 1,
						ref: ref.wanwan.mouth
					},
					// 1891
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2],
						transform: {
							tx: -1.7,
							ty: 1.45
						},
						parts: [
							// 1888
							{
								ref: ref.wanwan.mouth_fangs_young
							},
							// 1889
							{
								ref: ref.wanwan.mouth_fangs_adult
							},
							// 1890
							{
								ref: ref.wanwan.mouth_fangs_demon
							}
						]
					}
				],
				[
					// 1887
					{
						colorIdx: 1,
						ref: ref.wanwan.mouth,
						transform: {
							a: 1.275,
							d: 1
						}
					},
					// 1892
					{
						ref: ref.wanwan.mouth_fangs
					}
				],
				[
					// 1893
					{
						ref: ref.wanwan.mouth_angry_teeth
					},
					// 1895
					{
						colorIdx: 1,
						ref: ref.wanwan.mouth_angry,
						transform: {
							tx: 2.05,
							ty: -1.05,
							a: 0.887,
							d: 1,
							b: -0.018,
							c: 0
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
