// @ts-check
const fs = require('fs');
const path = require('path');
const LZString = require('lz-string');

/**
 * Pack a folder and its content into the reference object.
 * @param {string} folderPath The path to the folder to pack.
 * @param {object} references The current reference node.
 */
function packFolder(folderPath, references) {
	for (const f of fs.readdirSync(folderPath, { withFileTypes: true })) {
		if (f.isDirectory()) {
			references[f.name] = {};
			packFolder(path.join(folderPath, f.name), references[f.name]);
		} else {
			const content = fs.readFileSync(path.join(folderPath, f.name));
			const ext = path.extname(f.name).substring(1);
			const key = path.parse(f.name).name;
			references[key] = {};
			if (ext === 'svg') {
				const svgData = content
					.toString()
					.replace(/^ +/gm, '')
					.replace(/[\n\r\t]/g, '');
				const offset = { x: 0, y: 0 };
				const match = svgData.match(/transform="matrix\((?:[-.\d]+, ?){4}([\d.-]+), ?([\d.-]+)\)"/);
				if (match) {
					offset.x = Number.parseFloat(match[1]);
					offset.y = Number.parseFloat(match[2]);
				}
				references[key].svg = LZString.compressToBase64(svgData);
				if (offset.x !== 0 || offset.y !== 0) {
					references[key].offset = offset;
				}
			} else {
				references[key][ext] = LZString.compressToBase64(content.toString('base64'));
			}
		}
	}
}

for (const f of fs.readdirSync(__dirname, { withFileTypes: true })) {
	if (f.isDirectory()) {
		const references = {};
		packFolder(path.join(__dirname, f.name), references);
		fs.writeFileSync(
			path.join(__dirname, '../src/', f.name, 'references.js'),
			'export let ref = ' +
				JSON.stringify(references, null, '\t')
					.replace(/"([^"]+)":/g, '$1:')
					// eslint-disable-next-line
					.replace(/"/g, "'")
					.replace(/(offset: {)\n\t+(x: [^\n]+,)\n\t+(y: [^\n]+)\n\t+}/g, '$1 $2 $3 }')
					.replace(/\n/g, '\r\n') +
				';'
		);
	}
}
