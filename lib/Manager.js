const Employee = require("./Employee.js");

class TeamManager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }   

  getOffice() {
  return this.office;
}

    getRole() {
    return "Team Manager";
  }
}
module.exports = TeamManager;