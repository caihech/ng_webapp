(function () {
    "use strict";

    var homeModele = angular.module(["home"], []);

    homeModele.controller("HomeController", ["$scope", "$rootScope",
        function ($scope, $rootScope) {
            console.log("HomeController");
        }]);

})();