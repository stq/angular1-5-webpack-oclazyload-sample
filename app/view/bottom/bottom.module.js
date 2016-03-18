require('./bottom.less');

module.exports = angular
    .module('app.view.bottom', [])
    .directive('bottom', [function () {
        return {
            restrict: 'E',
            replace: true,
            template: require('./bottom.html'),
            controller: require('./bottom.controller.js'),
            controllerAs: 'bottomCtrl',
            bindToController: true
        };
    }]);
