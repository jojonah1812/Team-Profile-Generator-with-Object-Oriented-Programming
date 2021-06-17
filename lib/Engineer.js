const Employee = require("/Employee.js");

class Engineer {
  constructor(name, id, email, gitHubUsername, gitHub) {
    this.name = gitHubUsername;
    this.id = gitHub;
  }   
  super(name, id, email)
  getRole() {
    return "Engineer";
  }
  getGitHubUsername() {
    return this.gitHubUsername;
  }
  getGitHub() {
    return this.gitHub;
  }  
}