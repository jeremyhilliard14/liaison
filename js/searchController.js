var searchApp = angular.module('searchApp', []);

searchApp.controller('searchController', function($scope, $http){
	var apiUrl = 'https://api.github.com/search/users?q=';

	$scope.searchUser = function(form){
		$http.get(apiUrl + $scope.search, {})
			.then(function successCallback(response){
				console.log(response.data.items);
				$scope.items = response.data.items;


			}, function errorCallback(response){
				console.log(response);
			});
			
	}


});