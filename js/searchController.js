var searchApp = angular.module('searchApp', []);

searchApp.controller('searchController', function($scope, $http){
	var apiUrl = 'https://api.github.com/search/users?q=';

	$scope.searchUser = function(form){
		if($scope.search != undefined){
			$http.get(apiUrl + $scope.search, {})
				.then(function successCallback(response){
					if(response.data.items<=0){
						$scope.errorMessage = "Please try a different user.  Your search returned 0 results.";
					}
					console.log(response.data.items);
					$scope.items = response.data.items;


				}, function errorCallback(response){
					console.log(response);
				});
		}else{
			$scope.errorMessage = "Please enter a username."
			
		}
	}


});