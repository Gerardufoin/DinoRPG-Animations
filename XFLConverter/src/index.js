// @ts-check
import { XFLParser } from './xfl/XFLParser.js';
import { SVGAdapter } from './svg/SVGAdapter.js';
import { mapping_sdino } from './svg/mapping_sdino.js';
import { mapping_gfx } from './svg/mapping_gfx.js';
import { mapping_smonster } from './svg/mapping_smonster.js';
import { mapping_dino } from './svg/mapping_dino.js';

const parser = new XFLParser();
//parser.parse('./resources/sdino/LIBRARY/Symbol 163.xml', '_p1', undefined, 0); // moueffe
//parser.parse('./resources/sdino/LIBRARY/Symbol 230.xml', '_anim', undefined, 0); // pigmou
//parser.parse('./resources/sdino/LIBRARY/Symbol 284.xml', '_anim', undefined, 0); // winks
//parser.parse('./resources/sdino/LIBRARY/Symbol 336.xml', '_p1', undefined, 0); // planaile
//parser.parse('./resources/sdino/LIBRARY/Symbol 397.xml', '_p1', undefined, 0); // castivore
//parser.parse('./resources/sdino/LIBRARY/Symbol 468.xml', '_p1', undefined, 0); // rocky
//parser.parse('./resources/sdino/LIBRARY/Symbol 517.xml', '_p1', undefined, 0); // pteroz
//parser.parse('./resources/sdino/LIBRARY/Symbol 547.xml', '_p1', undefined, 0); // nuagoz
//parser.parse('./resources/sdino/LIBRARY/Symbol 600.xml', '_p1', undefined, 0); // sirain
//parser.parse('./resources/sdino/LIBRARY/Symbol 666.xml', '_p1', undefined, 0); // hippoclamp
//parser.parse('./resources/sdino/LIBRARY/Symbol 710.xml', '_p1', undefined, 0); // gorilloz
//parser.parse('./resources/sdino/LIBRARY/Symbol 775.xml', '_p1', undefined, 0); // wanwan
//parser.parse('./resources/sdino/LIBRARY/Symbol 855.xml', '_p1', undefined, 0); // santaz
//parser.parse('./resources/sdino/LIBRARY/Symbol 913.xml', '_p1', undefined, 0); // feross
//parser.parse('./resources/sdino/LIBRARY/Symbol 965.xml', '_p1', undefined, 0); // kabuki
//parser.parse('./resources/sdino/LIBRARY/Symbol 1044.xml', '_p1', undefined, 0); // mahamuti
//parser.parse('./resources/sdino/LIBRARY/Symbol 1132.xml', '_anim', undefined, 0); // soufflet
//parser.parse('./resources/sdino/LIBRARY/Symbol 1133.xml', '_p1', undefined, 0); // soufflet
//parser.parse('./resources/sdino/LIBRARY/Symbol 1261.xml', '_sub', undefined, 0); // toufufu - Still
//parser.parse('./resources/sdino/LIBRARY/Symbol 1290.xml', '_p1', undefined, 0); // toufufu
//parser.parse('./resources/sdino/LIBRARY/Symbol 1462.xml', '_p1', undefined, 0); // quetzu
//parser.parse('./resources/sdino/LIBRARY/Symbol 1562.xml', '_p1', undefined, 0); // smog
//parser.parse('./resources/sdino/LIBRARY/Symbol 1639.xml', '_p1', undefined, 0); // triceragon
//parser.parse('./resources/sdino/LIBRARY/Symbol 156.xml', '_sub', undefined, 0); // fx_dust

