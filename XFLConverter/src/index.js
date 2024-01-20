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
//parser.parse('./resources/smonster/LIBRARY/Symbol 529.xml', '_p1', undefined, 1); // grdien Gardien Abricole

const adapter = new SVGAdapter();
//adapter.parse('./results/SVG/sdino', mapping_sdino, '../assets/sdino');
adapter.parse('./results/SVG/gfx', mapping_gfx, '../assets/gfx');
adapter.parse('./results/SVG/smonster', mapping_smonster, '../assets/smonster');
//adapter.findTintFromTo('#FAF8F8', '#7F6921');
