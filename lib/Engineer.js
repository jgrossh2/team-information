const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github = '') {
        super(github);
        this.github = github;
    }
    getGithub() {
        return this.github;
    };
    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;