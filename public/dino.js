/* eslint-disable */
let currentPortrait = undefined;

const appPortrait = new DinoAnim.Application({
	background: '#FCE3BB',
	width: 190,
	height: 165
});
document.getElementById('dino').appendChild(appPortrait.view);

function updateDinoz(data) {
	if (currentPortrait) {
		appPortrait.stage.removeChild(currentPortrait);
	}
	currentPortrait = new DinoAnim.dino({
		data: data,
		flip: 1
	});
	appPortrait.stage.addChild(currentPortrait);
	currentPortrait.x = 95;
	currentPortrait.y = 82;
}

document.getElementById('update').addEventListener('click', () => {
	const code = document.getElementById('dino_code');
	updateDinoz(code.value);
});
document.getElementById('update').click();
