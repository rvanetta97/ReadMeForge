// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const readMe = require("./utils/generatedReadme");
const path = require("path")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "list",
        name: "licenses",
        message: "What is the license on your Github repository?",
        choices: ["MIT", "Zlib", "MS-PL", "NCSA", "Unlicense", "ISC", "LGPL", "none"],
    },
    {
        type: "input",
        name: "description",
        message: "Please write a brief description about the functionality of your project:"
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
        name: "installation",
        message: "Are there any project dependancies/installations that the user may need to access the program?"
    },
    {
        type: "input",
        name: "features",
        message: "List some cool features in your project:"
    },
    {
        type: "input",
        name: "technology",
        message: "What languages are used in this project?"
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
    {
        type: "input",
        name: "contribute",
        message: "What rules would you like user to follow when contributing to this project?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, responses) {
    return fs.writeFileSync(path.join(process.cwd() + '/' + fileName), responses);
};

function init() {
    inquirer.prompt(questions). then((responses) => {
        console.log("Best Readme ever coming soon....");
        writeToFile(`./readme/${responses.title}.md`, readMe({...responses}));
        console.log("")
    });
};


// Function call to initialize app
init();
