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
                <div class="card col outline" style="max-width: 18rem;">
                <div class="card-header background"><span class="name">${name}</span>
                <p class="card-header background"><span class="name"><i class="fas fa-mug-hot"></i>Role: Manager</span></p>
                </div>
                <div class="card-body text-dark">
                <div class="card border" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <p class="list-group-item">
                        <p class="list-group-item">ID: ${id}</p>
                        <p class="card-text"> Email: <a href="mailto:${email}">${email}</a></p>
                        </p>
                        <p class="list-group-item">Office Number: ${officeNumber}</p>
                    </ul>
                  </div>
            </div>
            </div>
                `;
            })
            }
            ${employeeData
            .filter (employee => employee.getRole() === "Engineer")
            .map(({ name, email, id, github }) => {
                return `
                <div class="card col outline" style="max-width: 18rem;">
                <div class="card-header background"><span class="name">${name}</span>
                <p class="card-header background"><span class="name"><i class="fas fa-glasses"></i>Role: Engineer</span></p>
                </div>
                <div class="card-body text-dark">
                <div class="card border" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <p class="list-group-item">
                        <p class="list-group-item">ID: ${id}</p>
                        <p class="card-text"> Email: <a href="mailto:${email}">${email}</a></p>
                        </p>
                        <p class="list-group-item">Github: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
                    </ul>
                  </div>
            </div>
            </div>
                `;
        })
        }
        ${employeeData
            .filter (employee => employee.getRole() === "Intern")
            .map(({ name, email, id, school }) => {
                return `
                <div class="card col outline" style="max-width: 18rem;">
                <div class="card-header background"><span class="name">${name}</span>
                <p class="card-header background"><span class="name"><i class="fas fa-user-graduate"></i>Role: Intern</span></p>
                </div>
                <div class="card-body text-dark">
                <div class="card border" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <p class="list-group-item">
                        <p class="list-group-item">ID: ${id}</p>
                        <p class="card-text"> Email: <a href="mailto:${email}">${email}</a></p>
                        </p>
                        <p class="list-group-item">School: ${school}</p>
                    </ul>
                  </div>
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
        <title>My Team</title>
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
            <h3 class="text-dark color none">&copy; ${new Date().getFullYear()} by Joanna Grosshans</h3>
        </footer>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
}
