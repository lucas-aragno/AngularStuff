angular.module('promiseApp',[]).controller('PromiseController',['$scope', '$q', '$interval', function($scope, $q, $interval){
	$scope.getPromise = function() {
		var i = 0;
		var deferred = $q.defer();

		var timer = $interval(function(){
			if(!!$scope.cancelRequested){
				deferred.reject('Promise rejected');
				$interval.cancel(timer);
			}

			i = i + 1;

			if (i == 5){
				deferred.resolve('counter has reached 5');
				$interval.cancel(timer);
			} else {
				deferred.notify('Counter has reached ' + i);

			}
		}, 1000);

		return deferred.promise;
	}

	$scope.getAsyncMessage = function() {
		console.log("loaded");
		var promise = $scope.getPromise();

		promise.then(function(message){
			$scope.status = 'Resolved' + message;
		}, function(message){
			$scope.status = 'Rejected' + message;
		}, function(message){
			$scope.status = 'Notifing' + message;
		});
	}
}]);