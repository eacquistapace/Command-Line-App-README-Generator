// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateReadme = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Write out a description of your project.",
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "Include a table of contents. (Optional)",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions for your project, if any.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions for use of your project.",
    },
    {
      type: "input",
      name: "contributions",
      message:
        "Provide a contributions section if you would like other developers to contribute to your project. (Optional)",
    },
    {
      type: "input",
      name: "testSection",
      message: "Provide your tests for your project here. (Optional)",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "checkbox",
      name: "licenses",
      message: "Which licenses did you use for your project?",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
  ]);
}

async function init() {
  try {
    // Ask user questions and generate responses
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    // Write new README.md to dist directory
    await writeFileAsync("./utils/README.md", generateContent);
    console.log("Successfully recorded answers to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
