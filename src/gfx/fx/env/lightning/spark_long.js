// @ts-check
import { ref } from '../../../references.js';
import { SparkGlow } from './spark.js';

// GFX 271
export const env_lightning_spark_long = {
	parts: {
		sl1: [
			{
				ref: ref.fx.env.lightning.spark_long_1,
				glow: SparkGlow
			}
		],
		sl2: [
			{
				ref: ref.fx.env.lightning.spark_long_1,
				glow: SparkGlow
			}
		]
	},
	animation: {
		id: 'env_lightning_spark_long',
		frames: [
			{
				sl1: {}
			},
			{
				sl1: {}
			},
			{
				sl2: {}
			},
			{
				sl2: {}
			}
		]
	}
};
