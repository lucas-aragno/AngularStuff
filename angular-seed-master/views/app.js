angular.module('viewsApp',[
	'viewsApp.controllers',
	 'ngRoute'
]);


angular.module('viewsApp').config(function($routeProvider){
	$routeProvider.when('/view1',{
		controller: 'Controller1',
		templateUrl: 'partials/view1.html'
	}).when('/view2', {
		controller: 'Controller2',
		templateUrl: 'partials/view2.html'
	});
});