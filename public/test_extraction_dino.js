/* eslint-disable */
const values = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
/**
 * Get dinoz as a still image tag
 */
function randomDinoPortrait() {
	let code = '0';
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
		flip: 1
	}).toImage((div) => {
		document.body.appendChild(div);
	});
}

for (let i = 0; i < 500; ++i) {
	randomDinoPortrait();
}
