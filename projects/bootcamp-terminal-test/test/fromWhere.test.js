const assert = require('assert')
var fromWhere = require('../fromWhere')


describe("fromWhere", function () {
  it ("it should return 'CY' when given 'Bellville' ", function() {
  assert.equal(fromWhere('CY'), "Bellville");
});
})
