// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // TODO: Create a function that returns the license link
  const licenseBadge = data.license.toString();

  let licenseClassify = "";
  if (licenseBadge === "MIT") {
    licenseClassify =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (licenseBadge === "Mozilla Public License 2.0") {
    licenseClassify =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (licenseBadge === "Apache 2.0 License") {
    licenseClassify =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (licenseBadge === "GNU GPL v3") {
    licenseClassify =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (licenseBadge === "GNU LGPL v3") {
    licenseClassify =
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else {
    licenseClassify = licenseClassify;
  }

  //renderLicenseBadge(data);
  return `# ${data.title}

Table of Contents 

[license](#license)

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Tests](#tests)

[Questions](#questions)



## License
${licenseClassify}

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
