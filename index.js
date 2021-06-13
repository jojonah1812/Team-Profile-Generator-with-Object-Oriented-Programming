const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>




inquirer
///Team Manager
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
    ])
///Engineer
    .prompt([
        {
          type: 'input',
          message: 'Engineers Name?',
          name: 'engineer',
        },
        {
          type: 'input',
          message: 'Employee ID?',
          name: 'eEmployeeID',
        },
        {
          type: 'input',
          message: 'Email Address?',
          name: 'eEmailAddress',
        },
        {
          type: 'input',
          message: 'GitHub Username?',
          name: 'eGitHUbUsername',
        },
        ])












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
   