require('./app.less');
var scriptjs = require("scriptjs"),
    config = require("app.config");

var app = angular
    .module('app', [
        require('./global/global.module.js').name,
        require('./view/view.module.js').name,
        require('./states/states.module.js').name
    ])
    .config(['$httpProvider', '$sceDelegateProvider', '$logProvider', '$compileProvider', '$provide', function ($httpProvider, $sceDelegateProvider, $logProvider, $compileProvider, $provide) {
        $httpProvider.defaults.withCredentials = true;
        $sceDelegateProvider.resourceUrlWhitelist([
            'self', '/**'
        ]);
        $logProvider.debugEnabled(true);
        $compileProvider.debugInfoEnabled(true);
        $provide.decorator("$exceptionHandler", ["$delegate", '$log', function ($delegate, $log) {
            return function (exception, cause) {
                $delegate(exception, cause);
            };
        }]);
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

if( config.externalScripts && config.externalScripts.length ) {
    scriptjs(config.externalScripts, 'remote-components');
    scriptjs.ready('remote-components', startAngular);
} else {
    startAngular();
}

function startAngular() {
    angular.element().ready(function () {
        angular.bootstrap(document, [app.name]);
    });
}

module.exports = app;