// DINO
//parser.parse('./resources/dino/LIBRARY/Symbol 294.xml', '_sub', undefined, 3); // moueffe
//parser.parse('./resources/dino/LIBRARY/Symbol 474.xml', '_sub', undefined, 3); // pigmou
//parser.parse('./resources/dino/LIBRARY/Symbol 478.xml', '_sub', undefined, 3); // pigmou horns fire
//parser.parse('./resources/dino/LIBRARY/Symbol 642.xml', '_sub', undefined, 3); // winks
//parser.parse('./resources/dino/LIBRARY/Symbol 800.xml', '_sub', undefined, 3); // planail
//parser.parse('./resources/dino/LIBRARY/Symbol 962.xml', '_sub', undefined, 3); // castivore
//parser.parse('./resources/dino/LIBRARY/Symbol 1117.xml', '_sub', undefined, 3); // rocky
//parser.parse('./resources/dino/LIBRARY/Symbol 1209.xml', '_sub', undefined, 3); // pteroz
//parser.parse('./resources/dino/LIBRARY/Symbol 1276.xml', '_sub', undefined, 3); // nuagoz
//parser.parse('./resources/dino/LIBRARY/Symbol 1405.xml', '_sub', undefined, 3); // sirain
//parser.parse('./resources/dino/LIBRARY/Symbol 1567.xml', '_sub', undefined, 3); // hippoclamp
//parser.parse('./resources/dino/LIBRARY/Symbol 1576.xml', '_sub', undefined, 3); // hippoclamp back fin
//parser.parse('./resources/dino/LIBRARY/Symbol 1746.xml', '_sub', undefined, 3); // hippoclamp
//parser.parse('./resources/dino/LIBRARY/Symbol 1897.xml', '_sub', undefined, 3); // wanwan
//parser.parse('./resources/dino/LIBRARY/Symbol 2061.xml', '_sub', undefined, 3); // santaz
//parser.parse('./resources/dino/LIBRARY/Symbol 2204.xml', '_sub', undefined, 3); // feross
//parser.parse('./resources/dino/LIBRARY/Symbol 2354.xml', '_sub', undefined, 3); // kabuki
//parser.parse('./resources/dino/LIBRARY/Symbol 2516.xml', '_sub', undefined, 3); // mahamuti
//parser.parse('./resources/dino/LIBRARY/Symbol 2671.xml', '_sub', undefined, 3); // soufflet
//parser.parse('./resources/dino/LIBRARY/Symbol 2893.xml', '_sub', undefined, 3); // toufufu
//parser.parse('./resources/dino/LIBRARY/Symbol 3193.xml', '_sub', undefined, 3); // quetzu
//parser.parse('./resources/dino/LIBRARY/Symbol 3381.xml', '_sub', undefined, 3); // smog
//parser.parse('./resources/dino/LIBRARY/Symbol 3573.xml', '_sub', undefined, 3); // triceragon

