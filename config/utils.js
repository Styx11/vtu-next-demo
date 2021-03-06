'use strict'

const path = require('path');
const postcssConfig = require('./postcss.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.resolve = dir =>
{
	return path.join(__dirname, '..', dir)
}

exports.cssLoaders = function (options)
{
	options = options || {}

	const cssLoader = {
		loader: 'css-loader',
		options: {
			sourceMap: options.sourceMap,
			modules: true,
			importLoaders: 1,
		}
	}

	const postcssLoader = {
		loader: 'postcss-loader',
		options: Object.assign(
			{},
			postcssConfig.options,
			{
				sourceMap: options.sourceMap,
				plugins: postcssConfig.plugins,
			},
		),
	}

	// generate loader string to be used with extract text plugin
	function generateLoaders(loader, loaderOptions)
	{
		const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

		if (loader)
		{
			loaders.push({
				loader: loader + '-loader',
				options: Object.assign({}, loaderOptions, {
					sourceMap: options.sourceMap
				})
			})
		}

		// Extract CSS when with MiniCssExtractPlugin
		// (which is the case during production build)
		return ['vue-style-loader', MiniCssExtractPlugin.loader].concat(loaders)
	}

	// https://vue-loader.vuejs.org/en/configurations/extract-css.html
	return {
		css: generateLoaders(),
		postcss: generateLoaders(),
		less: generateLoaders('less'),
		sass: generateLoaders('sass', { indentedSyntax: true }),
		scss: generateLoaders('sass'),
		stylus: generateLoaders('stylus'),
		styl: generateLoaders('stylus')
	}
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options)
{
	const output = []
	const loaders = exports.cssLoaders(options)

	for (const extension in loaders)
	{
		const loader = loaders[extension]
		output.push({
			test: new RegExp('\\.' + extension + '$'),
			use: loader
		})
	}

	return output
}
