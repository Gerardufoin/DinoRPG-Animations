// @ts-check
import { XFLParser } from './xfl/XFLParser.js';
import { SVGAdapter } from './svg/SVGAdapter.js';

const parser = new XFLParser();
//parser.parse('./resources/sdino/LIBRARY/Symbol 162.xml', '_anim'); // moueffe
//parser.parse('./resources/sdino/LIBRARY/Symbol 230.xml', '_anim'); // pigmou
//parser.parse('./resources/sdino/LIBRARY/Symbol 284.xml', '_anim'); // winks
parser.parse('./resources/sdino/LIBRARY/Symbol 336.xml', '_p1'); // planaile
//parser.parse('./resources/sdino/LIBRARY/Symbol 156.xml', '_sub'); // fx_dust

const adapter = new SVGAdapter();
adapter.parse('./results/SVG/test');

//adapter.findTintFromTo('#FAF8F8', '#7F6921');
