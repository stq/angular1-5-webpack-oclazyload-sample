require('./details.less');

module.exports = angular
    .module('app.states.search.results.details', [
    ])
    .service('detailsService', require('./details.service.js'))
    .controller('detailsController', require('./details.controller.js'))
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('search.results.details', {
            url: '/details/{id:[0-9]+}',
            data: {
                route: {
                    name: 'details',
                    text: "Search Result Details"
                }
            },
            onEnter: ['detailsService', '$stateParams', '$state', function (detailsService, $stateParams, $state) {
                detailsService.showDetails($stateParams.id).result.then(onModalClose, onModalClose);
                function onModalClose() {
                    $state.go('search.results', {
                        query: $stateParams.query,
                        operator: $stateParams.operator
                    });
                }
            }]
        })
    }]);