import express from 'express'
import {
  getAddCourse,
  getCourse,
  getCourseCreation,
  getEditCourse,
  postAddCourse,
  postEditCourse
} from '../controllers/course_creation'
import { upload } from '../utils/amazonS3'

const router = express.Router()

router.route('/').get(getCourseCreation)
router.route('/add').get(getAddCourse)
router.route('/add').post(upload.array('videoFile'), postAddCourse)
router.route('/edit/:id').get(upload.array('videoFile'), getEditCourse)
router.route('/edit/:id').post(upload.array('videoFile'), postEditCourse)
router.route('/:id').get(getCourse)

export { router as courseRoute }
