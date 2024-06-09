/* eslint-disable */
/**
 * Add a new embed flash player with the data of the big dino, for comparison purposes.
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

	// SWFObject does not handle pathing corretly on github pages. Workaround.
	const url = window.location.href;
	const path = url.substring(0, url.lastIndexOf('/') + 1);
	// Parameters from original website
	var so = new SWFObject(`${path}/swf/dino.swf`, swdId, 190, 165, 8, '#FCE3BB');
	so.addParam('AllowScriptAccess', 'always');
	so.addParam('FlashVars', `data=${data}&amp;chk=${chk}&amp;damages=${damages}&amp;status=&amp;flip=1`);
	so.addParam('menu', 'false');
	so.addParam('scale', 'noscale');
	so.addParam('wmode', 'transparent');
	so.write(swdId);
	// End of parameters
}

/**
 * Add a new embed flash player with the data of the small dino, for comparison purposes.
 * @param {string} data Customization data of the dino to display.
 * @param {number} chk Validation number for the swf file.
 * @param {number} damages The damage state of the dino.
 */
function addFlashPreviewSmall(data, chk, damages) {
	const parent = document.getElementById('sdino_flash');
	parent.innerHTML = '';

	const swdId = `swf_sdino1`;
	const container = document.createElement('div');
	container.id = swdId;
	container.className = 'flash_display';
	container.style = 'display:inline-block;vertical-align:top;margin:5px;';
	parent.appendChild(container);

	// SWFObject does not handle pathing corretly on github pages. Workaround.
	const url = window.location.href;
	const path = url.substring(0, url.lastIndexOf('/') + 1);
	// Parameters from original website
	var so = new SWFObject(`${path}/swf/sdino.swf`, swdId, 40, 40, 8, '#FBDAA0');
	so.addParam('AllowScriptAccess', 'always');
	so.addParam('FlashVars', `data=${data}&amp;chk=${chk}&amp;damages=${damages}&amp;status=congel&amp;flip=1`);
	so.addParam('menu', 'false');
	so.addParam('scale', 'noscale');
	//so.addParam('wmode', 'transparent');
	so.write(swdId);
	// End of parameters
}

let currentPortrait = undefined;
let currentPortraitSmall = undefined;

const appPortrait = new DinoAnim.Application({
	background: '#FCE3BB',
	width: 190,
	height: 165
});
document.getElementById('dino').appendChild(appPortrait.view);

const appPortraitSmall = new DinoAnim.Application({
	background: '#FCE3BB',
	width: 40,
	height: 40
});
document.getElementById('sdino').appendChild(appPortraitSmall.view);

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

	if (currentPortraitSmall) {
		appPortraitSmall.stage.removeChild(currentPortraitSmall);
	}
	currentPortraitSmall = new DinoAnim.sdino({
		data: data,
		damages: damages,
		flip: 1
	});
	appPortraitSmall.stage.addChild(currentPortraitSmall);
	currentPortraitSmall.x = 20;
	currentPortraitSmall.y = 31;

	addFlashPreview(data, currentPortrait.getChkCode(), damages);
	addFlashPreviewSmall(data, currentPortrait.getChkCode(), damages);
}

document.getElementById('update').addEventListener('click', () => {
	const code = document.getElementById('dino_code');
	updateDinoz(code.value, document.querySelector('input[name="damages"]:checked').value + 0);
});
document.getElementById('update').click();
