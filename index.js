// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
      {
        type: "input",
        name: "title",
        message: "What is the project title?",
      },
      {
        type: "input",
        name: "description",
        message: "Enter project description",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter instructions for installation",
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage information",
      },
      {
        type: "input",
        name: "credits",
        message: "Enter citations for credit",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter test instructions",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Choose a license:",
        choices: ['MIT', 'Mozilla', 'Apache', 'GPLv2'],
      },
      {
        type: "input",
        name: "userName",
        message: "Enter your GitHub username",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
      },
    ]; 
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
