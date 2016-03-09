import path from 'path';
var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

import { createRoutes } from 'react-router';
import routes from './pages/routes';
console.log(routes);

function reduceRoutes(routes){
  const routeArray = [];
  recurseRoutes(routes);
  function recurseRoutes(routeObj, prevPath){
    const { path } = routeObj
    const route = prevPath ? `${prevPath}${path}/` : path;
    if('childRoutes' in routeObj){
      return routeObj.childRoutes.map(child => {
        return recurseRoutes(child, route);
      });
    }
    routeArray.push(route);
  }
  return routeArray.map(route => '..'+route);
}

function getPaths(){
  var startingRoute = createRoutes(routes)[0];
  const paths = reduceRoutes(startingRoute);
  console.log(paths);
  return paths;
}



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
  const isBuild = env === 'production';
  return {
    module: {
      loaders: [
        jsxLoader,
        {
          test: /\.scss?$/,
          loader: isBuild ?
            ExtractTextPlugin.extract(['css','sass']) :
            'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
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
    publicPath: 'http://localhost:5000/static/',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
const paths = getPaths();
const buildOnlyConfig = {
  entry: {
    app:"./js/index"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new StaticSiteGeneratorPlugin("app", paths, {path:__dirname})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};


export default function makeConfig(mode){
  const moduleLoaderConfig = makeModuleLoaderConfig(mode);
  switch(mode){
    case 'production':
      return {...buildOnlyConfig, ...moduleLoaderConfig};
    case 'development':
      return {...devOnlyConfig, ...moduleLoaderConfig};
  }
};
