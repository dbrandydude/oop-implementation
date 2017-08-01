'use strict';
const assert = require('chai').assert;
const Bank = require('../class/Bank');
const Customer = require('../class/Customer');

describe('Inheritance', () => {
    it('class Customer extends Bank', () => {
        it('should return `true` if Customer extneds Bank', () => {
            assert.equal(true, Customer.prototype instanceof(Bank));
        });
    });
});
