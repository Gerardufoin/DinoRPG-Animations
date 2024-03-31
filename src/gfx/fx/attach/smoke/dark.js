// @ts-check
import { ref } from '../../../../sdino/references.js';
import { fx_dirt_blur_filter, fx_dirt_frames, fx_smoke_frames } from './animations.js';

const fx_dark_dirt = {
	parts: {
		fx_dirt: [
			{
				ref: ref.fx.dust,
				colorOffset: {
					r: -180,
					g: -200,
					b: -200
				},
				blur: fx_dirt_blur_filter
			}
		]
	},
	animation: {
		id: 'fx_dark_dirt',
		frames: fx_dirt_frames
	}
};

export const fx_dark_smoke = {
	parts: {
		fx1: [fx_dark_dirt],
		fx2: [fx_dark_dirt],
		fx3: [fx_dark_dirt]
	},
	animation: {
		id: 'fx_dark_smoke',
		callbacks: {
			50: [['destroy']]
		},
		frames: fx_smoke_frames
	}
};
