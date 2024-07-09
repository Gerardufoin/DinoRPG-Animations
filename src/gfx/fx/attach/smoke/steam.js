// @ts-check
import { ref } from '../../../../dino/references_small.js';
import { fx_dirt_blur_filter, fx_dirt_frames, fx_smoke_frames, fx_smoke_small_frames } from './animations.js';

const fx_steam_dirt = {
	parts: {
		fx_dirt: [
			{
				ref: ref.fx.dust,
				blur: fx_dirt_blur_filter
			}
		]
	},
	animation: {
		id: 'fx_steam_dirt',
		frames: fx_dirt_frames
	}
};

// GFX 650 vapeur
export const fx_steam = {
	parts: {
		fx1: [fx_steam_dirt],
		fx2: [fx_steam_dirt],
		fx3: [fx_steam_dirt]
	},
	animation: {
		id: 'fx_steam',
		callbacks: {
			50: [['destroy']]
		},
		frames: fx_smoke_frames
	}
};

// GFX 649: vapeur_small
export const fx_steam_small = {
	parts: {
		fx1: [fx_steam_dirt],
		fx2: [fx_steam_dirt],
		fx3: [fx_steam_dirt]
	},
	animation: {
		id: 'fx_steam_small',
		callbacks: {
			50: [['destroy']]
		},
		frames: fx_smoke_small_frames
	}
};
