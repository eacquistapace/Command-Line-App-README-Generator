function generateMarkdown(answers) {
  return `
# **${answers.title}**
  
![badge](https://img.shields.io/badge/license-${answers.licenses}-brightgreen)<br />

## Table of Contents 📃
<table>
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#licenses)
- [Contributing](#contributions)
- [Tests](#tests)
- [Questions](#githubUsername)
</table>

## Description ✏️
${answers.description}

## Installation 💾
${answers.installation}

## Usage 
${answers.usage}

## License 📛
![badge](https://img.shields.io/badge/license-${answers.licenses}-brightgreen)
<br />
This application is covered by the ${answers.licenses} license.

## Contributers 👩‍💻
${answers.contributions}

## Tests 🧪
${answers.tests}

## Questions 🤚
Have any questions regarding how this program works? Please contact me through GitHub or email me directly!<br />
📂 GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})<br />
✉️ Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
