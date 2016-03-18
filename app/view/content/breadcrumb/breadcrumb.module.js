require('./breadcrumb.less');

module.exports = angular
    .module('app.content.breadcrumb', [])
    .directive('breadcrumb', [function () {
        return {
            restrict: 'E',
            replace: true,
            template: require('./breadcrumb.html'),
            controller: require('./breadcrumb.controller.js'),
            controllerAs: 'ctrl',
            bindToController: true
        };
    }]);