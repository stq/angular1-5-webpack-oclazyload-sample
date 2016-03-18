require('./content.less');

module.exports = angular
    .module('app.view.content', [
        require('./resize-on-transition/resize-on-transition.module.js').name,
        require('./calc-height/calc-height.module.js').name,
        require('./context-help/context-help.module.js').name
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
