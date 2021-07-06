const inquirer = require('inquirer');
const fs = require('fs');
const Manager=require("./lib/Manager.js");
const Engineer=require("./lib/Engineer.js");
const Intern=require("./lib/Intern.js");


//array ready to receive info we want to push to it.
const allEmployees = []

///////////   MANAGER   //////////////////////
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
      message: 'Manager Employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Manager Email Address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Manager Office #?',
      name: 'office',
    },
  ])


  .then((answers)=>{
      // take inputs of person//
    const managerDetails = new Manager(answers.name, answers.id, answers.email, answers.office);
      // add managerDetails to team //
    allEmployees.push(managerDetails);
      // run function to add next person //
    nextTeamMember()
  });
}    

///////////   NEXT   //////////////////////
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

        // Promise  //           
      .then((answers) => { 
        console.log(answers);
        if (answers.otherEmployees === 'Engineer') {
            engineerFunction();
        } else if
          (answers.otherEmployees === 'Intern') {
          internFunction();
        } else {
            const htmlPageContent = startHTML(answers);
            console.log(allEmployees);
            
            fs.writeFile('index.html', htmlPageContent, (err) =>
             err ? console.log(err) : console.log('Success! You created the index.html!'));
        }
      })
 }

///////////   ENGINEER   //////////////////////

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
      allEmployees.push(engineer);
        // run function to add next person //
    nextTeamMember();
    })
}


///////////   Intern   //////////////////////
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
          allEmployees.push(intern);
            // run function to add next person //
          nextTeamMember();
      })
}    


function startHTML () {
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
      <title>Team Redding</title>
    </head>

    <body> 
      <header class="main-header">
        <h1>Team Redding</h1>
        <h2>Always "Reddy"!</h2>
      </header>
      <main>
        <section class="card">
          <div class="container">
            <div class="row">
            ${addEmployeeCard(allEmployees)}
            </div>
          </div>
      </main>
    <body>
  </html>`;
    
  fs.writeFile('./index.html', html, function(err) {
    if (err){
        console.log(err);
    }
  });
}


function addEmployeeCard(allEmployeesArray){
    let employeeCard = ``;
    allEmployeesArray.forEach(employee => {
      employeeCard += `
        <section class="card">
          <h2> ${employee.getRole()} </h2>
          <h2> ${employee.name} </h2>
          <ul>
              <li> Employee ID #${employee.id} </li>
              <li> ${roleInfo(employee)} </li>
              <li> <a href = "mailto:${employee.email}">${employee.email}<br><img src = "./assets/emailIcon.jpg" /></a> </li>
          </ul>
        </div>
      `
    })
    console.log(employeeCard);
    return employeeCard
 }

function roleInfo(employee){
      if (employee.getRole() === "manager"){
        return employee.getOffice();
      } else if (employee.getRole() === "engineer"){
        return employee.getGithub();
      } else {
        return employee.getSchool;
        }
}

managerFunction ();
