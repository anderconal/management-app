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
  'eventModal',
  'calendar',
  'events',
]).
/* @ngInject */
config(function($urlRouterProvider, $touchProvider) {
  $urlRouterProvider.otherwise('/');
  $touchProvider.ngClickOverrideEnabled(true);
});
})();
