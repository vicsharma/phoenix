angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {
  $scope.$root.cartIcon = "ion-ios-cart-outline";

  $scope.navigate=function(){
  	console.log($state);
  	$state.go('app.order-summary');
  };
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
});
