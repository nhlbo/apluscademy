import mongoose from 'mongoose'
import { ICourse } from './course'

interface ICategory {
  name: string
  getLastWeekRegistrationCount(): number // used in the query "Which category has had the most registrations in the last week?"
  getCourses(): Array<ICourse>
}

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    index: true
  },
  courses: {
    type: [mongoose.Types.ObjectId],
    ref: 'Course',
    index: true
  }
})

const Category = mongoose.model('Category', categorySchema)

export { ICategory, Category }
