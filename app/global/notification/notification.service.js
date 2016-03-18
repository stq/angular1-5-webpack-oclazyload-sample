notificationService.$inject = [ '$modal' ];
function notificationService($modal) {

    var self = this;

    self.showNotification = function (message) {
        return $modal.open({
            template: require('./notification.html'),
            controller: require('./notification.controller.js'),
            size: 2,
            resolve: {
                message: message || ''
            }
        })
    };

}

module.exports = notificationService;