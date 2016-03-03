var app = angular.module('madLib')

	app.factory('httpService', ["$http", function($http){

	// return $http.get('https://twlaas.herokuapp.com/'); 
	return $http.get('http://www.reddit.com/r/aww/.json');
	}]);
