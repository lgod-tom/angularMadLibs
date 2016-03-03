var app = angular.module('madLib');

app.factory('inputService', function(){

  return {
    saveName: function (name){
      inputName = name;
    },
    getName : function(){
      return inputName;
    },
    saveJob: function(jobTitle){
    	inputJob = jobTitle;
    },
    getJob: function(){
    	return inputJob;
    },
    saveAction: function(action){
    	inputAction = action;
    },
    getAction: function(){
    	return inputAction;
    },
    savePet: function (pet){
    	inputPet = pet;
    },
    getPet: function(){
    	return inputPet;
    },
    savePlace: function(place){
    	inputPlace = place;
    },
    getPlace: function(){
    	return inputPlace;
    },
    saveAdjective: function(adjective){
    	inputAdjective = adjective;
    },
    getAdjective: function(){
    	return inputAdjective;
    },
    saveSportTeam: function(sportTeam){
    	inputSportTeam = sportTeam;
    },
    getSportTeam: function(){
    	return inputSportTeam;
    },
    saveFood: function(food){
    	inputFood = food;
    },
    getFood: function(){
    	return inputFood;
    },
    saveNoun: function(noun){
    	inputNoun = noun;
    },
    getNoun: function(){
    	return inputNoun;
    }
  };

});
