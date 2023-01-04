import express from 'express'
import { getStudentList, postDeleteStudent } from '../controllers/student'

const router = express.Router()

// router.route('/add').get(getAddLecturer)
// router.route('/add').post(postAddLecturer)

router.route('/').get(getStudentList)
//router.route('/:id').get(getLecturer)

router.route('/delete/:id').post(postDeleteStudent)

export { router as studentRoute }
