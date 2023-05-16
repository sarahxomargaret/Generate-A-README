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
      badge: "",
      link: "",
    },
    {
      license: "GNU General Public License v2.0",
      label: "License",
      badge: "",
      link: "",
    },
    {
      license: "MIT License",
      label: "License",
      badge: "",
      link: "",
    },
    {
      license: "BSD 2-Clause Simplified License",
      label: "License",
      badge: "",
      link: "",
    },
    {
      license: "Mozilla Public License 2.0",
      label: "License",
      badge: "",
      link: "",
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
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
