import express from 'express'
import {
  getAddCategory,
  postAddCategory,
  getCategoryList,
  getCourseList,
  getCourse,
  postDeleteCategory,
  postEditCategoryName,
  postCollectFeedback
} from '../controllers/category'
import { upload } from '../utils/amazonS3'

const router = express.Router()

router.route('/add').get(getAddCategory)
router.route('/add').post(upload.single('upload'), postAddCategory)

router.route('/').get(getCategoryList)
router.route('/:id').get(getCourseList)
router.route('/course/:id').get(getCourse)

router.route('/delete/:id').post(postDeleteCategory)
router.route('/edit/:id').post(postEditCategoryName)

router.route('/course/:id').post(postCollectFeedback)

export { router as categoryRoute }
