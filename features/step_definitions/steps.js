"use strict";

const calc = require('../../calc')
const expect = require('expect');
const { defineSupportCode } = require('cucumber')

defineSupportCode( ({ Given, Then, When }) => {
    let rows
    let results
    Given('I have these numbers in a table called "Values"', (dataTable) => {
       rows = dataTable.hashes().map(({value1, value2}) => [parseInt(value1), parseInt(value2)]) 
    });

    When('I ABS these numbers and add them', () => {
        results = calc(rows)
    });   

    Then('the results should be int a table called "Sums"', (dataTable) => {
        let expected = dataTable.rows().map(row => parseInt(row));
        expect(results).toEqual(expected)
    });
});
