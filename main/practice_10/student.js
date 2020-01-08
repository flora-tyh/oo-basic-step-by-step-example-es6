import Person from "./person.js";
import Class from "./class.js";

class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass.leader === this) {
      return super.introduce(this.name, this.age) +" I am a Student. I am Leader of Class " + this.klass.number + "."
    } else {
      return super.introduce(this.name, this.age) +" I am a Student. I am at Class " + this.klass.number + ".";
    }
  }
}

export default Student;
