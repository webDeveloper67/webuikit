const path = require('path');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(webpackConfig, {
	devtool: 'source-map',

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({filename: '[name].[contentHash].css'})
	]
});
