'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('ContactCtrl', function ($scope) {
  	//console.log($modal);
  	$scope.double = function(value) { return value * 2; };
    
  });
