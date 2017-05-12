const assert = require('assert')
var isWeekday = require('../isweekday')



describe("isWeekday", function () {
  it ("it should return 'weekDay' if given Monday", function() {
  assert.equal(isWeekday("Monday"), true)
});
})
