'use strict';

var appConfig = require('app.config');

module.exports = angular
    .module('app.global.notification', [
    ])
    .service('notificationService', require('./notification.service.js'));

