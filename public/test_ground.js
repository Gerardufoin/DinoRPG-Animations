/* eslint-disable */
const width = 1500;
const height = 700;

const app = new DinoAnim.Application({
	background: '#E7B577',
	width: width,
	height: height
});
document.body.appendChild(app.view);

const y1 = 50;
const y2 = 100;
const y3 = 200;
const y4 = 300;

addLine(y1);
addLine(y2);
addLine(y3);
addLine(y4);

let x = 50;
let offsetY = 0;

function addDinoz(data) {
	let dino = new DinoAnim.sdino({
		data: data
	});
	app.stage.addChild(dino);
	dino.x = x;
	dino.y = y1 + offsetY;
	addDot(dino);

	let dino2 = new DinoAnim.sdino({
		data: data,
		flip: 1
	});
	app.stage.addChild(dino2);
	dino2.x = x;
	dino2.y = y2 + offsetY;
	addDot(dino2);

	let dino3 = new DinoAnim.sdino({
		data: data,
		scale: 2
	});
	app.stage.addChild(dino3);
	dino3.x = x;
	dino3.y = y3 + offsetY;
	addDot(dino3);

	let dino4 = new DinoAnim.sdino({
		data: data,
		scale: 2,
		flip: 1
	});
	app.stage.addChild(dino4);
	dino4.x = x;
	dino4.y = y4 + offsetY;
	addDot(dino4);

	x += 100;
	if (x > width) {
		x = 50;
		offsetY += 350;
		addLine(y1 + offsetY);
		addLine(y2 + offsetY);
		addLine(y3 + offsetY);
		addLine(y4 + offsetY);
	}
}

function addLine(y) {
	app.stage.addChild(new DinoAnim.Graphics().lineStyle(1, 0xff0000).moveTo(0, y).lineTo(width, y));
}

function addDot(dino) {
	app.stage.addChild(new DinoAnim.Graphics().beginFill(0xff0000).drawCircle(dino.x, dino.y, 3));
}

addDinoz('09T1Yt9wqq4Rx000');
addDinoz('19T1Yt9wqq4Rx000');
addDinoz('29T1Yt9wqq4Rx000');
addDinoz('39T1Yt9wqq4Rx000');
addDinoz('49T1Yt9wqq4Rx000');
addDinoz('59T1Yt9wqq4Rx000');
addDinoz('69T1Yt9wqq4Rx000');
addDinoz('79T1Yt9wqq4Rx000');
addDinoz('89T1Yt9wqq4Rx000');
addDinoz('99T1Yt9wqq4Rx000');
addDinoz('A9T1Yt9wqq4Rx000');
addDinoz('B9T1Yt9wqq4Rx000');
addDinoz('C9T1Yt9wqq4Rx000');
addDinoz('D9T1Yt9wqq4Rx000');
addDinoz('E9T1Yt9wqq4Rx000');
addDinoz('F9T1Yt9wqq4Rx000');
addDinoz('G9T1Yt9wqq4Rx000');
addDinoz('G8T1Yt9wqq4Rx000');
addDinoz('H9T1Yt9wqq4Rx000');
addDinoz('I9T1Yt9wqq4Rx000');
addDinoz('J9T1Yt9wqq4Rx000');
addDinoz('K9T1Yt9wqq4Rx000');
addDinoz('L9T1Yt9wqq4Rx000');
