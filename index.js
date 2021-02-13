const generateMarkdown = require('./generateMarkdown');
const open = require('open');
const fs = require('fs');
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please write some installations instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If you want, write some guidelines for contributions.',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'If you would like, enter your Github username.',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'If you would like, enter your e-mail.',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What license would you like your project to have?',
        name: 'license',
        choices: [
            {
                name: 'MIT License',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            },
            {
                name: 'Apache License 2.0',
                value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            },
            {
                name: 'Boost Software License 1.0',
                value: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
            },
            {
                name: 'Eclipse Public License 1.0',
                value: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
            },
            {
                name: 'IBM Public License Version 1.0',
                value: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
            },
            {
                name: 'Mozilla Public License 2.0',
                value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
            }
        ]
    }
])
    .then((response) => {
        const Markdown = generateMarkdown(response);

        fs.writeFileSync('newReadMe.md', Markdown, (err) => {
            console.log("Success!")
        })
        open('newReadMe.md');
    });
