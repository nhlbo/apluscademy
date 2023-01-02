import express from 'express'
import { postDeleteLecturer, getAddLecturer, getLecturerList, postAddLecturer } from '../controllers/lecturer'

const router = express.Router()

router.route('/').get(getLecturerList)

router.route('/add').get(getAddLecturer)
router.route('/add').post(postAddLecturer)

router.route('/delete/:id').post(postDeleteLecturer)

export { router as lecturerRoute }
