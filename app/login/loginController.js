(function () {
    "use strict";

    var loginModele = angular.module(["login"], []);

    loginModele.controller("LoginController", ["$scope", "$rootScope", "$state", "$stateParams",
        function ($scope, $rootScope, $state, $stateParams) {

            $scope.user = {username: 'admin', password: '123456'};

            //提交表单
            $scope.submit = function () {
                var user = $scope.user;
                if (user != null && user.username == "admin" && user.password == "123456") {
                    console.log("username:" + user.username + ",password:" + user.password);
                    $state.go("home");
                } else {
                    console.log("错误的账号密码");
                }
            }

            //信息重置
            $scope.reset = function () {
                $scope.user = null;
            };

        }
    ])
    ;

})
();