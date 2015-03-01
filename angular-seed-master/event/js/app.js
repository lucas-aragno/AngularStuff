angular.module('EventApp',[
	'EventApp.controllers']);

angular.module('EventApp.controllers',[]);

angular.module('EventApp.controllers').controller('MessageController', function($scope, $timeout){
	$scope.messages = [{
		sender: 'user1',
		text: 'Message1'
	}];
	var timer;
	var count = 0;

	$scope.loadMessages = function(){
		count++;
		$scope.messages.push({
			sender: 'user1',
			text: 'Random message' +count
		});

		timer = $timeout($scope.loadMessages, 2000);

		if(count == 3){
			$scope.$broadcast('EVENT_NO_DATA','Not connected');
			$timeout.cancel(timer);
		}
	};

	timer=$timeout($scope.loadMessages, 2000);

	$scope.$on('EVENT_RECEIVED', function(){
		console.log("Received emmitted event");
	});
});


angular.module('EventApp.controllers').controller('StatsController', function($scope){
	$scope.name = 'World';
	$scope.status = 'Connected';
	$scope.statusColor = 'green';
	$scope.$on('EVENT_NO_DATA', function(event, data){
		console.log('recived broadcasted event');
		$scope.status = data;
		$scope.statusColor = 'red';
		$scope.$emit('EVENT_RECEIVED');
	});

});