require('./article-list.less');


module.exports = angular.module('app.routes.news.article-list', [
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('news.article-list', {
                url: '/article-list',
                views: {
                    'container@': {
                        template: require('./article-list.html'),
                        controller: 'ArticleListController as ctrl'
                    }
                },
                data: {
                    route: {
                        name: 'all-news',
                        text: 'All articles'
                    }
                },
                resolve: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();

                    require.ensure([], function (require) {
                        var module = require('./article-list.lazy.module.js');
                        $ocLazyLoad.load({
                            name: module.name
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            })
    }]);