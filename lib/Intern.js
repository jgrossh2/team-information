const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(school = '') {
        super(school);
            this.school = school;
        };
    getSchool() {
        inquirer 
            .prompt({
                type: 'input',
                name: 'school',
                message: 'Please enter where the intern went to school',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter a school name.');
                        return false;
                    }
                }
            })
            return this.school;
    }
    getRole() {
        return "Intern";
    }
};
module.exports = Intern