var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(config);
console.log('asdasdasdasd', __dirname)
var server = new webpackDevServer(compiler, {
	hot: true,
	publicPath: '/dist/',
	// contentBase: "dist",
  	stats: {
    	colors: true
  	},
	// ...
});
server.listen(8080);
