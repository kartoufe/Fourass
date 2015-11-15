'use strict';

/**
 * @ngdoc service
 * @name fourassApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the fourassApp.
 */

 /*
angular.module('fourassApp')
  .factory('serviceAjax', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
*/

  angular.module('fourassApp')
  .factory('serviceAjax', function serviceAjax($http) {
    return{
        getDeals: function(page){
            //var test = {results: [{title: "test1", release_date:"2015/01/01", vote_count:9},{title: "test2", release_date:"2015/02/02", vote_count: 8}], total_pages: 1}
            //return test; 
            return $http.get("http://localhost:3000/popular?page=" + page);
        },
        search: function(query, page){
            return $http.get("http://localhost:3000/search?q=" + query + "&page=" + page);
        }
    }
  });
