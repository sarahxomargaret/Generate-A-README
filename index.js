// PACKAGES
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// ARRAYS
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a description of the project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Are there any installation instructions:",
      },
      {
        type: "input",
        name: "usage",
        message: "Are there any directions for usage: ",
      },
      {
        type: "list",
        name: "projectLicense",
        message: "Please choose a license for the project: ",
        choices: [
            "None",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause Simplified License",
            "Mozilla Public License 2.0",
        ]
      },
      {
        type: "input",
        name: "contributing",
        message: "Are there any contributing guidelines: ",
      },
      {
        type: "input",
        name: "tests",
        message: "Are there any instuctions for testing: ",
      },
      {
        type: "input",
        name: "questions",
        message: "",
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username: ",
      },
      {
        type: "input",
        name: "email",
        message: "What is your e-mail address: ",
      },
];


// initialize app
function init() {
  inquirer.prompt(questions)
      .then((data) => {
          //create readme file  
          fs.writeFile('generateREADME.md', generateMarkdown(data), (err) =>
              err ? console.log(err) : console.log('README.md file completed')
          );
      });
}
// Function call to initialize app
init();
