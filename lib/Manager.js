const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber = '') {
        super(officeNumber);
        this.officeNumber = officeNumber;
    };
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        console.log("Role = Manager");
        return "Manager";
    };
};
module.exports = Manager;