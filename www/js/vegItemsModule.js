var vegItems = angular.module('veg.items', ['vegMenuService']);
vegItems.controller('vegItemsController', function($scope, getMenuItems) {
	getMenuItems().then(function(response) {
		$scope.vegItems = response.data;
	});
})