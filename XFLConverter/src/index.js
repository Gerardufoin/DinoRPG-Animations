// @ts-check
import { XFLParser } from './xfl/XFLParser.js';
import { SVGAdapter } from './svg/SVGAdapter.js';

const parser = new XFLParser();
//parser.parse('./resources/sdino/LIBRARY/Symbol 162.xml', '_anim'); // moueffe
//parser.parse('./resources/sdino/LIBRARY/Symbol 156.xml', '_sub'); // fx_dust

const adapter = new SVGAdapter();
adapter.parse('./results/SVG/test');
