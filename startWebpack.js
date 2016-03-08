var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
import makeConfig from './webpack.config';
const config = makeConfig('development');
console.log(config);
var port  = 5000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet:false,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:%s',port);
});
