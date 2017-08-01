'use strict';
const assert = require('chai').assert;
const Bank = require('../class/Bank');
const Customer = require('../class/Customer');

const client1 = new Customer('John Doe', 'johndoe@email.com');
const client2 = new Customer('Jane Doe', 'jenna@email.com');

describe('Inheritance', () => {
    it('should return `true` if Customer extends Bank', () => {
        assert.equal(true, Customer.prototype instanceof(Bank));
    });

    it('should return `true` if client inherits Bank', () => {
        assert.instanceOf(client1, Customer);
    });
});

describe('Encapsulation', () => {
    it('should return `undefined` for direct access of client id property', () => {
        assert.notExists(client1.id);
    });

    it('should return `undefined` for direct access of client email property', () => {
        assert.notExists(client1.email);
    });

    it('should return `undefined` for direct access of client balance', () => {
        assert.notExists(client1.balance);
    });
});

describe('Polymorphism', () => {
    it('clients share the same bank name', () => {
        let client1BankName = client1.bankName;
        let client2BankName = client2.bankName;
        assert.isTrue(client1BankName === client1BankName);
    });
});

describe('Operation', () => {
    let amount = 1500;
    let withdraw = 600;

    it('should return balance `1500` after client deposit 1500', () => {
        assert.equal(1500, client1.deposit(amount));
    });

    it('should return balance `900` after client withdraw 600', () => {
        assert.equal(900, client1.withdraw(withdraw));
    });

    it(`user friendly message Account Balance: N${amount - withdraw}`, () => {
        assert.equal(`Account Balance: N${amount - withdraw}`, client1.printBalance());
    });
});
