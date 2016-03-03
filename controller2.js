var app = angular.module('madLib');

app.controller("madLibResult", function($scope, inputService){
  $scope.displayName = inputService.getName();
  $scope.displayJob = inputService.getJob();
  $scope.displayAction = inputService.getAction();
  $scope.displayPet = inputService.getPet();
  $scope.displayPlace = inputService.getPlace();
  $scope.displayAdjective = inputService.getAdjective();
  $scope.displaySportTeam = inputService.getSportTeam();
  $scope.displayFood = inputService.getFood();
  $scope.displayNoun = inputService.getNoun();
});