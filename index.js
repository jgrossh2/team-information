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
            if (managerNameInput) {
                return true
            } else {
                console.log("Please enter the manager's name.")
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Please enter the manager ID.",
        validate: managerIdInput => {
            if (managerIdInput) {
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
            if (managerEmail) {
                return true;
            } else {
                console.log("Please enter the manager's email.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Please enter the office number of the employee.',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter a valid office number.')
                return false;
            }
        }
    },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerIdInput, answers.managerEmail, answers.managerOffice)
        team.push(manager);
        id.push(answers.managerIdNumber)
        menu()
    })

function makeEngineer() {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
        validate: (engineerNameInput) => {
            if (engineerNameInput) {
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
        validate: engineerIdInput => {
            if (engineerIdInput) {
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
            if (engineerEmail) {
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
        validate: engineerGithubInput => {
            if (engineerGithubInput) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub username.");
                return false;
                }
            }
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerIdInput, answers.engineerEmail, answers.engineerGithub)
        team.push(engineer);
        id.push(answers.engineerIdNumber)
        menu()
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
            if (internNameInput) {
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
        validate: internIdInput => {
            if (internIdInput) {
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
            if (internEmail) {
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
            if (internSchoolInput) {
                return true;
            } else {
                console.log('Please enter a school name.');
                return false;
            }
        }
    }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internIdInput, answers.internEmail, answers.internSchool)
        team.push(intern);
        id.push(answers.internIdNumber)
        menu()
    });
}

function menu() {
    inquirer
    .prompt({
            type: 'list',
            name: 'menu',
            choices: ['Add an engineer', 'Add an intern', 'Finished building my team']
    })
    switch (menu.choices) {
        case 'Add an engineer':
            makeEngineer();
            break;
        case 'Add an intern':
            makeIntern();
            break;
        case 'Finished building my team':
            console.log(team + "and"  + id)
            break;
        }
} ;
}
makeManager()