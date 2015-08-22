var vegItems = angular.module('veg.items', ['vegMenuService']);
vegItems.controller('vegItemsController', function($scope, getMenuItems) {
	getMenuItems().then(function(response) {
		$scope.vegItems = response.data;
		$scope.itemsMap = [];
		for (item in $scope.vegItems) {
			var currentItem = $scope.vegItems[item];
			$scope.itemsMap[currentItem.id] = currentItem;
		}
	});

	$scope.showMoreInfo = function (itemId) {
		$scope.chosenItem = $scope.itemsMap[itemId]
	}
})