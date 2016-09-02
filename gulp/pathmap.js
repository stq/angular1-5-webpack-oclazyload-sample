/**
 * Application folders mapping utility.
 *
 * Important: This file is sensitive to its location - move with care.
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
    static: {
        index: 'index.html',
        assets: 'assets/**/*.*'
    }
};