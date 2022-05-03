// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = data.license;
  let licenseClassify = "";
  if (licenseBadge === "MIT") {
    licenseClassify =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //renderLicenseBadge(data);
  return `# ${data.title}

 ## License
 ${data.license}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contruibution}

## Tests 
${data.test}

## Questions 
If you have further questions feel free to reach out using email or GitHub

<a href="https://github.com/${data.github}">GitHub</a>

${data.email}

`;
}

module.exports = generateMarkdown;
