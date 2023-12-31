// @ts-check
import { XFLParser } from './xfl/XFLParser.js';
import { SVGAdapter } from './svg/SVGAdapter.js';
import { mapping_sdino } from './svg/mapping_sdino.js';
import { mapping_gfx } from './svg/mapping_gfx.js';

const parser = new XFLParser();
//parser.parse('./resources/sdino/LIBRARY/Symbol 163.xml', '_p1'); // moueffe
//parser.parse('./resources/sdino/LIBRARY/Symbol 230.xml', '_anim'); // pigmou
//parser.parse('./resources/sdino/LIBRARY/Symbol 284.xml', '_anim'); // winks
//parser.parse('./resources/sdino/LIBRARY/Symbol 336.xml', '_p1'); // planaile
//parser.parse('./resources/sdino/LIBRARY/Symbol 397.xml', '_p1'); // castivore
//parser.parse('./resources/sdino/LIBRARY/Symbol 468.xml', '_p1'); // rocky
//parser.parse('./resources/sdino/LIBRARY/Symbol 517.xml', '_p1'); // pteroz
//parser.parse('./resources/sdino/LIBRARY/Symbol 547.xml', '_p1'); // nuagoz
//parser.parse('./resources/sdino/LIBRARY/Symbol 600.xml', '_p1'); // sirain
//parser.parse('./resources/sdino/LIBRARY/Symbol 666.xml', '_p1'); // hippoclamp
//parser.parse('./resources/sdino/LIBRARY/Symbol 710.xml', '_p1'); // gorilloz
//parser.parse('./resources/sdino/LIBRARY/Symbol 775.xml', '_p1'); // wanwan
//parser.parse('./resources/sdino/LIBRARY/Symbol 855.xml', '_p1'); // santaz
//parser.parse('./resources/sdino/LIBRARY/Symbol 913.xml', '_p1'); // feross
//parser.parse('./resources/sdino/LIBRARY/Symbol 965.xml', '_p1'); // kabuki
//parser.parse('./resources/sdino/LIBRARY/Symbol 1044.xml', '_p1'); // mahamuti
//parser.parse('./resources/sdino/LIBRARY/Symbol 1132.xml', '_anim'); // soufflet
//parser.parse('./resources/sdino/LIBRARY/Symbol 1133.xml', '_p1'); // soufflet
//parser.parse('./resources/sdino/LIBRARY/Symbol 1261.xml', '_sub'); // toufufu - Still
//parser.parse('./resources/sdino/LIBRARY/Symbol 1290.xml', '_p1'); // toufufu
//parser.parse('./resources/sdino/LIBRARY/Symbol 1462.xml', '_p1'); // quetzu
//parser.parse('./resources/sdino/LIBRARY/Symbol 1562.xml', '_p1'); // smog
//parser.parse('./resources/sdino/LIBRARY/Symbol 1639.xml', '_p1'); // triceragon
//parser.parse('./resources/sdino/LIBRARY/Symbol 156.xml', '_sub'); // fx_dust

const adapter = new SVGAdapter();
adapter.parse('./results/SVG/sdino', mapping_sdino, '../assets/sdino');
adapter.parse('./results/SVG/gfx', mapping_gfx, '../assets/gfx');
//adapter.findTintFromTo('#FAF8F8', '#7F6921');
