import User from './user';
class Student extends User {
  level: string;
  constructor(name: string, level: string) {
    super(name);
    this.level = level;
  }

  toString(): string {
    return JSON.stringify(this)
  }
}

export default Student;