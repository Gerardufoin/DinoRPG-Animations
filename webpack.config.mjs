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
	devServer: {
		static: {
			directory: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'public')
		},
		port: 8080,
		/**
		 * Used in order to run fight.swf with Ruffle.
		 * The SWF expects /user/check to return 'OK' in order to load.
		 * @param {object} middlewares Middlewares of the development server.
		 * @param {object} server Development server.
		 * @returns {object} The middlewars for chaining.
		 */
		setupMiddlewares: (middlewares, server) => {
			server.app.post('/user/check', (_req, res) => {
				res.send('OK');
			});
			return middlewares;
		}
	},
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

export default [standalone_config];
