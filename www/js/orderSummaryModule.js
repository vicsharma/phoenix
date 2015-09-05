var orderSummary = angular.module('veg.orderSummary', ['orderService']);
orderSummary.controller('orderSummaryController', function($scope, orderDetails) {
  console.log(orderDetails);
  $scope.orderDetails = orderDetails;
  $scope.addItem = function (order) {
    order.quantity = order.quantity + 1;
  }
  $scope.deleteItem = function (order) {
    order.quantity = order.quantity - 1;
  }
});
