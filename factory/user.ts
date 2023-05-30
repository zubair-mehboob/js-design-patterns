class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  toString() {
    return JSON.stringify(this)
  }
}

export default User

