(function () {
  "use strict";
  angular
    .module('beers')
    .factory('BeersService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/guionbeer';

      var addBeer = function (newBeer) {
        $http.post(url, newBeer).then(function (res) {
          console.log(res);
        });
      };

      var getBeers = function () {
        return $http.get(url);
      };

      return {
        createBeer: addBeer,
        getBeers: getBeers
      };
    });
    var removeFace = function(faces){
                 $http.delete(url+'/'+faces._id);
               };
})();
