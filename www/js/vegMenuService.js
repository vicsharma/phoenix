var MenuService = angular.module('vegMenuService', []);

MenuService.factory('MenuService', function($http) {
	return {
		getMenu : function (restaurantName) {
			return $http.get("https://api.myjson.com/bins/1zp8k").then(function (response) {
				return response.data[restaurantName];
			});
			
		}
	}
});