import mongoose from 'mongoose'

interface IReview {
  author: string
  feedback: string
  ratingStars: number
}

const reviewSchema = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Review must have an author'],
    ref: 'User'
  },
  ratingStars: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'Please add a star rating']
  },
  feedback: {
    type: String,
    required: [true, 'Please add your feedback']
  },
  date: {
    type: Date,
    default: Date.now,
    required: [true, 'Reviews must have a date']
  }
})

const Review = mongoose.model('Review', reviewSchema)
export { IReview, Review }
