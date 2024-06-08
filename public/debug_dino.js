/* eslint-disable */
const allDinoz = [];
let flashPreviewIdx = 0;
let rufflePlayerLimit = 4;
const damages = 2;

/**
 * Add a new embed flash player with the data of the dino, for comparison purposes.
 * @param {string} data Customization data of the dino to display.
 * @param {number} chk Validation number for the swf file.
 * @param {HTMLElement} parent Parent html element to append the child to. Append to body if undefined-
 */
function addFlashPreview(data, chk, parent) {
	if (rufflePlayerLimit-- > 0) {
		const swdId = `swf_dino${flashPreviewIdx++}`;
		const container = document.createElement('div');
		container.id = swdId;
		container.className = 'flash_display';
		container.style = 'display:inline-block;vertical-align:top;margin:5px;';
		(parent ?? document.body).appendChild(container);

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
}

/**
 * Create a new canvas.
 * @param {string} data Customization data of the dino to display.
 * @param {boolean} showOrigin Show a red dot where the origin of the container is at.
 */
function addDinoz(data, showOrigin = false) {
	const container = document.createElement('div');
	const app = new DinoAnim.Application({
		background: '#FCE3BB',
		width: 190,
		height: 165
	});
	let dinoz = new DinoAnim.dino({
		data: data,
		flip: 1,
		pflag: true,
		damages: damages
	});
	const x = 95;
	const y = 82;
	app.stage.addChild(dinoz);
	dinoz.x = x;
	dinoz.y = y;
	allDinoz.push(dinoz);

	if (showOrigin) {
		const origin = new DinoAnim.Graphics();
		origin.beginFill(0xff0000);
		origin.drawCircle(x, y, 1);
		origin.endFill();
		app.stage.addChild(origin);
	}
	container.appendChild(app.view);
	document.body.appendChild(container);

	addFlashPreview(data, dinoz.getChkCode(), container);
}

// Dragon Jr
addDinoz('09T1Yt9wqq4Rx000', true);

// Moueffe
/*addDinoz('0813611605200000', true);
addDinoz('09w7y7qqpdhld000');
addDinoz('09adQBgO8T065000');
addDinoz('09vGg4LW1S9fn000');
addDinoz('0A8uYQDU0FywV000'); // Krapassa
addDinoz('0AcokGzWsf6WP000'); // Shamak
addDinoz('0An2HcXN9sl3m000'); // Krazablue*/
// Pigmou
/*addDinoz('19hot0hFbItLS000', true);
addDinoz('199zX1Jn1zGXG000');
addDinoz('191okqcRZdgVi000');
addDinoz('19VSfUdpIPb0a000');
addDinoz('19DHt2Szqam4y000');
addDinoz('19oNVXoAYgPUI000');
addDinoz('1AADFvpotbA6y000');*/
// Winks
/*addDinoz('29yp89zwHWlmC000', true);
addDinoz('29VRA00KtkGM1000');
addDinoz('292lB2TF3D1Cz000');
addDinoz('29jH6Z7YjJdw5110');
addDinoz('293DclwhG64Vd000');
addDinoz('2ADTmPjGH4lLO000');
addDinoz('2AIhcx2YC9ksv000');
addDinoz('2AGVenN21FGJk000');*/
// Planaile
/*addDinoz('393YRrXntzpn0000', true);
addDinoz('39aT8YQ12Sl3w000');
addDinoz('39EEr8m1HSfK8000');
addDinoz('39ANSxwXXTvUr000');
addDinoz('39N9HVcY4gLiQ000');
addDinoz('39SOHSjXu8FZM000');
addDinoz('39uuvDuEYohCG000');
addDinoz('3ArpIB2f2t2Ww000');*/
// Castivore
addDinoz('49hwJCDfbel16000', true);
addDinoz('49BsLby0mZF6k000');
addDinoz('49uvrkF8dPrOS000');
addDinoz('49SES7eSLrk1C000');
addDinoz('494IHPBxwdn74000');
addDinoz('498sSm4OIB4l7000');
addDinoz('491KW4XcQQOnC000');
// Rocky
/*addDinoz('59QdaJ5j1dEaK000', true);
addDinoz('590iaiFtHCgfq000');
addDinoz('59z6ZP4PDDZA6000');
addDinoz('59e9OSz9v7KnK000');
addDinoz('59rbY7eDF0UZE000');
addDinoz('59MG98iyxUhaA000');
addDinoz('59WkrzINzZ5p9000');
addDinoz('59DCTDZxittpQ000');*/
// Pteroz
/*addDinoz('69pCCyHibiPFK000', true);
addDinoz('69ShBRsiPCfiw000');
addDinoz('69spSHxJqAuyc000');
addDinoz('69SEXtatVVj3j000');
addDinoz('69CCNfds4I0OC000');
addDinoz('69LhH8GuujsLD000');
addDinoz('69uOBQV7rJEEr000');*/
// Nuagoz
/*addDinoz('79MZ2Ou1cj0q6000', true);
addDinoz('79saoiWWdDYpi000');
addDinoz('79TMjJApT93Mx000');
addDinoz('796DaTiCSvPu7000');
addDinoz('79wzoXZb94nxa000');
addDinoz('79j66kSFEoTJ5000');
addDinoz('79vKIt6DlGsCt000');*/
// Sirain
/*addDinoz('89KlMhswn7mQ4000', true);
addDinoz('89xsFY1bzYhjG000');
addDinoz('89e7EDLfIWKJf000');
addDinoz('89n03SgHUYlZU000');
addDinoz('89lPun9nNPh7o000');
addDinoz('89NgwzWWsktiC000');
addDinoz('89P0ZGkRSwlfm000');*/
// Hippoclamp
/*addDinoz('991wF8kEU0A0u000', true);
addDinoz('99X4YC3gRdbiA000');
addDinoz('99gLuBRdyrrk0000');
addDinoz('995FFpvfZ4W7E000');
addDinoz('99Lh9VynQ3nnr000');
addDinoz('99DUB6MqLdiAm000');
addDinoz('98jwN04PyJ2Qs000');*/
// Gorilloz
/*addDinoz('A9ldMErr30hTq000', true);
addDinoz('A9viVftvErDyE110');
addDinoz('A3RmxwZWWRtec000');
addDinoz('A97tfssT3l3hV000');
addDinoz('A5vm6ZNJCFyn5000');
addDinoz('AArPCd4p8zOO6000');
addDinoz('AAF5ECnNvanRc000');*/
// Wanwan
/*addDinoz('B9s415NH45d7A000', true);
addDinoz('B9PSsKZ8D4JP6000');
addDinoz('B9ovGzEZvQT3H210');
addDinoz('B9enDihLVvE3D000');
addDinoz('B7slIovDMmyWd000');
addDinoz('BAleFPXaxTma6000');
addDinoz('BAx5zblke9cgx000');*/
// Santaz
/*addDinoz('C9ZnsZXkwu7bB000', true);
addDinoz('C7zx3On8Hw1Ji000');
addDinoz('C9QcPELfYOd1i110');
addDinoz('C9X4Kmyof9pjf000');
addDinoz('C97DH3ppWCHdw000');
addDinoz('C0XqRr24FdQzB000');
addDinoz('C3ZnbdXjLMtDV000');*/
// Feross
/*addDinoz('D9hNs2GNNh4uK000', true);
addDinoz('D9PMnhzFbVAl9220');
addDinoz('D95lCJKCifGXe110');
addDinoz('D9PWhklw1HxDB000');
addDinoz('D92i3ZvNKfXea000');
addDinoz('D8yFAfhjVIGPk000');
addDinoz('D06fMERxnBfnZ000');*/
// Kabuki
/*addDinoz('E95H6h925l3Sm000', true);
addDinoz('E9lgeLcaVbVUm000');
addDinoz('E9gcKDuoo1YUZ000');
addDinoz('E9dIEvM5ddKY6110');
addDinoz('E2vsXhu5OGIJx000');
addDinoz('EAWY3u1UXSrnn000');
addDinoz('EAspgFwmUFOep000');*/
// Mahamuti
/*addDinoz('F98p9qNEOvDiW000', true);
addDinoz('F5C9e0EUScT18000');
addDinoz('F9RS7w0L7t7c7110');
addDinoz('F9YOJgyccyvS4000');
addDinoz('F9ck4MOItJ39n000');
addDinoz('F9Uhqbn8t9Ta3000');
addDinoz('F9uQtkcMeyOfI110');*/
// Soufflet
/*addDinoz('G560uYo5nCV2t000', true);
addDinoz('G9AsnCVT4hZ07000');
addDinoz('G9KGSXRsa0XN5000');
addDinoz('G5TevYkAXIBE4000');
addDinoz('G9oZE6zNodSCp000');
addDinoz('G6ZeHfhg0RVFt000');
addDinoz('G9g5afRzJe3UR000');*/
// Toufufu
/*addDinoz('H9PvKeVlrD4Eb000', true);
addDinoz('H9G93qPXqoqcO010');
addDinoz('H7ArSwksrdVdH000');
addDinoz('H9J0mhkvemnkF000');
addDinoz('H93ogJKVIeU9z000');
addDinoz('H9b3K84pMdxf4000');
addDinoz('H9l6f61tJNPRf000');*/
// Quetzu
/*addDinoz('I9MdK4mbU215r000', true);
addDinoz('I9rw3CdJGDiLy000');
addDinoz('I96Q1ZDV6sKKF110');
addDinoz('I99yZRYX2S4aB000');
addDinoz('I9nARxWpqISin000');
addDinoz('I9va7JcxyW3gZ000');
addDinoz('I9kry1w0kSCBI000');*/
// Smog
/*addDinoz('J9UcHO7iWWtK7000', true);
addDinoz('J9TjRKj21pRTb110');
addDinoz('J9RcpKdaIoaYp020');
addDinoz('J94Eo4Awkpudv000');
addDinoz('J9bs4pEZMwUTj130');
addDinoz('J9ZWi50KhhgW4200');
addDinoz('J9aOkvDj21xBA000');*/
// Triceragon
/*addDinoz('K9jZyXBMazmTs000', true);
addDinoz('K91liNj083KJY000');
addDinoz('K99LpvDPJfNdO010');
addDinoz('K9kA0yg7yqhqQ000');
addDinoz('K9KYPwEP8OroH000');
addDinoz('K9cEtpgiKiwOI000');
addDinoz('K9iyL99UFx2Bj000');*/
