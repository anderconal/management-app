(function() {
  'use strict';

  angular.module('modal')
  .service('modalService', modalService);

  /* @ngInject */
  function modalService($mdDialog) {
    var openDialog = openDialog;

    var service = {
      openDialog: openDialog
    };

    function openDialog() {
      alert("openDialog function");
    }

    return service;
  }
})();
