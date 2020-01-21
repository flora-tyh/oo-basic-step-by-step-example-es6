import Person from "./person.js";
import Student from "./student.js";
import Class from "./class.js";

class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }

  introduce() {
    var teacherClass = "No Class"
    if (this.klasses) {
      let teacherFirstClass = this.klasses[0];
      let teacherSecondClass = this.klasses[1];
      var teacherClass = `Class ${teacherFirstClass.number}, ${teacherSecondClass.number}`;
    }
    return `${super.introduce()} I am a Teacher. I teach ${teacherClass}.`;
  }

  introduceWith(studentJerry) {
    if (this.klass === studentJerry.klass) {
      return `${super.introduce()} I am a Teacher. I teach Jerry.`;
    } else {
      return `${super.introduce()} I am a Teacher. I don't teach Jerry.`;
    }
  }

  isTeaching(student) {
    let teacherFirstClass = this.klasses[0];
    let teacherSecondClass = this.klasses[1];
    if (teacherFirstClass === student.klass || teacherSecondClass === student.klass) {
      return true;
    } else {
      return false;
    }
  }
}

export default Teacher;

