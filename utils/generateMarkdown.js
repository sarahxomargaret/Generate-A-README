// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseList = [
    {
      license: "None",
      label: "",
      badge: "",
      link: "",
    },
    {
      license: "Apache License 2.0",
      label: "License",
      badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      link: "https://choosealicense.com/licenses/apache-2.0/",
    },
    {
      license: "GNU General Public License v3.0",
      label: "License",
      badge: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
      link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    },
    {
      license: "MIT License",
      label: "License",
      badge: "https://img.shields.io/badge/license-MIT-red.svg",
      link: "https://choosealicense.com/licenses/mit/",
    },
    {
      license: "BSD 2-Clause Simplified License",
      label: "License",
      badge: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
      link: "https://opensource.org/license/bsd-2-clause/",
    },
    {
      license: "Mozilla Public License 2.0",
      label: "License",
      badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      link: "https://opensource.org/license/mpl-2-0/",
    },
  ]
}




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contributing, license, tests, questions, username, email}) {
  return `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributing}

  ## License
  ${renderLicenseLink(license)}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  ${questions}
  `;
}

module.exports = generateMarkdown;
