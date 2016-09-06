import webpack      from 'webpack';
import path         from 'path';
import autoprefixer from 'autoprefixer';
import precss       from 'precss';

const assetsDir       = path.resolve(__dirname, 'docs/public/assets');
const nodeModulesDir  = path.resolve(__dirname, 'node_modules');
const vendorsDir      = path.resolve(__dirname, 'src/app/vendors');

const config = {
  entry: [
    path.resolve(__dirname, 'src/app/index.js')
  ],
  output: {
    path: assetsDir,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [nodeModulesDir, vendorsDir],
      loader: 'babel'
    },  {
      test: /\.css$/,
      loader: 'style!css!postcss'
    }, {
      test: /\.scss$/,
      loader: 'style!css!postcss!sass'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
      loader: 'url?limit=100000&name=[name].[ext]'
    }
  ]},
  plugins: [
    getImplicitGlobals(),
    setNodeEnv(),
    uglifyJS()
  ],
  postcss: function () {
    return [precss, autoprefixer];
  }
};
/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  });
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  });
}

// eliminate dead code
function uglifyJS() {
  return new webpack.optimize.UglifyJsPlugin({
    sourceMap: true, // sourceMap: false -> issue
    warnings: false
    // mangle: false
  });
}

export default config;
