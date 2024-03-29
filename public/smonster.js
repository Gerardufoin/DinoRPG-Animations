/* eslint-disable */
const actions = [
	'stand',
	'walk',
	'run',
	'attack',
	'hit',
	'fly',
	'jump',
	'jumpDown',
	'fall',
	'land',
	'sleep',
	'ill',
	'cast',
	'release',
	'dead',
	'big',
	'special',
	'counter',
	'dodge'
];
const monsterList = [
	'goupi',
	'goupi2',
	'goupi3',
	'wolf',
	'gluon',
	'gvert',
	'coq',
	'flam',
	'goblin',
	'korgon',
	'rkrgns',
	'kmask',
	'borg',
	'pira',
	'anguil',
	'kazka',
	'ronciv',
	'grdien',
	'bat',
	'ewater',
	'efire',
	'eearth',
	'rasca',
	'vener',
	'vener',
	'barche',
	'mandragore',
	'lucet',
	'taurus'
];
let currentAnim = undefined;

const appAnimation = new DinoAnim.Application({
	background: '#E7B577',
	width: 500,
	height: 300
});
document.getElementById('smonster').appendChild(appAnimation.view);

function updateMonster(type) {
	if (currentAnim) {
		appAnimation.stage.removeChild(currentAnim);
	}

	currentAnim = new DinoAnim.smonster({
		type: type,
		flip: 1,
		scale: 1,
		pflag: true
	});
	appAnimation.stage.addChild(currentAnim);
	currentAnim.x = 250;
	currentAnim.y = 250;
}

for (const a of actions) {
	const button = document.createElement('button');
	button.innerHTML = a;
	button.addEventListener('click', () => {
		currentAnim?.playAnim(a);
	});
	document.getElementById('controls').appendChild(button);
}

for (const m of monsterList) {
	const button = document.createElement('button');
	button.innerHTML = m;
	button.addEventListener('click', () => {
		updateMonster(m);
	});
	document.getElementById('monsters').appendChild(button);
}

updateMonster('barche');
