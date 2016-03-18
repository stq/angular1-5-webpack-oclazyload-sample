module.exports = angular.module('app.states.search', [
        require('./results/results.module.js').name
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('search', {
            abstract: true,
            url: "/search"
        })
    }]);
