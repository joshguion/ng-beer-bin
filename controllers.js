(function () {

  angular
    .module('beers')
    .controller('MainController', function ($scope) {

    })
    .controller('BeersController', function ($scope, BeersService) {

      BeersService.getBeers().success(function (beers) {
        console.log(beers);
        $scope.myBeers = beers;
    });
    $scope.addBeer = function(newBeer){
      BeersService.createBeer(newBeer);
    };
});
})();
