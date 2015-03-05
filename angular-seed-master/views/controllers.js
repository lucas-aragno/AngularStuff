'use strict';

angular.module('viewsApp.controllers', []).controller('Controller1', function($scope){
	$scope.message = "hello world";
}).controller('Controller2', function($scope){
	$scope.now = new Date();
});