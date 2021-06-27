// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(questions)
}
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log("Please provide your project's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your contact email. (Required)',
            validate: emailAddress => {
                if (emailAddress) {
                    return true;
                } else {
                    console.log("Please provide your contact email.");
                    return false;
                }
            }
        }
    ];

questions()

// TODO: Create a function to write README file
function writeToFile(fileName, data) { //starter code
    fs.writeFile('.Develop//utils/readme.md', data, err => {
        if (err) {
            return err;
        }
    });
}

// TODO: Create a function to initialize app
function init() { //starter code
    promptUser()
    .then(data => {
        console.log(data);
    })
}

// Function call to initialize app
init();