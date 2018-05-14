(function () {
    "use strict";

    var homeModele = angular.module(["home"], []);

    homeModele.controller("HomeController", ["$scope", "$rootScope",
        function ($scope, $rootScope) {
            //模拟绑定json数据
            $scope.navigation=[{title:'首页',utl:'home'},{title:'用户管理',utl:'home.users'}]

        }]);

})();