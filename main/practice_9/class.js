import Student from "./student.js";

class Class {
  constructor(number, leader) {
    this.number = number;
    this.leader = leader;
  }

  assignLeader(student) {
    if (this === student.klass) {
      this.leader = student;
    } else {
      console.log("It is not one of us.");
    }
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  appendMember(student) {
    student.klass = this;
  }
}

export default Class;
