'use strict';

angular.module('oneclickApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    function clickedit() {
    	$('#jumbotron').effect("shake");
    }
  });

