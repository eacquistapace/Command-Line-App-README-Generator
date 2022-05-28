const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateReadme = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

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
      type: "checkbox",
      name: "licenses",
      message: "Which licenses did you use for your project?",
      choices: ["Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
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
      name: "tests",
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
  ]);
}

async function init() {
  try {
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    await writeFileAsync("./utils/README.md", generateContent);
    console.log("Successfully recorded answers to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
