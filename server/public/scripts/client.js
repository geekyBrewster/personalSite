console.log('Up and Atom!');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
/// ROUTES ///
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController as hc',
    })
    .when('/projects', {
      templateUrl: '/views/templates/projects.html',
      controller: 'HomeController as hc'
    })
    .otherwise({
      redirectTo: 'home'
    });
});
