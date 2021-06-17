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