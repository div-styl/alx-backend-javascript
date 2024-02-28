const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe('calculateNumber with type', () => {
  // sum of numbers
  describe("SUM of numbers", () => {
    it('positive sum numbers', () => {
      assert.equal(calculateNumber('SUM', 2.0, 2.0), 4);
      assert.equal(calculateNumber('SUM', 2.3, 1.8), 4);
      assert.equal(calculateNumber('SUM', 1.5, 1), 3);
    });
  });
  // subtract 
  describe("SUBTRACT of numbers", () => {
    // positives
    it("positive SUBTRACT numbers", () => {
      assert.equal(calculateNumber("SUBTRACT", 8.0, 2.0), 6);
      assert.equal(calculateNumber("SUBTRACT", 5.1, 2.5), 2);
      assert.equal(calculateNumber("SUBTRACT", 13.5, 10.5), 3);
    });
  });
  // divide numbers
  describe("DIVIDE OF NUMBERS", () => {
    it("positive DIVIDE numbers", () => {      
      assert.equal(calculateNumber("DIVIDE", 8.0,2.0), 4);
      assert.equal(calculateNumber("DIVIDE", 10.0, 5.0), 2);
    });
    // negative numbers divide
    it("negative DIVIDE numbers and equal rounded down", () => {
      assert.equal(calculateNumber("DIVIDE", -10.0, 5.0), -2);
      assert.equal(calculateNumber("DIVIDE", -7.0, 2.0), -3.5);
      assert.equal(calculateNumber("DIVIDE",  0.0, -5.0), -0);
      assert.equal(calculateNumber("DIVIDE", 2.4, 2.0), 1);
      assert.equal(calculateNumber("DIVIDE", 2.6, 3.0), 1);
    });
    // return Error during the divide
    // it("get the Error since passing 0 to b", () => {
    //   assert.equal(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    //   assert.equal(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    //   assert.equal(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    // });
  })
});
