'use strict';

/**
 * @ngdoc function
 * @name limitAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the limitAppApp
 */
angular.module('limitAppApp')
    .controller('MainCtrl', function($rootScope, $http, $scope) {
        $rootScope.background_class = "main-body";
        $scope.company = {};

        $http.get("/data/main.json").success(function(data) {
            $scope.company = data;
            
        })
    });
