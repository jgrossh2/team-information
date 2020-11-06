const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(school = '') {
        super(school);
            this.school = school;
        };
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
};
module.exports = Intern