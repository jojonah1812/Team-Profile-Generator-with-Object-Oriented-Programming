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
  .then((answers)=>{
      // take inputs of person//
    const Manager = new TeamManager(answers.teamManager, answers.employeeID, answers.emailAddress, answers.office);
      // add manager to team //
    teamAnswers.push(Manager);
      // run function to add next person //
    nextTeamMember()
  });
}    



const nextTeamMember = () => {
    return inquirer
      .prompt ([
        {
          type: 'list',
          message: 'Are there other employees you need to add?',
          name: 'otherEmployees',
          choices: ["Engineer", "Intern", "My team is complete."]
        }
      ])



      .then((answers))
        if (answers.otherEmployees === 'Engineer') {
          engineerFunction();
        } else if
          (answers.otherEmployees === 'Intern') {
          internFunction();
        } else {
            const htmlPageContent = generateHTML(answers);
      
            fs.writeFile('index.html', htmlPageContent, (err) =>
              err ? console.log(err) : console.log('Success! You created the index.html!')
            );
        }
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
      name: 'emailAddress',
    },
    {
      type: 'input',
      message: 'GitHub Username?',
      name: 'gitHubUsername',
    },
  ])
  .then((answers)=>{
      // take inputs of person//
    const Engineer = new Engineer (answers.engineerName, answers.employeeID, answers.emailAddress, answers.gitHubUsername)
      // add engineer to team //
    teamAnswers.push(Engineer);
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
        name: 'employeeID',
      },
      {
        type: 'input',
        message: 'Email Address?',
        name: 'emailAddress',
      },
      {
        type: 'input',
        message: 'school?',
        name: 'school',
      },
    ])
    .then((answers)=>{
      // take inputs of person//
    const Intern = new Intern(answers.name, answers.employeeID, answers.emailAddress, answers.school)
      // add intern to team //
    teamAnswers.push(Intern);
      // run function to add next person //
    nextTeamMember();
  })
}    

managerFunction ();



// //.  GENERATE HTML //
// const generateHTML = (answers) =>
// `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Jonah's Team</title>
//   </head>
//   <body>
//     <div class="container">
//       <div class="row">
//         ${addEmployeeCard(teamAnswers)}
//       </div>
//     </div>
//   </body>
//   </html>`

  // fs.writeFile('./index.html', html, function(err) {
  //   if (err) {
  //       console.log(err);
  //   }
  // })