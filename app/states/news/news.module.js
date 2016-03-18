module.exports = angular.module('app.states.news', [
        require('./article-list/article-list.module.js').name,
        require('./article/article.module.js').name
    ])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('news', {
                abstract: true,
                url: "/news",
                data: {
                    route: {
                        name: 'news',
                        text: "News"
                    }
                }
            })
        }
    ])