//SMONSTER
//parser.parse('./resources/smonster/LIBRARY/Symbol 4089.xml', 'smonster', undefined, 1); // smonster
//parser.parse('./resources/smonster/LIBRARY/Symbol 80.xml', '_p1', undefined, 1); // goupi Goupignon
//parser.parse('./resources/smonster/LIBRARY/Symbol 116.xml', '_p1', undefined, 1); // wolf
//parser.parse('./resources/smonster/LIBRARY/Symbol 157.xml', '_p1', undefined, 1); // gluon
//parser.parse('./resources/smonster/LIBRARY/Symbol 120.xml', '_sub', undefined, 1); // Gluon puddle
//parser.parse('./resources/smonster/LIBRARY/Symbol 131.xml', '_sub', undefined, 1); // Gluon drip
//parser.parse('./resources/smonster/LIBRARY/Symbol 149.xml', '_sub', undefined, 1); // Gluon ball
//parser.parse('./resources/smonster/LIBRARY/Symbol 180.xml', '_p1', undefined, 1); // gvert
//parser.parse('./resources/smonster/LIBRARY/Symbol 209.xml', '_p1', undefined, 1); // coq Coqdur
//parser.parse('./resources/smonster/LIBRARY/Symbol 254.xml', '_p1', undefined, 1); // flam Flamèche
//parser.parse('./resources/smonster/LIBRARY/Symbol 215.xml', '_sub', undefined, 1); // flam body
//parser.parse('./resources/smonster/LIBRARY/Symbol 249.xml', '_sub', undefined, 1); // flam cinders
//parser.parse('./resources/smonster/LIBRARY/Symbol 289.xml', '_p1', undefined, 1); // goblin Gobelin
//parser.parse('./resources/smonster/LIBRARY/Symbol 312.xml', '_p1', undefined, 1); // korgon
//parser.parse('./resources/smonster/LIBRARY/Symbol 327.xml', '_p1', undefined, 1); // kmask Korgon masqué
//parser.parse('./resources/smonster/LIBRARY/Symbol 360.xml', '_p1', undefined, 1); // borg Borg
//parser.parse('./resources/smonster/LIBRARY/Symbol 393.xml', '_p1', undefined, 1); // pira Piranoz
//parser.parse('./resources/smonster/LIBRARY/Symbol 435.xml', '_p1', undefined, 1); // anguil Anguilloz
//parser.parse('./resources/smonster/LIBRARY/Symbol 471.xml', '_p1', undefined, 1); // kazka Kazkadine
//parser.parse('./resources/smonster/LIBRARY/Symbol 498.xml', '_p1', undefined, 1); // ronciv Roncivore
//parser.parse('./resources/smonster/LIBRARY/Symbol 529.xml', '_p1', undefined, 1); // grdien Gardien Abricole
//parser.parse('./resources/smonster/LIBRARY/Symbol 546.xml', '_p1', undefined, 1); // grdien Gardien Abricole
//parser.parse('./resources/smonster/LIBRARY/Symbol 595.xml', '_p1', undefined, 1); // ewater Elémental d'Eau
//parser.parse('./resources/smonster/LIBRARY/Symbol 592.xml', '_sub', undefined, 1); // ewater puddle
//parser.parse('./resources/smonster/LIBRARY/Symbol 644.xml', '_p1', undefined, 1); // efire Elémental de feu
//parser.parse('./resources/smonster/LIBRARY/Symbol 679.xml', '_p1', undefined, 1); // eearth Elémental de terre
//parser.parse('./resources/smonster/LIBRARY/Symbol 660.xml', '_sub', undefined, 1); // eearth legs
//parser.parse('./resources/smonster/LIBRARY/Symbol 671.xml', '_sub', undefined, 1); // eearth head
//parser.parse('./resources/smonster/LIBRARY/Symbol 704.xml', '_p1', undefined, 1); // rasca Rascaphandre
//parser.parse('./resources/smonster/LIBRARY/Symbol 738.xml', '_p1', undefined, 1); // vener Vénérable
//parser.parse('./resources/smonster/LIBRARY/Symbol 804.xml', '_p1', undefined, 1); // barche Bébé Archélion
//parser.parse('./resources/smonster/LIBRARY/Symbol 786.xml', '_sub', undefined, 1); // barche Bébé Archélion
//parser.parse('./resources/smonster/LIBRARY/Symbol 818.xml', '_p1', undefined, 1); // cobra Cobrazero
//parser.parse('./resources/smonster/LIBRARY/Symbol 854.xml', '_p1', undefined, 1); // hippo Dark Hippoclamp
//parser.parse('./resources/smonster/LIBRARY/Symbol 881.xml', '_p1', undefined, 1); // rocky Dark Rocky
//parser.parse('./resources/smonster/LIBRARY/Symbol 920.xml', '_p1', undefined, 1); // pteroz Dark Pteroz
//parser.parse('./resources/smonster/LIBRARY/Symbol 954.xml', '_p1', undefined, 1); // egrllz Esprit Gorilloz
//parser.parse('./resources/smonster/LIBRARY/Symbol 977.xml', '_p1', undefined, 1); // scorp Scorpwink
//parser.parse('./resources/smonster/LIBRARY/Symbol 1004.xml', '_p1', undefined, 1); // brig1 Brigand Zaxa
//parser.parse('./resources/smonster/LIBRARY/Symbol 1038.xml', '_p1', undefined, 1); // brig2 Brigand Emmema
//parser.parse('./resources/smonster/LIBRARY/Symbol 1071.xml', '_p1', undefined, 1); // brig3 Brigand Mattmût
//parser.parse('./resources/smonster/LIBRARY/Symbol 1095.xml', '_p1', undefined, 1); // piraos Pirhan-os
//parser.parse('./resources/smonster/LIBRARY/Symbol 1121.xml', '_p1', undefined, 1); // worm Longbrik
//parser.parse('./resources/smonster/LIBRARY/Symbol 1188.xml', '_p1', undefined, 1); // wteamc [TW]Capitaine
//parser.parse('./resources/smonster/LIBRARY/Symbol 1175.xml', '_sub', undefined, 1); // wteamc Captain stand
//parser.parse('./resources/smonster/LIBRARY/Symbol 1181.xml', '_sub', undefined, 1); // wteamc Captain down
//parser.parse('./resources/smonster/LIBRARY/Symbol 1222.xml', '_p1', undefined, 1); // towgrd Gardien de la Tour
//parser.parse('./resources/smonster/LIBRARY/Symbol 1254.xml', '_p1', undefined, 1); // bamboo Pousse de Bambooz
//parser.parse('./resources/smonster/LIBRARY/Symbol 1274.xml', '_p1', undefined, 1); // worm2 Chtiver
//parser.parse('./resources/smonster/LIBRARY/Symbol 1921.xml', '_p1', undefined, 1); // Mandragore
//parser.parse('./resources/smonster/LIBRARY/Symbol 2203.xml', '_p1', undefined, 1); // lucet Lucette
//parser.parse('./resources/smonster/LIBRARY/Symbol 2950.xml', '_p1', undefined, 1); // taurus Taurus
//parser.parse('./resources/smonster/LIBRARY/Symbol 2908.xml', '_sub', undefined, 1); // Taurus tail

