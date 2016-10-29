'use strict';

/**
 * @ngdoc function
 * @name limitAppApp.controller:TeaCtrl
 * @description
 * # TeaCtrl
 * Controller of the limitAppApp
 */
angular.module('limitAppApp')
    .controller('TeaCtrl', function($scope, $rootScope, $http) {
        $rootScope.background_class = "tea-body";
        $scope.tea = {};

        $http.get("/data/tea.json").success(function(data) {
            $scope.tea["estate"] = data["estate"];
            $scope.tea["factory"] = data["factory"];
            $scope.tea["teafact"] = data["teafact"];
            $scope.tea["recipse"] = data["recipse"];
        })


    });
