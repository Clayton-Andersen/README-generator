//Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

//Create an array of questions for user input

const questions = [
        {
            type: 'input',
            name: 'title',
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
            name: 'description',
            message: 'Please provide a description for your project.',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log("Please provide a description of your project.");
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
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            validate: Installation => {
                if (Installation) {
                    return true;
                } else {
                    console.log("What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            validate: Usage => {
                if (Usage) {
                    return true;
                } else {
                    console.log("Provide instructions and examples for use. Include screenshots as needed.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            validate: Credits => {
                if (Credits) {
                    return true;
                } else {
                    console.log("List your collaborators, if any, with links to their GitHub profiles.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'License',
            message: 'Please provide a License for your project.',
            validate: License => {
                if (License) {
                    return true;
                } else {
                    console.log("Please provide a license for your project.");
                    return false;
                }
            }
        },
    ];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md", generateMarkdown({...answers}))
    });
};

// Function call to initialize app
init();
