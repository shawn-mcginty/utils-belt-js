var assert = require("assert");
var StringUtils = require("../utils/stringUtils");


describe('StringUtils', function(){
  describe('#replaceAllWhiteSpaceAndSpecialCharacters()', function(){
    it('should replace all of the special characters and spaces with hyphens', function(){
      var stringToReplace = 'this is-a "cool" string';
      var expectedString = 'this-is-a--cool--string';

      var actualString = StringUtils.replaceAllWhiteSpaceAndSpecialCharacters(stringToReplace, '-');

      assert.equal(expectedString, actualString);
    })

    it('should be null safe', function(){
      var stringToReplace = null;
      var expectedString = null;

      var actualString = StringUtils.replaceAllWhiteSpaceAndSpecialCharacters(stringToReplace, '-');

      assert.equal(expectedString, actualString);
    })

  it('should also work with a callback', function(){
  	  var stringToReplace = 'this is-a "cool" string';
      var expectedString = 'this-is-a--cool--string';

      StringUtils.replaceAllWhiteSpaceAndSpecialCharacters(stringToReplace, '-', function(actualString){
      	assert.equal(expectedString, actualString);
      });
  })
})

  describe('#isBlank()', function(){
  	it('should return true with null', function(){
  		var blankString = null;

  		var actualValue = StringUtils.isBlank(blankString);

  		assert.equal(actualValue, true);
  	})

  	it('should return false with a non blank string', function(){
  		var nonBlankString = 'hey cool guy';

  		var actualValue = StringUtils.isBlank(nonBlankString);

  		assert.equal(actualValue, false);
  	})

  	it('should return true with all white spaces', function(){
  		var blankString = '  \n' +
  		'	' +
  		'\t';

  		var actualValue = StringUtils.isBlank(blankString);

  		assert.equal(actualValue, true);
  	})

  	it('should also work with a callback', function(){
  		var blankString = ' ';

  		StringUtils.isBlank(blankString, function(actualValue){
  			assert.equal(actualValue, true);
  		});
  	})

    it('should be safe with other types', function(){
      var someInt = 77;
      var someObj = { someProperty: "dig it" };

      var shouldBeFalse = StringUtils.isBlank(someInt);
      var shouldAlsoBeFalse = StringUtils.isBlank(someObj);

      assert.equal(shouldBeFalse, false);
      assert.equal(shouldAlsoBeFalse, false);
    })
  })

  describe('#isNotBlank()', function(){
  	it('should return false with null', function(){
  		var blankString = null;

  		var actualValue = StringUtils.isNotBlank(blankString);

  		assert.equal(actualValue, false);
  	})

  	it('should return true with a non blank string', function(){
  		var nonBlankString = 'hey cool guy';

  		var actualValue = StringUtils.isNotBlank(nonBlankString);

  		assert.equal(actualValue, true);
  	})

  	it('should return false with all white spaces', function(){
  		var blankString = '  \n' +
  		'	' +
  		'\t';

  		var actualValue = StringUtils.isNotBlank(blankString);

  		assert.equal(actualValue, false);
  	})

  	it('should also work with a callback', function(){
  		var blankString = ' ';

  		StringUtils.isNotBlank(blankString, function(actualValue){
  			assert.equal(actualValue, false);
  		});
  	})

    it('should be safe with other types', function(){
      var someInt = 77;
      var someObj = { someProperty: "dig it" };

      var shouldBeFalse = StringUtils.isNotBlank(someInt);
      var shouldAlsoBeFalse = StringUtils.isNotBlank(someObj);

      assert.equal(shouldBeFalse, true);
      assert.equal(shouldAlsoBeFalse, true);
    })
  })

  describe('#toLower()', function(){
  	it('should return lowercased string', function(){
  		var stringToLower = 'Hey! Listen!';
  		var expectedString = 'hey! listen!';

  		var actualString = StringUtils.toLower(stringToLower);

  		assert.equal(actualString, expectedString);
  	})

  	it('should be undefined safe', function(){
  		var stringToLower = undefined;
  		var expectedValue = undefined;

  		var actualString = StringUtils.toLower(stringToLower);

  		assert.equal(actualString, expectedValue);
  	})

  	it('should be null safe', function(){
  		var stringToLower = null;
  		var expectedValue = null;

  		var actualString = StringUtils.toLower(stringToLower);

  		assert.equal(actualString, expectedValue);
  	})

  	it('should work with a callback', function(){
  		var stringToLower = 'Hey! Listen!';
  		var expectedString = 'hey! listen!';

  		StringUtils.toLower(stringToLower, function(actualString){
  			assert.equal(actualString, expectedString);
  		});
  	})
  })
})
