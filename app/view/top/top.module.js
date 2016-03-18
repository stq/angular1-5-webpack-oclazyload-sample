require('./top.less');

module.exports = angular
    .module('app.view.top', [
        require('./navbar/navbar.module.js').name,
        require('./quicksearch/quicksearch.module.js').name
    ])
    .directive('top', [function () {
        return {
            restrict: 'E',
            replace: true,
            template: require('./top.html'),
            controller: require('./top.controller.js'),
            controllerAs: 'topCtrl',
            bindToController: true,
            transclude: true,
        };
    }]);