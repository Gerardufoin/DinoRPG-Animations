import { ref } from '../../references.js';

const grr_glow = {
	distance: 5,
	color: 0xff0000,
	quality: 1,
	strength: 1
};

// 2324
export const piglou_attack_grr = {
	parts: {
		g1: [
			{
				ref: ref.piglou.attack_grr_1,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_1,
				glow: grr_glow,
				transform: {
					tx: -17,
					a: -1
				},
				flippable: -1
			}
		],
		g2: [
			{
				ref: ref.piglou.attack_grr_2,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_2,
				glow: grr_glow,
				transform: {
					tx: -40.5,
					a: -1
				},
				flippable: -1
			}
		],
		g3: [
			{
				ref: ref.piglou.attack_grr_3,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_3,
				glow: grr_glow,
				transform: {
					tx: -60,
					a: -1
				},
				flippable: -1
			}
		],
		g4: [
			{
				ref: ref.piglou.attack_grr_4,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_4,
				glow: grr_glow,
				transform: {
					tx: -67,
					a: -1
				},
				flippable: -1
			}
		],
		g5: [
			{
				ref: ref.piglou.attack_grr_5,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_5,
				glow: grr_glow,
				transform: {
					tx: -91.8,
					a: -1
				},
				flippable: -1
			}
		],
		g6: [
			{
				ref: ref.piglou.attack_grr_6,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_6,
				glow: grr_glow,
				transform: {
					tx: -93.8,
					a: -1
				},
				flippable: -1
			}
		],
		g7: [
			{
				ref: ref.piglou.attack_grr_7,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_7,
				glow: grr_glow,
				transform: {
					tx: -92.4,
					a: -1
				},
				flippable: -1
			}
		],
		g8: [
			{
				ref: ref.piglou.attack_grr_8,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_8,
				glow: grr_glow,
				transform: {
					tx: -88.3,
					a: -1
				},
				flippable: -1
			}
		],
		g9: [
			{
				ref: ref.piglou.attack_grr_9,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_9,
				glow: grr_glow,
				transform: {
					tx: -86.8,
					a: -1
				},
				flippable: -1
			}
		],
		g10: [
			{
				ref: ref.piglou.attack_grr_10,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_10,
				glow: grr_glow,
				transform: {
					tx: -87.3,
					a: -1
				},
				flippable: -1
			}
		],
		g11: [
			{
				ref: ref.piglou.attack_grr_11,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_11,
				glow: grr_glow,
				transform: {
					tx: -91.8,
					a: -1
				},
				flippable: -1
			}
		],
		g12: [
			{
				ref: ref.piglou.attack_grr_12,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_12,
				glow: grr_glow,
				transform: {
					tx: -101.6,
					a: -1
				},
				flippable: -1
			}
		],
		g13: [
			{
				ref: ref.piglou.attack_grr_13,
				glow: grr_glow,
				flippable: 1
			},
			{
				ref: ref.piglou.attack_grr_13,
				glow: grr_glow,
				transform: {
					tx: -126.7,
					a: -1
				},
				flippable: -1
			}
		]
	},
	animation: {
		id: 'piglou_attack_grr',
		callbacks: {
			26: [['stop']]
		},
		frames: [
			{ g1: {} },
			{ g1: {} },
			{ g2: {} },
			{ g2: {} },
			{ g3: {} },
			{ g3: {} },
			{ g4: {} },
			{ g4: {} },
			{ g5: {} },
			{ g5: {} },
			{ g6: {} },
			{ g6: {} },
			{ g7: {} },
			{ g7: {} },
			{ g8: {} },
			{ g8: {} },
			{ g9: {} },
			{ g9: {} },
			{ g10: {} },
			{ g10: {} },
			{ g11: {} },
			{ g11: {} },
			{ g12: {} },
			{ g12: {} },
			{ g13: {} },
			{ g13: {} },
			{}
		]
	}
};
