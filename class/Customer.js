'use strict';
const Bank = require('./Bank');

const _id = new WeakMap();
const _email = new WeakMap();

/**
 * A customer of Bank with a checking account
 *
 * @param name [string] Representing the customer's name.
 * @param balance [int|default=0] A float tracking the customer's account balance.
 */
class Customer extends Bank {
    constructor(name, email, balance=0.0) {
        super();
        _id.set(this, Customer.counter++);
        _email.set(this, email);
        this.name = name;
        this._balance = balance;
    }

    // Get encapsulated customer id
    getId() {
        return _id.get(this);
    }

    // Get encapsulated customer email
    getEmail() {
        return _email.get(this);
    }

    getBalance() {
        return this._balance;
    }

    // Return account balcnce after withdrawal of <amount>
    withdraw(amount) {
        if (amount > this.getBalance()) {
            return 'Amount greater than available balance';
        }
        this._balance -= amount;
        return this._balance;
    }

    // Return account balcnce after deposit of <amount>
    deposit(amount) {
        this._balance += amount;
        return this._balance;
    }

    // print friendly account balance
    printBalance() {
        return `Account Balance: N${this._balance}`;
    }

    // superclass property to be overridden by customer ( Polymorphism )
    getInfo() {
        return `${super.getInfo()} \nCustomer Id: ${this.getId()} \nCustomer Name: ${this.name}\nEmail: ${this.getEmail()}`;
    }
}
Customer.counter = 1;

module.exports = Customer;
