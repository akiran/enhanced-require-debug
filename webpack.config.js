var webpack = require('webpack');

module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		file: 'bundle.js'
	},
	plugins: [
		new webpack.IgnorePlugin(/enquire\.js/)
	]
};