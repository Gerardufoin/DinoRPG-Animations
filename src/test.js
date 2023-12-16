// @ts-check

import { Application, Container, Matrix, Sprite, Texture } from 'pixi.js';
import { TextureManager } from './display/TextureManager.js';
import { ref } from './sdino/references.js';
import { PixiHelper } from './display/PixiHelper.js';
import { decompressFromBase64 } from 'lz-string';

/**
 * Test class to instantiate a PixiJS scene and run some tests.
 */
export class test {
	/**
	 * Test scene instantiating SVG to test why they appear blurry.
	 * @returns {Application} A PixiJS application object.
	 */
	static testSVG() {
		const app = new Application({
			background: '#FBDAA0',
			width: 200,
			height: 200
		});
		let part = {
			transform: {
				tx: 12.5,
				ty: 1.7,
				a: 0.92,
				c: -0.05,
				d: 0.92
			},
			ref: ref.quetzu.back_small_wing
		};
		let parentTransform = {
			tx: -2.9,
			ty: -3.4,
			a: 1.221,
			d: 1.221
		};
		let topTransform = {
			tx: -10.5,
			ty: -16.8,
			a: 1.141,
			d: 1.141
		};

		let texture = TextureManager.getTextureFromCompressedReference(part.ref.svg, TextureManager.DEFAULT_RESOLUTION);
		const sprite = Sprite.from(texture);
		//sprite.scale.set(1 / TextureManager.DEFAULT_RESOLUTION);

		let cont = new Container();
		cont.addChild(sprite);
		//cont.scale.set(4);
		sprite.transform.setFromMatrix(
			PixiHelper.matrixFromObject(topTransform).append(
				PixiHelper.matrixFromObject(parentTransform).append(
					// Matrix created by multiplying the SWF transform with the SVG transform (offset)
					new Matrix(
						part.transform?.a ?? 1,
						part.transform?.b ?? 0,
						part.transform?.c ?? 0,
						part.transform?.d ?? 1,
						(part.transform?.a ?? 1) * -(part.ref?.offset?.x ?? 0) +
							(part.transform?.c ?? 0) * -(part.ref?.offset?.y ?? 0) +
							(part.transform?.tx ?? 0),
						(part.transform?.b ?? 0) * -(part.ref?.offset?.x ?? 0) +
							(part.transform?.d ?? 1) * -(part.ref?.offset?.y ?? 0) +
							(part.transform?.ty ?? 0)
					)
				)
			)
		);
		sprite.scale.x /= TextureManager.DEFAULT_RESOLUTION;
		sprite.scale.y /= TextureManager.DEFAULT_RESOLUTION;
		console.log(sprite.scale.x, sprite.scale.y);
		//console.log(sprite.rotation);
		cont.addChild(sprite);
		sprite.x = 100;
		sprite.y = 100;
		app.stage.addChild(sprite);

		const spriteRef = Sprite.from(
			Texture.from(decompressFromBase64(part.ref.svg), {
				resourceOptions: { scale: 4 }
			})
		);
		spriteRef.x = 50;
		spriteRef.y = 100;
		spriteRef.scale.x = 0.32; //0.64085406;
		spriteRef.scale.y = 0.32; //0.6417998030546;
		spriteRef.rotation = sprite.rotation;
		app.stage.addChild(spriteRef);

		const t = new Container();
		t.transform.setFromMatrix(PixiHelper.matrixFromObject(topTransform));
		const u = new Container();
		t.addChild(u);
		u.transform.setFromMatrix(PixiHelper.matrixFromObject(parentTransform));
		const v = new Container();
		u.addChild(v);
		v.transform.setFromMatrix(PixiHelper.matrixFromObject(part.transform));
		console.log(t.scale);
		console.log(u.scale);
		console.log(v.scale);
		return app;
	}
}
