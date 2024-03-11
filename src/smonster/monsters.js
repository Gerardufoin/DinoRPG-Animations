// @ts-check
import { bad } from '../sdino/bad.js';
import { goupi, goupi2, goupi3 } from './goupi/goupi.js';
import { grdien } from './grdien/grdien.js';
import { lucet } from './lucet/lucet.js';
import { mandragore } from './mandragore/mandragore.js';
import { taurus } from './taurus/taurus.js';
import { wolf } from './wolf/wolf.js';

export const monsters = {
	goupi: goupi,
	goupi2: goupi2,
	goupi3: goupi3,
	wolf: wolf,
	grdien: grdien,
	mandragore: mandragore,
	lucet: lucet,
	taurus: taurus
};
export const error = bad;
