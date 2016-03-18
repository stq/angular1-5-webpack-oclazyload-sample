'use strict';

require('./expose-globals.js');

module.exports = angular.module('app.vendor', [

    /*
     * 3rd Party modules
     */
    'ui.router', 'ui.bootstrap', 'oc.lazyLoad'
]);