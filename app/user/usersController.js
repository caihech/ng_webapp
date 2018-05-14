(function () {
    "use strict";

    var usersModele = angular.module(["users"], []);

    usersModele.controller("UsersController", ["$scope", "$rootScope", "$state", "$stateParams",
        function ($scope, $rootScope, $state, $stateParams) {

            console.log("UsersController");

        }
    ]);

})();