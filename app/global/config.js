var debugEnabled = [
        'localhost',
        'app.local'
    ].indexOf(location.hostname) > -1;

var configProp = {
    DEBUG: debugEnabled,
    API_CONTEXT: '/api',
    XHR_TIMEOUT: 60000,
    externalScripts: [ 'remote-scripts/replace-with-your-external-script.js' ]
};

module.exports = configProp;

