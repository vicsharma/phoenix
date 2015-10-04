var vegItems = angular.module('veg.items', ['vegMenuService', 'orderService','session']);
vegItems.controller('vegItemsController', function($scope, MenuService, OrderService, Session) {

	MenuService.getMenu().then(function(response) {
		$scope.vegItems = response.data;
		$scope.itemsMap = {};
		for (item in $scope.vegItems) {
			var currentItem = $scope.vegItems[item];
			$scope.itemsMap[currentItem.id] = currentItem;
		}
		$scope.chosenItem = $scope.itemsMap[Object.keys($scope.itemsMap)[0]];
	});

	$scope.showMoreInfo = function (itemId) {
		$scope.chosenItem = $scope.itemsMap[itemId]
	}

	$scope.addItem = function(item) {
		$scope.$root.cartIcon = "ion-ios-cart";
		OrderService.addItemToOrder(item);
	}

	$scope.getResturantNameFromSession=Session.restaurantName;

});
