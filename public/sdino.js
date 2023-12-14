/* eslint-disable */
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
	'dead',
	'big',
	'special'
];
let currentPortrait = undefined;
let currentAnim = undefined;

const appPortrait = new DinoAnim.Application({
	background: '#E7B577',
	width: 40,
	height: 40
});
document.getElementById('sdino').appendChild(appPortrait.view);

const appAnimation = new DinoAnim.Application({
	background: '#E7B577',
	width: 100,
	height: 100
});
document.getElementById('sdino').appendChild(appAnimation.view);

function updateDinoz(data) {
	if (currentPortrait) {
		appPortrait.stage.removeChild(currentPortrait);
	}
	if (currentAnim) {
		appAnimation.stage.removeChild(currentAnim);
	}
	currentPortrait = new DinoAnim.sdino({
		data: data,
		flip: 1
	});
	appPortrait.stage.addChild(currentPortrait);
	currentPortrait.x = 20;
	currentPortrait.y = 20;

	currentAnim = new DinoAnim.sdino({
		data: data,
		flip: 1,
		pflag: true
	});
	appAnimation.stage.addChild(currentAnim);
	currentAnim.x = 50;
	currentAnim.y = 50;
}

document.getElementById('update').addEventListener('click', () => {
	const code = document.getElementById('dino_code');
	updateDinoz(code.value);
});
document.getElementById('update').click();

for (const a of actions) {
	const button = document.createElement('button');
	button.innerHTML = a;
	button.addEventListener('click', () => {
		currentAnim?.playAnim(a);
	});
	document.getElementById('controls').appendChild(button);
}
