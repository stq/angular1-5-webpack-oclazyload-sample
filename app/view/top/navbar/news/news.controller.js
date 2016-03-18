var _ = require('underscore');

navbarNewsController.$inject = [ '$scope', '$rootScope', 'notificationService', 'State' ];
function navbarNewsController($scope, $rootScope, notificationService, State) {

    var self = this;

    self.showNotImplementedNotification = function () {
        notificationService.showNotification('Future functionality');
    };
}

module.exports = navbarNewsController;