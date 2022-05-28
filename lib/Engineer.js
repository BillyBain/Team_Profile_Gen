const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

const employ = new Employee();

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
}

Engineer.prototype.getGithub = function () {
    return inquirer 
    .prompt([
        {
            type: "input",
            name: "github",
            message: "What github are they from?",
        }
    ])
    .then((github => {
    this.github = github.github;
    }));
}

Engineer.prototype.getRole = function () {
    this.getGithub()
    .then(( () => {
        const engineerInfo =
        `
        <div class = "col-4 border border-primary  m-1">
            <h4 class = "text-bg-success p-2">Engineer</h4>
            <p>${this.name}</p>
            <p>Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></p>
            <p>ID: ${this.id}</p>
            <p>Email: <a href="mailto: ${this.email}">${this.email}</a></p>
        </div>`;
        
        fs.appendFile(`dist/index.html`, engineerInfo, (err) =>
        err ? console.error(err): employ.newEmployee());        
}));
}

module.exports = Engineer;