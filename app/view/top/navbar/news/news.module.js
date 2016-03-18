require('./news.less')

module.exports = angular
    .module('app.view.top.navbar.news', [])
    .component('navbarNews', {
        template: require('./news.html'),
        controller: require('./news.controller.js'),
        require: {
            navbar: '^navbar'//navbarNews is not independent component; it's partial element due to decomposition of navbar component; so this dependency is valid
        }
    });
