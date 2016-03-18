"use strict";

module.exports = angular
    .module('app.global.session', [
        require('./timeout-notification/timeout-notification.module.js').name
    ])
    .service('session', require('./session.service.js'));
