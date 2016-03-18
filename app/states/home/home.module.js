'use strict';

module.exports = angular.module('app.home', [])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('home', {
            url: '/home',
            views: {
                'container@': {
                    template: require('./home.page.html')
                }
            },
            data: {
                route: {
                    name: 'home',
                    text: 'Home'
                }
            }
        });
    }])
    .controller('HomeController', require('./home.controller.js'));