const fs = require("fs");
const Employee = require("../lib/Employee");
const inquirer = require('inquirer');


describe("Employee", () =>{
    describe("getName", () =>{
        
          inquirer.prompt = () => Promise.resolve({name: 'test'})
        })
      
        it('should equal test', () => {
            const employ = new Employee();
            employ.getName(inquirer.prompt).then(name = 'test')
        })
         
        describe("getId", () =>{
        
            inquirer.prompt = () => Promise.resolve({name: 'test'})
          })
        
          it('should equal test', () => {
              const employ = new Employee();
              employ.getId(inquirer.prompt).then(name = 'test')
          })

          describe("getEmail", () =>{
        
            inquirer.prompt = () => Promise.resolve({name: 'test'})
          })
        
          it('should equal test', () => {
              const employ = new Employee();
              employ.getEmail(inquirer.prompt).then(name = 'test')
          })
          describe("newEmployee", () =>{
        
            inquirer.prompt = () => Promise.resolve({choice: 'Yes'})
            inquirer.prompt = () => Promise.resolve({choice: 'No'})

          })
        
          it('should equal test', () => {
              const employ = new Employee();
              employ.newEmployee(inquirer.prompt).then(choice = 'Yes')
              employ.newEmployee(inquirer.prompt).then(choice = 'No')
          })
          describe("getRole", () =>{
        
            inquirer.prompt = () => Promise.resolve({choice: 'Manager'}, {name: 'test'}, {id: 'test1'}, {email: 'test2'})
          })
        
          it('should equal test', () => {
              const employ = new Employee();
              employ.getRole(inquirer.prompt).then(choice = 'Manager')
              employ.getRole(inquirer.prompt).then(name = 'test')
              employ.getRole(inquirer.prompt).then(id = 'test1')
              employ.getRole(inquirer.prompt).then(email = 'test2')
          })
    });
    
    


