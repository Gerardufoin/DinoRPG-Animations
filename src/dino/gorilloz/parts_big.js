// @ts-check
import { ref } from '../references_big.js';

export const parts_big = {
	// 1579
	left_foot: [
		{
			colorIdx: 0,
			ref: ref.gorilloz.left_foot
		}
	],
	// 1582
	hands: [
		{
			colorIdx: 0,
			ref: ref.gorilloz.hands
		}
	],
	// 1589 p8b
	right_arm: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 2],
			parts: [
				[
					// 1584
					{
						colorIdx: 1,
						ref: ref.gorilloz.right_arm
					},
					// 1586
					{
						colorIdx: 1,
						ref: ref.gorilloz.right_arm_shoulder_fur,
						transform: {
							tx: 1.85,
							ty: -22.95
						}
					}
				],
				[
					// 1588
					{
						colorIdx: 1,
						ref: ref.gorilloz.right_arm_fur
					},
					// 1586
					{
						colorIdx: 1,
						ref: ref.gorilloz.right_arm_shoulder_fur,
						transform: {
							tx: 1.85,
							ty: -22.95
						}
					}
				],
				[
					// 1584
					{
						colorIdx: 1,
						ref: ref.gorilloz.right_arm
					}
				]
			]
		}
	],
	// 1592
	body: [
		{
			colorIdx: 1,
			ref: ref.gorilloz.body
		}
	],
	// 1595 p5b
	right_ear: [
		{
			partIdx: 5,
			frames: [0, -1, -1],
			parts: [
				// 1594
				{
					colorIdx: 0,
					ref: ref.gorilloz.right_ear,
					transform: {
						tx: -1.3,
						ty: -1.2
					}
				}
			]
		}
	],
	// 1598
	left_leg: [
		// 1597
		{
			colorIdx: 1,
			ref: ref.gorilloz.left_leg
		}
	],
	// 1624 p7
	back_hair: [
		{
			partIdx: 7,
			frames: [0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9],
			parts: [
				// 1605
				{
					transform: {
						tx: -1.35,
						ty: -0.05
					},
					parts: [
						[
							// 1600
							{
								colorIdx: 3,
								ref: ref.gorilloz.back_hair_banana,
								transform: {
									tx: -7.8,
									ty: 1.45
								}
							},
							// 1602
							{
								colorIdx: 1,
								ref: ref.gorilloz.back_hair_banana_fur,
								transform: {
									tx: -17.2,
									ty: 0.2
								}
							},
							// 1604
							{
								colorIdx: 3,
								ref: ref.gorilloz.back_hair_banana_peel,
								transform: {
									tx: -13.25,
									ty: -8.3
								}
							}
						]
					]
				},
				// 1607
				{
					colorIdx: 1,
					ref: ref.gorilloz.back_hair,
					transform: {
						tx: -8.4,
						ty: -0.85
					}
				},
				// 1609
				{
					colorIdx: 1,
					ref: ref.gorilloz.back_hair_pointy_small,
					transform: {
						tx: -0.3
					}
				},
				// 1611
				{
					colorIdx: 1,
					ref: ref.gorilloz.back_hair_round,
					transform: {
						tx: -0.3
					}
				},
				[
					// 1613
					{
						colorIdx: 0,
						ref: ref.gorilloz.back_hair_shaved,
						transform: {
							tx: 0.55,
							ty: -7.25
						}
					},
					// 1615
					{
						colorIdx: 1,
						ref: ref.gorilloz.back_hair_square,
						transform: {
							tx: -0.3
						}
					}
				],
				// 1615
				{
					colorIdx: 1,
					ref: ref.gorilloz.back_hair_square,
					transform: {
						tx: -0.3
					}
				},
				// 1617
				{
					colorIdx: 1,
					ref: ref.gorilloz.back_hair_rasta,
					transform: {
						tx: -0.3
					}
				},
				// 1619
				{
					colorIdx: 1,
					ref: ref.gorilloz.back_hair_pointy,
					transform: {
						tx: -0.3
					}
				},
				// 1621
				{
					colorIdx: 1,
					ref: ref.gorilloz.back_hair_curved,
					transform: {
						tx: -0.3
					}
				},
				// 1623
				{
					colorIdx: 1,
					ref: ref.gorilloz.back_hair_goku,
					transform: {
						tx: -2.3,
						ty: 1.8,
						a: 0.891,
						d: 0.891
					}
				}
			]
		}
	],
	// 1629 p9b
	right_sideburn: [
		// Script in 1624 p7 hides sideburns at idx 9
		{
			partIdx: 7,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
			parts: [
				{
					partIdx: 9,
					frames: [0, 1],
					parts: [
						// 1626
						{
							colorIdx: 1,
							ref: ref.gorilloz.right_sideburn
						},
						// 1628
						{
							colorIdx: 1,
							ref: ref.gorilloz.right_sideburn_shaved
						}
					]
				}
			]
		}
	],
	// 1654 p3
	mouth: [
		{
			partIdx: 3,
			frames: [0, 1, 2, 3, 4],
			parts: [
				[
					// 1631
					{
						colorIdx: 0,
						ref: ref.gorilloz.mouth
					},
					// 1632
					{
						ref: ref.gorilloz.mouth_highlight
					}
				],
				[
					// 1635
					{
						ref: ref.gorilloz.mouth_open_teeth
					},
					// 1637
					{
						colorIdx: 0,
						ref: ref.gorilloz.mouth_open
					},
					// 1632
					{
						ref: ref.gorilloz.mouth_highlight
					}
				],
				[
					// 1639
					{
						colorIdx: 0,
						ref: ref.gorilloz.mouth_sad
					},
					// 1640
					{
						ref: ref.gorilloz.mouth_sad_highlight
					}
				],
				[
					// 1642
					{
						colorIdx: 1,
						ref: ref.gorilloz.mouth_beard_fur,
						transform: {
							tx: 5.8,
							ty: 14.7
						}
					},
					// 1644
					{
						colorIdx: 0,
						ref: ref.gorilloz.mouth_beard
					}
				],
				[
					// 1647
					{
						partIdx: 1,
						frames: [-1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 1],
						transform: {
							tx: -19.15,
							ty: -1.3
						},
						parts: [
							// 1645
							{
								ref: ref.gorilloz.mouth_fangs_right_tooth_adult
							},
							// 1646
							{
								ref: ref.gorilloz.mouth_fangs_right_tooth_demon
							}
						]
					},
					// 1650
					{
						colorIdx: 0,
						ref: ref.gorilloz.mouth_fangs
					},
					// 1648
					{
						ref: ref.gorilloz.mouth_fangs_highlight
					},
					// 1653
					{
						partIdx: 1,
						frames: [-1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 1],
						transform: {
							tx: -3.3,
							ty: -1.2
						},
						parts: [
							// 1645
							{
								ref: ref.gorilloz.mouth_fangs_left_tooth_adult
							},
							// 1646
							{
								ref: ref.gorilloz.mouth_fangs_left_tooth_demon
							}
						]
					}
				]
			]
		},
		// 1634 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: 1.65,
				ty: -5.5
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 7.15,
							ty: -1,
							a: 1.627,
							d: 1.627
						}
					}
				],
				[
					// 1633
					{
						ref: ref.gorilloz.mouth_hurt_blood
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: -5.8,
							ty: 1.2
						}
					},
					// 357
					{
						ref: ref.hurt.bruise_purple,
						transform: {
							tx: 13.75,
							ty: -0.05,
							a: 1.127,
							d: 1.127,
							b: -0.576,
							c: 0.576
						}
					}
				]
			]
		}
	],
	// 1661 p5a
	left_ear: [
		{
			partIdx: 5,
			frames: [0, 1, 2],
			parts: [
				// 1656
				{
					colorIdx: 0,
					ref: ref.gorilloz.left_ear_long
				},
				// 1658
				{
					colorIdx: 0,
					ref: ref.gorilloz.left_ear_small
				},
				// 1660
				{
					colorIdx: 0,
					ref: ref.gorilloz.left_ear
				}
			]
		}
	],
	// 1666 p9a
	left_sideburn: [
		// Script in 1624 p7 hides sideburns at idx 9
		{
			partIdx: 7,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
			parts: [
				{
					partIdx: 9,
					frames: [0, 1],
					parts: [
						// 1663
						{
							colorIdx: 1,
							ref: ref.gorilloz.left_sideburn
						},
						// 1665
						{
							colorIdx: 1,
							ref: ref.gorilloz.left_sideburn_shaved
						}
					]
				}
			]
		}
	],
	// 1680 p8a
	left_arm: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 2],
			parts: [
				[
					// 1676 (also 1667 and 1678)
					{
						colorIdx: 1,
						ref: ref.gorilloz.left_arm
					},
					// 1669
					{
						colorIdx: 1,
						ref: ref.gorilloz.left_arm_shoulder_fur,
						transform: {
							tx: 3.95,
							ty: -20.3
						}
					}
				],
				[
					// 1674
					{
						colorIdx: 1,
						ref: ref.gorilloz.left_arm_fur
					},
					// 1669
					{
						colorIdx: 1,
						ref: ref.gorilloz.left_arm_shoulder_fur,
						transform: {
							tx: 3.95,
							ty: -20.3
						}
					}
				],
				[
					// 1676
					{
						colorIdx: 1,
						ref: ref.gorilloz.left_arm
					}
				]
			]
		},
		// 1673 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -63.3,
				ty: 17.15
			},
			parts: [
				[
					// 1671
					{
						ref: ref.gorilloz.left_arm_hurt_blood
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 87.15,
							ty: -42.5,
							a: 1.404,
							d: 1.404
						}
					}
				],
				[
					// 1672
					{
						ref: ref.gorilloz.left_arm_hurt_blood_heavy
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 58.75,
							ty: -22.25,
							a: 2.012,
							d: 2.012
						}
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 49.65,
							ty: 17.8,
							a: 1.404,
							d: 1.404
						}
					}
				]
			]
		}
	],
	// 1725 p6
	eyes: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 1689
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
						transform: {
							ty: 3.9
						},
						parts: [
							[
								// 1681
								{
									ref: ref.gorilloz.eyes_back
								},
								// 1683
								{
									colorIdx: 2,
									ref: ref.gorilloz.eyes_young,
									transform: {
										tx: -2.55,
										ty: 0.45
									}
								},
								// 1684
								{
									ref: ref.gorilloz.eyes_young_highlight
								}
							],
							[
								// 1681
								{
									ref: ref.gorilloz.eyes_back
								},
								// 1686
								{
									colorIdx: 2,
									ref: ref.gorilloz.eyes_adult,
									transform: {
										tx: -4.45,
										ty: 1.3
									}
								},
								// 1687
								{
									ref: ref.gorilloz.eyes_adult_highlight
								}
							],
							[
								// 1688
								{
									ref: ref.gorilloz.eyes_demon
								}
							]
						]
					},
					// 1691
					{
						colorIdx: 0,
						ref: ref.gorilloz.eyes_sockets,
						transform: {
							tx: 0.1,
							ty: 0.25,
							a: 0.945,
							d: 0.945
						}
					}
				],
				[
					// 1701
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
						transform: {
							tx: -2.1,
							ty: 3.35
						},
						parts: [
							[
								// 1692
								{
									ref: ref.gorilloz.eyes_sad_back
								},
								// 1694
								{
									colorIdx: 2,
									ref: ref.gorilloz.eyes_sad_young,
									transform: {
										tx: -1.45,
										ty: -0.8
									}
								},
								// 1695
								{
									ref: ref.gorilloz.eyes_sad_young_highlight
								}
							],
							[
								// 1692
								{
									ref: ref.gorilloz.eyes_sad_back
								},
								// 1698
								{
									colorIdx: 2,
									ref: ref.gorilloz.eyes_sad_adult,
									transform: {
										tx: -1.45,
										ty: -0.8
									}
								},
								// 1699
								{
									ref: ref.gorilloz.eyes_sad_adult_highlight
								}
							],
							[
								// 1700
								{
									ref: ref.gorilloz.eyes_sad_demon
								}
							]
						]
					},
					// 1703
					{
						colorIdx: 0,
						ref: ref.gorilloz.eyes_sad_sockets
					},
					// 1704
					{
						ref: ref.gorilloz.eyes_sad_sockets_highlight
					}
				],
				[
					// 1714
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
						transform: {
							tx: -3.05,
							ty: 0.95
						},
						parts: [
							[
								// 1705
								{
									ref: ref.gorilloz.eyes_surprised_back
								},
								// 1707
								{
									colorIdx: 2,
									ref: ref.gorilloz.eyes_surprised_young,
									transform: {
										tx: -1.75,
										ty: 1
									}
								},
								// 1708
								{
									ref: ref.gorilloz.eyes_surprised_young_highlight
								}
							],
							[
								// 1705
								{
									ref: ref.gorilloz.eyes_surprised_back
								},
								// 1711
								{
									colorIdx: 2,
									ref: ref.gorilloz.eyes_surprised_adult,
									transform: {
										tx: -2.15,
										ty: 0.6
									}
								},
								// 1712
								{
									ref: ref.gorilloz.eyes_surprised_adult_highlight
								}
							],
							[
								// 1700
								{
									ref: ref.gorilloz.eyes_surprised_demon
								}
							]
						]
					},
					// 1716
					{
						colorIdx: 0,
						ref: ref.gorilloz.eyes_surprised_sockets,
						transform: {
							tx: 0,
							ty: -0.15,
							a: 1.016,
							d: 0.873
						}
					}
				],
				[
					// 1720
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
						transform: {
							tx: -2.35,
							ty: 3.95
						},
						parts: [
							// 1717
							{
								ref: ref.gorilloz.eyes_pissed_young
							},
							// 1718
							{
								ref: ref.gorilloz.eyes_pissed_adult
							},
							// 1719
							{
								ref: ref.gorilloz.eyes_pissed_demon
							}
						]
					},
					// 1722
					{
						colorIdx: 0,
						ref: ref.gorilloz.eyes_pissed_sockets,
						transform: {
							tx: 0.1,
							ty: 0.25,
							a: 0.945,
							d: 0.945
						}
					},
					// 1724
					{
						colorIdx: 1,
						ref: ref.gorilloz.eyes_pissed_fur,
						transform: {
							tx: 0.95,
							ty: -3.95
						}
					}
				]
			]
		}
	],
	// 1736 p7c
	front_hair: [
		{
			partIdx: 7,
			frames: [0, 1, 1, 2, -1, -1, -1, -1, -1, 3, 3, -1, -1, -1, -1, 4, 4],
			parts: [
				// 1727
				{
					colorIdx: 3,
					ref: ref.gorilloz.front_hair_banana,
					transform: {
						tx: -18.55,
						ty: 0.8
					}
				},
				// 1729
				{
					colorIdx: 1,
					ref: ref.gorilloz.front_hair,
					transform: {
						tx: -19.1,
						ty: 6.75
					}
				},
				// 1731
				{
					colorIdx: 1,
					ref: ref.gorilloz.front_hair_tintin,
					transform: {
						tx: -2.3,
						ty: 3
					}
				},
				// 1733
				{
					colorIdx: 1,
					ref: ref.gorilloz.front_hair_rasta,
					transform: {
						tx: -1.15,
						ty: -2.6
					}
				},
				// 1735
				{
					colorIdx: 1,
					ref: ref.gorilloz.front_hair_goku,
					transform: {
						tx: -16.2,
						ty: 4.95
					}
				}
			]
		}
	],
	// 1743 p4
	nose: [
		{
			partIdx: 4,
			frames: [0, 1, 2],
			parts: [
				// 1738
				{
					colorIdx: 0,
					ref: ref.gorilloz.nose,
					transform: {
						tx: 0.15,
						ty: 0.3
					}
				},
				// 1740
				{
					colorIdx: 0,
					ref: ref.gorilloz.nose_flat,
					transform: {
						tx: -36.2,
						ty: -19.15
					}
				},
				// 1742
				{
					colorIdx: 0,
					ref: ref.gorilloz.nose_bat,
					transform: {
						tx: -36.2,
						ty: -19.15
					}
				}
			]
		}
	],
	// 1745 special
	special: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 1744
				{
					ref: ref.gorilloz.special
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
