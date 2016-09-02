require('./content.less');

module.exports = angular
    .module('app.view.content', [
    ])
    .service('helpService', require('./help.service.js'))
    .directive('content', [function () {
        return {
            restrict: 'E',
            replace: true,
            template: require('./content.html'),
            controller: require('./content.controller.js'),
            controllerAs: 'ctrl',
            bindToController: true
        };
    }])
