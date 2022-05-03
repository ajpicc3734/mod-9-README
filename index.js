// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//const Choices = require("inquirer/lib/objects/choices");
//const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer
    .prompt([
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
      //installation section
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for the peoject",
      },
      //usage section
      {
        type: "input",
        name: "usage",
        message: "Enter usage information for the peoject",
      },
      //contribution section
      {
        type: "input",
        name: "contruibution",
        message: "Enter contribution guidelines for the peoject",
      },
      //tests section
      {
        type: "input",
        name: "test",
        message: "Enter test instructions for the peoject",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Choose licens type",
        choices: [
          "MIT",
          "Public Domain License",
          "Permissive License",
          "Restrictive Licenses",
          "LGPL",
          "Proprietary Software License",
        ],
      },
      //questions section
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub username",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
      },
    ])
    .then((data) => {
      writeToFile("./dist/README.md", data);
      console.log(data);
    });
};

questions();

//TODO: Create a function to write README file

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) throw new Error(err);
    console.log("Page created! Check out README in this directory to see it!");
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
