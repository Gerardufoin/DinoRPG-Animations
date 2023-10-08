const actions = ['stand', 'walk', 'run', 'attack', 'hit', 'jump', 'land', 'sleep', 'cast', 'release', 'dead'];

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
	currentPortrait = new DinoAnim.sdino(
		{
			data: data,
			flip: 1,
			path: 'DinoRPG-Animations/public'
		},
		appPortrait
	);

	currentAnim = new DinoAnim.sdino(
		{
			data: data,
			flip: 1,
			pflag: true,
			path: 'DinoRPG-Animations/public'
		},
		appAnimation
	);
	currentAnim.x = 30;
	currentAnim.y = 30;
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
