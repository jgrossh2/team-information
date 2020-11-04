const inquirer = require('inquirer');
const fs = require('fs');

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Please enter the employee ID.',
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log('Please enter an employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the employee.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
        { 
            type: 'number',
            name: 'office',
            message: 'Please enter the office number of the employee.',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter a valid office number.');
                    return false;
                }
            }
        },
    ]);
};
const selectOption = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'menu',
            choices: ['Add an engineer', 'Add an intern', 'Finish building me team']
            //if choose engineer then questions
            //if choose intern then questions
            //if choose finish, then exit application and generate HTML
        }
    ]);
};
const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Please enter the employee ID.',
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log('Please enter an employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the employee.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
        { 
            type: 'input',
            name: 'username',
            message: 'Please enter the GitHub username.',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username.');
                    return false;
                }
            }
        },
    ]);
};
const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Please enter the employee ID.',
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log('Please enter an employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the employee.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
        { 
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
        },
    ]);
};