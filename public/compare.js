/* eslint-disable */
/**
 * Add a new embed flash player with the data of the dino, for comparison purposes.
 * @param {string} data Customization data of the dino to display.
 * @param {number} chk Validation number for the swf file.
 * @param {number} damages The damage state of the dino.
 */
function addFlashPreview(data, chk, damages) {
	const parent = document.getElementById('dino_flash');
	parent.innerHTML = '';

	const swdId = `swf_dino0`;
	const container = document.createElement('div');
	container.id = swdId;
	container.className = 'flash_display';
	container.style = 'display:inline-block;vertical-align:top;margin:5px;';
	parent.appendChild(container);

	// Parameters from original website
	var so = new SWFObject('/swf/dino.swf', swdId, 190, 165, 8, '#FCE3BB');
	so.addParam('AllowScriptAccess', 'always');
	so.addParam('FlashVars', `data=${data}&amp;chk=${chk}&amp;damages=${damages}&amp;status=&amp;flip=1`);
	so.addParam('menu', 'false');
	so.addParam('scale', 'noscale');
	so.addParam('wmode', 'transparent');
	so.write(swdId);
	// End of parameters
}

let currentPortrait = undefined;

const appPortrait = new DinoAnim.Application({
	background: '#FCE3BB',
	width: 190,
	height: 165
});
document.getElementById('dino').appendChild(appPortrait.view);

function updateDinoz(data, damages) {
	if (currentPortrait) {
		appPortrait.stage.removeChild(currentPortrait);
	}
	currentPortrait = new DinoAnim.dino({
		data: data,
		damages: damages,
		flip: 1
	});
	appPortrait.stage.addChild(currentPortrait);
	currentPortrait.x = 95;
	currentPortrait.y = 82;

	addFlashPreview(data, currentPortrait.getChkCode(), damages);
}

document.getElementById('update').addEventListener('click', () => {
	const code = document.getElementById('dino_code');
	updateDinoz(code.value, document.querySelector('input[name="damages"]:checked').value + 0);
});
document.getElementById('update').click();
