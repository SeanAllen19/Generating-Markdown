//  // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
// //
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  ## License
  ![license](https://img.shields.io/badge/${data.license}-This%20is%20under%20the%20MIT%20License-red)

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Testing](#Testing)
  - [Contact Info](#Contact-Info)
  
  
  ## Description
  ${data.description}
  ---
  ## Installation
  ${data.installation}
  ---
  ## Usage
  ${data.usage}
  ---
  ## License
  ${data.license}
  ---  
  ## Contributing
  ${data.contribution}
  ---
  ## Test
  ${data.test}
  ---
  ## Questions
  If you have any questions please check out my GitHub, ${data.github}.
  ---
  If you liked to email me about anything send me a email at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;
  