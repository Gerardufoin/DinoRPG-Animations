// @ts-check
import { ref } from '../../../../sdino/references_small.js';
import { fx_dirt_blur_filter, fx_dirt_frames, fx_smoke_frames, fx_smoke_small_frames } from './animations.js';

const fx_smoke_dirt = {
	parts: {
		fx_dirt: [
			{
				ref: ref.fx.dust,
				colorOffset: {
					r: -11,
					g: -51,
					b: -92
				},
				blur: fx_dirt_blur_filter
			}
		]
	},
	animation: {
		id: 'fx_smoke_dirt',
		frames: fx_dirt_frames
	}
};

// GFX 679 smoke
export const fx_smoke = {
	parts: {
		fx1: [fx_smoke_dirt],
		fx2: [fx_smoke_dirt],
		fx3: [fx_smoke_dirt]
	},
	animation: {
		id: 'fx_smoke',
		callbacks: {
			50: [['destroy']]
		},
		frames: fx_smoke_frames
	}
};

// GFX 661: smoke_small
export const fx_smoke_small = {
	parts: {
		fx1: [fx_smoke_dirt],
		fx2: [fx_smoke_dirt],
		fx3: [fx_smoke_dirt]
	},
	animation: {
		id: 'fx_smoke_small',
		callbacks: {
			50: [['destroy']]
		},
		frames: fx_smoke_small_frames
	}
};
