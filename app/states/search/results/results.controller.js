require('./results.less');

var config = require('app.config'),
    _ = require('underscore');

resultController.$inject = ['api', '$stateParams'];
function resultController(api, $stateParams) {
    var self = this;

    api.search($stateParams.query, $stateParams.operator).then(function(articles){
        self.articles = articles;
    })

}

module.exports = resultController;
