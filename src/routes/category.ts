import express from 'express'
import { getCategory, getAddCategory, postAddCategory, getViewCategory } from '../controllers/category'

const router = express.Router()

router.route('/').get(getCategory)
router.route('/add').get(getAddCategory)
router.route('/add').post(postAddCategory)

router.route('/view').get(getViewCategory)

export { router as CategoryRoute }
