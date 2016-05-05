'use strict';

// Declare app level module which depends on views, and components
var slidesApp = angular.module('slidesApp',[]);

slidesApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Home', {
        templateUrl: 'partials/carousel.html',
        controller: 'SlideListCtrl'
      }).
	  when('/Products', {
        templateUrl: 'partials/collapse.html',
        controller: 'ProductListCtrl'
      }).
      otherwise({
        redirectTo: '/Home'
      });
  }]);

angular.module('MyApp', ['ui.date'])