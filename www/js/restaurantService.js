var RestaurantService = angular.module('restaurantService', []);

RestaurantService.factory('RestaurantService', function($http) {
	return {
		getRestaurant : function () {
			return $http.get("https://api.myjson.com/bins/3i3bo"); //$http.get("http://localhost:8000/api/movies"); //https://api.myjson.com/bins/37rl5"); // "/json/menu.json"
		}
	}
});