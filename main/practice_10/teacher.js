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
      var teacherClass = "Class " + this.klasses[0].number + ", " + this.klasses[1].number;
    }
    return super.introduce(this.name, this.age) + " I am a Teacher. I teach " + teacherClass + ".";
  }

  introduceWith(studentJerry) {
    if (this.klass === studentJerry.klass) {
      return super.introduce(this.name, this.age) + " I am a Teacher. I teach Jerry."
    } else {
      return super.introduce(this.name, this.age) + " I am a Teacher. I don't teach Jerry."
    }
  }

  isTeaching(student) {
    if (this.klasses[0] === student.klass || this.klasses[1] === student.klass) {
      return true;
    } else {
      return false;
    }
  }
}

export default Teacher;
