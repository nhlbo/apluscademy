import mongoose from 'mongoose'
import { ICategory } from './category'
import { IUser } from './user'
import { IReview } from './review'

interface ICourse {
    category: ICategory
    lecturer: IUser
    getReviews(): Array<IReview>
}


const courseSchema = new mongoose.Schema({
    category: {
        type: mongoose.Types.ObjectId,
        required: [true, 'Please select a category'],
    },
    lecturer: {
        type: mongoose.Types.ObjectId,
        required: [true, 'Course must have a lecturer']
    },
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a title'],
        index: true
    },
    shortDesc: {
        type: String,
        trim: true,
        required: [true, 'Please add a short description'],
        maxLength: [100, 'Short description may only have 100 characters or fewer']
    },
    longDesc: {
        type: String,
        trim: true,
        required: [true, 'Please add a long description']
    },
    markedAsComplete: {
        type: Boolean,
        default: false
    },
    dateLastUpdated: {
        type: Date,
        default: Date.now,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    viewCount: {
        type: Number,
        min: 0,
        default: 0
    },
    enrolmentCount: {
        type: Number,
        min: 0,
        default: 0,
    },
    reviewCount: {
        type: Number,
        min: 0,
        default: 0,
    },
    averageRatingStars: {
        type: Number,
        min: 0,
        max: 5,
    },
    reviews: [mongoose.Types.ObjectId],
    thumbnailSmall: String,
    thumbnailLarge: String,
    basePrice: {
        type: Number,
        required: [true, 'Please add a price'],
        min: 0
    },
    discountedPrice: {
        type: Number,
        min: 0
    }
})


const Course = mongoose.model('Course', courseSchema)

export { ICourse, Course }
