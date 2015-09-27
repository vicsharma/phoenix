var kitchenSummary = angular.module('veg.kitchenSummary', ['orderService']);
kitchenSummary.controller('kitchenSummaryController', function($scope, $state,OrderService) {
	$scope.orderDetails = OrderService.getOrderDetails();
	$scope.orderEmpty = function () {
			return OrderService.isOrderEmpty();
	}

	$scope.orderNotEmpty = function () {
			return OrderService.isOrderNotEmpty();
	}
});
