import path from 'path';
import terserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';

const config = {
	entry: './src/index.js',
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new terserPlugin({ extractComments: false })]
	},
	performance: {
		hints: false
	}
};

const standalone_config = {
	...config,
	output: {
		filename: 'dinorpg-animations-test.min.js',
		path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'public'),
		library: {
			name: 'DinoAnim',
			type: 'umd'
		}
	}
};

const esm_config = {
	...config,
	output: {
		filename: 'dinorpg-animations.min.js',
		path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist'),
		library: {
			type: 'module'
		}
	},
	experiments: {
		outputModule: true
	}
};

export default [standalone_config, esm_config];
