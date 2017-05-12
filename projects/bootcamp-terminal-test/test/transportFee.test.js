const assert = require('assert')
var transportFee = require('../transportFee')


describe("transportFee", function () {
  it ("it should return 'R10' when given 'afternoon' ", function() {
  assert.equal(transportFee('afternoon'), "R10");
});
})
