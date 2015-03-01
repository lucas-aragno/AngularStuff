angular.module('Book.controllers',[]).controller('SiteController',
	function($scope){
		$scope.publisher='SitePoint';
		$scope.type='Web Development';
		$scope.name="Scope for SiteController";
	});

angular.module('Book.controllers').controller('BookController',
	function($scope){
		$scope.books = ['Jump start to html5', 'Responsive Web desing', 'JS the good parts'];
		$scope.name = "Scope for BookController";
		$scope.addToWishList = function(book){
			console.log("calling");
			$scope.wishListCount++;
		};
		$scope.wishListCount=0;
		$scope.$watch('wishListCount', function(newValue, oldValue){
			console.log('called' + newValue + 'times');
			if(newValue == 2){
				alert("congrats!");
			}
		});
	});