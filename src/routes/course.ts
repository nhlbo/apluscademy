import express from 'express'
import { getAddCourse, getCourseCreation, postAddCourse } from '../controllers/course_creation'
import { upload } from '../utils/amazonS3'

const router = express.Router()

router.route('/').get(getCourseCreation)
router.route('/add').get(getAddCourse)
router.route('/add').post(upload.array('videoFile'), postAddCourse)

export { router as courseRoute }
