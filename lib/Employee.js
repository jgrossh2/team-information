const inquirer = require('inquirer');
const fs = require('fs');


class Employee {
    constructor (name, email, id)  {
    this.name = name;
    this.email = email;
    this.id = id;
    }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
    getId() {
        return this.id
    }
    getRole() {
        console.log("Role = employee")
        return "Employee";
    }
}


module.exports = Employee