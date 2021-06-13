const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>




inquirer
  .prompt([
    {
      type: 'input',
      message: 'Team Managers Name?',
      name: 'teamManager',
    },
    {
      type: 'input',
      message: 'Employee ID?',
      name: 'employeeID',
    },
    {
      type: 'input',
      message: 'Email Address?',
      name: 'emailAddress',
    },
    {
      type: 'input',
      message: 'Office #?',
      name: 'office',
    },
    // {
    //   type: 'input',
    //   message: 'What is the title of your new project?',
    //   name: 'title',
    // },
    // {
    //   type: 'input',
    //   message: 'Please provide a description of your project.',
    //   name: 'description',
    // },
    // {
    //   type: 'input',
    //   message: 'Please provide instructions for someone to install the necessary programs to run your project.',
    //   name: 'installation',
    // },
    // {
    //   type: 'input',
    //   message: 'Please provide explain how the project is intended to be used.',
    //   name: 'usage',
    // },
    // {
    //   type: 'confirm',
    //   message: 'Would you like to allow other developers to contribute to your project? Contributor Covenant',
    //   name: 'contributions',
    //   default: true,
    // },

    //  {
    //   type: 'input',
    //   message: 'Have you created any tests you would like to make available to the user?',
    //   name: 'tests',
    //   default: 'NPM',
    // },
    // {
    //   name: 'license',
    //   type: 'list',
    //   message: 'Would you like to add a license?',
    //   choices: [
    //             "Apache",
    //             "Academic",
    //             "GNU",
    //             "ISC",
    //             "MIT",
    //             "Mozilla",
    //             "Open"
    //   ]
    // },
   ])