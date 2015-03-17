'use strict';

(function (root, factory) {
	if(typeof module === "object" && module.exports) {
		module.exports = factory();
	} else if(typeof define === "function" && define.amd) {
		define([], factory);
	} else {
		root.StringUtils = factory();
	}
}(this, function () {
	var stringUtils = {};

	stringUtils.replaceAllWhiteSpaceAndSpecialCharacters = function(stringToReplace, replacement, callback){
		var newString = null;

		if(stringToReplace){
			newString = stringToReplace.replace(/[^a-zA-Z0-9]/g, replacement);
		}

		if(callback){
			callback(newString);
		} else {
			return newString;
		}
	};

	stringUtils.isBlank = function(stringToCheck, callback){
		var isBlank = null;

		if(stringToCheck === undefined){
			isBlank = true;
		} else if(stringToCheck === null){
			isBlank = true;
		} else if(removeWhiteSpace(stringToCheck) === '') {
			isBlank = true;
		} else {
			isBlank = false;
		}

		if(callback){
			callback(isBlank);
		} else {
			return isBlank;
		}
	}

	stringUtils.isNotBlank = function(stringToCheck, callback){
		var isNotBlank = !this.isBlank(stringToCheck);

		if(callback){
			callback(isNotBlank);
		} else {
			return isNotBlank;
		}
	}

	var removeWhiteSpace = function(stringToRemoveFrom){
		return stringToRemoveFrom.replace(/\s/g, '');
	}

	stringUtils.toLower = function(stringToLower, callback){
		var allLowercased = null;

		if(stringToLower !== undefined && stringToLower !== null){
			allLowercased = stringToLower.toLowerCase();
		}

		if(callback){
			callback(allLowercased);
		} else {
			return allLowercased;
		}
	}

	return stringUtils;
}));