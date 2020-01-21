import Student from "./student.js";

class Class {
  constructor(number, leader) {
    this.number = number;
    this.leader = leader;
  }

  assignLeader(student) {
    if (this.number === student.klass.number) {
      this.leader = student;
    }
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }
}

export default Class;
