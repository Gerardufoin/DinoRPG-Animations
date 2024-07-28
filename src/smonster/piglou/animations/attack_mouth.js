import { ref } from '../../references.js';

// 2309
export const piglou_attack_mouth = {
	parts: {
		back: [
			{
				ref: ref.piglou.attack_mouth
			}
		],
		uvula: [
			{
				ref: ref.piglou.attack_mouth_uvula
			}
		],
		tongue: [
			{
				ref: ref.piglou.attack_mouth_tongue
			}
		]
	},
	animation: {
		id: 'piglou_attack_mouth',
		frames: [
			{
				uvula: {
					tx: 5.3,
					ty: 9.6,
					l: 2
				},
				tongue: {
					tx: 4.25,
					ty: 17.35,
					l: 1
				},
				back: {
					l: 0
				}
			},
			{
				uvula: {
					tx: 5.5,
					ty: 9.6,
					a: 1,
					b: 0,
					c: 0.111,
					d: 1.006,
					l: 2
				},
				tongue: {
					tx: 3.4,
					ty: 17.4,
					a: 1,
					b: 0,
					c: 0.07,
					d: 1.002,
					l: 1
				},
				back: {
					l: 0
				}
			},
			{
				uvula: {
					tx: 5.7,
					ty: 9.6,
					b: 0,
					c: 0.228,
					l: 2
				},
				tongue: {
					tx: 3.1,
					ty: 17.4,
					b: 0,
					c: 0.142,
					l: 1
				},
				back: {
					l: 0
				}
			},
			{
				uvula: {
					tx: 5.55,
					ty: 9.6,
					a: 1,
					b: 0,
					c: 0.111,
					d: 1.006,
					l: 2
				},
				tongue: {
					tx: 4,
					ty: 17.4,
					a: 1,
					b: 0,
					c: 0.07,
					d: 1.002,
					l: 1
				},
				back: {
					l: 0
				}
			},
			{
				uvula: {
					tx: 5.3,
					ty: 9.6,
					l: 2
				},
				tongue: {
					tx: 4.25,
					ty: 17.35,
					l: 1
				},
				back: {
					l: 0
				}
			}
		]
	}
};
