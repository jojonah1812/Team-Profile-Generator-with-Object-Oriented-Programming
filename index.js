const inquirer = require('inquirer');
const fs = require('fs');
const TeamManager=require("./lib/Manager.js");
const Engineer=require("./lib/Engineer.js");
const Intern=require("./lib/Intern.js");

//array ready to receive info we want to push to it.
const teamAnswers = []

function managerFunction () {

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
  ]).then((managerAnswers)=>{
    console.log(managerAnswers)
    const Manager = new TeamManager(managerAnswers.teamManager, managerAnswers.employeeID, managerAnswers.emailAddress, managerAnswers.office)
    teamAnswers.push(Manager);
    continue()
  }
  )
}    
managerFunction()    
    


//   ///Engineer

function engineerFunction () {

  inquirer

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
  }
engineerFunction ()


  ///Intern

function internFunction () {

  inquirer
    .prompt([
        {
          type: 'input',
          message: 'EInterns Name?',
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
          message: 'school?',
          name: 'school',
        },
     ])
  }

internFunction ()


// //PROMISE  (mini project 6/7 2:30)
//     .then((answers) => {
//         const htmlPageContent = generateHTML(answers);
    
//         fs.writeFile('index.html', htmlPageContent, (err) =>
//           err ? console.log(err) : console.log('Success!You created the index.html!')
//         );
//       });





////////this next to ask and call funcs
//       {
//         type: 'list',
//         message: 'Are there other employees you need to add?',
//         name: 'otherEmployees',
//         choices: ["Engineer", "Intern", "My team is complete."]
//       }





// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Team Generator</title>
// </head>

// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;






