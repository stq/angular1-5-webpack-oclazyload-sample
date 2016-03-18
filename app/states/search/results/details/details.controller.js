"use strict";

var config = require('app.config'),
    _ = require('underscore');

detailsController.$inject = [ 'api', '$stateParams', '$modalInstance'];
function detailsController(api, $stateParams, $modalInstance) {
    var self = this;

    self.close = function () {
        $modalInstance.close(true);
    };

    api.getArticle($stateParams.id).then(function(article){
        self.article = article;

    })


}

module.exports = detailsController;