module.exports = angular.module('app.states.search.results', [
        //require('./details/details.module.js').name
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('search.results', {
                url: '/results?query&operator',
                data: {
                    route: {
                        name: 'results',
                        text: "Search Results"
                    }
                },
                views: {
                    'container@': {
                        template: require('./results.html'),
                        controller: 'ResultsController as ctrl'
                    }
                },
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var module = require('./results.lazy.module.js');
                        $ocLazyLoad.load({
                            name: module.name
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            })

    }]);