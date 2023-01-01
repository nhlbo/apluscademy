import express from 'express'
import { getAddCategory, postAddCategory, getCategoryList, getCourseList, getViewCourse } from '../controllers/category'

const router = express.Router()

router.route('/add').get(getAddCategory)
router.route('/add').post(postAddCategory)

router.route('/view').get(getCategoryList)
router.route('/view/:dynamic_cate_id').get(getCourseList)
router.route('/view/course/:dynamic_course_id').get(getViewCourse)

export { router as CategoryRoute }
