/* eslint-disable */
const allDinoz = [];
const actions = [
	'stand',
	'walk',
	'run',
	'attack',
	'hit',
	'fly',
	'jump',
	'land',
	'sleep',
	'ill',
	'cast',
	'release',
	'dead'
];

/**
 * Create a new canvas comprised of a still version of the dino as well as its animated version side by side.
 * @param {string} data Customization data of the dino to display.
 * @param {boolean} showOrigin Show a red dot where the origin of the container is at.
 */
function addDinoz(data, showOrigin = false) {
	const app = new DinoAnim.Application({
		background: '#E7B577',
		width: 130,
		height: 55
	});
	let dinozP = new DinoAnim.sdino(
		{
			data: data,
			flip: 1
		},
		app
	);
	dinozP.x = 20;
	dinozP.y = 20;

	let dinoz = new DinoAnim.sdino(
		{
			data: data,
			flip: 1,
			pflag: true
		},
		app
	);
	dinoz.x = 75;
	dinoz.y = 25;
	allDinoz.push(dinoz);

	if (showOrigin) {
		const origin = new DinoAnim.Graphics();
		origin.beginFill(0xff0000);
		origin.drawCircle(20, 20, 1);
		origin.endFill();
		app.stage.addChild(origin);
	}
	document.body.appendChild(app.view);
}

// Moueffe
addDinoz('09T1Yt9wqq4Rx000', true);
/*addDinoz('09w7y7qqpdhld000');
addDinoz('09adQBgO8T065000');
addDinoz('09vGg4LW1S9fn000');
addDinoz('0A8uYQDU0FywV000'); // Krapassa
addDinoz('0AcokGzWsf6WP000'); // Shamak
addDinoz('0An2HcXN9sl3m000'); // Krazablue*/
// Pigmou
addDinoz('19hot0hFbItLS000');
/*addDinoz('199zX1Jn1zGXG000');
addDinoz('191okqcRZdgVi000');
addDinoz('19VSfUdpIPb0a000');
addDinoz('1AADFvpotbA6y000');*/
// Winks
addDinoz('29yp89zwHWlmC000');
addDinoz('29VRA00KtkGM1000');
addDinoz('292lB2TF3D1Cz000');
addDinoz('29jH6Z7YjJdw5110');
addDinoz('293DclwhG64Vd000');
addDinoz('2ADTmPjGH4lLO000');
addDinoz('2AIhcx2YC9ksv000');
addDinoz('2AGVenN21FGJk000');

/*const app = new Application({
	background: '#E7B577',
	//width: 130,
	//height: 55
	width: 500,
	height: 500
});
document.body.appendChild(app.view);
let sp = Sprite.from(Texture.from('sdino/fx_shadow.svg', { resourceOptions: { scale: 1 } }));
sp.transform.setFromMatrix(
	new Matrix(1, 0, 0, 1, 1 * -14.25, 1 * -8.95)
);
app.stage.addChild(sp);
/*let sp1 = Sprite.from(Texture.from('test_square.svg', { resourceOptions: { scale: 1 } }));
app.stage.addChild(sp1);
let sp2 = Sprite.from(Texture.from('test_square2.svg', { resourceOptions: { scale: 1 } }));
app.stage.addChild(sp2);
let sp3 = Sprite.from(Texture.from('test_square.svg', { resourceOptions: { scale: 1 } }));
let sp3c = new Container();
sp3.setTransform(0, 0, 0, 0, 0, 0, 0, 2, 2);
sp3c.addChild(sp3);
app.stage.addChild(sp3c);
let sp4 = Sprite.from(Texture.from('test_square.svg', { resourceOptions: { scale: 1 } }));
app.stage.addChild(sp4);
let sp5 = Sprite.from(Texture.from('test_square.svg', { resourceOptions: { scale: 1 } }));
let sp5c = new Container();
sp5.setTransform(0, 0, 0, 0, 0, 0, 0, 2, 2);
sp5c.addChild(sp5);
app.stage.addChild(sp5c);

sp.setTransform(10, 10);
sp1.setTransform(100, 100, 0.5, 0.5, 0, 0.86602783203125, -0.86602783203125, 2, 2);
sp2.setTransform(10, 200);
sp3c.setTransform(10, 300, 0.5, 0.5, 0, 0.86602783203125, -0.86602783203125);
sp4.transform.setFromMatrix(new Matrix(0.5, 0.86602783203125, -0.86602783203125, 0.5, 15, 400));
sp5.transform.setFromMatrix(new Matrix(0.5, 0.86602783203125, -0.86602783203125, 0.5, 10, 400));
console.log(sp3c.localTransform);*/

/*let sp = Sprite.from(Texture.from('sdino/moueffe/fx_impact_5.svg', { resourceOptions: { scale: 1 } }));
app.stage.addChild(sp);*/

for (const a of actions) {
	const button = document.createElement('button');
	button.innerHTML = a;
	button.addEventListener('click', () => {
		allDinoz.map((d) => d.playAnim(a));
	});
	document.body.appendChild(button);
}
