const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer.js');

const team= [];
const id = [];

function makeManager () {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
        validate: (managerNameInput) => {
            if (managerNameInput === true) {
                return this.managerName
            } else {
                console.log("Please enter the manager's name.")
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Please enter the manager ID.",
        validate: managerIdNumber => {
            if (managerIdNumber === true) {
                return true;
            } else {
                console.log('Please enter the manager ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the manager's email.",
        validate: managerEmail => {
            if (managerEmail === true) {
                return true;
            } else {
                console.log("Please enter the manager's email.")
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'managerOffice',
        message: 'Please enter the office number of the employee.',
        validate: officeNumber => {
            if (officeNumber === true) {
                return true;
            } else {
                console.log('Please enter a valid office number.')
                return false;
            }
        }
    },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerIdNumber, answers.managerEmail, answers.managerOffice)
        team.push(manager);
        id.push(answers.managerIdNumber)
        Menu()
    })

function  makeEngineer() {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
        validate: (engineerNameInput) => {
            if (engineerNameInput === true) {
                return this.engineerName
            } else {
                console.log("Please enter the engineer's name.")
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "Please enter the engineer ID.",
        validate: engineerIdNumber => {
            if (engineerIdNumber === true) {
                return true;
            } else {
                console.log('Please enter the engineer ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter the engineer's email.",
        validate: engineerEmail => {
            if (engineerEmail === true) {
                return true;
            } else {
                console.log("Please enter the engineer's email.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "Please enter the engineer's GitHub username.",
        validate: enginnerGithubInput => {
            if (enignnerGithubInput === true) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub username.");
                return false;
                }
            }
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerIdNumber, answers.engineerEmail, answers.engineerGithub)
        team.push(engineer);
        id.push(answers.engineerIdNumber)
        Menu()
    })
}
function makeIntern() {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
        validate: (internNameInput) => {
            if (internNameInput === true) {
                return this.internName
            } else {
                console.log("Please enter the manager's name.")
            }
        }
    },
    {
        type: 'input',
        name: 'internIdNumber',
        message: "Please enter the manager ID.",
        validate: internIdNumber => {
            if (internIdNumber === true) {
                return true;
            } else {
                console.log("Please enter the intern's ID.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Please enter the intern's email.",
        validate: internEmail => {
            if (internEmail === true) {
                return true;
            } else {
                console.log("Please enter the intern's email.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter where the intern went to school',
        validate: internSchoolInput => {
            if (internSchoolInput === true) {
                return true;
            } else {
                console.log('Please enter a school name.');
                return false;
            }
        }
    }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internIdNumber, answers.internEmail, answers.internSchool)
        team.push(intern);
        id.push(answers.internIdNumber)
        Menu()
    });
}

function Menu() {
    inquirer
    .prompt({
            type: 'list',
            name: 'menu',
            choices: ['Add an engineer', 'Add an intern', 'Finished building my team']
    })
    switch (menu) {
        case 'Add an engineer':
            makeEngineer();
            break;
        case 'Add an intern':
            makeIntern();
            break;
        case 'Finished building my team':
            console.log('Done')
            break;
        }
} ;
}
