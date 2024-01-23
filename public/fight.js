/* eslint-disable */

/**
 * Add a new embed flash player with the data of the fight, for comparison purposes.
 * @param {string} data Raw data of the fight to display.
 * @param {HTMLElement} parent Parent html element to append the child to. Append to body if undefined.
 */
function addFlashPreview(data, parent) {
	const swdId = `swf_fight`;
	const container = document.createElement('div');
	container.id = swdId;
	container.className = 'flash_display';
	container.style = 'display:inline-block;vertical-align:top;margin:5px;';
	(parent ?? document.body).appendChild(container);

	// Parameters from original website
	var so = new SWFObject('/swf/fight.swf', swdId, 488, 300, 8, '#fce3bb');
	so.addParam('AllowScriptAccess', 'always');
	so.addParam('FlashVars', `data=${data}`);
	so.addParam('menu', 'false');
	so.addParam('wmode', 'none');
	so.write(swdId);
	// End of parameters
}
const container = document.createElement('div');
document.body.appendChild(container);
/**
 * Replacement:
 * 68%3Ahttp%253A%252F%252Fdata.dinorpg.com -> 39%3A
 * 56%3Ahttp%253A%252F%252Fdata.dinorpg.com -> 27%3A
 * 55%3Ahttp%253A%252F%252Fdata.dinorpg.com -> 26%3A
 * 58%3Ahttp%253A%252F%252Fdata.dinorpg.com -> 29%3A
 * 59%3Ahttp%253A%252F%252Fdata.dinorpg.com -> 30%3A
 */
