angular.module("formsApp",[]).controller("FormController", function($scope){
	$scope.user = {};
	$scope.countries = [{
		id: 'US',
		desc: 'United States'
	}, {
		id: 'AR',
		desc: 'Argentina'
	}];
});