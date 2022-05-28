function generateMarkdown(answers) {
  return `
<h1 align="center"> **${answers.title}** <h1>
  
![badge](https://img.shields.io/badge/license-${answers.licenses}-brightgreen)<br />

## Table of Contents 📃
---
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#licenses)
- [Contributing](#contributions)
- [Tests](#tests)
- [Questions](#githubUsername)

## Description ✏️
---
${answers.description}

## Installation 💾
---
${answers.installation}

## Usage 💻
---
${answers.usage}

## License 📛
---
This application is covered by the ${answers.licenses} license.

## Contributers 👩‍💻
---
${answers.contributions}

## Tests 🧪
---
${answers.tests}

## Questions 🤚
---
Have any questions regarding how this program works? Please contact me through GitHub or email me directly!
📂 GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
✉️ Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
