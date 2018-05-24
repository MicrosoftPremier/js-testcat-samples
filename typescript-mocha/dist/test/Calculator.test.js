"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_testcat_1 = require("js-testcat");
var chai_1 = require("chai");
chai_1.should();
var Calculator_1 = require("../src/Calculator");
// How to run tests:
//
// Run npm test to run all test cases
// Set JSTESTCAT_EXCLUDE to 'largeNumbers' to exclude the largeNumbers test, then run npm test
// Set JSTESTCAT_INCLUDE to 'largeNumbers' to only run the largeNumbers test, then run npm test
//
// Add one of the following lines to add the largeNumbers category to the includes or excludes
js_testcat_1.addIncludes('largeNumbers');
// addExcludes('largeNumbers');
// A regular jasmine spec
describe('Calculator', function () {
    // A js-testcat test case with category 'smallNumbers'
    js_testcat_1.cit('should add 1 + 1', 'smallNumbers', function () {
        var calc = new Calculator_1.default();
        calc.add(1, 1).should.be.equal(2);
    });
    // A js-testcat test case with category 'largeNumbers'
    js_testcat_1.cit('should add 100 + 100', 'largeNumbers', function () {
        var calc = new Calculator_1.default();
        calc.add(100, 100).should.be.equal(200);
    });
});
