'use strict';

(function (root, factory) {
	if(typeof module === "object" && module.exports) {
		module.exports = factory();
	} else if(typeof define === "function" && define.amd) {
		define([], factory);
	} else {
		root.ArrayUtils = factory();
	}
}(this, function () {
	var arrayUtils = {};

	arrayUtils.shuffle = function(array, callback){
		var counter, temp, randomIndex;
		if(array){
			counter = array.length;
		} else {
			counter = 0;
		}
		
		if(counter < 2){
			array = array;
		} else if(arrayHasTwoElementsRandomlyReturnOriginalArray(array)) {
		 	array = array;
		} else {

		    while (counter > 0) {
		        randomIndex = Math.floor(Math.random() * counter);

		        // Decrease counter by 1
		        counter--;

		        // And swap the last element with it
		        temp = array[counter];
		        array[counter] = array[randomIndex];
		        array[randomIndex] = temp;
		    }
		}

		if(callback){
			callback(array);
		} else {
	    	return array;
	   	}	
	}

	var arrayHasTwoElementsRandomlyReturnOriginalArray = function(array){
		if(array){
			var counter = array.length;
			return counter ===2 && (Math.floor(Math.random() * 2) == 0)
		} else {
			return false;
		}
	}

	return arrayUtils;
}));