'use strict';

/**
 * @ngdoc function
 * @name fourassApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the fourassApp
 */

angular.module('fourassApp')
    .controller('HeaderCtrl', function ($scope, $location) {
        $scope.query = "";
        $scope.categories = [
								{type: "famille 2", value: "categorie 2-1", name: "c21"}, 
								{type: "famille 2", value: "categorie 2-2", name: "c22"},
								{type: "famille 1", value: "categorie 1-1", name: "c11"}, 
								{type: "famille 1", value: "categorie 1-2", name: "c12"}
        					];

        $scope.regions = [
								{type: "Tunis", value: "Marsa", name: "Marsa"}, 
								{type: "Tunis", value: "Kram", name: "Kram"},
								{type: "Tunis", value: "Gammart", name: "Gammart"}, 
								{type: "Nabel", value: "Korba", name: "Korba"}
        					];

        $scope.searchAction = function(){

        	var regionId = $scope.regionDeals;
        	var categorieId = $scope.categorieDeals;
        	var motCle = $scope.query;

            $location.path("/search/motCle/:"+motCle+"/regionId/:"+regionId+"/categorieId/:"+categorieId); 
        }

    });
