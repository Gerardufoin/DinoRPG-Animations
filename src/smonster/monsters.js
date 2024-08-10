// @ts-check
import { amanpe } from './amanpe/amanpe.js';
import { arcadu } from './arcadu/arcadu.js';
import { bad } from '../dino/bad.js';
import { bao } from './bao/bao.js';
import { anguil } from './anguil/anguil.js';
import { bamboo } from './bamboo/bamboo.js';
import { barche } from './barche/barche.js';
import { bat } from './bat/bat.js';
import { behemu } from './behemu/behemu.js';
import { belius } from './belius/belius.js';
import { borg } from './borg/borg.js';
import { brig1 } from './brig1/brig1.js';
import { brig2 } from './brig2/brig2.js';
import { brig3 } from './brig3/brig3.js';
import { cactus } from './cactus/cactus.js';
import { chima } from './chima/chima.js';
import { cobra } from './cobra/cobra.js';
import { coq } from './coq/coq.js';
import { cranit } from './cranit/cranit.js';
import { crokoc } from './crokoc/crokoc.js';
import { cyclo } from './cyclo/cyclo.js';
import { cyclo2 } from './cyclo2/cyclo2.js';
import { doro } from './doro/doro.js';
import { dorolu } from './dorolu/dorolu.js';
import { dorou } from './dorou/dorou.js';
import { ecu } from './ecu/ecu.js';
import { eearth } from './eearth/eearth.js';
import { efire } from './efire/efire.js';
import { egrllz } from './egrllz/egrllz.js';
import { ewater } from './ewater/ewater.js';
import { febrez } from './febrez/febrez.js';
import { flam } from './flam/flam.js';
import { ffrutx } from './ffrutx/ffrutx.js';
import { frking } from './frking/frking.js';
import { frutox } from './frutox/frutox.js';
import { fuego } from './fuego/fuego.js';
import { garouz } from './garouz/garouz.js';
import { gluon } from './gluon/gluon.js';
import { goblin } from './goblin/goblin.js';
import { goupi, goupi2, goupi3 } from './goupi/goupi.js';
import { grdien } from './grdien/grdien.js';
import { grizor } from './grizor/grizor.js';
import { grizo2 } from './grizo2/grizo2.js';
import { grizo3 } from './grizo3/grizo3.js';
import { groms, grom2, grom3 } from './groms/groms.js';
import { gropi } from './gropi/gropi.js';
import { groule } from './groule/groule.js';
import { gvert } from './gvert/gvert.js';
import { hippo } from './hippo/hippo.js';
import { igor } from './igor/igor.js';
import { kazka } from './kazka/kazka.js';
import { kmask, korgon, rkrgns } from './korgon/korgon.js';
import { lapouf } from './lapouf/lapouf.js';
import { lucet } from './lucet/lucet.js';
import { marca } from './marca/marca.js';
import { mandragore } from './mandragore/mandragore.js';
import { mantoo } from './mantoo/mantoo.js';
import { mosqui } from './mosqui/mosqui.js';
import { morg } from './morg/morg.js';
import { morg2 } from './morg2/morg2.js';
import { mugard } from './mugard/mugard.js';
import { muking } from './muking/muking.js';
import { piglou } from './piglou/piglou.js';
import { pira } from './pira/pira.js';
import { piraos } from './piraos/piraos.js';
import { pteroz } from './pteroz/pteroz.js';
import { rapaca } from './rapaca/rapaca.js';
import { rasca } from './rasca/rasca.js';
import { rocky } from './rocky/rocky.js';
import { rodeur } from './rodeur/rodeur.js';
import { roking } from './roking/roking.js';
import { ronciv } from './ronciv/ronciv.js';
import { scorp } from './scorp/scorp.js';
import { serpe } from './serpe/serpe.js';
import { singmu } from './singmu/singmu.js';
import { sofia } from './sofia/sofia.js';
import { taurus } from './taurus/taurus.js';
import { towgrd } from './towgrd/towgrd.js';
import { upgrd } from './upgrd/upgrd.js';
import { vener } from './vener/vener.js';
import { wolf } from './wolf/wolf.js';
import { worm } from './worm/worm.js';
import { worm2 } from './worm2/worm2.js';
import { wteamc } from './wteamc/wteamc.js';
import { yakuzi } from './yakuzi/yakuzi.js';

export const monsters = {
	goupi: goupi,
	goupi2: goupi2,
	goupi3: goupi3,
	wolf: wolf,
	gluon: gluon,
	gvert: gvert,
	coq: coq,
	flam: flam,
	goblin: goblin,
	korgon: korgon,
	rkrgns: rkrgns,
	kmask: kmask,
	borg: borg,
	pira: pira,
	anguil: anguil,
	kazka: kazka,
	ronciv: ronciv,
	grdien: grdien,
	bat: bat,
	ewater: ewater,
	efire: efire,
	eearth: eearth,
	rasca: rasca,
	vener: vener,
	barche: barche,
	cobra: cobra,
	hippo: hippo,
	rocky: rocky,
	pteroz: pteroz,
	egrllz: egrllz,
	scorp: scorp,
	brig1: brig1,
	brig2: brig2,
	brig3: brig3,
	piraos: piraos,
	worm: worm,
	wteamc: wteamc,
	towgrd: towgrd,
	bamboo: bamboo,
	worm2: worm2,
	cactus: cactus,
	yakuzi: yakuzi,
	igor: igor,
	gropi: gropi,
	mantoo: mantoo,
	mosqui: mosqui,
	muking: muking,
	mugard: mugard,
	singmu: singmu,
	frutox: frutox,
	ffrutx: ffrutx,
	frking: frking,
	rapaca: rapaca,
	morg: morg,
	mandragore: mandragore,
	cyclo: cyclo,
	cyclo2: cyclo2,
	groms: groms,
	grom2: grom2,
	grom3: grom3,
	doro: doro,
	dorou: dorou,
	lucet: lucet,
	lapouf: lapouf,
	ecu: ecu,
	piglou: piglou,
	febrez: febrez,
	marca: marca,
	dorolu: dorolu,
	fuego: fuego,
	grizor: grizor,
	morg2: morg2,
	grizo2: grizo2,
	grizo3: grizo3,
	garouz: garouz,
	amanpe: amanpe,
	upgrd: upgrd,
	taurus: taurus,
	bao: bao,
	sofia: sofia,
	chima: chima,
	groule: groule,
	behemu: behemu,
	serpe: serpe,
	roking: roking,
	cranit: cranit,
	crokoc: crokoc,
	arcadu: arcadu,
	rodeur: rodeur,
	belius: belius
};
export const error = bad.small;
