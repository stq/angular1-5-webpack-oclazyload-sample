module.exports = angular
    .module('app.view.top.quicksearch', [])
    .component('quicksearch', {
        template: require('./quicksearch.html'),
        controller: require('./quicksearch.controller.js')
    });