module.exports = angular
    .module('app.view.top.navbar', [
        require('./news/news.module.js').name
    ])
    .component('navbar', {
        template: require('./navbar.html'),
        controller: require('./navbar.controller.js')
    });
