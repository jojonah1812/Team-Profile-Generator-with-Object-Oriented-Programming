const Employee = require("./Employee.js");

class TeamManager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }   

  getOfficeNumber() {
  return this.officeNumber;
}

    getRole() {
    return "Team Manager";
  }
}
module.exports = TeamManager;