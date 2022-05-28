const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');

const employ = new Employee();

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }    
}

Intern.prototype.getSchool = function () {
    return inquirer 
    .prompt([
        {
            type: "input",
            name: "school",
            message: "What school are they from?",
        }
    ])
    .then((school => {
        this.school = school.school;           
    }));
}

Intern.prototype.getRole = function () {
    this.getSchool()
    .then(( () => {
        const internInfo =
        `
        <div class = "col-4 border border-primary  m-1">
            <h4 class = "text-bg-warning p-2">Intern</h4>
            <p>${this.name}</p>
            <p>${this.school}</p>
            <p>ID: ${this.id}</p>
            <p>Email: <a href="mailto: ${this.email}">${this.email}</a></p>
        </div>`;
        
        fs.appendFile(`dist/index.html`, internInfo, (err) =>
        err ? console.error(err): employ.newEmployee());        
}));
}



module.exports = Intern;