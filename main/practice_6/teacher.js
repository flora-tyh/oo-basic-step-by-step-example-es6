import Person from "./person.js";

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    var teacherClass = "No Class"
    if (this.klass) {
      var teacherClass = "Class " + this.klass;
    }
    return `${super.introduce()} I am a Teacher. I teach ${teacherClass}.`;
  }
}

export default Teacher;

