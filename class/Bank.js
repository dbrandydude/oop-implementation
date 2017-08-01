'use strict';

module.exports = class Bank {
    constructor() {
        this.nameOfBank = 'GTBank';
    }

    get bankName() {
        return `Bank Name: ${this.nameOfBank}`;
    }
};
