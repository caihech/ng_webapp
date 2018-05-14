(function () {
    "use strict";

    var mainModule = angular.module("myApp");

    mainModule.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state(
                'home', {
                    url: '/home',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController'

                }
            )
            .state(
                "login", {
                    url: '/login',
                    templateUrl: 'login/login.html',
                    controller: 'LoginController'
                }
            )
            .state(
                "home.users", {
                    url: '/users',
                    templateUrl: 'user/usersView.html',
                    controller: 'UsersController'
                }
            )
    });
})();