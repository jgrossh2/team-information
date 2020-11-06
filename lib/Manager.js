const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
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