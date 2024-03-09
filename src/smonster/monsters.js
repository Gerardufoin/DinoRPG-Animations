// @ts-check
import { bad } from '../sdino/bad.js';
import { grdien } from './grdien/grdien.js';
import { mandragore } from './mandragore/mandragore.js';
import { taurus } from './taurus/taurus.js';

export let monsters = {
	grdien: grdien,
	mandragore: mandragore,
	taurus: taurus
};
export let error = bad;
