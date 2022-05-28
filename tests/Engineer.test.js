const Engineer = require("../lib/Engineer");
const inquirer = require('inquirer');
const fs = require("fs");


describe("Engineer", () =>{
    describe("getGithub", () =>{
        
          inquirer.prompt = () => Promise.resolve({name: 'test'})
        })
      
        it('should equal test', () => {
            const engineer = new Engineer();
            engineer.getGithub(inquirer.prompt).then(name = 'test')
        })
        describe("getRole",() =>{
            const engineer = new Engineer();
      
            engineer.getRole();
    
            expect(fs.appendFile);
        }) 
    });