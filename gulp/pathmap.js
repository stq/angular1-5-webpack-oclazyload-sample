/**
 * This file is sensitive to its location - move with care.
 */

var path = require('path');

var root = path.join(path.resolve(__dirname), '..');

console.log('Root directory', root);

module.exports = {
    root: root,
    npm: {
        descriptor: path.join(root, 'package.json'),
        descriptors: './node_modules/*/package.json'
    },
    build: path.join(root, 'build'),
    manifest: {
        html: path.join(root, 'build', 'manifest.html'),
        json: path.join(root, 'build', 'manifest.json')
    },
    dist: {
        from: path.join(root, 'build/**/*.*'),
        to: path.join(root, 'dist')
    },
    static: {
        index: 'index.html',
        assets: 'assets/**/*.*'
    },
    karma: {
        config: path.join(root, 'gulp/test/karma.conf.js'),
        protractor: path.join(root, 'gulp/test/e2e/protractor.conf.js'),
        e2e: path.join(root, 'gulp/test/e2e/**/*.e2etest.js'),
        consolePlugin: path.join(root, 'node_modules/protractor-console-plugin/index.js')
    },
    lintMask: ['./app/**/*.js', '!./app/**/*.spec.js'],
    reportsMask: ['app/**/index.html', 'app/**/*.js.html']
};