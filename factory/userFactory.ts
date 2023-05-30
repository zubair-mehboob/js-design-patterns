import Instructor from './instructor'
import Student from './student'
const userFactory = (type: string, name: string, position: string | '', earnings = 0, level = 'beginner') => {
  if (type === 'instructor') return new Instructor(name, position, earnings)
  if (type === 'student') return new Student(name, level)
  throw new Error("Invalid factory type")
}
export default userFactory