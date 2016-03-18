notificationCtrl.$inject = ['$modalInstance', 'message'];
function notificationCtrl($modalInstance, message) {

    var self = this;

    self.message = message;

    self.close = function() {
        $modalInstance.close(true);
    };

}

module.exports = notificationCtrl;