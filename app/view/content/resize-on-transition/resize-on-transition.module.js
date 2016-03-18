module.exports = angular.module('app.content.resize-on-transition', [])
    .directive('resizeOnTransition', ['windowResizeService', function (windowResizeService){
        return {
            restrict: 'A',
            link: function($scoee, el) {
                el.on("transitionend", windowResizeService.resize);
            }
        };
    }]);