const assert = require('assert');

describe('CalculService',function (){
  describe('#add', function (){
    it('should add values', function (){
      let result = CalculService.add(1,5);
      assert.equal(result,6);
    })

  })
  describe('#sub', function (){
    it('should sub values', function (){
      let result = CalculService.sub(3,2);
      assert.equal(result,1);
    })
  })
  describe('#mul', function (){
    it('should mul values', function (){
      let result = CalculService.mul(2,5);
      assert.equal(result,10);
    })
  })
  describe('#div', function (){
    it('should div values', function (){
      let result = CalculService.div(10,5);
      assert.equal(result,2);
    })
  })
  describe('#prct', function (){
    it('should prct values', function (){
      let result = CalculService.prct(25,40);
      assert.equal(result,10);
    })
  })
})
