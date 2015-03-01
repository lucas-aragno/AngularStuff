'use strict';

angular.module('Book', ['Book.controllers']);

angular.module('Book').run(function($rootScope){
	$rootScope.title = 'Famous Books';
	$rootScope.name = 'Root Scope';
});