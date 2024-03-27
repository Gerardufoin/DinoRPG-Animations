import { drips_frames } from '../../gluon/animations/drips.js';
import { ref } from '../../references.js';

// 131
export const ewater_drips = {
	parts: {
		drip_1: [
			{
				ref: ref.ewater.drip
			}
		],
		drip_2: [
			{
				ref: ref.ewater.drip
			}
		],
		drip_3: [
			{
				ref: ref.ewater.drip
			}
		]
	},
	animation: {
		id: 'ewater_drips',
		frames: drips_frames
	}
};
