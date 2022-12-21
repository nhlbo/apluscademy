import mongoose from 'mongoose'
import { ICourse } from './course'
import { IUser } from './user'

interface IReview {
  course: ICourse
  author: IUser
  feedback: string
  ratingStars: number
}

const reviewSchema = new mongoose.Schema({
  course: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Review must be done on a course']
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Review must have an author']
  },
  ratingStars: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'Please add a star rating']
  },
  feedback: {
    type: String
  }
})

const Review = mongoose.model('Course', reviewSchema)
export { IReview, Review }
