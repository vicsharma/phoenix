var orderSummary = angular.module('veg.orderSummary', ['orderService']);
orderSummary.controller('orderSummaryController', function($scope, $state, orderDetails) {
  $scope.orderDetails = orderDetails;

  $scope.addItem = function (order) {
    order.quantity = order.quantity + 1;
  }

  $scope.deleteItem = function (order) {
  	if(order.quantity <= 1 ){
  		delete orderDetails[order.id];
        if(Object.keys(orderDetails).length == 0) {
          $scope.$root.cartIcon = "ion-ios-cart-outline";
          $state.go('app.veg-items');
        }
  	}
    order.quantity = order.quantity - 1;
  }

 $scope.getFinalPrice=function(order){
  return order.price*order.quantity;
 }
});
