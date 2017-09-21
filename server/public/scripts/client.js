console.log('Up and Atom!');
var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider) {
  console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/index.html',
    })
    .when('/aboutme', {
      templateUrl: '/views/templates/aboutme.html',
    })
    .when('/projects', {
      templateUrl: '/views/templates/projects.html',
    })
    .otherwise({
      redirectTo: 'home'
    });

}); // END OF Routes config
