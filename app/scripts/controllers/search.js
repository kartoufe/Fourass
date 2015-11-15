'use strict';

/**
 * @ngdoc function
 * @name fourassApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the fourassApp
 */

angular.module('fourassApp')
    .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) {
        
        var motCle = $routeParams.motCle;
        var regionId = $routeParams.regionId;
        var categorieId = $routeParams.categorieId;

        $scope.query = motCle;
        $scope.currentPage = 1;
        $scope.totalPages = 0;

        var loadDeals = function(){
            serviceAjax.search(motCle, $scope.currentPage).success(function(data){
                $scope.deals = data.results;
                $scope.totalPages = data.total_pages;
            });
        };

        $scope.pageChanged = function(){
            loadDeals();
        };
        
        loadDeals();
    });