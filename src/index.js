// Sandbox test page
import { Application, Container, Graphics, Sprite, Texture, Matrix } from 'pixi.js';
import { dino } from './dino.js';
import { sdino } from './sdino.js';
import { smonster } from './smonster.js';
import { Fight } from './fight/Fight.js';
//import { PixiHelper } from './display/PixiHelper.js';

// Help combining transforms from parented animations
// First transform is the parent, second is the child
/*console.log(
	PixiHelper.matrixFromObject({
		tx: -0.75,
		ty: 1.45,
		a: 0.58367919921875,
		d: 0.8189697265625
	}).append(
		PixiHelper.matrixFromObject({
			tx: 0.6,
			ty: 3.4
		})
	)
);*/

// Ultimately, only the project class should be exposed. Other classes are currently there for testing purposes.
export { Application, Graphics, Container, Sprite, Texture, Matrix, sdino, smonster, Fight, dino };
