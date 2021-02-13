// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `${data.license}

# ${data.title}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)

## Description

${data.description}

## Installation Instructions

${data.installation}

## Usage

${data.usage}

## Contributing

If you wish to contribute to this repo, please follow these instructions:

${data.contributions}

## Questions?

If you have questions regarding this project or wish to contact me, here is my contact information.

GitHub Username: https://github.com/${data.gitHub}

E-mail adress: ${data.email}
`
}

module.exports = generateMarkdown;
