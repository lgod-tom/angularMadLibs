var app = angular.module('madLib')

	app.controller('httpPage', function($scope, httpService){
			httpService.then(function success(response){
				$scope.posts = response.data.data.children;
				// $scope.posts = response; 
			});;
	});