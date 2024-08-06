// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

export const parts = {
	// 2952_p6a
	ear: [
		{
			ref: ref.bao.ear
		}
	],
	// 2954
	butt: [
		{
			ref: ref.bao.butt
		}
	],
	// 2956_p4b
	leg: [
		{
			ref: ref.bao.leg
		}
	],
	// 2961_p7
	body: [
		// 2958
		{
			ref: ref.bao.body
		},
		// 2960
		{
			ref: ref.bao.body_marks,
			transform: {
				tx: -0.5,
				ty: -2.95
			},
			blend: BLEND_MODES.ADD
		}
	],
	// 2963
	chair: [
		{
			ref: ref.bao.chair
		}
	],
	// 2965
	bao: [
		{
			ref: ref.bao.bao
		}
	],
	// 2967
	right_leash: [
		{
			ref: ref.bao.right_leash
		}
	],
	// 2969_p8
	head: [
		{
			ref: ref.bao.head
		}
	],
	// 2971_p5
	horn: [
		{
			ref: ref.bao.horn
		}
	],
	// 2973_p4
	nostril: [
		{
			ref: ref.bao.nostril
		}
	],
	// 2979_p3
	eye: [
		// 2974
		{
			ref: ref.bao.eye_skin
		},
		// 2976
		{
			ref: ref.bao.eye_socket
		},
		// 2978
		{
			ref: ref.bao.eye,
			transform: {
				tx: -0.05,
				ty: 0.95
			}
		}
	],
	// 2981
	left_leash: [
		{
			ref: ref.bao.left_leash
		}
	],
	// 2986
	bao_hit: [
		{
			ref: ref.bao.bao_hit
		}
	],
	// 2993
	bao_right_arm_release_1: [
		{
			ref: ref.bao.bao_right_arm_release_1
		}
	],
	// 2995
	bao_body_release: [
		{
			ref: ref.bao.bao_body_release
		}
	],
	// 2997
	bao_right_arm_release_2: [
		{
			ref: ref.bao.bao_right_arm_release_2
		}
	]
};
