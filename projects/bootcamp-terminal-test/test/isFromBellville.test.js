const assert = require('assert')
var isFromBellville = require('../isFromBellville')


describe("isFromBellville", function () {
  it ("it should return 'vehicle.startsWith('CY')'", function() {
  assert.equal(isFromBellville("CY 678-770"), true);
});
})
