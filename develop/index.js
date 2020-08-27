const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const generateLicense = require('./utils/generateLicense');

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Title: ",
  },
  {
    type: "confirm",
    name: "tableOfContent",
    message: "Would you like to include a table of content?"
  },
  {
    type: "input",
    name: "description",
    message: "Description: "
  },
  { 
    type: "input",
    name: "installation",
    message: "Installation:" 
  },
  {
    type: "input",
    name: "usage",
    message: "Usage: "
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing: "
  },
  {
    type: "input",
    name: "Tests",
    message: "Tests: "
  },
  {
    type: "input",
    name: "Questions",
    message: "Questions: "
  },
  {
    type: "rawlist",
    name: "license",
    message: "Which licenses do you want to use",
    choices: [
      'MIT',
      'GNU GPLv3',
      'Apache License 2.0',
      'ISC'
       ]
  }, 

];

// function to write README file
function writeToFile(fileName, data) {

  fs.appendFile(
    fileName, 
    generateMarkdown(data) ,
    function(err) {
      if(err) {
        return console.log(err);
      }
    
      console.log("Your README file is created successfully!");
    })

    fs.appendFile(
      fileName, 
      generateLicense(data) ,
      function(err) {
        if(err) {
          return console.log(err);
        }
      
        console.log("Your README file is created successfully!");
      })

  

  
}

// function to initialize program
function init() {

  inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers);
    inquirer.prompt({
      type: 'confirm',
      name: "verification",
      message: "Is this okay?"
    }).then(response => {
      if (response.verification !== true) {
        init();
      }
      writeToFile("README.md", answers)
    })
  })

}

// function call to initialize program
init();
