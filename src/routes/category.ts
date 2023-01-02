import express from 'express'
import {
  getAddCategory,
  postAddCategory,
  getCategoryList,
  getCourseList,
  getViewCourse,
  postDeleteCategory,
  postEditCategoryName
} from '../controllers/category'

const router = express.Router()

router.route('/add').get(getAddCategory)
router.route('/add').post(postAddCategory)

router.route('/view').get(getCategoryList)
router.route('/view/:cate_id').get(getCourseList)
router.route('/view/course/:course_id').get(getViewCourse)
router.route('/delete/:course_id').get(postDeleteCategory)
router.route('/edit/:cate_id').post(postEditCategoryName)

export { router as CategoryRoute }
