const should = require( 'chai' ).should();
const basic = require( './unflatten' );
var input = { "flatJSON": false, "i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree", "dates.0.day": 1, "dates.1.day": 8947 };
var output = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] };

describe('basic', () => {
  it('Should return an object', () => {
  	basic(input).should.be.a('object');
	});
	it('Should return NaN when any data type other than Object is passed', () => {
		basic('asda').should.be.NaN;
		basic(null).should.be.NaN;
		basic(true).should.be.NaN;
		basic(2132).should.be.NaN;
		basic({a:1, b:1}).should.not.be.NaN;
		basic(['asd', 'AS3asda', 'asdf']).should.be.NaN;
		basic([21, 454, 'asd']).should.be.NaN;
		basic(undefined).should.be.NaN;
		basic({'flat':false}).should.not.be.NaN;
	});
	it('Should return Nested Object', () => {
		basic(input).should.be.eql(output);
	});
});
