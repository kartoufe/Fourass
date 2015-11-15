'use strict';

/**
 * @ngdoc function
 * @name fourassApp.controller:DealsCtrl
 * @description
 * # DealsCtrl
 * Controller of the fourassApp
 */

 /*
angular.module('fourassApp')
  .controller('DealsCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/

angular.module('fourassApp')
  .controller('DealsCtrl', function ($scope, serviceAjax) {
        $scope.currentPage = 1;
        $scope.totalPages = 0;

        var loadDeals = function(){
            $scope.loading = true;
            serviceAjax.getDeals($scope.currentPage).success(function(data){
                $scope.deals = data.results;
                $scope.totalPages = data.total_pages;
                $scope.loading = false;
            });
        };

        $scope.pageChanged = function(){
            loadDeals();
        };

        loadDeals();
  });