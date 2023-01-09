import express from 'express'
import { getLecturerCourses } from '../controllers/lecturer_courses'

const router = express.Router()

router.route('/').get(getLecturerCourses)

export { router as lecturerCoursesRoute }
