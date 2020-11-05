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
            if (managerIdNumber) {
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
        type: 'number',
        name: 'managerOffice',
        message: 'Please enter the office number of the employee.',
        validate: officeNumber => {
            if (officeNumber) {
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

}

function Menu() {
    inquirer
    .prompt({
            type: 'list',
            name: 'menu',
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
            //if choose engineer then questions
    })
    .then(({ menu }) => {
        if (menu === 'Add an engineer') {
            new Engineer().getName();
        }  else if (menu === 'Add an intern') {
            new Intern().getName();
        } else if (menu === 'Finish building my team') {
            return;
        }
    })  
            //if choose intern then questions
            //if choose finish, then exit application and generate HTML
} ;
}
