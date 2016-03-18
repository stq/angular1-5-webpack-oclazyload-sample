module.exports = module.exports = angular.module('app.modal.modalHeader', [])
    .directive('modalHeader', function () {
        return {
            restrict: 'E',
            template: require('./modalHeader.html'),
            transclude: true,
            controller: require('./modalHeader.controller.js'),
            controllerAs: 'modalHeaderCtrl',
            bindToController: true
        };
    });
