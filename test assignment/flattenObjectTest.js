const should = require( 'chai' ).should();
const basic = require( './flatten_object' );
var input = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] };
var output = { "flatJSON": false, "i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree", "dates.0.day": 1, "dates.1.day": 8947 }; 

describe('basic', () => {
  it('Should return an object', () => {
  	basic(input).should.be.a('object');
	});
	it('Should return unflat Object', () => {
		basic(input).should.be.eql(output);
	});
});
