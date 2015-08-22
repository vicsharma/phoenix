var OrderService = angular.module('orderService', []);

OrderService.factory('getCart', function($http) {
	var orderDetails = {};

	return function() {
		return orderDetails;
	}
});