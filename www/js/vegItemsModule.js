var vegItems = angular.module('veg.items', ['vegMenuService', 'orderService']);
vegItems.controller('vegItemsController', function($scope, getMenuItems, orderDetails) {
	
	var orderedItems = orderDetails;

	getMenuItems().then(function(response) {
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
		var clonedItem;
		if (orderedItems[item.id]) {
			orderedItems[item.id].quantity = orderedItems[item.id].quantity + 1;
		} else {
			clonedItem = cloneObject(item);
			clonedItem.quantity = 1;
			orderedItems[clonedItem.id] = clonedItem;
		}
	}

	$scope.deleteItem = function(item) {
		var clonedItem;
		var orderedItem = orderedItems[item.id];
		if (orderedItem) {
			orderedItem.quantity = orderedItem.quantity - 1;
			if (orderedItem.quantity <= 0) {
				delete orderedItems[item.id];
			}
		}
	}

	cloneObject = function (obj) {
		return JSON.parse(JSON.stringify(obj));
	}
})
