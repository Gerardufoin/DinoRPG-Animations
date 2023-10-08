const path = require('path');
const terserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'dinorpg-animations.min.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'DinoAnim',
		libraryTarget: 'umd'
	},
	optimization: {
		minimize: true,
		minimizer: [new terserPlugin({ extractComments: false })]
	},
	performance: {
		hints: false
	}
};
