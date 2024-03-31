// @ts-check
import { fx_dust_frames } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { ref } from '../references.js';

export const parts = {
	// 706
	right_top_arm: [
		{
			ref: ref.vener.right_top_arm
		}
	],
	// 708
	body: [
		{
			ref: ref.vener.body
		}
	],
	// 710
	mouth_back: [
		{
			ref: ref.vener.mouth_back
		}
	],
	// 712
	neck: [
		{
			ref: ref.vener.neck
		}
	],
	// 714
	tail_start: [
		{
			ref: ref.vener.tail_start
		}
	],
	// 716
	left_bottom_leg: [
		{
			ref: ref.vener.left_bottom_leg
		}
	],
	// 718
	head: [
		{
			ref: ref.vener.head
		}
	],
	// 720
	mouth_front: [
		{
			ref: ref.vener.mouth_front
		}
	],
	// 722
	left_shoulder: [
		{
			ref: ref.vener.left_shoulder
		}
	],
	// 724
	right_bottom_arm: [
		{
			ref: ref.vener.right_bottom_arm
		}
	],
	// 726
	left_top_arm: [
		{
			ref: ref.vener.left_top_arm
		}
	],
	// 728
	left_bottom_arm: [
		{
			ref: ref.vener.left_bottom_arm
		}
	],
	// 730
	left_hand: [
		{
			ref: ref.vener.left_hand
		}
	],
	// 732
	right_hand: [
		{
			ref: ref.vener.right_hand
		}
	],
	// 734
	tail_end: [
		{
			ref: ref.vener.tail_end
		}
	],
	dust: [
		{
			parts: {
				fx_dust: [
					{
						ref: ref_sdino.fx.dust
					}
				]
			},
			animation: {
				id: 'vener_fx_dust',
				frames: fx_dust_frames
			}
		}
	]
};
