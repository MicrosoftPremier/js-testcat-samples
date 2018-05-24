import { cdescribe, cit, addIncludes, addExcludes } from 'js-testcat';

import Calculator from '../src/Calculator';

// How to run tests:
//
// Run npm test to run all test cases
// Set JSTESTCAT_EXCLUDE to 'largeNumbers' to exclude the largeNumbers test, then run npm test
// Set JSTESTCAT_INCLUDE to 'largeNumbers' to only run the largeNumbers test, then run npm test
//
// Add one of the following lines to add the largeNumbers category to the includes or excludes
// addIncludes('largeNumbers');
// addExcludes('largeNumbers');

// A regular jasmine spec
describe('Calculator', function() {

    // A js-testcat test case with category 'smallNumbers'
    cit('should add 1 + 1', 'smallNumbers', function() {
        let calc = new Calculator();
        expect(calc.add(1, 1)).toEqual(2);
    });

    // A js-testcat test case with category 'largeNumbers'
    cit('should add 100 + 100', 'largeNumbers', function() {
        let calc = new Calculator();
        expect(calc.add(100, 100)).toEqual(200);
    });
});