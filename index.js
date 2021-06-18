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
    {
      type: 'list',
      message: 'Are there other employees you need to add?',
      name: 'otherEmployees',
      choices: ["Engineer", "Intern", "My team is complete."]
    }
  ])

  


//PROMISE  (mini project 6/7 2:30)
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Success!You created the index.html!')
        );
      });















`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Team</title>
  </head>



  <body>
    <div class="">
      <h1 class="">Welcome to you the Team Builder!</h1>
      <p class="">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </body>
</html>`






//   ///Engineer
//     .prompt([
//         {
//           type: 'input',
//           message: 'Engineers Name?',
//           name: 'engineer',
//         },
//         {
//           type: 'input',
//           message: 'Employee ID?',
//           name: 'eEmployeeID',
//         },
//         {
//           type: 'input',
//           message: 'Email Address?',
//           name: 'eEmailAddress',
//         },
//         {
//           type: 'input',
//           message: 'GitHub Username?',
//           name: 'eGitHUbUsername',
//         },
//         ])

//   ///Intern
// .prompt([
//     {
//       type: 'input',
//       message: 'EInterns Name?',
//       name: 'engineer',
//     },
//     {
//       type: 'input',
//       message: 'Employee ID?',
//       name: 'eEmployeeID',
//     },
//     {
//       type: 'input',
//       message: 'Email Address?',
//       name: 'eEmailAddress',
//     },
//     {
//       type: 'input',
//       message: 'GitHub Username?',
//       name: 'eGitHUbUsername',
//     },
//     ])