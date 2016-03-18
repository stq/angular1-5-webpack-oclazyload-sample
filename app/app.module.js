require('./app.less');

var appConfig = require('app.config');

var app = angular
    .module('app', [
        require('./global/global.module.js').name,
        require('./view/view.module.js').name,
        require('./states/states.module.js').name
    ])
    .config(['$provide', function ($provide) {
        $provide.decorator("$exceptionHandler", ["$delegate", '$log', function ($delegate, $log) {
            return function (exception, cause) {
                $delegate(exception, cause);
            };
        }]);
    }])
    .controller('appCtrl', require('./app.controller.js'))
    .config(['$httpProvider', '$sceDelegateProvider', '$provide', function ($httpProvider, $sceDelegateProvider, $provide) {
        $httpProvider.defaults.withCredentials = true;
        $sceDelegateProvider.resourceUrlWhitelist([
            'self', '/**'
        ]);
    }])
    .config(['$logProvider', function ($logProvider) {
        $logProvider.debugEnabled(appConfig.LOG_FLAG);
    }])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(appConfig.COMPILE_FLAG);
    }])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider.state('default', {
            url: '',
            abstract: true,
            views: {}
        });
        $urlRouterProvider.otherwise('/home');

    }])
    .run(['$rootScope', '$document', '$state', function($rootScope, $document){

        $document.bind('click', function(){
            $rootScope.$broadcast('clickanywhere');
        });

    }]);

var scriptjs = require("scriptjs");
scriptjs([ "remote-scripts/script.js" ], 'remote-components');

scriptjs.ready('remote-components', function() {
    angular.element().ready(function () {
        angular.bootstrap(document, [app.name]);
    });
});

module.exports = app;