const inquirer = require('inquirer');
const Manager = require("../lib/Manager");
const fs = require("fs");


describe("Manager", () =>{
    describe("getRole", () =>{
        
          inquirer.prompt = () => Promise.resolve({name: 'test'})
        })
      
        it('should equal test', () => {
            const manager = new Manager();
            manager.getRole(inquirer.prompt).then(name = 'test')
        })
        describe("getRole",() =>{
            const manager = new Manager();
      
            manager.getRole();
    
            expect(fs.appendFile);
        }) 
    });