// @ts-check
import { ref } from '../../../../dino/references_small.js';
import { fx_dirt_frames, fx_dirt_blur_filter, fx_smoke_frames, fx_smoke_small_frames } from './animations.js';

const fx_brule_dirt = {
	parts: {
		fx_dirt: [
			{
				ref: ref.fx.dust,
				colorOffset: {
					r: -155,
					g: -189,
					b: -167
				},
				blur: fx_dirt_blur_filter
			}
		]
	},
	animation: {
		id: 'fx_brule_dirt',
		frames: fx_dirt_frames
	}
};

// GFX 679 brule
export const fx_brule = {
	parts: {
		fx1: [fx_brule_dirt],
		fx2: [fx_brule_dirt],
		fx3: [fx_brule_dirt]
	},
	animation: {
		id: 'fx_brule',
		callbacks: {
			50: [['destroy']]
		},
		frames: fx_smoke_frames
	}
};

// NO GFX: brule_small
export const fx_brule_small = {
	parts: {
		fx1: [fx_brule_dirt],
		fx2: [fx_brule_dirt],
		fx3: [fx_brule_dirt]
	},
	animation: {
		id: 'fx_brule_small',
		callbacks: {
			50: [['destroy']]
		},
		frames: fx_smoke_small_frames
	}
};
