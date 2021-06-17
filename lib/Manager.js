const Employee = require("/Employee.js");

class TeamManager {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber
  }   
  super(name, id, email)  
    getRole() {
    return "Team Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}