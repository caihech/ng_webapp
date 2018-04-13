(function () {
    "use strict";

    var mainModule = angular.module("myApp");

    mainModule.config(function ($stateProvider, $urlRouterProvider) {

        console.info("this si config.");

        $urlRouterProvider.otherwise('/login');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeController'

        }).state(
            "login",
            {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginController'
            }
        );
    });
})();