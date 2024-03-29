// @ts-check
import { XFLParser } from './xfl/XFLParser.js';
import { SVGAdapter } from './svg/SVGAdapter.js';
import { mapping_sdino } from './svg/mapping_sdino.js';
import { mapping_gfx } from './svg/mapping_gfx.js';
import { mapping_smonster } from './svg/mapping_smonster.js';

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
//parser.parse('./resources/smonster/LIBRARY/Symbol 1921.xml', '_p1', undefined, 1); // Mandragore
//parser.parse('./resources/smonster/LIBRARY/Symbol 2203.xml', '_p1', undefined, 1); // lucet Lucette
//parser.parse('./resources/smonster/LIBRARY/Symbol 2950.xml', '_p1', undefined, 1); // taurus Taurus
//parser.parse('./resources/smonster/LIBRARY/Symbol 2908.xml', '_sub', undefined, 1); // Taurus tail

//GFX
//parser.parse('./resources/gfx/LIBRARY/Symbol 9.xml', '_sub', undefined, 2); // vine
//parser.parse('./resources/gfx/LIBRARY/Symbol 19.xml', '_sub', undefined, 2); // moving vine
//parser.parse('./resources/gfx/LIBRARY/Symbol 125.xml', '_sub', undefined, 2); // worker
//parser.parse('./resources/gfx/LIBRARY/Symbol 222.xml', '_sub', undefined, 2); // fxBubble
//parser.parse('./resources/gfx/LIBRARY/Symbol 231.xml', '_sub', undefined, 2); // fxSurvivor
//parser.parse('./resources/gfx/LIBRARY/Symbol 232.xml', '_sub', undefined, 2); // fxOndeFocus
//parser.parse('./resources/gfx/LIBRARY/Symbol 836.xml', '_sub', undefined, 2); // fxFlameche
//parser.parse('./resources/gfx/LIBRARY/Symbol 617.xml', '_sub', undefined, 2); // strong notification
//parser.parse('./resources/gfx/LIBRARY/Symbol 660.xml', '_sub', undefined, 2); // slash
//parser.parse('./resources/gfx/LIBRARY/Symbol 661.xml', '_sub', undefined, 2); // smoke_small
//parser.parse('./resources/gfx/LIBRARY/Symbol 679.xml', '_sub', undefined, 2); // smoke
//parser.parse('./resources/gfx/LIBRARY/Symbol 859.xml', '_sub', undefined, 2); // fire spark
//parser.parse('./resources/gfx/LIBRARY/Symbol 893.xml', '_sub', undefined, 2); // detonation
//parser.parse('./resources/gfx/LIBRARY/Symbol 971.xml', '_sub', undefined, 2); // aura

const adapter = new SVGAdapter();
//adapter.parse('./results/SVG/sdino', mapping_sdino, '../assets/sdino');
//adapter.parse('./results/SVG/gfx', mapping_gfx, '../assets/gfx');
adapter.parse('./results/SVG/smonster', mapping_smonster, '../assets/smonster');
//adapter.findTintFromTo('#FAF8F8', '#7F6921');
