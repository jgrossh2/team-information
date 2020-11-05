const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github = '') {
        super(github);
        this.github = github;
    }
    getGithub() {
        inquirer
            .prompt({
                type: 'input',
                name: 'github',
                message: 'Please enter the GitHub username.',
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    } else {
                        console.log('Please enter a GitHub username.');
                        return false;
                    }
                }
            })
            return this.github;
    };
    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;