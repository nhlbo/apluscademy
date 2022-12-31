import express from 'express'
import { getHome } from '../controllers/home'
import { getCourseCreation, getAddCourse, postAddCourse } from '../controllers/course_creation'

const router = express.Router()

router.route('/').get(getHome)

router.route('/instructor').get((req, res) => {
  res.render('pages/index', { isAuthenticated: req.isAuthenticated() })
})

router.route('/create-course').get(getCourseCreation)

router.route('/create-course/add').get(getAddCourse)
router.route('/create-course/add').post(postAddCourse)

export { router as homeRoute }
