(function() {
'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'ui.router',
  'ui.bootstrap',
  'mwl.calendar',
  'ngTouch',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'index',
  'calendar',
  'events',
  'modal'
]).
/* @ngInject */
config(function($urlRouterProvider, $touchProvider) {
  $urlRouterProvider.otherwise('/');
  $touchProvider.ngClickOverrideEnabled(true);
});
})();
