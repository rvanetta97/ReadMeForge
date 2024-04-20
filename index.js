// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const readMe = require("./generatedReadme");
const path = require("path")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "motivation",
        message: "What motivated you to build this project?"
    },
    {
        type: "input",
        name: "problem",
        message: "What problem does this project address?"
    },
    {
        type: "input",
        name: "learnings",
        message: "What have you learned by completing your project?"
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can asscess the application:"
    },
    {
        type: "input",
        name: "required",
        message: "Are there any project dependancies that the user may need to access the program?"
    }
    {
        type: "input",
        name: "features",
        message: "List some cool features in your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "What languages need to be installed/utitlized for this project?"
    },
    {
        type: "input",
        name: "improvements",
        message: "What improvements could be made on this project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(). fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions). then((responses) => {
        console.log("Super... Epic... ReadMe generating...");
        writeToFile("./ReadMe Files/README.md", generateReadme({...responses}));
    });
}

// Function call to initialize app
init();
