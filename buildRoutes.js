import webpack from 'webpack';
import makeConfig from './makeWebpackConfig';

const config = makeConfig('production');
console.log(config);
webpack(config, (err,stats) => {
  if(err){
    console.log(err);
  }
  console.log(stats);
});
