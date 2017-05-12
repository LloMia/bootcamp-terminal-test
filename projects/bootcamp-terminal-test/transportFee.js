module.exports = function(shift){

    if (shift === "morning") {
    	return "R20"}
	else if (shift === "afternoon"){
    	return "R10"}
	else{
    	return "free"}
};
// assert.equal(transportFee("morning"), "R20", "THis failed")
// assert.equal(transportFee("afternoon"), "R10")
// assert.equal(transportFee("night"), "free")
