/* eslint-disable */
const dinoValues = '0123456789ABCDEFGH';
const values = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

let nbDino = 500;
/**
 * Get dinoz as a still image tag
 */
function randomDinoPortrait() {
	if (nbDino-- <= 0) return;
	let code = dinoValues.charAt(Math.floor(Math.random() * dinoValues.length));
	code += values.charAt(Math.floor(Math.random() * 11));
	// 7 next = body part
	// 4 next = color
	for (let i = 0; i < 11; ++i) {
		code += values.charAt(Math.floor(Math.random() * values.length));
	}
	// 1 next = palette
	code += '0';
	// 1 next = special
	code += Math.random() < 0.1 ? '1' : '0';
	// 1 next = nothing
	code += '0';
	new DinoAnim.dino({
		data: code,
		damages: Math.random() < 0.1 ? 1 : Math.random() < 0.1 ? 2 : 0,
		congel: Math.random() < 0.1,
		flip: 1
	}).toImage(
		(div) => {
			document.body.appendChild(div);
			div.onclick = () => {
				console.log(code);
			};
			randomDinoPortrait();
		},
		210,
		165
	);
}

randomDinoPortrait();
