'use strict';

module.exports = class Bank {
    constructor() {
        this.name = 'GTBank';
    }

    get bankName() {
        return `Bank Name: ${this.name}`;
    }
};
