const should = require( 'chai' ).should();
const basic = require( './secondlargestArray' );

describe('basic', () => {
  it('Should return an Number', () => {
   basic([3,56,7,32,9,14]).should.be.a('number').not.a('string');
   basic([21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 27, 56, 59]).should.be.a('number');
   basic([111, 0, 20, 0, 2]).should.be.a('number').not.a('string');
   basic([1]).should.be.a('number');
	});
	it('Should return NaN when any data type other than array is passed', () => {
		basic('asda').should.be.NaN;
		basic(null).should.be.NaN;
		basic(true).should.be.NaN;
		basic(2132).should.be.NaN;
		basic({a:1, b:1}).should.be.NaN;
		basic(['asd', 'AS3asda', 'asdf']).should.be.NaN;
		basic([21, 454, 'asd']).should.be.NaN;
		basic(undefined).should.be.NaN;
	});
	it('Should return appropriate number when array is passed', () => {
		basic([3,56,7,32,9,14]).should.be.equal(32);
		basic([21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 27, 56, 59]).should.be.equal(91);
		basic([111, 0, 20, 0, 2]).should.be.equal(20);
	});
});
