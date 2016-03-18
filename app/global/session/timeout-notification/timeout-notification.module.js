'use strict';

var appConfig = require('app.config');

module.exports = angular
    .module('app.global.timeout-notification', [
    ]);

    /*Commented for a while. By the request of backend developers. Please, do not delete*/

    //.config(['$httpProvider', '$provide', function ($httpProvider, $provide) {
    //    $provide.factory('httpRequestInterceptor', [ '$q', '$injector', function ($q, $injector) {
    //        var processingError = false;
    //        return {
    //            responseError: function(rejection) {
    //                if(rejection.status === 401 && !processingError) {
    //                    var $modal = $injector.get('$modal'),
    //                        session = $injector.get('session');
    //                    processingError = $modal.open({
    //                        template: require('./timeout-notification.html'),
    //                        controller: require('./timeout-notification.controller.js')
    //                        size: 2
    //                    });
    //                }
    //                return $q.reject(rejection);
    //            }
    //        };
    //    }]);
    //    $httpProvider.interceptors.push('httpRequestInterceptor');
    //}])


