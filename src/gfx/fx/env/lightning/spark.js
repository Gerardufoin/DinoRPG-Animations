// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../../../references.js';

export const SparkGlow = {
	distance: 5,
	color: 0xffffff,
	quality: 0.5,
	strength: 1
};

// GFX 275
export const env_lightning_spark = {
	parts: {
		s1: [
			{
				ref: ref.fx.env.lightning.spark_1,
				glow: SparkGlow,
				blend: BLEND_MODES.ADD
			}
		],
		s2: [
			{
				ref: ref.fx.env.lightning.spark_2,
				glow: SparkGlow,
				blend: BLEND_MODES.ADD
			}
		],
		s3: [
			{
				ref: ref.fx.env.lightning.spark_3,
				glow: SparkGlow,
				blend: BLEND_MODES.ADD
			}
		]
	},
	animation: {
		id: 'env_lightning_spark',
		frames: [
			{
				s1: {}
			},
			{
				s2: {}
			},
			{
				s3: {}
			},
			{
				s2: {}
			}
		]
	}
};
