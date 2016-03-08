import path from 'path';
var webpack = require('webpack');

function getJsxLoader(env){
  let jsxLoader = {
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query:{
      "presets": ["es2015", "react", "stage-0"]
    }
  }

  if(env!=='production'){
    jsxLoader.query.plugins = [
      ["react-transform", {
        "transforms": [{
          "transform": "react-transform-hmr",
          "imports": ["react"],
          "locals": ["module"]
        }]
      }]
    ];
  }

  return jsxLoader;
}


function makeModuleLoaderConfig(env){
  const jsxLoader = getJsxLoader(env);
  return {
    module: {
      loaders: [
        jsxLoader,
        {
          test: /\.css?$/,
          loaders: ['style', 'raw']
        }, {
          test: /\.scss?$/,
          loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
        }, {
          loader: 'url-loader?limit=1000000',
          test: /\.(gif|jpg|png|woff.*|woff2|eot.*|otf.*|ttf.*|svg.*)$/
        }
      ]
    }
  }
}

const devOnlyConfig = {
  devtool: 'eval',
  //devtool: 'eval-source-map',
  entry: {
    main:[
      'webpack-dev-server/client?http://localhost:5000',
      'webpack/hot/only-dev-server',
      './js/index'
    ],
    three:'./threejs/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:5000/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

const buildOnlyConfig = {
  entry: {
    app:"./js/index"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};


export default function makeConfig(mode){
  const moduleLoaderConfig = makeModuleLoaderConfig(mode);
  if(mode === 'production'){  //for build process
    return {...buildOnlyConfig, ...moduleLoaderConfig};
  } else {
    return {...devOnlyConfig, ...moduleLoaderConfig};
  }
};
