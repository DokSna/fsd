const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/'
}

module.exports = {

	externals: {		//с помощью externals, для PATHS создаём ярлык paths,
		paths: PATHS	//что бы обращаться к нему в других конфигах можно было.
	},

	entry: {
		app: PATHS.src
		// app: './src/index.js'
	},

	output: {
		filename: `${PATHS.assets}js/[name].js`,						//без хеша
		// filename: `${PATHS.assets}js/[name].[hash].js`,	//c хешем
		path: PATHS.dist,
		publicPath: '/'
		// filename: '[name].js',
		// path: path.resolve(__dirname, '../dist'),
		// publicPath: '/dist'
	},

	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
			}
		}, {
			test: /\.scss$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: { sourceMap: true }
				}, {
					loader: 'postcss-loader',
					options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
					// options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
				}, {
					loader: 'sass-loader',
					options: { sourceMap: true }
				}
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: { sourceMap: true }
				}, {
					loader: 'postcss-loader',
					options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
					// options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
				}
			]
		}]
	},

	// devServer: {
	// 	overlay: true
	// },

	plugins: [

		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].css`,						//без хеша
			// filename: `${PATHS.assets}css/[name].[hash].css`,	//с хешем
		}),

		// Copy HtmlWebpackPlugin and change index.html for another html page
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.src}/index.html`,
			filename: './index.html',
			inject: true
		}),
		// new HtmlWebpackPlugin({
		//   hash: false,
		//   template: './src/index.html',
		//   filename: 'index.html',
		// }),

		new CopyWebpackPlugin([
			{ from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
			{ from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
			{ from: `${PATHS.src}/static`, to: '' },
		]),
		// new CopyWebpackPlugin([
		// 	{ from: PATHS.src + '/img', to: `img` },
		// 	{ from: PATHS.src + '/static' },
		// ]),
	],
}
