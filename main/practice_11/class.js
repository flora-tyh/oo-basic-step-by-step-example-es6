import Student from "./student.js";
import Teacher from "./teacher.js";

class Class {
  constructor(number) {
    this.number = number;
  }

  assignLeader(student) {
    if (this === student.klass) {
      this.leader = student;
    } else {
      console.log("It is not one of us.");
    }

    if (this.teacher && this.leader 
      && (this.teacher.klasses[0] === this.leader.klass 
      || this.teacher.klasses[1] === this.leader.klass)) {
      console.log("I am " + this.teacher.name + ". I know " + student.name + " become Leader of Class " + student.klass.number + ".")
    }
  }

  getDisplayName() {
    return "Class " + this.number;
  }

  appendMember(student) {
    student.klass = this;
    if (this.teacher && (this.teacher.klasses[0] === student.klass 
      || this.teacher.klasses[1] === student.klass)) {
      console.log("I am " + this.teacher.name + ". I know " + student.name + " has joined Class " + student.klass.number + ".")
    }
  }

  registerAssignLeaderListener(teacher) {
    this.teacher = teacher;
  }

  registerJoinListener(teacher) {
    this.teacher = teacher;
  }
}

export default Class;
