// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project_title",
        message: "What is the name of your project? ",
      },
      {
        type: "input",
        name: "project_description",
        message: "",
      },
      {
        type: "input",
        name: "project_tableOfContents",
        message: "",
      },
      {
        type: "input",
        name: "project_installation",
        message: "",
      },
      {
        type: "input",
        name: "project_usage",
        message: "",
      },
      {
        type: "input",
        name: "project_license",
        message: "",
      },
      {
        type: "input",
        name: "project_contributing",
        message: "",
      },
      {
        type: "input",
        name: "project_tests",
        message: "",
      },
      {
        type: "input",
        name: "project_questions",
        message: "",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
