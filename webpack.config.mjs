import path from 'path';
import terserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';

export default {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'dinorpg-animations.min.js',
		path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist'),
		library: 'DinoAnim',
		libraryTarget: 'module',
		module: true,
		library: {
			type: 'module'
		}
	},
	optimization: {
		minimize: true,
		minimizer: [new terserPlugin({ extractComments: false })]
	},
	performance: {
		hints: false
	},
	experiments: {
		outputModule: true
	}
};
