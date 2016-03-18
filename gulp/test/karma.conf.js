var webpack = require('webpack');

var webpackConfig = require('./webpack.config');

webpackConfig.plugins =  [
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
        '_': 'lodash',
        'global._': 'lodash'
    })
];

webpackConfig.resolve.modulesDirectories.push('test');

webpackConfig.cache = true;

webpackConfig.entry.vendor.push('angular-mocks');

webpackConfig.cache = true;
webpackConfig.module.postLoaders = [{
    test: /\.js$/,
    exclude: /(spec|vendor|node_modules|assets)/,
    loader: 'istanbul-instrumenter'
}];

module.exports = function(config) {
    config.set({
        basePath: '',
        files : [
            'node_modules/lodash/lodash.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'app/**/*.spec.js',
            'test/**/*.spec.js'
        ],
        exclude: [
            '*.sass',
            '*.html'
        ],
        preprocessors: {
            'app/**/*.spec.js': ['webpack'],
            'app/**/*.js': ['webpack'],
            'test/**/*.spec.js': ['webpack']
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir: 'coverage/',
            subdir: function (browser) {
                return browser.toLowerCase().split(/[ /-]/)[0];
            },
            reporters: [
                {type: 'html'}
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['jasmine'],
        webpack:  webpackConfig
    });
};
