//////////////////////
// npm init -y
// npm i inquirer@8.2.4
// type these into your terimal to test your edited the questions 
//////////////////////


// TODO: Include packages needed for this application

const fs = require('fs')
const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
console.log("README generator")
console.log("Fill in the blanks and I will generate a high quality README for your project")
const questions = [

  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project to me (Please be as detailed as possible)',
    
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How would you install your project?',
    
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How would you use your project?',
    
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Select a license that you will use on this project.',
    choices: ['MIT', 'None of the above'],
    
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How do users contribute to this project?',
    
  },
  {
    type: 'input',
    name: 'test',
    message: 'How does the user test this project?',
    
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username?',
    
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your Email',
    
  },
 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, e => {
        if (e) {
            return console.log(e)
        }
        console.log("COMPLETE! LOOK AT YOUR README FILE")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

    .then(function(userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    })

}

// Function call to initialize app
init();
