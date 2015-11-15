'use strict';

/**
 * @ngdoc overview
 * @name fourassApp
 * @description
 * # fourassApp
 *
 * Main module of the application.
 */
angular
  .module('fourassApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ngSanitize',
    'ngTouch'
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/deals', {
        templateUrl: 'views/deals.html',
        controller: 'DealsCtrl',
        controllerAs: 'deals'
      })
      .when('/search/motCle/:motCle/regionId/:regionId/categorieId/:categorieId', {
        templateUrl: 'views/deals.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/deals'
      });
  });
