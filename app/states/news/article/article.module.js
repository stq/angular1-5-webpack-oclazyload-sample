module.exports = angular.module('app.states.news.article', [])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('news.article', {
                url: '/article/{id:[0-9]+}',
                views: {
                    'container@': {
                        template: require('./article.html'),
                        controller: 'ArticleController as ctrl'
                    }
                },
                data: {
                    route: {
                        name: 'article',
                        text: 'Read article'
                    }
                },
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var module = require('./article.lazy.module.js');
                        $ocLazyLoad.load({
                            name: module.name
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            })

    }]);
