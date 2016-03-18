var pathmap = require('../../pathmap.js');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 20000,
    plugins: [{
        path: pathmap.karma.consolePlugin,
        failOnWarning: true,
        failOnError: true
    }]
};
