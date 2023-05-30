import User from './user';
class Instructor extends User {
  position: string;
  earnings: number;
  constructor(name: string, position: string, earnings: number) {
    super(name);
    this.earnings = earnings;
    this.position = position;
  }

  toString(): string {
    return JSON.stringify(this)
  }
}

export default Instructor;