const fightData = [
	'oy6%3A_checky28%3A%252Fuser%252Fcheck%253Fid%253DyYC6Ly6%3A_debugy37%3A%252Ftools%252FdebugFight%253Fsk%253Dc8W7fetjy8%3A_mbottomi20y7%3A_mrightzy6%3A_equipy39%3A%252Fimg%252Ficons%252Fobj_%253A%253Aid%253A%253A.gify6%3A_sdinoy27%3A%252Fswf%252Fsdino.swf%253Fv%253D33y5%3A_dinoy26%3A%252Fswf%252Fdino.swf%253Fv%253D35y5%3A_dojony5%3A_mtopi140y3%3A_bgy29%3A%252Fimg%252Ffight%252Fs_fleuve.jpgy7%3A_groundny8%3A_debriefy54%3Ajavascript%253A_.toggleFlash%2528%2527debrief%2527%252C%2520-85%2529y8%3A_historylwy8%3A_Historyy5%3A_HAdd%3A2oy6%3A_propsahR10ty5%3A_lifei75y5%3A_namey9%3AGoldenSkyy5%3A_sidety5%3A_sizei150y4%3A_fidzy4%3A_gfxy16%3AB9PSsKZ8D4JP6000gnwR20R21%3A2oR22ahR10fR23i10R24y16%3AKorgon%2520FarceurR26fR27i100R28i1R29y6%3AkorgongnwR20R21%3A2oR22ahR10fR23i10R24R31R26fR27i100R28i2R29R32gnwR20R21%3A2oR22ahR10fR23i70R24y9%3ARoncivoreR26fR27i100R28i3R29y6%3Aroncivgwy17%3A_AddFighterEffecty9%3A_AFGround%3A0wR20y11%3A_HMaxEnergy%3A2azhai100hwR20y8%3A_HEnergy%3A2azhai100hwR20y5%3A_HLog%3A1y16%3AEnergy%2520enabledwR20y9%3A_HDisplay%3A1nwR20R38%3A2azi3i1i2hai100i100i100i100hwR20y7%3A_HPause%3A1zwR20y6%3A_HGoto%3A3zi3wy11%3A_GotoEffecty8%3A_GNormal%3A0wR20y9%3A_HDamages%3A5zi3i15wy11%3A_LifeEffecty11%3A_LLightning%3A0nwR20R46%3A5i3zi1wR47y8%3A_LNormal%3A0wy7%3A_Effecty9%3A_ECounter%3A0wR20R38%3A2azhai94hwR20y8%3A_HReturn%3A1zwR20R38%3A2ai3i1i2zhai98i100i100i100hwR20R42%3A1i4wR20R38%3A2ai3hai78hwR20R38%3A2ai1i2zi3hai100i100i100i88hwR20R42%3A1i2wR20R43%3A3i1zwR44R45%3A0wR20R46%3A5i1zi1wR47y6%3A_LWood%3A0nwR20R38%3A2ai1hai94hwR20R52%3A1i1wR20R38%3A2ai2zi3i1hai100i100i93i99hwR20R42%3A1i1wR20R43%3A3i2zwR44R45%3A0wR20R46%3A5i2zi1wR47R53%3A0nwR20R38%3A2ai2hai94hwR20R52%3A1i2wR20R38%3A2azi3i1i2hai100i100i100i100hwR20R42%3A1i1wR20R43%3A3zi3wR44R45%3A0wR20R46%3A5zi3i12wR47R53%3A0nwR20R46%3A5zi3i13wR47R53%3A0nwR20R46%3A5i3zi1wR47R49%3A0wR50R51%3A0wR20R38%3A2azhai91hwR20R52%3A1zwR20R38%3A2ai3i1zi2hai98i100i100i100hwR20R42%3A1i5wR20R38%3A2ai3hai78hwR20R38%3A2ai1zi2i3hai100i100i100i88hwR20R42%3A1i2wR20R43%3A3i1zwR44R45%3A0wR20R46%3A5i1zi1wR47y6%3A_LFire%3A0nwR20R38%3A2ai1hai94hwR20R52%3A1i1wR20R38%3A2azi2i3i1hai100i100i93i99hwR20R42%3A1i1wR20R43%3A3zi3wR44R45%3A0wR20R46%3A5zi3i7wR47R54%3A0nwR20R46%3A5zi3i7wR47R54%3A0nwR20R46%3A5i3zi1wR47R49%3A0wR50R51%3A0wR20R38%3A2azhai91hwR20R52%3A1zwR20R38%3A2ai2i3zi1hai100i91i91i99hwR20R42%3A1zwR20R43%3A3i2zwR44R45%3A0wR20R46%3A5i2zi1wR47R54%3A0nwR20R38%3A2ai2hai94hwR20R52%3A1i2wR20R38%3A2ai3zi1i2hai91i100i100i100hwR20R42%3A1i7wR20R38%3A2ai3hai71hwR20R38%3A2azi1i2i3hai100i100i100i78hwR20R42%3A1i1wR20y10%3A_HAnnounce%3A2zy15%3AAube%2520FeuilluewR20y14%3A_HDamagesGroup%3A3zloR23i7y4%3A_tidzghwy12%3A_GroupEffecty7%3A_GrHeal%3A1zwR20R38%3A2azhai35hwR20R38%3A2ai1i2zi3hai100i100i37i80hwR20R42%3A1zwR20R43%3A3i1zwR44R45%3A0wR20R46%3A5i1zi1wR47R53%3A0nwR20R38%3A2ai1hai94hwR20R52%3A1i1wR20R38%3A2ai2zi3i1hai100i42i85i99hwR20R42%3A1i1wR20R43%3A3i2zwR44R45%3A0wR20R46%3A5i2zi1wR47R53%3A0nwR20R38%3A2ai2hai94hwR20R52%3A1i2wR20R38%3A2azi3i1i2hai42i100i100i100hwR20R42%3A1i7wR20R43%3A3zi3wR44R45%3A0wR20R46%3A5zi3i1wR47y7%3A_LWater%3A0nwR20R46%3A5i3zi1wR47R49%3A0wR50R51%3A0wR20R38%3A2azhai36hwR20R52%3A1zwR20R38%3A2ai3i1i2zhai98i100i100i36hwR20R42%3A1zwR20R38%3A2ai3hai78hwR20R38%3A2ai1i2zi3hai100i100i46i88hwR20R42%3A1i2wR20R43%3A3i1zwR44R45%3A0wR20R46%3A5i1zi1wR47R54%3A0nwR20R38%3A2ai1hai94hwR20R52%3A1i1wR20R38%3A2ai2zi3i1hai100i51i93i99hwR20R42%3A1i1wR20R43%3A3i2zwR44R45%3A0wR20R46%3A5i2zi1wR47R54%3A0nwR20R38%3A2ai2hai94hwR20R52%3A1i2wR20R38%3A2azi3i1i2hai51i100i100i100hwR20R42%3A1i5wR20R55%3A2zy13%3AEtat%2520PrimalwR20y4%3A_HFx%3A1wy12%3A_SuperEffecty7%3A_SFAura%3A3zi11206400i1wR20R38%3A2azhai31hwR20R43%3A3zi3wR44R45%3A0wR20R46%3A5zi3i14wR47R48%3A0nwR20R46%3A5zi3i15wR47R48%3A0nwR20R38%3A2azhai22hwR20y6%3A_HDead%3A1i3wR20R52%3A1zwR20R38%3A2ai1i2zhai100i100i39hwR20R42%3A1i3wR20R43%3A3i1zwR44R45%3A0wR20R46%3A5i1zi1wR47R53%3A0nwR20R38%3A2ai1hai94hwR20R52%3A1i1wR20R38%3A2ai2zi1hai100i44i99hwR20R42%3A1i1wR20R43%3A3i2zwR44R45%3A0wR20R46%3A5i2zi1wR47R53%3A0nwR20R38%3A2ai2hai94hwR20R52%3A1i2wR20R38%3A2azi1i2hai44i100i100hwR20R42%3A1i4wR20R43%3A3zi1wR44R45%3A0wR20R46%3A5zi1i51wR47R53%3A0nwR20R38%3A2azhai38hwR20R66%3A1i1wR20R52%3A1zwR20R38%3A2ai2zhai100i68hwR20R42%3A1i6wR20R43%3A3i2zwR44R45%3A0wR20R46%3A5i2zi1wR47R54%3A0nwR20R38%3A2ai2hai94hwR20R52%3A1i2wR20R38%3A2azi2hai68i100hwR20R42%3A1i2wR20R43%3A3zi2wR44R45%3A0wR20R46%3A5zi2i41wR47R54%3A0nwR20R38%3A2azhai62hwR20R66%3A1i2wR20R52%3A1zwR20y7%3A_HRegen%3A3zi1wR47y6%3A_LHeal%3A0wR20y8%3A_HFinish%3A2wy13%3A_EndBehavioury9%3A_EBEscape%3A0wR70y8%3A_EBStand%3A0hy9%3A_smonstery30%3A%252Fswf%252Fsmonster.swf%253Fv%253D26g',
	'oy6%3A_checky28%3A%252Fuser%252Fcheck%253Fid%253DyYC6Ly6%3A_debugy37%3A%252Ftools%252FdebugFight%253Fsk%253DwmeUpBqhy8%3A_mbottomi20y7%3A_mrightzy6%3A_equipy39%3A%252Fimg%252Ficons%252Fobj_%253A%253Aid%253A%253A.gify6%3A_sdinoy27%3A%252Fswf%252Fsdino.swf%253Fv%253D33y5%3A_dinoy26%3A%252Fswf%252Fdino.swf%253Fv%253D35y5%3A_dojony5%3A_mtopi170y3%3A_bgy29%3A%252Fimg%252Ffight%252Fs_fountj.jpgy7%3A_groundny8%3A_debriefy54%3Ajavascript%253A_.toggleFlash%2528%2527debrief%2527%252C%2520-85%2529y8%3A_historylwy8%3A_Historyy5%3A_HAdd%3A2oy6%3A_propsahR10ty5%3A_lifei230y5%3A_namey6%3AOracley5%3A_sidety5%3A_sizei230y4%3A_fidzy4%3A_gfxy16%3A89xsFY1bzYhjG000gnwR20R21%3A2oR22ahR10tR23i230R24y7%3APsychozR26tR27i230R28i1R29y16%3A89e7EDLfIWKJf000gnwR20R21%3A2oR22ahR10tR23i230R24y4%3AKingR26tR27i230R28i2R29y16%3A89n03SgHUYlZU000gnwR20R21%3A2oR22ahR10fR23i20R24y9%3AGoupignonR26fR27i100R28i3R29y6%3Agoupi3gnwR20R21%3A2oR22ahR10fR23i70R24y17%3AG%25C3%25A9ant%2520VertR26fR27i100R28i4R29y5%3AgvertgnwR20R21%3A2oR22ahR10fR23i80R24y6%3ACoqdurR26fR27i100R28i5R29y3%3Acoqgwy17%3A_AddFighterEffecty6%3A_AFRun%3A0wR20y8%3A_HStatus%3A2i1wy7%3A_Statusy6%3A_SHeal%3A1i1wR20R43%3A2i2wR44R45%3A1i1wR20y4%3A_HFx%3A1wy12%3A_SuperEffecty8%3A_SFSwamp%3A1i2wR20y11%3A_HMaxEnergy%3A2azi1i2hai100i100i100hwR20y8%3A_HEnergy%3A2azi1i2hai100i100i100hwR20y5%3A_HLog%3A1y16%3AEnergy%2520enabledwR20y9%3A_HDisplay%3A1nwR20R50%3A2ai4i2zi1i3i5hai100i100i100i100i100i80hwR20y7%3A_HPause%3A1zwR20y6%3A_HGoto%3A3i4i1wy11%3A_GotoEffecty8%3A_GNormal%3A0wR20y9%3A_HDamages%3A5i4i1i1wy11%3A_LifeEffecty8%3A_LNormal%3A0nwR20y6%3A_HLost%3A3i4i1wR59R60%3A0wR20R50%3A2ai4hai94hwR20y8%3A_HReturn%3A1i4wR20R50%3A2ai2zi1i3i5i4hai100i100i100i100i90i100hwR20R54%3A1i2wR20y10%3A_HAnnounce%3A2i2y18%3ADouche%2520EcossaisewR20y14%3A_HDamagesGroup%3A3i2loR23i53y4%3A_tidi3goR23i44R66i4goR23i37R66i5ghwy12%3A_GroupEffecty9%3A_GrShower%3A0wR20y6%3A_HDead%3A1i3wR20R50%3A2ai2hai74hwR20R55%3A3i2i4wR56R57%3A0wR20R58%3A5i2i4i108wR59y7%3A_LWater%3A0nwR20R43%3A2i4wR44y8%3A_SPoison%3A1i14wR20R50%3A2ai2hai68hwR20R69%3A1i4wR20R62%3A1i2wR20R50%3A2azi1i5i2hai100i100i100i83hwR20R54%3A1i3wR20R63%3A2zR64wR20R65%3A3zloR23i31R66i5ghwR67R68%3A0wR20R50%3A2azhai78hwR20R55%3A3zi5wR56R57%3A0wR20R58%3A5zi5i94wR59R70%3A0nwR20R43%3A2i5wR44R71%3A1i14wR20R50%3A2azhai72hwR20R69%3A1i5wR20R62%3A1zwR20y8%3A_HFinish%3A2wy13%3A_EndBehavioury9%3A_EBEscape%3A0wR73y8%3A_EBStand%3A0hy9%3A_smonstery30%3A%252Fswf%252Fsmonster.swf%253Fv%253D26g',
	'oy6%3A_checky28%3A%252Fuser%252Fcheck%253Fid%253DyYC6Ly6%3A_debugy37%3A%252Ftools%252FdebugFight%253Fsk%253D3GHQD1Sky8%3A_mbottomi20y7%3A_mrightzy6%3A_equipy39%3A%252Fimg%252Ficons%252Fobj_%253A%253Aid%253A%253A.gify6%3A_sdinoy27%3A%252Fswf%252Fsdino.swf%253Fv%253D33y5%3A_dinoy26%3A%252Fswf%252Fdino.swf%253Fv%253D35y5%3A_dojony5%3A_mtopi120y3%3A_bgy29%3A%252Fimg%252Ffight%252Fs_jungle.jpgy7%3A_groundny8%3A_debriefy54%3Ajavascript%253A_.toggleFlash%2528%2527debrief%2527%252C%2520-85%2529y8%3A_historylwy8%3A_Historyy5%3A_HAdd%3A2oy6%3A_propsahR10ty5%3A_lifei120y5%3A_namey8%3ADeathSuny5%3A_sidety5%3A_sizei120y4%3A_fidzy4%3A_gfxy16%3A590iaiFtHCgfq000gnwR20R21%3A2oR22ahR10fR23i80R24y20%3AGardien%2520ArboricoleR26fR27i100R28i1R29y6%3Agrdiengwy17%3A_AddFighterEffecty9%3A_AFGround%3A0wR20y11%3A_HMaxEnergy%3A2azhai100hwR20y8%3A_HEnergy%3A2azhai100hwR20y5%3A_HLog%3A1y16%3AEnergy%2520enabledwR20y9%3A_HDisplay%3A1nwR20R36%3A2ai1zhai100i100hwR20y7%3A_HPause%3A1zwR20R36%3A2ai1hai80hwR20R36%3A2azi1hai100i95hwR20R40%3A1i3wR20y6%3A_HGoto%3A3zi1wy11%3A_GotoEffecty8%3A_GNormal%3A0wR20y9%3A_HDamages%3A5zi1i13wy11%3A_LifeEffecty11%3A_LLightning%3A0nwR20R44%3A5i1zi1wR45y8%3A_LNormal%3A0wy7%3A_Effecty9%3A_ECounter%3A0wR20R36%3A2azhai94hwR20y8%3A_HReturn%3A1zwR20R36%3A2azi1hai94i100hwR20R40%3A1i2wR20R41%3A3zi1wR42R43%3A0wR20R44%3A5zi1i9wR45y6%3A_LFire%3A0nwR20R44%3A5zi1i10wR45R51%3A0nwR20R44%3A5i1zi1wR45R47%3A0wR48R49%3A0wR20R36%3A2azhai85hwR20R50%3A1zwR20R36%3A2azi1hai85i100hwR20R40%3A1i8wR20R41%3A3zi1wR42R43%3A0wR20R44%3A5zi1i1wR45y6%3A_LWood%3A0nwR20R44%3A5zi1i1wR45R52%3A0nwR20R44%3A5i1zi1wR45R47%3A0wR48R49%3A0wR20R36%3A2azhai76hwR20R50%3A1zwR20R36%3A2ai1zhai98i81hwR20R40%3A1i1wR20R36%3A2ai1hai78hwR20R36%3A2azi1hai81i100hwR20R40%3A1i7wR20y10%3A_HAnnounce%3A2zy6%3AFoudrewR20y14%3A_HDamagesGroup%3A3zloR23i21y4%3A_tidi1ghwy12%3A_GroupEffecty12%3A_GrLightning%3A0wR20R36%3A2azhai54hwR20R36%3A2ai1zhai100i91hwR20R40%3A1i7wR20R53%3A2i1y11%3ACom%25C3%25A8tewR20R55%3A3i1loR23i7R56zghwR57y9%3A_GrMeteor%3A0wR20R36%3A2ai1hai78hwR20R36%3A2azi1hai91i83hwR20R40%3A1i1wR20R53%3A2zy23%3ACrepuscule%2520FlamboyantwR20R55%3A3zloR23i18R56i1ghwR57y13%3A_GrCrepuscule%3A0wR20R36%3A2azhai49hwR20R36%3A2azi1hai49i100hwR20R40%3A1i8wR20R41%3A3zi1wR42R43%3A0wR20R44%3A5zi1i13wR45R46%3A0nwR20R36%3A2azhai43hwR20y6%3A_HDead%3A1i1wR20R50%3A1zwR20y7%3A_HRegen%3A3zi1wR45y6%3A_LHeal%3A0wR20y8%3A_HFinish%3A2wy13%3A_EndBehavioury9%3A_EBEscape%3A0wR67y8%3A_EBStand%3A0hy9%3A_smonstery30%3A%252Fswf%252Fsmonster.swf%253Fv%253D26g',
	'oy6%3A_checky28%3A%252Fuser%252Fcheck%253Fid%253DyYC6Ly6%3A_debugy37%3A%252Ftools%252FdebugFight%253Fsk%253DCd8tbVIFy8%3A_mbottomi20y7%3A_mrightzy6%3A_equipy39%3A%252Fimg%252Ficons%252Fobj_%253A%253Aid%253A%253A.gify6%3A_sdinoy27%3A%252Fswf%252Fsdino.swf%253Fv%253D33y5%3A_dinoy26%3A%252Fswf%252Fdino.swf%253Fv%253D35y5%3A_dojony5%3A_mtopi110y3%3A_bgy28%3A%252Fimg%252Ffight%252Fs_plaza.jpgy7%3A_groundy4%3Adirty8%3A_debriefy54%3Ajavascript%253A_.toggleFlash%2528%2527debrief%2527%252C%2520-85%2529y8%3A_historylwy8%3A_Historyy5%3A_HAdd%3A2oy6%3A_propsahR10ty5%3A_lifei229y5%3A_namey11%3ADemonSpirity5%3A_sidety5%3A_sizei230y4%3A_fidzy4%3A_gfxy16%3A29VRA00KtkGM1000gnwR21R22%3A2oR23ahR10fR24i30R25y23%3AEl%25C3%25A9mental%2520jambesR27fR28i100R29i1R30y6%3Aearth2gnwR21R22%3A2oR23ahR10fR24i30R25R32R27fR28i100R29i2R30R33gnwR21y8%3A_HStatus%3A2zwy7%3A_Statusy6%3A_SHeal%3A1i1wR21y11%3A_HMaxEnergy%3A2azhai100hwR21y8%3A_HEnergy%3A2azhai100hwR21y5%3A_HLog%3A1y16%3AEnergy%2520enabledwR21y9%3A_HDisplay%3A1nwR21R38%3A2azi1i2hai100i100i100hwR21y7%3A_HPause%3A1zwR21y10%3A_HAnnounce%3A2zy17%3ARayon%2520Kaar-SherwR21y14%3A_HDamagesGroup%3A3zloR24i19y4%3A_tidi1goR24i18R46i2ghwy12%3A_GroupEffecty11%3A_GrLevitRay%3A0wR21y4%3A_HFx%3A1wy12%3A_SuperEffecty10%3A_SFMudWall%3A2i1twR21R49%3A1wR50R51%3A2i2twR21R38%3A2azhai56hwR21R38%3A2ai1i2zhai100i100i56hwR21R42%3A1zwR21y6%3A_HGoto%3A3i1zwy11%3A_GotoEffecty8%3A_GNormal%3A0wR21y9%3A_HDamages%3A5i1zi1wy11%3A_LifeEffecty8%3A_LNormal%3A0nwR21y6%3A_HLost%3A3i1i1wR56R57%3A0wR21R38%3A2ai1hai94hwR21y8%3A_HReturn%3A1i1wR21R38%3A2ai2zi1hai100i61i99hwR21R42%3A1i1wR21R52%3A3i2zwR53R54%3A0wR21R55%3A5i2zi1wR56R57%3A0nwR21R58%3A3i2i1wR56R57%3A0wR21R58%3A3i2i3wR56y6%3A_LAcid%3A0wR21R38%3A2ai2hai94hwR21R59%3A1i2wR21R38%3A2azi1i2hai61i100i100hwR21R42%3A1i7wR21y7%3A_HRegen%3A3zi1wR56y6%3A_LHeal%3A0wR21R38%3A2azi1i2hai61i100i100hwR21R42%3A1i2wR21R43%3A2zy3%3AGelwR21R45%3A3zloR24i15R46i2ghwR47y6%3A_GrIce%3A0wR21R34%3A2i2wR35y6%3A_SSlow%3A0wR21R38%3A2azhai39hwR21y6%3A_HDead%3A1i2wR21R38%3A2ai1zhai100i46hwR21R42%3A1i1wR21R52%3A3i1zwR53R54%3A0wR21R55%3A5i1zi1wR56R57%3A0nwR21R58%3A3i1i1wR56R57%3A0wR21R38%3A2ai1hai94hwR21R59%3A1i1wR21R38%3A2azi1hai46i100hwR21R42%3A1i3wR21R61%3A3zi1wR56R62%3A0wR21R38%3A2azi1hai46i100hwR21R42%3A1i1wR21R43%3A2zy20%3ACanon%2520%25C3%25A0%2520EauwR21R45%3A3zloR24i15R46i1ghwR47y13%3A_GrWaterCanon%3A0wR21R38%3A2azhai39hwR21R66%3A1i1wR21y8%3A_HFinish%3A2wy13%3A_EndBehavioury9%3A_EBEscape%3A0wR70y8%3A_EBStand%3A0hy9%3A_smonstery30%3A%252Fswf%252Fsmonster.swf%253Fv%253D26g',
	'oy6%3A_checky28%3A%252Fuser%252Fcheck%253Fid%253DyYC6Ly6%3A_debugy37%3A%252Ftools%252FdebugFight%253Fsk%253DggBndL6py8%3A_mbottomi20y7%3A_mrightzy6%3A_equipy39%3A%252Fimg%252Ficons%252Fobj_%253A%253Aid%253A%253A.gify6%3A_sdinoy27%3A%252Fswf%252Fsdino.swf%253Fv%253D33y5%3A_dinoy26%3A%252Fswf%252Fdino.swf%253Fv%253D35y5%3A_dojony5%3A_mtopi155y3%3A_bgy26%3A%252Fimg%252Ffight%252Fs_dnv.jpgy7%3A_groundny8%3A_debriefy54%3Ajavascript%253A_.toggleFlash%2528%2527debrief%2527%252C%2520-85%2529y8%3A_historylwy8%3A_Historyy5%3A_HAdd%3A2oy6%3A_propsahR10ty5%3A_lifei100y5%3A_namey11%3ASilentStoney5%3A_sidety5%3A_sizei200y4%3A_fidzy4%3A_gfxy16%3A59e9OSz9v7KnK000gnwR20R21%3A2oR22ahR10fR23i80R24y6%3ACoqdurR26fR27i100R28i1R29y3%3Acoqgwy17%3A_AddFighterEffecty6%3A_AFRun%3A0wR20R21%3A2oR22ahR10fR23i20R24y9%3AGoupignonR26fR27i100R28i2R29y6%3Agoupi3gnwR20y11%3A_HMaxEnergy%3A2azhai100hwR20y8%3A_HEnergy%3A2azhai100hwR20y5%3A_HLog%3A1y16%3AEnergy%2520enabledwR20y9%3A_HDisplay%3A1nwR20R38%3A2azi1i2hai100i80i100hwR20y7%3A_HPause%3A1zwR20y10%3A_HAnnounce%3A2zy6%3AVigneswR20y8%3A_HNotify%3A2li1hwy13%3A_Notificationy10%3A_NInitDown%3A0wR20y14%3A_HDamagesGroup%3A3zloR23zy4%3A_tidi1ghwy12%3A_GroupEffecty8%3A_GrVigne%3A0wR20R38%3A2azhai80hwR20y6%3A_HGoto%3A3zi1wy11%3A_GotoEffecty8%3A_GNormal%3A0wR20y9%3A_HDamages%3A5zi1i130wy11%3A_LifeEffecty6%3A_LFire%3A0nwR20R38%3A2azhai74hwR20y6%3A_HDead%3A1i1wR20y8%3A_HReturn%3A1zwR20R38%3A2azi2hai74i100hwR20R42%3A1i7wR20R52%3A3zi2wR53R54%3A0wR20R55%3A5zi2i75wR56y11%3A_LLightning%3A0nwR20R38%3A2azhai68hwR20R58%3A1i2wR20R59%3A1zwR20y8%3A_HFinish%3A2wy13%3A_EndBehavioury9%3A_EBEscape%3A0wR62y8%3A_EBStand%3A0hy9%3A_smonstery30%3A%252Fswf%252Fsmonster.swf%253Fv%253D26g'
];
const version = 0;
const fightVersion = [
	{ legacy_data: fightData[2], debug: false },
	{
		bg: 's_dnv',
		top: 120,
		bottom: 20,
		history: [
			{
				action: DinoAnim.Fight.Action.Add,
				fighter: {
					props: [],
					dino: true,
					life: 100,
					name: 'Dragon Jr',
					side: true,
					scale: 1,
					fid: 0,
					gfx: '09T1Yt9wqq4Rx000'
				}
			},
			{
				action: DinoAnim.Fight.Action.Add,
				fighter: {
					props: [],
					dino: false,
					life: 100,
					name: 'Gardien Abricole',
					side: false,
					scale: 1,
					fid: 1,
					gfx: 'grdien'
				}
			}
		],
		debug: true
	}
];
//addFlashPreview(fightData[2], container);

const fight = new DinoAnim.Fight(fightVersion[version]);
addFlashPreview(fight.getMTFormat(true));
document.body.appendChild(fight.getDisplay());
