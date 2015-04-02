var assert = require("assert");
var ArrayUtils = require("../utils/arrayUtils");


describe('ArrayUtils', function(){
  describe('#shuffle()', function(){
    it('should randomize array objects', function(){
      var myBaseArray = [ 1, 2, 3, 4, 5, 6, 7 ];
      var myNonRandomArray = [ 1, 2, 3, 4, 5, 6, 7 ];
      
      var myRandomArray = ArrayUtils.shuffle(myBaseArray);

      assert.notEqual(myRandomArray, myNonRandomArray);
    })

    it('should be null safe', function(){
      var myBaseArray = null;
      var expectedArray = null;
      
      var actualArray = ArrayUtils.shuffle(myBaseArray);

      assert.equal(actualArray, expectedArray);
    })

    it('should also work with a callback', function(){
      var myBaseArray = [ 1, 2, 3, 4, 5, 6, 7 ];
      var myNonRandomArray = [ 1, 2, 3, 4, 5, 6, 7 ];
      
      ArrayUtils.shuffle(myBaseArray, function(myRandomArray){
        assert.notEqual(myRandomArray, myNonRandomArray);
      });
    })
  })
})
