require('./article.less');

var config = require('app.config'),
    _ = require('underscore');

articleController.$inject = ['$scope', 'api', '$stateParams'];
function articleController($scope, api, $stateParams) {

    var self = this;

    api.getArticle($stateParams.id).then(function(article){
        self.article = article;
    })

}

module.exports = articleController;
