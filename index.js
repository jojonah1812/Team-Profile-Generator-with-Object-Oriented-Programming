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
      name: 'name',
    },
    {
      type: 'input',
      message: 'Employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Email Address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Office #?',
      name: 'office',
    },
  ])
  .then((answers)=>{
      // take inputs of person//
    const Manager = new TeamManager(answers.name, answers.id, answers.email, answers.office);
      // add manager to team //
    teamAnswers.push(Manager);
      // run function to add next person //
    nextTeamMember()
  });
}    


function nextTeamMember() {
    inquirer
      .prompt ([
        {
          type: 'list',
          message: 'Are there other employees you need to add?',
          name: 'otherEmployees',
          choices: ["Engineer", "Intern", "My team is complete."]
        }
      ])
      .then((answers) => { 
      // console.log(answers));
        if (answers.otherEmployees === 'Engineer') {
            engineerFunction();
        } else if
          (answers.otherEmployees === 'Intern') {
          internFunction();
        } else {
            console.log(teamAnswers);
            const generateHTML = teamHTML(teamAnswers);
      
            fs.writeFile('index.html', generateHTML, (err) =>
             err ? console.log(err) : console.log('Success! You created the index.html!')
            );
        }
      
  })
}

//   ///Engineer

function engineerFunction () {

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Engineers Name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Email Address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'GitHub Username?',
      name: 'gitHubUsername',
    },
  ])
  .then((answers)=>{
      // take inputs of person//
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHubUsername)
      // add engineer to team //
    teamAnswers.push(engineer);
      // run function to add next person //
  nextTeamMember();
  })
}


//   ///Intern

function internFunction () {

inquirer
  .prompt([
      {
        type: 'input',
        message: 'Interns Name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Employee ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Email Address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'school?',
        name: 'school',
      },
    ])
    .then((answers)=>{
          // take inputs of person//
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
          // add intern to team //
        teamAnswers.push(intern);
          // run function to add next person //
        nextTeamMember();
    })
}    

managerFunction ();

const teamHTML = (teamAnswers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> -->
  <title>Team Redding</title>
</head>
<body> 
    <h1>Team Redding</h1>
    <div class="container">
      <div class="row">

          <div>
            <h2> ${teamAnswers[0].name}</h2>
            <h4>Team Manager</h4>
            <ul>
                <li> Employee ID#${teamAnswers[0].id}</li>
                <li> Office # 9 </li>
                <li> Gjay@redding.com </li>
            </ul>
          </div>
        
          <div>
            <h2> Phylis Jenkins </h2>
            <h4>Engineer</h4>
            <ul>
                <li> Engineer </li>
                <li> Employee ID#298 </li>
                <li> Pjenkins@redding.com </li>
                <li> Jenie212 </li>
            </ul>
          </div>
        
          <div>
            <h2> Rupret Flores </h2>
            <h4>Intern</h4>
            <ul>
                <li> Employee ID# I12 </li>
                <li> Rflores@redding.com </li>
                <li> Georgia Tech </li>
            </ul>
          </div>
        
      </div>
    </div>
<body>
</html>`

// DONE WITH CHRISTIAN  ????????????????
// //.  GENERATE HTML //
// const teamHTML = (teamAnswers) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> -->
//   <title>Team Redding</title>
// </head>
// <body> 
//     <h1>Team Redding</h1>
//     <div class="container">
//       <div class="row">

//           <div>
//             <h2> ${teamAnswers[0].name}</h2>
//             <h4>Team Manager</h4>
//             <ul>
//                 <li> Employee ID#${teamAnswers[0].id}</li>
//                 <li> Office # 9 </li>
//                 <li> Gjay@redding.com </li>
//             </ul>
//           </div>
        
//           <div>
//             <h2> Phylis Jenkins </h2>
//             <h4>Engineer</h4>
//             <ul>
//                 <li> Engineer </li>
//                 <li> Employee ID#298 </li>
//                 <li> Pjenkins@redding.com </li>
//                 <li> Jenie212 </li>
//             </ul>
//           </div>
        
//           <div>
//             <h2> Rupret Flores </h2>
//             <h4>Intern</h4>
//             <ul>
//                 <li> Employee ID# I12 </li>
//                 <li> Rflores@redding.com </li>
//                 <li> Georgia Tech </li>
//             </ul>
//           </div>
        
//       </div>
//     </div>
// <body>
// </html>`
