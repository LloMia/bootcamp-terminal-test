const assert = require('assert')
var greet = require('../greet')

describe("greet", function () {
  it ("it should return 'Hello!, loyiso' when given loyiso", function() {
  assert.equal(greet("loyiso"), "Hello!, loyiso");
});
})
