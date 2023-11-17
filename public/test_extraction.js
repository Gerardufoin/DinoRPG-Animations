/* eslint-disable */
let test_dinoz = [
	'09T1Yt9wqq4Rx000',
	'09w7y7qqpdhld000',
	'0An2HcXN9sl3m000',
	'19hot0hFbItLS000',
	'19VSfUdpIPb0a000',
	'1AADFvpotbA6y000',
	'79TMjJApT93Mx000',
	'79vKIt6DlGsCt000',
	'89KlMhswn7mQ4000',
	'89xsFY1bzYhjG000',
	'99gLuBRdyrrk0000',
	'991wF8kEU0A0u000'
];

/**
 * Get dinoz as a still image tag
 */
function randomDinoPortrait() {
	new DinoAnim.sdino({
		data: test_dinoz[Math.floor(Math.random() * test_dinoz.length)],
		flip: 1
	}).toImage(
		(div) => {
			document.body.appendChild(div);
		},
		45,
		45
	);
}

/**
 * Get dinoz as a div containing all animations as child image tags.
 */
function randomDinoAnimated() {
	new DinoAnim.sdino({
		data: test_dinoz[Math.floor(Math.random() * test_dinoz.length)],
		flip: 1
	}).toAnimation(
		(div) => {
			document.body.appendChild(div);
		},
		45,
		45
	);
}

/**
 * Get dinoz as a still raw image.
 * To use if you want to create your own display of the dinoz.
 */
new DinoAnim.sdino({
	data: test_dinoz[Math.floor(Math.random() * test_dinoz.length)],
	flip: 1
}).toRawImage(
	(imgData) => {
		console.log(imgData);
	},
	45,
	45
);

/**
 * Get dinoz as an array containing each frame of the animation as image data.
 * To use to create your own rendering of the extraction.
 */
new DinoAnim.sdino({
	data: test_dinoz[Math.floor(Math.random() * test_dinoz.length)],
	flip: 1
}).toRawAnimation(
	(arr) => {
		console.log(arr);
	},
	45,
	45
);

for (let i = 0; i < 10; ++i) {
	randomDinoPortrait();
}

for (let i = 0; i < 500; ++i) {
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
}, 1000 / 24.0);
