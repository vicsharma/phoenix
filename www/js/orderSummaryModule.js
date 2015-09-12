var orderSummary = angular.module('veg.orderSummary', ['orderService']);

orderSummary.controller('orderSummaryController', function($scope, $state, OrderService) {

    $scope.orderDetails = OrderService.getOrderDetails();

    $scope.addItem = function (item) {
        OrderService.addItemToOrder(item);
    }

    $scope.orderEmpty = function () {
        return OrderService.isOrderEmpty();
    }

    $scope.deleteItem = function (item) {
        OrderService.deleteItemFromOrder(item);
        if (OrderService.isOrderEmpty()) {
            $scope.$root.cartIcon = "ion-ios-cart-outline";
            $state.go('app.veg-items');
        }
    }

    $scope.getFinalPrice=function(item){
        return item.price * item.quantity;
    }

    $scope.getSumTotal=function(item){
        var sumTotal=0;
        Object.keys(item).forEach(function (element) {
            sumTotal=sumTotal+(item[element].price*item[element].quantity);
        });
        return sumTotal;
    }
});
