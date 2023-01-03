import express from 'express'
import {
  postDeleteLecturer,
  getAddLecturer,
  postAddLecturer,
  getLecturerList,
  getLecturer
} from '../controllers/lecturer'

const router = express.Router()

router.route('/add').get(getAddLecturer)
router.route('/add').post(postAddLecturer)

router.route('/').get(getLecturerList)
router.route('/:id').get(getLecturer)

router.route('/delete/:id').post(postDeleteLecturer)

export { router as lecturerRoute }
