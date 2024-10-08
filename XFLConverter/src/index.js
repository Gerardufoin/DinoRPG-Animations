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
//parser.parse('./resources/smonster/LIBRARY/Symbol 786.xml', '_sub', undefined, 1); // barche beam
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
//parser.parse('./resources/smonster/LIBRARY/Symbol 1314.xml', '_p1', undefined, 1); // cactus Kaktuz
//parser.parse('./resources/smonster/LIBRARY/Symbol 1348.xml', '_p1', undefined, 1); // yakuzi Yakuzi
//parser.parse('./resources/smonster/LIBRARY/Symbol 1366.xml', '_p1', undefined, 1); // igor Pr.Igor
//parser.parse('./resources/smonster/LIBRARY/Symbol 1351.xml', '_sub', undefined, 1); // igor shock
//parser.parse('./resources/smonster/LIBRARY/Symbol 1454.xml', '_p1', undefined, 1); // gropi Gropignon
//parser.parse('./resources/smonster/LIBRARY/Symbol 1379.xml', '_sub', undefined, 1); // gropi right_eye
//parser.parse('./resources/smonster/LIBRARY/Symbol 1385.xml', '_sub', undefined, 1); // gropi left_eye
//parser.parse('./resources/smonster/LIBRARY/Symbol 1491.xml', '_p1', undefined, 1); // mantoo Mantooze
//parser.parse('./resources/smonster/LIBRARY/Symbol 1510.xml', '_p1', undefined, 1); // mosqui Mouktiz
//parser.parse('./resources/smonster/LIBRARY/Symbol 1494.xml', '_sub', undefined, 1); // mosqui legs
//parser.parse('./resources/smonster/LIBRARY/Symbol 1525.xml', '_p1', undefined, 1); // mugard Garde Végétox
//parser.parse('./resources/smonster/LIBRARY/Symbol 1562.xml', '_p1', undefined, 1); // singmu Demyom
//parser.parse('./resources/smonster/LIBRARY/Symbol 1621.xml', '_p1', undefined, 1); // frutox Garde Frutox
//parser.parse('./resources/smonster/LIBRARY/Symbol 1699.xml', '_p1', undefined, 1); // ffrutx Frukoptère
//parser.parse('./resources/smonster/LIBRARY/Symbol 1632.xml', '_sub', undefined, 1); // ffrutx leaves
//parser.parse('./resources/smonster/LIBRARY/Symbol 1644.xml', '_sub', undefined, 1); // ffrutx body_stand
//parser.parse('./resources/smonster/LIBRARY/Symbol 1656.xml', '_sub', undefined, 1); // ffrutx body_run
//parser.parse('./resources/smonster/LIBRARY/Symbol 1696.xml', '_sub', undefined, 1); // ffrutx body_dead
//parser.parse('./resources/smonster/LIBRARY/Symbol 1749.xml', '_p1', undefined, 1); // frking Grotox
//parser.parse('./resources/smonster/LIBRARY/Symbol 1746.xml', '_sub', undefined, 1); // frking body_dead
//parser.parse('./resources/smonster/LIBRARY/Symbol 1785.xml', '_p1', undefined, 1); // rapaca Rapacarapace
//parser.parse('./resources/smonster/LIBRARY/Symbol 1771.xml', '_sub', undefined, 1); // rapaca head_anim
//parser.parse('./resources/smonster/LIBRARY/Symbol 1867.xml', '_p1', undefined, 1); // morg Morg
//parser.parse('./resources/smonster/LIBRARY/Symbol 1838.xml', '_sub', undefined, 1); // morg smoke
//parser.parse('./resources/smonster/LIBRARY/Symbol 1921.xml', '_p1', undefined, 1); // Mandragore
//parser.parse('./resources/smonster/LIBRARY/Symbol 1979.xml', '_p1', undefined, 1); // cyclo Soldat
//parser.parse('./resources/smonster/LIBRARY/Symbol 1959.xml', '_sub', undefined, 1); // cyclo bump
//parser.parse('./resources/smonster/LIBRARY/Symbol 2019.xml', '_p1', undefined, 1); // cyclo2 Capitaine
//parser.parse('./resources/smonster/LIBRARY/Symbol 2058.xml', '_p1', undefined, 1); // groms Gromster
//parser.parse('./resources/smonster/LIBRARY/Symbol 2119.xml', '_p1', undefined, 1); // doro Dorogon
//parser.parse('./resources/smonster/LIBRARY/Symbol 2155.xml', '_p1', undefined, 1); // dorou Chef Dorogon
//parser.parse('./resources/smonster/LIBRARY/Symbol 2203.xml', '_p1', undefined, 1); // lucet Lucette
//parser.parse('./resources/smonster/LIBRARY/Symbol 2233.xml', '_p1', undefined, 1); // lapouf Lapouf
//parser.parse('./resources/smonster/LIBRARY/Symbol 2265.xml', '_p1', undefined, 1); // ecu Ecurenne
//parser.parse('./resources/smonster/LIBRARY/Symbol 2381.xml', '_p1', undefined, 1); // piglou Piglounou
//parser.parse('./resources/smonster/LIBRARY/Symbol 2309.xml', '_sub', undefined, 1); // piglou attack_mouth
//parser.parse('./resources/smonster/LIBRARY/Symbol 2479.xml', '_p1', undefined, 1); // febrez Febrez
//parser.parse('./resources/smonster/LIBRARY/Symbol 2388.xml', '_sub', undefined, 1); // febrez wings
//parser.parse('./resources/smonster/LIBRARY/Symbol 2409.xml', '_sub', undefined, 1); // febrez legs
//parser.parse('./resources/smonster/LIBRARY/Symbol 2463.xml', '_sub', undefined, 1); // febrez talk
//parser.parse('./resources/smonster/LIBRARY/Symbol 2476.xml', '_sub', undefined, 1); // febrez sleep
//parser.parse('./resources/smonster/LIBRARY/Symbol 2543.xml', '_p1', undefined, 1); // marca Marcanglier
//parser.parse('./resources/smonster/LIBRARY/Symbol 2489.xml', '_sub', undefined, 1); // marca hair
//parser.parse('./resources/smonster/LIBRARY/Symbol 2583.xml', '_p1', undefined, 1); // dorolu Doroloup
//parser.parse('./resources/smonster/LIBRARY/Symbol 2618.xml', '_p1', undefined, 1); // fuego Don Fuego
//parser.parse('./resources/smonster/LIBRARY/Symbol 2655.xml', '_p1', undefined, 1); // grizor Grizor
//parser.parse('./resources/smonster/LIBRARY/Symbol 2725.xml', '_p1', undefined, 1); // morg2 Morg transmuté
//parser.parse('./resources/smonster/LIBRARY/Symbol 2697.xml', '_sub', undefined, 1); // morg2 beam
//parser.parse('./resources/smonster/LIBRARY/Symbol 2749.xml', '_p1', undefined, 1); // grizor2 Grizorg transmuté
//parser.parse('./resources/smonster/LIBRARY/Symbol 2774.xml', '_p1', undefined, 1); // grizor3 Grizorg ultime
//parser.parse('./resources/smonster/LIBRARY/Symbol 2808.xml', '_p1', undefined, 1); // garouz Garouzore
//parser.parse('./resources/smonster/LIBRARY/Symbol 2840.xml', '_p1', undefined, 1); // amampe Amenpenne
//parser.parse('./resources/smonster/LIBRARY/Symbol 2824.xml', '_sub', undefined, 1); // amampe head
//parser.parse('./resources/smonster/LIBRARY/Symbol 2881.xml', '_p1', undefined, 1); // upgrd Gardien supérieur
//parser.parse('./resources/smonster/LIBRARY/Symbol 2950.xml', '_p1', undefined, 1); // taurus Taurus
//parser.parse('./resources/smonster/LIBRARY/Symbol 2908.xml', '_sub', undefined, 1); // Taurus tail
//parser.parse('./resources/smonster/LIBRARY/Symbol 3000.xml', '_p1', undefined, 1); // bao Baobob
//parser.parse('./resources/smonster/LIBRARY/Symbol 3050.xml', '_p1', undefined, 1); // sofia Sofia
//parser.parse('./resources/smonster/LIBRARY/Symbol 3021.xml', '_sub', undefined, 1); // sofia deco
//parser.parse('./resources/smonster/LIBRARY/Symbol 3034.xml', '_sub', undefined, 1); // sofia head
//parser.parse('./resources/smonster/LIBRARY/Symbol 3092.xml', '_p1', undefined, 1); // chima Chimachouille
//parser.parse('./resources/smonster/LIBRARY/Symbol 3067.xml', '_sub', undefined, 1); // chima eye
//parser.parse('./resources/smonster/LIBRARY/Symbol 3079.xml', '_sub', undefined, 1); // chima tongue
//parser.parse('./resources/smonster/LIBRARY/Symbol 3163.xml', '_p1', undefined, 1); // groule Groulem
//parser.parse('./resources/smonster/LIBRARY/Symbol 3099.xml', '_sub', undefined, 1); // groule orb
//parser.parse('./resources/smonster/LIBRARY/Symbol 3113.xml', '_sub', undefined, 1); // groule stone_1
//parser.parse('./resources/smonster/LIBRARY/Symbol 3118.xml', '_sub', undefined, 1); // groule stone_2
//parser.parse('./resources/smonster/LIBRARY/Symbol 3124.xml', '_sub', undefined, 1); // groule stone_3
//parser.parse('./resources/smonster/LIBRARY/Symbol 3129.xml', '_sub', undefined, 1); // groule stone_4
//parser.parse('./resources/smonster/LIBRARY/Symbol 3134.xml', '_sub', undefined, 1); // groule stone_5
//parser.parse('./resources/smonster/LIBRARY/Symbol 3139.xml', '_sub', undefined, 1); // groule stone_6
//parser.parse('./resources/smonster/LIBRARY/Symbol 3144.xml', '_sub', undefined, 1); // groule stone_7
//parser.parse('./resources/smonster/LIBRARY/Symbol 3151.xml', '_sub', undefined, 1); // groule head
//parser.parse('./resources/smonster/LIBRARY/Symbol 3187.xml', '_p1', undefined, 1); // behemu Behemotin
//parser.parse('./resources/smonster/LIBRARY/Symbol 3254.xml', '_p1', undefined, 1); // serpe Serpether
//parser.parse('./resources/smonster/LIBRARY/Symbol 3198.xml', '_sub', undefined, 1); // serpe puddle
//parser.parse('./resources/smonster/LIBRARY/Symbol 3216.xml', '_sub', undefined, 1); // serpe eye
//parser.parse('./resources/smonster/LIBRARY/Symbol 3217.xml', '_sub', undefined, 1); // serpe head
//parser.parse('./resources/smonster/LIBRARY/Symbol 3306.xml', '_p1', undefined, 1); // roking Roking
//parser.parse('./resources/smonster/LIBRARY/Symbol 3267.xml', '_sub', undefined, 1); // roking head
//parser.parse('./resources/smonster/LIBRARY/Symbol 3362.xml', '_p1', undefined, 1); // cranit Cranite
//parser.parse('./resources/smonster/LIBRARY/Symbol 3424.xml', '_p1', undefined, 1); // crokoc Crokocroc
//parser.parse('./resources/smonster/LIBRARY/Symbol 3484.xml', '_p1', undefined, 1); // arcadu Archelion adulte nain
//parser.parse('./resources/smonster/LIBRARY/Symbol 3522.xml', '_p1', undefined, 1); // rodeur Rodeur
//parser.parse('./resources/smonster/LIBRARY/Symbol 3582.xml', '_p1', undefined, 1); // belius Belius
//parser.parse('./resources/smonster/LIBRARY/Symbol 3655.xml', '_p1', undefined, 1); // mimic Mimic
//parser.parse('./resources/smonster/LIBRARY/Symbol 3713.xml', '_p1', undefined, 1); // feufol Feu-Folle
//parser.parse('./resources/smonster/LIBRARY/Symbol 3679.xml', '_sub', undefined, 1); // feufol fly
//parser.parse('./resources/smonster/LIBRARY/Symbol 3740.xml', '_p1', undefined, 1); // becplu
//parser.parse('./resources/smonster/LIBRARY/Symbol 3774.xml', '_p1', undefined, 1); // updwn Gardien inférieur
//parser.parse('./resources/smonster/LIBRARY/Symbol 3790.xml', '_p1', undefined, 1); // fullgd Alchimiste d'acier
//parser.parse('./resources/smonster/LIBRARY/Symbol 3870.xml', '_p1', undefined, 1); // rhubar Esprit de Rhubarbapapa
//parser.parse('./resources/smonster/LIBRARY/Symbol 3825.xml', '_sub', undefined, 1); // rhubar head
//parser.parse('./resources/smonster/LIBRARY/Symbol 3861.xml', '_sub', undefined, 1); // rhubar head_dead
//parser.parse('./resources/smonster/LIBRARY/Symbol 3976.xml', '_p1', undefined, 1); // stroa Monstre en spaghettis volant
//parser.parse('./resources/smonster/LIBRARY/Symbol 3880.xml', '_sub', undefined, 1); // stroa right_eye
//parser.parse('./resources/smonster/LIBRARY/Symbol 3886.xml', '_sub', undefined, 1); // stroa left_eye
//parser.parse('./resources/smonster/LIBRARY/Symbol 3890.xml', '_sub', undefined, 1); // stroa tentacle
//parser.parse('./resources/smonster/LIBRARY/Symbol 3919.xml', '_sub', undefined, 1); // stroa body_pasta
//parser.parse('./resources/smonster/LIBRARY/Symbol 3926.xml', '_sub', undefined, 1); // stroa body
//parser.parse('./resources/smonster/LIBRARY/Symbol 4009.xml', '_p1', undefined, 1); // scorpu Scorpus
//parser.parse('./resources/smonster/LIBRARY/Symbol 4029.xml', '_p1', undefined, 1); // sangsa Sangsue Sombre
//parser.parse('./resources/smonster/LIBRARY/Symbol 4051.xml', '_p1', undefined, 1); // saboss Sangsue bio-métallique
//parser.parse('./resources/smonster/LIBRARY/Symbol 4088.xml', '_p1', undefined, 1); // sangs2 Sangsue Tentaculaire

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
//parser.parse('./resources/gfx/LIBRARY/Symbol 678.xml', '_sub', undefined, 2); // grop_tache
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
