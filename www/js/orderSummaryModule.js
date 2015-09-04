var orderSummary = angular.module('veg.orderSummary', ['orderService']);
orderSummary.controller('orderSummaryController', function($scope, orderDetails) {
  console.log(orderDetails);
  $scope.orderDetails = orderDetails;
});
