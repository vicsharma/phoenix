var OrderService = angular.module('orderService', []);
OrderService.factory('OrderService', function($http) {
	var orderDetails = {};

	return {
		addItemToOrder : function (item) {
			if (orderDetails[item.id]) {
				orderDetails[item.id].quantity = orderDetails[item.id].quantity + 1;
			} else {
				var clonedItem;
				clonedItem = cloneObject(item);
				clonedItem.quantity = 1;
				orderDetails[clonedItem.id] = clonedItem;
			}
		},

		deleteItemFromOrder: function(item) {
			if(item.quantity <= 1 ){
				delete orderDetails[item.id];
			}
			item.quantity = item.quantity - 1;
		},

		isOrderEmpty : function () {
			return Object.keys(orderDetails).length == 0;
		},

		isOrderNotEmpty : function () {
			return Object.keys(orderDetails).length > 0;
		},

		getOrderDetails : function () {
			return orderDetails;
		}

	}
	function cloneObject (obj) {
		return JSON.parse(JSON.stringify(obj));
	}

});
