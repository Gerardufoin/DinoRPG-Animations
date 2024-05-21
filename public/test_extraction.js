/* eslint-disable */
const dinoValues = '0123456789ABCDEFGHIJK';
const values = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function randomCode() {
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
	return code;
}

/**
 * Get dinoz as a still image tag
 */
function randomDinoPortrait() {
	const code = randomCode();
	new DinoAnim.sdino({
		data: code,
		flip: 1
	}).toImage(
		(div) => {
			document.body.appendChild(div);
			div.onclick = () => {
				console.log(code);
			};
		},
		45,
		45,
		0,
		-10
	);
}

/**
 * Get dinoz as a div containing all animations as child image tags.
 */
function randomDinoAnimated() {
	const code = randomCode();
	new DinoAnim.sdino({
		data: code,
		flip: 1
	}).toAnimation(
		(div) => {
			document.body.appendChild(div);
			div.onclick = () => {
				console.log(code);
			};
		},
		45,
		45,
		0,
		-10
	);
}

/**
 * Get dinoz as a still raw image.
 * To use if you want to create your own display of the dinoz.
 */
new DinoAnim.sdino({
	data: randomCode(),
	flip: 1
}).toRawImage(
	(imgData) => {
		//console.log(imgData);
	},
	45,
	45,
	0,
	-10
);

/**
 * Get dinoz as an array containing each frame of the animation as image data.
 * To use to create your own rendering of the extraction.
 */
new DinoAnim.sdino({
	data: randomCode(),
	flip: 1
}).toRawAnimation(
	(arr) => {
		//console.log(arr);
	},
	45,
	45,
	0,
	-10
);

for (let i = 0; i < 10; ++i) {
	randomDinoPortrait();
}

for (let i = 0; i < 100; ++i) {
	randomDinoAnimated();
}

// Animation process, needs to be somewhere in the page.
setInterval(() => {
	for (const e of document.getElementsByClassName('DinoRPG-Animation')) {
		const length = parseInt(e.getAttribute('data-length'));
		let idx = parseInt(e.getAttribute('data-idx'));
		if (length > 1) {
			e.children.item(idx).hidden = true;
			idx = (idx + 1) % length;
			e.children.item(idx).hidden = false;
			e.setAttribute('data-idx', idx);
		}
	}
}, 1000 / 40.0);
