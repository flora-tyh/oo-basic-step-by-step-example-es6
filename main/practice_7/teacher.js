import Person from "./person.js";
import Student from "./student.js";
import Class from "./class.js";

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    var teacherClass = "No Class"
    if (this.klass) {
      var teacherClass = "Class " + this.klass.number;
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
}

export default Teacher;
