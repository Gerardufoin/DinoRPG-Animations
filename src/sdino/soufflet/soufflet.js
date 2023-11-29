// @ts-check

import { soufflet_adult } from './soufflet_adult.js';
import { soufflet_larvae } from './soufflet_larvae.js';

export let soufflet = {
	partIdx: 1,
	frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	parts: [soufflet_larvae, soufflet_adult]
};
