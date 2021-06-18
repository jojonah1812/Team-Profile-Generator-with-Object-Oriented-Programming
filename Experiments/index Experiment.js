const inquirer = require('inquirer');
const fs = require('fs');


const Engineer = require("./lib/Engineer")
const start = () =>{
    inquirer
    .prompt([
      {
        type: 'choices',
        name: 'employee',
        message: 'What type of employee would you like to add?',
        choices:["Engineer","Intern"]
      }
    ])
    .then((data) => {
      if(data.employee==="Engineer"){
          createEngineer()
      }
    });
}

const createEngineer = () =>{
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      message: 'What is you ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is GitHub?',
      name: 'github'
    },
  ])
  .then((data) => {
    const engineer = new Engineer(data.email,data.id,data.github)
  });
}

const createIntern = () =>{
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      message: 'What is you ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is GitHub?',
      name: 'github',
    },
  ])
  .then((data) => {
    const engineer = new Intern(data.email,data.id,data.github)
  });
}

const createManager = () =>{
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      message: 'What is you ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is GitHub?',
      name: 'github',
    },
  ])
  .then((data) => {
    const manager = new Manager(data.email,data.id,data.github)
    start()
  });
}
createManager();

//PROMISE  (mini project 6/7 2:30)
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Success!You created the index.html!')
        );
      });















      // `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
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