
//---- required pulls
const inquirer = require('inquirer');
const fs = require('fs');
const geneRead = require('./utils/generateMarkdown');

//--- readMe prompts
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
    
//---- prompt queue
inquirer.prompt(questions).then((data) => writeToFile(data));

//--function to write readME
function writeToFile(data) {
  console.log(data);
  fs.writeFile("./utils/README.MD", genRead(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}