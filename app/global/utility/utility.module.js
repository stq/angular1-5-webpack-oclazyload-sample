"use strict";

var utilityModule = angular.module('app.global.utility', [
    ])
    .directive('targetBlank', require('./target-blank.directive.js'))
    .service('windowResizeService', require('./window-resize.service.js'));


if ( ~navigator.userAgent.indexOf('MSIE') || ~navigator.userAgent.indexOf('Trident/') || ~navigator.userAgent.indexOf('Edge/') ) {
    utilityModule.directive('body', require('./ie-body-scroll.directive.js'))
}

module.exports = utilityModule;