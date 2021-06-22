const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, gitHubUsername, gitHub) {
    super(name, id, email)
    this.gitHubUsername = gitHubUsername;
    this.gitHub = gitHub;
  }   
  
  getRole() {
    return "Engineer";
  }

  getGitHub() {
    return this.gitHub;
  }  
}
module.exports = Engineer;