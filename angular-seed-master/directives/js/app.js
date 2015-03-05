angular.module('directiveApp', []);


angular.module('directiveApp').controller("MainController", function($scope){
	$scope.message = "I love angularJS";
});

angular.module('directiveApp').directive('helloWorld', function(){
	return {
		restrict: 'AEC',
		replace: true,
		template: '<p ng-click="clearMessage()"> Hello World! {{message}} </p>',
		link: function(scope, elem, attrs){
			scope.$watch("message", function(value){
				console.log("message changed!");
			});

			scope.clearMessage = function(){
					scope.message = "";
			}

			elem.bind('mouseover',function(){
				elem.css('cursor', 'pointer');
			});
		}
	}
});