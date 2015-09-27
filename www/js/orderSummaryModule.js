var orderSummary = angular.module('veg.orderSummary', ['orderService']);

orderSummary.controller('orderSummaryController', function($scope, $state, OrderService) {

    $scope.orderDetails = OrderService.getOrderDetails();

    $scope.addItem = function (item) {
        OrderService.addItemToOrder(item);
    }

    $scope.orderEmpty = function () {
        return OrderService.isOrderEmpty();
    }

    $scope.orderNotEmpty = function () {
        return OrderService.isOrderNotEmpty();
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
        var billObj = {
            sumTotal : Math.round(sumTotal * 100) / 100
            ,tax : getTaxes(sumTotal)
            ,finalPrice : sumTotal+getTaxes(sumTotal)
        };
        return billObj;
    }

    var getTaxes=function(sumTotal){
        var serviceCharge=0.10*sumTotal;
        var salersTax=.40*sumTotal*.1236;
        var vat=.14*sumTotal;
        return Math.round((serviceCharge+salersTax+vat) *100)/100;
    }
});
