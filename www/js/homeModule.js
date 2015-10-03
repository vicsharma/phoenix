var homeModule = angular.module('homeModule',['restaurantService', 'vegMenuService']);
homeModule.controller('homeController', function($scope, $state, RestaurantService) {

	RestaurantService.getMenu().then(function(response) {
		
		$scope.restaurants = response.data;

		$scope.navigateToMenu=function(restaurant){
			console.log(restaurant)
  			$state.go('app.veg-items');
  		};

		/*
		$scope.vegItems = response.data;
		$scope.itemsMap = {};
		for (item in $scope.vegItems) {
			var currentItem = $scope.vegItems[item];
			$scope.itemsMap[currentItem.id] = currentItem;
		}
		$scope.chosenItem = $scope.itemsMap[Object.keys($scope.itemsMap)[0]];
		*/
	});
	
});