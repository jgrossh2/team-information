const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile, copyFile } = require('./utils/generate-html');
const Employee = require('./lib/Employee.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer.js');
const { clear } = require('console');
const { default: generateEmptyCoverage } = require('@jest/reporters/build/generateEmptyCoverage');
const generatePage = require('./src/html-template.js');

const team= [];

function makeManager () {
    return inquirer
    .prompt([
        {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name? (Required)",
        validate: (managerNameInput) => {
            if (managerNameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the manager's email.(Required)",
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log("Please enter the manager's email.")
                return false;
            }
        }
    },   
    {
        type: 'input',
        name: 'managerId',
        message: "Please enter the manager ID.(Required)",
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
        name: 'managerOffice',
        message: 'Please enter the office number of the employee.(Required)',
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
                return true;
            } else {
                console.log('Please enter a valid office number.')
                return false;
            }
        }
    },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerEmail, answers.managerId, answers.managerOffice)
        team.push(manager);
        console.log(team)
        menu()
    })

function makeEngineer() {
    console.log(`
    ===================
    Add a new Engineer
    ===================`);
    return inquirer
    .prompt([
        {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?(Required)",
        validate: (engineerNameInput) => {
            if (engineerNameInput) {
                this.engineerName;
                return true;
                
            } else {
                console.log("Please enter the engineer's name.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter the engineer's email. (Required)",
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log("Please enter the engineer's email.")
                return false;
            }
        }
    },    
    {
        type: 'input',
        name: 'engineerIdNumber',
        message: "Please enter the engineer ID. (Required)",
        validate: engineerIdNumberInput => {
            if (engineerIdNumberInput) {
                return true;
            } else {
                console.log('Please enter the engineer ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "Please enter the engineer's GitHub username. (Required)",
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
        const engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerIdNumber,  answers.engineerGithub)
        team.push(engineer);
        menu()
    })
}
function makeIntern() {
    console.log(`
    ===================
    Add a new Intern
    ===================`);
    return inquirer
    .prompt([
        {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name? (Required)",
        validate: (internNameInput) => {
            if (internNameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Please enter the intern's email. (Required)",
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log("Please enter the intern's email.")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internIdNumber',
        message: "Please enter the intern's ID. (Required)",
        validate: internIdNumberInput => {
            if (internIdNumberInput) {
                return true;
            } else {
                console.log("Please enter the intern's ID.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter where the intern went to school. (Required)',
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
        const intern = new Intern(answers.internName,  answers.internEmail, answers.internIdNumber, answers.internSchool)
        team.push(intern);
        menu()
    });
}

function menu() {
    return inquirer
    .prompt({
            type: 'list',
            name: 'menu',
            choices: ['Add an engineer', 'Add an intern', 'Finished building my team'],
    }).then(answers => {
    switch(answers.menu) {
                case 'Add an engineer':
                    makeEngineer();
                    break;
                case 'Add an intern':
                    makeIntern();
                    break;
                case 'Finished building my team':
                    let fileContent = generatePage(team);
                    writeFile(fileContent);
                    console.log("Your HTML has been created.")
                }
        })
    }
} ;

makeManager()
