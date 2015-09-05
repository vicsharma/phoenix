var orderSummary = angular.module('veg.orderSummary', ['orderService']);
orderSummary.controller('orderSummaryController', function($scope, orderDetails) {
  $scope.orderDetails = orderDetails;
  $scope.addItem = function (order) {
    order.quantity = order.quantity + 1;
  }
  $scope.deleteItem = function (order) {
  	if(order.quantity <= 1 ){
  		delete orderDetails[order.id];
  	}
    order.quantity = order.quantity - 1;
  }
});
