angular.module('greeterApp',[]).controller('GreetingController',
	function($scope){
		this.now = Date();
		this.greetings = "Hello";
	});