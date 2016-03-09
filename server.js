require('babel-core/register')({
  presets: ['es2015', 'react', 'stage-0']
});
require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};
require('./startWebpack');
