angular.module('applyApp',[]).controller('SomeController', function($scope){
	$scope.$watch(function(){
		console.log("called on digest");
		return;
	})
});

angular.module('applyApp').controller('TimeoutController',function($scope){
	$scope.scheduleTask = function(){
		setTimeout(function(){
			$scope.$apply(function(){
				$scope.message = 'Fetched after 3 seconds';
				console.log('message='+$scope.message);
			});
		},3000);
	}
});