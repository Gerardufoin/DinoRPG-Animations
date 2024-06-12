// Sandbox test page
import { Application, Container, Graphics, Texture, Matrix } from 'pixi.js';
import { dino } from './dino.js';
import { sdino } from './sdino.js';
import { smonster } from './smonster.js';
import { Fight } from './fight/Fight.js';
//import { PixiHelper } from './display/PixiHelper.js';

// Help combining transforms from parented animations
// First transform is the parent, second is the child
/*console.log(
	PixiHelper.matrixFromObject({
		tx: -26.7,
		ty: -1.85
	}).append(
		PixiHelper.matrixFromObject({
			tx: 36.05,
			ty: 53.95,
			a: 0.751,
			d: 0.998,
			b: 0.051,
			c: -0.031
		})
	)
);*/

// Ultimately, only the project class should be exposed. Other classes are currently there for testing purposes.
export { Application, Graphics, Container, Texture, Matrix, sdino, smonster, Fight, dino };
