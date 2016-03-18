"use strict";

require('./global.less');

var globalModule = angular
    .module('app.global', [
        require('./notification/notification.module.js').name,
        require('./session/session.module.js').name,
        require('./vendor/vendor.module.js').name,
        require('./utility/utility.module.js').name
    ])
    .factory('State', require('./state.factory.js'))
    .service('api', require('./api.service.js'));

module.exports = globalModule;