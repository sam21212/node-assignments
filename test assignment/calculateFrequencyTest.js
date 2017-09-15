const should = require( 'chai' ).should();
const basic = require( './calculateFrequency' );

describe('basic', function() {
  it('should return an object', () => {
    basic('dummy').should.be.a('object').not.a('array');
    basic('shali is running fast').should.be.a('object').not.a('array');
    basic('u@%$as').should.be.a('object').not.a('array');
    basic('@#$%^&()').should.be.eql({});
    basic(' ').should.be.a('object');
  });
  it('should have only lower-case letters as keys in output', () => {
    basic('u@%$as').should.not.have.keys('@', '%', '$');
    basic('@#$%^').should.not.have.keys('@', '#', '$', '%', '^');
    basic('shali is running fast').should.not.have.keys(' ');
    basic('u@%$as').should.have.keys('u', 'a', 's');
    basic('@#$%^').should.be.empty;
    basic(' ').should.be.empty;
  });
  it('should return NaN when data type other than string is passed' ,() => {
    basic(null).should.be.NaN;
    basic({a:1, b:2}).should.be.NaN;
    basic(232).should.be.NaN;
    basic(['as', 'the']).should.be.NaN;
    basic([12,34,56]).should.be.NaN;
    basic(undefined).should.be.NaN;
  });	
  it('should have all keys required', () => {
    basic('u@%$as').should.have.all.keys('u', 'a', 's');
    basic('shali is running fast').should.have.keys('s', 'h', 'a', 'l', 'i', 'r', 'u', 'n', 'g', 'f', 't');
    basic('dummy').should.have.keys('d', 'u', 'm', 'y');
  });
})
