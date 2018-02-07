var helloworldModule = angular.module("helloworld", []);
helloworldModule.controller("helloworld", ["$scope", function ($scope) {
    $scope.helloworld = "hello angular!";
}]);