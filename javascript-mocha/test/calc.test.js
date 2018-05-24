var chai = require('chai');
const should = chai.should();

var jstestcat = require('js-testcat');
const cdescribe = jstestcat.cdescribe;
const cit = jstestcat.cit;

var calc = require('../src/calc');

// How to run tests:
//
// Run npm test to run all test cases
// Set JSTESTCAT_EXCLUDE to 'largeNumbers' to exclude the largeNumbers test, then run npm test
// Set JSTESTCAT_INCLUDE to 'largeNumbers' to only run the largeNumbers test, then run npm test
//
// Add one of the following lines to add the largeNumbers category to the includes or excludes
// jstestcat.addIncludes('largeNumbers');
// jstestcat.addExcludes('largeNumbers');

// A regular mocha suite
describe('Calc', function() {

    // A js-testcat test case with category 'smallNumbers'
    cit('should add 1 + 1', 'smallNumbers', function() {
        calc.add(1, 1).should.be.equal(2);
    });

    // A js-testcat test case with category 'largeNumbers'
    cit('should add 100 + 100', 'largeNumbers', function() {
        calc.add(100, 100).should.be.equal(200);
    });
});