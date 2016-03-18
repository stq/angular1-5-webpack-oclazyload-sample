module.exports = angular.module('app.content.context-help', [])
    .directive('contextHelp', [ 'helpService', function (helpService){
        return {
            restrict: 'A',
            scope: false,
            replace: false,
            link: function($scope, el, attrs) {
                el.on('focus', function(){
                    helpService.pushContextHelp({
                        helpUrl: attrs.helpUrl,
                        learnMoreUrl: attrs.learnMoreUrl
                    });
                });
                el.on('blur', function(){
                    helpService.popContextHelp();
                });
            }
        };
    }]);