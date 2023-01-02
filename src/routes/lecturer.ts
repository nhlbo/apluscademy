import express from 'express'
import { deleteLecturer, getAddLecturer, getLecturerList, postAddLecturer } from '../controllers/lecturer'

const router = express.Router()

router.route('/').get(getLecturerList)

router.route('/add').get(getAddLecturer)

router.route('/add').post(postAddLecturer)

router.route('/delete/:id').post(deleteLecturer)

export { router as lecturerRoute }
