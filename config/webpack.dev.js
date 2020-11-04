'use strict'
process.env.NODE_ENV = 'development'

const path = require('path');
const { resolve } = require('./utils');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = 'localhost';
const PORT = 8080;

module.exports = merge(baseConfig, {
	mode: 'development',
	// cheap-module-eval-source-map is faster for development
	devtool: 'cheap-module-eval-source-map',

	devServer: {
		clientLogLevel: 'warning',
		historyApiFallback: {
			rewrites: [
				{ from: /.*/, to: path.posix.join('/', 'index.html') },
			],
		},
		hot: false,
		contentBase: false, // since we use CopyWebpackPlugin.
		compress: true,
		host: process.env.HOST || HOST,
		port: (process.env.PORT && Number(process.env.PORT)) || PORT,
		overlay: { warnings: false, errors: true },
		publicPath: '/',
		proxy: {},
		open: true,
		// quiet:c true, // necessary for FriendlyErrorsPlugin
		watchOptions: {
			poll: false,
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: resolve('dist/index.html'),
			template: resolve('public/template.html'),
			inject: true,
		}),
		// copy custom static assets
		new CopyWebpackPlugin({
			patterns: [
				{
					from: resolve('public'),
					to: resolve('dist'),
					globOptions: {
						ignore: ['*.html']
					}
				}
			]
		}),
	]
})