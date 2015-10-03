var homeModule = angular.module('homeModule',['restaurantService']);
homeModule.controller('homeController', function($scope, $state, RestaurantService) {

	RestaurantService.getMenu().then(function(response) {
		
		$scope.restaurants = response.data;
		console.log($scope.restaurants);

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