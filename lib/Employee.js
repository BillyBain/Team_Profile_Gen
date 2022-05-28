const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    constructor(person, id, email) {
        this.name = person;
        this.id = id;
        this.email = email;
    }
}

Employee.prototype.getRole = function () {
    return inquirer 
.prompt([
{
    type: "list",
    name: "title",
    choices: ["Manager", "Engineer", "Intern"],
    message: "What type of employee would you like to add?",
},
{
    type: "input",
    name: "name",
    message: "What is the employee's name?",
},
{
    type: "input",
    name: "id",
    message: "What is the employee's ID?",
},
{
    type: "input",
    name: "email",
    message: "What is the employee's Email?",
}
])
.then((employeeInfo => {
    const name = employeeInfo.name;
    const id = employeeInfo.id;
    const email = employeeInfo.email;

    if(employeeInfo.title === "Manager") {
        const Manager = require('./Manager');
        let manager = new Manager(name, id, email);
        manager.getRole();
    } else if (employeeInfo.title === "Engineer") {
        const Engineer = require('./Engineer');
        let engineer = new Engineer(name, id, email);
        engineer.getRole();
    } else {
        const Intern = require('./Intern');
        let intern = new Intern(name, id, email);
        intern.getRole();
    }
}));
};

Employee.prototype.getEmail = function () {
    return inquirer 
.prompt([
    {
        type: "input",
        name: "email",
        message: "What is the employee's Email?",
    }
]).then((email => {
    this.email = email;
}))
};

Employee.prototype.getId = function () {
    return inquirer 
.prompt([
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
    },
]).then((id => {
    this.id = id;
}))
};

Employee.prototype.getName = function () {
    return inquirer 
.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
    },
    
]).then((name => {
    this.name = name;
}))
};

Employee.prototype.newEmployee = function () {
    return inquirer 
.prompt([
{
type: "list",
choices: ['Yes', 'No'],
name: "add",
message: "Would you like to add an Employee?",
},
  
])
.then((answer => {
if (answer.add === 'Yes') {
this.getRole();
} else {
    const end =
    `
        </section>  
    </body>
</html>
    `
    fs.appendFile(`dist/index.html`, end, (err) =>
    err ? console.error(err): "");
    return;
}
}));
}


module.exports = Employee;