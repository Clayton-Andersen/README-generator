// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  return   `![License: MIT](https://img.shields.io/badge/License-${license}-MIT-yellow.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (!license) {
  //   return "";  Do I need to provide a list of license options?
  // } else ()
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//conditional
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.Installation}

## Usage
${data.Usage}

## Credits
${data.Credits}

## License
${data.License}

## Github
${data.github}

## Email
${data.email}


${renderLicenseBadge()}
`;
}

module.exports = generateMarkdown;
