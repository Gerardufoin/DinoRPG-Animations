// @ts-check
import { fx_slash } from '../../sdino/fx/slash.js';
import { ref } from '../references.js';

export const parts = {
	// 2158
	claws: [
		// 2157
		{
			ref: ref.lucet.claw,
			transform: {
				tx: 0.0,
				ty: 7.7
			}
		},
		// 2157
		{
			ref: ref.lucet.claw,
			transform: {
				tx: 11.4,
				ty: 12.5,
				a: 0.866,
				d: 0.866,
				b: -0.5,
				c: 0.5
			}
		},
		// 2157
		{
			ref: ref.lucet.claw,
			transform: {
				tx: 24.8,
				ty: 11.05,
				a: 0.259,
				d: 0.259,
				b: -0.966,
				c: 0.966
			}
		}
	],
	// 2162
	forearm: [
		// 2159
		{
			ref: ref.lucet.forearm
		},
		// 2160
		{
			ref: ref.lucet.sigil,
			transform: {
				tx: 2.5,
				ty: 70.65
			},
			glow: {
				distance: 5,
				color: '#bf642d',
				quality: 1,
				strength: 1
			}
		}
	],
	// 2164
	arm: [
		{
			ref: ref.lucet.arm
		}
	],
	// 2166
	wing: [
		{
			ref: ref.lucet.wing,
			glow: {
				distance: 6,
				color: 0xffffff,
				quality: 0.5,
				strength: 1
			}
		}
	],
	// 2168
	tail_end: [
		{
			ref: ref.lucet.tail_end
		}
	],
	// 2170
	tail: [
		{
			ref: ref.lucet.tail
		}
	],
	// 2172
	lower_body: [
		{
			ref: ref.lucet.lower_body
		}
	],
	// 2174
	body: [
		{
			ref: ref.lucet.body
		}
	],
	// 2176
	l_ear: [
		{
			ref: ref.lucet.l_ear
		}
	],
	// 2178
	head: [
		{
			ref: ref.lucet.head
		}
	],
	// 2180
	r_ear: [
		{
			ref: ref.lucet.r_ear
		}
	],
	// 2186
	light: [
		{
			ref: ref.lucet.light
		}
	],
	// 2189
	attack: [
		{
			ref: ref.lucet.attack
		}
	],
	// 2195
	slash: fx_slash,
	// 2199
	head_sleep: [
		{
			ref: ref.lucet.head_sleep
		}
	]
};
