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
let currentAnim = undefined;

const appAnimation = new DinoAnim.Application({
	background: '#E7B577',
	width: 200,
	height: 200
});
document.getElementById('smonster').appendChild(appAnimation.view);

function updateMonster(type) {
	if (currentAnim) {
		appAnimation.stage.removeChild(currentAnim);
	}

	currentAnim = new DinoAnim.smonster({
		type: type,
		flip: 1,
		pflag: true
	});
	appAnimation.stage.addChild(currentAnim);
	currentAnim.x = 100;
	currentAnim.y = 180;
}

document.getElementById('update').addEventListener('click', () => {
	const code = document.getElementById('monster_id');
	updateMonster(code.value);
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
