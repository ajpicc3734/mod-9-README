// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

//console.log(inquirer);

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    //title
    {
      type: "input",
      name: "title",
      message: "Enter the title of your project.",
    },
    //description section
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions for the peoject",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information for the peoject",
    },
    {
      type: "input",
      name: "contruibution",
      message: "Enter contribution guidelines for the peoject",
    },
    {
      type: "input",
      name: "test",
      message: "Enter test instructions for the peoject",
    },
  ]);
};

questions().then((answers) => console.log(answers));

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//     },
//   ])
//   .then((answers) => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
