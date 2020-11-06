const Employee = require("../lib/Employee");
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer.js');

const generateHTML = team => {
    console.log(team)
    return `
    <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div class="flex-row justify-space-between">
            ${team
            .filter (({ Manager }) => Manager)
            .map(({ name, email, id, officeNumber }) => {
                return `
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 class="portfolio-item-title text-light">${name}</h3>
                <h5 class="portfolio-languages">
                        
                <a href="${email}">Jon Doe</a>
                <p> Id:${id}</p>
                <p> Office Number:${officeNumber}</p>
                    </h5>
                    // <p>${description}</p>
                    // <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
                </div>
                `;
            })
            }
            ${team
            .filter (({ Engineer }) => Engineer)
            .map(({ name, email, id, github }) => {
                return `
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 class="portfolio-item-title text-light">${name}</h3>
                <h5 class="portfolio-languages">
                        
                        <a href="${email}">Jon Doe</a>
                        <p> Id:${id}</p>
                    </h5>
                    // <p>${description}</p>
                    <a href="${github}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
                </div>
                `;
        })
        }
        ${team
            .filter (({ Intern }) => Intern)
            .map(({ name, email, id, school }) => {
                return `
                <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 class="portfolio-item-title text-light">${name}</h3>
                <h5 class="portfolio-languages">
                        
                <a href="${email}">Jon Doe</a>
                <p> Id:${id}</p>
                <p> School: ${school}</p>
                    </h5>
                    // <p>${description}</p>
                    // <a href="${github}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on Github</a>
                </div>
                `;
            })
        }
        </div>
        </section>
    `;
};


module.exports = templateData => {
console.log("generating")
const employees = templateData
// function generateHTML(team) {
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
        <title>Portfolio Demo</title>
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">"Team Information</h1>
            </div>
        </header>

        <main class="container my-5">
        ${generateHTML(employees)}
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Joanna Grosshans</h3>
        </footer>
    </body>
    </html>
    `;
}
