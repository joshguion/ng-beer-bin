(function () {
  "use strict";

  angular
    .module('beers', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<header><nav class="header-nav"><ul><li><ahref="#/addBeer">[+]</a></li><li><a href="#/beers">Beers</a></li><li><ahref="#/">Home</a></li></ul></nav></header>',
          controller: 'MainController'
        })
        .when('/beers', {
          templateUrl: 'views/products/list.html',
          controller: 'BeersController'
        })
        .when('/beers/:beerId', {
          templateUrl: 'views/products/show.html',
          controller: 'BeersController'
        })
        .when('/beers/:beerId/edit', {
          templateUrl: 'views/products/edit.html',
          controller: 'BeersController'
        })
        .when('/addBeer', {
          templateUrl: 'views/products/create.html',
          controller: 'BeersController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

    });

})();
