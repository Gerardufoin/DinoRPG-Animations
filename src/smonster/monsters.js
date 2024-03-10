// @ts-check
import { bad } from '../sdino/bad.js';
import { grdien } from './grdien/grdien.js';
import { lucet } from './lucet/lucet.js';
import { mandragore } from './mandragore/mandragore.js';
import { taurus } from './taurus/taurus.js';

export let monsters = {
	grdien: grdien,
	mandragore: mandragore,
	lucet: lucet,
	taurus: taurus
};
export let error = bad;
