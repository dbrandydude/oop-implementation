'use strict';

module.exports = class Bank {
    constructor() {
        this.nameOfBank = 'GTBank';
    }

    getInfo() {
        return `Bank Name: ${this.nameOfBank}`;
    }
};
