import express from 'express'
import { postSearchCourse } from '../controllers/course_search'

const router = express.Router()

router.route('/').post(postSearchCourse)

export { router as courseSearchRoute }
