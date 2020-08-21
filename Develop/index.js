const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Please write a description of your project",
    name: "description"
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation"
  },
  {
      type: "input",
      message: "What are the usage information",
      name: "usage"
    },
    {
      type: "input",
      message: "What are the contribution guidelines",
      name: "contribution"
    },
    {
        type: "input",
        message: "What are the test instructions",
        name: "test"
      },
      {
        type: "list",
        message: "What is the license badge of your preference?",
        name: "license",
        choices: [
          "MIT", 
          "GNU", 
          "ISC", 
          "Apache"
        ]
      },
      {
          type: "input",
          message: "What is your github username?",
          name: "github"
        },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      }

];

function promptUser() {
  return inquirer.prompt(questions)
}

// function to initialize program
async function init() {

  try {
    const answers = await promptUser();

    const readME = generateMarkdown(answers);

    writeFileAsync("ReadME.md", readME)

    console.log("Successfully wrote to readME");
  } catch(err) {
    console.log(err);
  }
}
    

// function call to initialize program
init();
