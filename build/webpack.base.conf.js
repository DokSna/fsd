const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')	//VueLoaderPlugin поместили в объект {}, 
//возможно в будущем пригодится ещё какойнибудь плагин из 'vue-loader'

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
		// app: './src/index.js'
		app: PATHS.src,
		// lk: `${PATHS.src}/lk.js`	//вторая точка входа, например для личного кабинета, или что бы разделить основной файл js если он большой
	},

	output: {
		// filename: `${PATHS.assets}js/[name].js`,			//без хеша
		filename: `${PATHS.assets}js/[name].[hash].js`,	//c хешем
		path: PATHS.dist,
		publicPath: '/'
		// filename: '[name].js',
		// path: path.resolve(__dirname, '../dist'),
		// publicPath: '/dist'
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},

	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}, {
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
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
					options: { sourceMap: true, config: { path: `./postcss.config.js` } }
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
					options: { sourceMap: true, config: { path: `./postcss.config.js` } }
				}
			]
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loader: {
					scss: 'vue-style-loader!css-loader!sass-loader'
				}
			}
		},
		]
	},

	// devServer: {
	// 	overlay: true
	// },

	resolve: {
		alias: {
			// '~': 'src',	//создание алиаса, пример его использования в Example.vue
			'vue$': 'vue/dist/vue.js'
		}
	},

	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			// filename: `${PATHS.assets}css/[name].css`,			//без хеша
			filename: `${PATHS.assets}css/[name].[hash].css`,	//с хешем
		}),

		// Copy HtmlWebpackPlugin and change index.html for another html page
		new HtmlWebpackPlugin({
			// hash: false,
			template: `${PATHS.src}/index.html`,
			filename: './index.html',
			inject: true		//авто вставка стилей на страницу
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
