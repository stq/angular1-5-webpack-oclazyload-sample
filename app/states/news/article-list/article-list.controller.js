"use strict";
var config = require('app.config'),
    _ = require('underscore'),
    moment = require('moment');

articleListController.$inject = [ 'api'];
function articleListController( api ) {

    var self = this;

    api.getArticles().then(function(articles){
        self.articles = articles;
    })

}

module.exports = articleListController;
