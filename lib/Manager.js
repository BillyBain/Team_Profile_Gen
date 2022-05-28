const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');

const employ = new Employee();

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        }
}

Manager.prototype.getRole = function () {

    return inquirer 
    .prompt([
        {
            type: "input",
            name: "office",
            message: "What is the Office number?",
        }
    ]).then((office => {
        this.officeNumber = office.office;
        const managerInfo = 
        `
        <div class = "col-4 border border-primary  m-1">
            <h4 class="text-bg-primary p-2">Manager</h4>
            <p>${this.name}</p>
            <p>ID: ${this.id}</p>
            <p>Office Number: ${this.officeNumber}</p>
            <p>Email: <a href="mailto: ${this.email}">${this.email}</a></p>
        </div>`;
        
        fs.appendFile(`dist/index.html`, managerInfo, (err) =>
        err ? console.error(err): employ.newEmployee());        
    }));
};



module.exports = Manager;