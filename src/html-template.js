const Employee = require("../lib/Employee");
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer.js');
const generateHtml = require("../utils/generate-html");

const generateHTML = employeeData => {
    return `
    <section class="my-3" id="portfolio">
        <div class="container layout">
        <div class="row layout">
            ${employeeData
            .filter ( employee => employee.getRole() === "Manager")
            .map(({ name, email, id, officeNumber }) => {
                return `
                <div class="card col-sm outline" style="max-width: 18rem;">
                <div class="card-header">${name}</div>
                <div class="card-body text-dark">
                <h5 class="card-title">Role: Manager</h5>
                <a href="mailto:${email}">Email</a>
                <p class="card-text">Id: ${id} </p>
                <p class="card-text">Office Number: ${officeNumber}</p>
            </div>
            </div>
                `;
            })
            }
            ${employeeData
            .filter (employee => employee.getRole() === "Engineer")
            .map(({ name, email, id, github }) => {
                return `
                <div class="card col-sm outline" style="max-width: 18rem;">
                <div class="card-header">${name}</div>
                <div class="card-body text-dark">
                <h5 class="card-title">Role: Engineer</h5>
                <a href="mailto:${email}">Email</a>
                <p class="card-text">Id: ${id} </p>
                <a href="https://github.com/${github}" target="_blank">Github</a>
                <a href="${github}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
            </div>
            </div>
                `;
        })
        }
        ${employeeData
            .filter (employee => employee.getRole() === "Intern")
            .map(({ name, email, id, school }) => {
                return `
                <div class="card col-sm outline" style="max-width: 18rem;">
                <div class="card-header">${name}</div>
                <div class="card-body text-dark">
                <h5 class="card-title">Role: Intern</h5>
                <a href="mailto:${email}">Email</a>
                <p class="card-text">Id: ${id} </p>
                <p class="card-text">School: ${school}</p>
            </div>
            </div>
                `;
            })
        }
        </div>
        </div>
        </section>
    `;
};


module.exports = templateData => {
console.log("generating", generateHTML(templateData))

return `
<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Team Information</title>
    </head>

    <body>
        <header>
            <div class="color bg-dark text-light container py-3">
            <h1 class="bg-dark text-light">Team Information</h1>
            </div>
        </header>

        <main class="container my-5">
        ${generateHTML(templateData)}
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Joanna Grosshans</h3>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    </html>
    `;
}
