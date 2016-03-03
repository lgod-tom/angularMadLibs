var app = angular.module('madLib');

app.controller('inputCTRL', ["$scope", "inputService", function($scope, inputService){

  $scope.save = function(){
    inputService.saveName($scope.name);
    inputService.saveJob($scope.jobTitle);
    inputService.saveAction($scope.action);
    inputService.savePet($scope.pet);
    inputService.savePlace($scope.place);
    inputService.saveAdjective($scope.adjective);
    inputService.saveSportTeam($scope.sportTeam);
    inputService.saveFood($scope.food);
    inputService.saveNoun($scope.noun);
  };

}]);