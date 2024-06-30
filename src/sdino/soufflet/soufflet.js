// @ts-check

import { soufflet_adult } from './soufflet_adult.js';
import { soufflet_larvae } from './soufflet_larvae.js';
import { ref as ref_big } from '../references_big.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

// 2519
const big_shadow = {
	ref: ref_big.soufflet.shadow,
	transform: {
		tx: 0.7,
		ty: 5.9,
		a: -0.585,
		d: 0.96,
		b: 0.022,
		c: 0.111
	},
	blur: { x: 8, y: 1 }
};

const big_shadow_larvae = {
	...big_shadow,
	alpha: 0.238
};

const big_shadow_adult = {
	...big_shadow,
	alpha: 0.143
};

export const soufflet = {
	name: 'soufflet',
	width: 0.686,
	height: 0.656,
	palette: [
		[
			// col0
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82'],
			// col1
			['#FFAA1E', '#DF7E37', '#D1F49B', '#BBDB71', '#9273DB', '#71ECDF', '#FFFF5E', '#FF9191', '#D6FF61'],
			// col2
			['#DF7E37', '#B85F1D', '#CC5858', '#97CBFF', '#9273DB', '#CC7695', '#FFFF5E', '#FF9191', '#D6FF61'],
			// col3
			['#FFCC79', '#DBB576', '#FFF9AE', '#F0DC99']
		]
	],
	big: {
		transforms: [
			// 3577
			{
				tx: -26.7,
				ty: -1.85
			},
			// 3576 p1
			{
				tx: 24,
				ty: 24.55
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		// 2357
		shadow: {
			partIdx: 1,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9],
			transform: {
				tx: -6.6,
				ty: 48.45,
				a: -1,
				d: 1
			},
			parts: [
				{
					transform: {
						tx: -6.2,
						ty: 0.35
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -5.45,
						ty: -0.1,
						a: 1.074,
						d: 1.074
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -4.7,
						ty: -0.6,
						a: 1.148,
						d: 1.148
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -3.9,
						ty: -1.05,
						a: 1.222,
						d: 1.222
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -3.2,
						ty: -1.55,
						a: 1.296,
						d: 1.296
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -2.45,
						ty: -2,
						a: 1.369,
						d: 1.369
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -1.7,
						ty: -2.5,
						a: 1.443,
						d: 1.443
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -0.9,
						ty: -2.95,
						a: 1.517,
						d: 1.517
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -0.15,
						ty: -3.45,
						a: 1.591,
						d: 1.591
					},
					parts: [[big_shadow_larvae]]
				},
				{
					transform: {
						tx: -10.2,
						ty: -0.85,
						a: 1.075,
						d: 0.894
					},
					parts: [[big_shadow_adult]]
				}
			]
		},
		parts: {
			// 2577 p3
			butt: parts_big.butt,
			// 2596 p7b
			r_arm: parts_big.right_arm,
			// 2599
			body: parts_big.body,
			// 2620 p7a
			l_arm: parts_big.left_arm,
			// 2632 p5b
			r_antennae: parts_big.right_antennae,
			// 2637
			head: parts_big.head,
			// 2648 p6b
			r_eye: parts_big.right_eye,
			// 2657 p6a
			l_eye: parts_big.left_eye,
			// 2670 p5a
			l_antennae: parts_big.left_antennae,
			// 293
			view: parts_big.view
		},
		animations: {
			// 2671
			stand: portrait
		}
	},
	small: {
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		parts: [soufflet_larvae, soufflet_adult]
	}
};
