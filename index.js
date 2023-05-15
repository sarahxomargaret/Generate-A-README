// PACKAGES
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// ARRAYS
const questions = [
    {
        type: "input",
        name: "project_title",
        message: "What is the name of the project?",
      },
      {
        type: "input",
        name: "project_description",
        message: "Please write a description of the project:",
      },
      {
        type: "input",
        name: "project_tableOfContents",
        message: "",
      },
      {
        type: "input",
        name: "project_installation",
        message: "Are there any installation instructions:",
      },
      {
        type: "input",
        name: "project_usage",
        message: "Are there any directions for usage: ",
      },
      {
        type: "input",
        name: "project_license",
        message: "Please choose a license for the project: ",
        choices: [
            "None",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause Simplified License",
            "BSD 3-Clause New or Revised License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
      },
      {
        type: "input",
        name: "project_contributing",
        message: "Are there any contributing guidelines: ",
      },
      {
        type: "input",
        name: "project_tests",
        message: "Are there any instuctions for testing: ",
      },
      {
        type: "input",
        name: "project_questions",
        message: "",
      },
      {
        type: "input",
        name: "project_username",
        message: "What is your GitHub username: ",
      },
      {
        type: "input",
        name: "project_email",
        message: "What is your e-mail address: ",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
