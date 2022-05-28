const Intern = require("../lib/Intern");
const inquirer = require('inquirer');
const fs = require("fs");


describe("Engineer", () =>{
    describe("getSchool", () =>{
        
          inquirer.prompt = () => Promise.resolve({name: 'test'})
        })
      
        it('should equal test', () => {
            const intern = new Intern();
            intern.getSchool(inquirer.prompt).then(name = 'test')
        })
    describe("getRole",() =>{
        const intern = new Intern();
  
        intern.getRole();

        expect(fs.appendFile);
    })    
         
    });