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
	'dodge',
	'guard',
	'up',
	'upwalk',
	'down',
	'downwalk',
	'superattack',
	'morph'
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
	'barche',
	'cobra',
	'hippo',
	'rocky',
	'pteroz',
	'egrllz',
	'scorp',
	'brig1',
	'brig2',
	'brig3',
	'piraos',
	'worm',
	'wteamc',
	'towgrd',
	'bamboo',
	'worm2',
	'cactus',
	'yakuzi',
	'igor',
	'gropi',
	'mantoo',
	'mosqui',
	'muking',
	'mugard',
	'singmu',
	'frutox',
	'ffrutx',
	'frking',
	'rapaca',
	'morg',
	'mandragore',
	'cyclo',
	'cyclo2',
	'groms',
	'grom2',
	'grom3',
	'doro',
	'dorou',
	'lucet',
	'lapouf',
	'ecu',
	'piglou',
	'febrez',
	'marca',
	'dorolu',
	'fuego',
	'grizor',
	'morg2',
	'grizo2',
	'grizo3',
	'garouz',
	'amanpe',
	'upgrd',
	'taurus',
	'bao',
	'sofia',
	'chima',
	'groule',
	'behemu',
	'serpe',
	'roking',
	'cranit',
	'crokoc',
	'arcadu',
	'rodeur',
	'belius',
	'mimic',
	'feufol',
	'becplu',
	'updwn',
	'fullgd',
	'rhubar',
	'stroa',
	'scorpu',
	'sangsa',
	'saboss',
	'sangs2'
];
let currentAnim = undefined;

const appAnimation = new DinoAnim.Application({
	background: '#E7B577',
	width: 500,
	height: 400
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
	currentAnim.y = 350;
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

updateMonster('goupi');
