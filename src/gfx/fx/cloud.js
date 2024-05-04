// @ts-check
import { ref } from '../references.js';

// GFX 910 cloud
export const fx_cloud = {
	parts: {
		cloud: [
			{
				name: 'smc',
				ref: ref.fx.cloud.cloud
			}
		],
		mask: [
			{
				ref: ref.fx.cloud.cloud_mask,
				transform: {
					tx: 49.1,
					ty: -24.95,
					a: 0.981,
					d: 3.66
				}
			}
		]
	},
	masks: {
		cloud: 'mask'
	},
	animation: {
		id: 'fx_cloud',
		callbacks: {
			7: [['stop']]
		},
		expectedScaling: {
			cloud: 1
		},
		frames: [
			{
				mask: {
					l: 1
				},
				cloud: {
					tx: -0.05,
					a: 0.094,
					d: 0.094,
					l: 0
				}
			},
			{
				mask: {
					l: 1
				},
				cloud: {
					tx: -0.05,
					a: 0.335,
					d: 0.335,
					l: 0
				}
			},
			{
				mask: {
					l: 1
				},
				cloud: {
					tx: -0.05,
					a: 0.538,
					d: 0.538,
					l: 0
				}
			},
			{
				mask: {
					l: 1
				},
				cloud: {
					a: 0.704,
					d: 0.704,
					l: 0
				}
			},
			{
				mask: {
					l: 1
				},
				cloud: {
					tx: -0.05,
					a: 0.834,
					d: 0.834,
					l: 0
				}
			},
			{
				mask: {
					l: 1
				},
				cloud: {
					tx: -0.05,
					a: 0.926,
					d: 0.926,
					l: 0
				}
			},
			{
				mask: {
					l: 1
				},
				cloud: {
					a: 0.982,
					d: 0.982,
					l: 0
				}
			},
			{
				mask: {
					l: 1
				},
				cloud: {
					l: 0
				}
			}
		]
	}
};
