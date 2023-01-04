import express from 'express'
import { getStudent, getStudentList, postDeleteStudent } from '../controllers/student'

const router = express.Router()

router.route('/').get(getStudentList)
router.route('/:id').get(getStudent)

router.route('/delete/:id').post(postDeleteStudent)

export { router as studentRoute }
