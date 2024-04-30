// @ts-check
import { ref } from '../references.js';

const small_star_pos = {
	tx: 0,
	ty: 0.15,
	a: 0.615,
	d: 0.615
};

// GFX 208 fxStar3
export const fx_star = {
	parts: {
		s: [
			{
				ref: ref.fx.star
			}
		]
	},
	animation: {
		id: 'fx_star',
		frames: [
			{
				s: small_star_pos
			},
			{
				s: small_star_pos
			},
			{
				s: small_star_pos
			},
			{
				s: small_star_pos
			},
			{
				s: small_star_pos
			},
			{
				s: small_star_pos
			},
			{
				s: small_star_pos
			},
			{
				s: small_star_pos
			},
			{
				s: small_star_pos
			},
			{
				s: {
					tx: 0,
					ty: 0.15
				}
			}
		]
	}
};
