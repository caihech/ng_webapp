(function () {
    "use strict";

    var loginModele = angular.module(["login"], []);

    loginModele.controller("LoginController", ["$scope", "$rootScope",
        function ($scope, $rootScope) {
            console.log("LoginController");
        }]);

})();