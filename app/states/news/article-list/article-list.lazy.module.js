
module.exports = angular.module('app.states.news.article-list.lazy', [])
    .controller('ArticleListController', require('./article-list.controller.js'))
    .filter('articlecut', require('./articlecut.filter.js'));
