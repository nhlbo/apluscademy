import { asyncHandler } from '../middlewares/async'
import { Category } from '../models/category'

const getCategory = asyncHandler(async (req, res) => {
  res.render('pages/add_category', { isAuthenticated: req.isAuthenticated() })
})
const getAddCategory = asyncHandler(async (req, res) => {
  res.render('pages/add_category', { isAuthenticated: req.isAuthenticated() })
})

const getViewCategory = asyncHandler(async (req, res) => {
  await Category.find({}).exec(function (err, cats) {
    if (err) throw err
    res.render('pages/category', { isAuthenticated: req.isAuthenticated(), categories: cats })
  })
})

const postAddCategory = asyncHandler(async (req, res, _next) => {
  await Category.create({
    name: req.body.categoryName
  })
    .then(() => {
      res.redirect('/category')
    })
    .catch((_err) => {
      res.redirect('/category/add')
    })
})

export { getCategory, getAddCategory, postAddCategory, getViewCategory }