//GFX
//parser.parse('./resources/gfx/LIBRARY/Symbol 9.xml', '_sub', undefined, 2); // vine
//parser.parse('./resources/gfx/LIBRARY/Symbol 19.xml', '_sub', undefined, 2); // moving vine
//parser.parse('./resources/gfx/LIBRARY/Symbol 22.xml', '_sub', undefined, 2); // mcRayGenerate
//parser.parse('./resources/gfx/LIBRARY/Symbol 28.xml', '_sub', undefined, 2); // _enduranceOff
//parser.parse('./resources/gfx/LIBRARY/Symbol 34.xml', '_sub', undefined, 2); // animcendres
//parser.parse('./resources/gfx/LIBRARY/Symbol 125.xml', '_sub', undefined, 2); // worker
//parser.parse('./resources/gfx/LIBRARY/Symbol 222.xml', '_sub', undefined, 2); // fxBubble
//parser.parse('./resources/gfx/LIBRARY/Symbol 231.xml', '_sub', undefined, 2); // fxSurvivor
//parser.parse('./resources/gfx/LIBRARY/Symbol 232.xml', '_sub', undefined, 2); // fxOndeFocus
//parser.parse('./resources/gfx/LIBRARY/Symbol 246.xml', '_sub', undefined, 2); // cendre
//parser.parse('./resources/gfx/LIBRARY/Symbol 249.xml', '_sub', undefined, 2); // lights
//parser.parse('./resources/gfx/LIBRARY/Symbol 255.xml', '_sub', undefined, 2); // abysse
//parser.parse('./resources/gfx/LIBRARY/Symbol 263.xml', '_sub', undefined, 2); // amazon
//parser.parse('./resources/gfx/LIBRARY/Symbol 280.xml', '_sub', undefined, 2); // stelme
//parser.parse('./resources/gfx/LIBRARY/Symbol 297.xml', '_sub', undefined, 2); // ourano
//parser.parse('./resources/gfx/LIBRARY/Symbol 311.xml', '_sub', undefined, 2); // _sylphide
//parser.parse('./resources/gfx/LIBRARY/Symbol 314.xml', '_sub', undefined, 2); // _qigong
//parser.parse('./resources/gfx/LIBRARY/Symbol 321.xml', '_sub', undefined, 2); // _pileouface
//parser.parse('./resources/gfx/LIBRARY/Symbol 328.xml', '_sub', undefined, 2); // _receptacle
//parser.parse('./resources/gfx/LIBRARY/Symbol 337.xml', '_sub', undefined, 2); // vulcan head
//parser.parse('./resources/gfx/LIBRARY/Symbol 343.xml', '_sub', undefined, 2); // ifrit tatoo
//parser.parse('./resources/gfx/LIBRARY/Symbol 359.xml', '_sub', undefined, 2); // raijin drums
//parser.parse('./resources/gfx/LIBRARY/Symbol 375.xml', '_sub', undefined, 2); // raijin body
//parser.parse('./resources/gfx/LIBRARY/Symbol 385.xml', '_sub', undefined, 2); // werewolf eyes
//parser.parse('./resources/gfx/LIBRARY/Symbol 405.xml', '_sub', undefined, 2); // djinn wind
//parser.parse('./resources/gfx/LIBRARY/Symbol 406.xml', '_sub', undefined, 2); // djinn
//parser.parse('./resources/gfx/LIBRARY/Symbol 446.xml', '_sub', undefined, 2); // fujin veil
//parser.parse('./resources/gfx/LIBRARY/Symbol 447.xml', '_sub', undefined, 2); // fujin
//parser.parse('./resources/gfx/LIBRARY/Symbol 475.xml', '_sub', undefined, 2); // ondine water
//parser.parse('./resources/gfx/LIBRARY/Symbol 481.xml', '_sub', undefined, 2); // buddha aura
//parser.parse('./resources/gfx/LIBRARY/Symbol 519.xml', '_sub', undefined, 2); // salamander explosion
//parser.parse('./resources/gfx/LIBRARY/Symbol 536.xml', '_sub', undefined, 2); // totem ship
//parser.parse('./resources/gfx/LIBRARY/Symbol 540.xml', '_sub', undefined, 2); // totem laser
//parser.parse('./resources/gfx/LIBRARY/Symbol 541.xml', '_sub', undefined, 2); // totem
//parser.parse('./resources/gfx/LIBRARY/Symbol 545.xml', '_sub', undefined, 2); // leviathan wave
//parser.parse('./resources/gfx/LIBRARY/Symbol 617.xml', '_sub', undefined, 2); // strong notification
//parser.parse('./resources/gfx/LIBRARY/Symbol 626.xml', '_sub', undefined, 2); // _enduranceOn
//parser.parse('./resources/gfx/LIBRARY/Symbol 640.xml', '_sub', undefined, 2); // trou
//parser.parse('./resources/gfx/LIBRARY/Symbol 643.xml', '_sub', undefined, 2); // brulure
//parser.parse('./resources/gfx/LIBRARY/Symbol 647.xml', '_sub', undefined, 2); // partDirt
//parser.parse('./resources/gfx/LIBRARY/Symbol 664.xml', '_sub', undefined, 2); // coq_patte
//parser.parse('./resources/gfx/LIBRARY/Symbol 660.xml', '_sub', undefined, 2); // slash
//parser.parse('./resources/gfx/LIBRARY/Symbol 661.xml', '_sub', undefined, 2); // smoke_small
//parser.parse('./resources/gfx/LIBRARY/Symbol 679.xml', '_sub', undefined, 2); // smoke
//parser.parse('./resources/gfx/LIBRARY/Symbol 686.xml', '_sub', undefined, 2); // projo blade rotation
//parser.parse('./resources/gfx/LIBRARY/Symbol 687.xml', '_sub', undefined, 2); // projo blades
//parser.parse('./resources/gfx/LIBRARY/Symbol 721.xml', '_sub', undefined, 2); // mcGhostQueue
//parser.parse('./resources/gfx/LIBRARY/Symbol 762.xml', '_sub', undefined, 2); // swamp
//parser.parse('./resources/gfx/LIBRARY/Symbol 836.xml', '_sub', undefined, 2); // fxFlameche
//parser.parse('./resources/gfx/LIBRARY/Symbol 859.xml', '_sub', undefined, 2); // fire spark
//parser.parse('./resources/gfx/LIBRARY/Symbol 893.xml', '_sub', undefined, 2); // detonation
//parser.parse('./resources/gfx/LIBRARY/Symbol 910.xml', '_sub', undefined, 2); // clouds
//parser.parse('./resources/gfx/LIBRARY/Symbol 932.xml', '_sub', undefined, 2); // waves
//parser.parse('./resources/gfx/LIBRARY/Symbol 943.xml', '_sub', undefined, 2); // mcFocus
//parser.parse('./resources/gfx/LIBRARY/Symbol 962.xml', '_sub', undefined, 2); // mcRayConcentrate
//parser.parse('./resources/gfx/LIBRARY/Symbol 971.xml', '_sub', undefined, 2); // aura
//parser.parse('./resources/gfx/LIBRARY/Symbol 974.xml', '_sub', undefined, 2); // fxChargeImpact

const adapter = new SVGAdapter();
//adapter.parse('./results/SVG/sdino', mapping_sdino, '../assets/sdino');
//adapter.parse('./results/SVG/dino', mapping_dino, '../assets/dino');
//adapter.parse('./results/SVG/gfx', mapping_gfx, '../assets/gfx');
adapter.parse('./results/SVG/smonster', mapping_smonster, '../assets/smonster');
//adapter.findTintFromTo('#FAF8F8', '#7F6921');
