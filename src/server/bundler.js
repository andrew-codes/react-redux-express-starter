const Spinner = require('cli-spinner').Spinner;
import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { devHost, devPort } from './env';
import webpackConfig from './../../webpack/webpack.dev.config';

module.exports = function () {
    let bundleStart = null;
    const compiler = Webpack(webpackConfig);

    const spinner = new Spinner('processing.. %s');
    spinner.setSpinnerString('/-\\');

    compiler.plugin('compile', () => {
        console.info(`==> 💻  Webpack Dev Server listening on port ${devPort}`);
        spinner.start();
        bundleStart = Date.now();
    });

    compiler.plugin('done', () => {
        console.log(`Bundled in ${Date.now() - bundleStart} ms!`);
        spinner.stop();
    });

    const bundler = new WebpackDevServer(compiler, {
        publicPath: '/build/',
        hot: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    bundler.listen(devPort, devHost, () => {
        console.log('Bundling project, please wait...');
    });
};