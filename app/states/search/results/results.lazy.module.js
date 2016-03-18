'use strict';

module.exports = angular.module('app.states.search.results.lazy',[
        require('./details/details.module.js').name
    ])
    .controller('ResultsController', require('./results.controller.js'));
