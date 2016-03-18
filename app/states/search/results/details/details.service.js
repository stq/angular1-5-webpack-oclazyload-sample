detailsService.$inject = [ '$modal' ];
function detailsService($modal) {

    var self = this;

    self.showDetails = function (id) {
        return $modal.open({
            template: require('./details.html'),
            controller: require('./details.controller.js'),
            size: 5,
            resolve: {
                id: id
            }
        });
    }

}

module.exports = detailsService;