import { asyncHandler } from '../middlewares/async'
import { Category } from '../models/category'
import { Course } from '../models/course'

const getAddCategory = asyncHandler(async (req, res) => {
  res.render('pages/add_category', { isAuthenticated: req.isAuthenticated(), avatar: req.cookies.avatar })
})

const postAddCategory = asyncHandler(async (req, res) => {
  await Category.create({
    name: req.body.categoryName
    // courses: '63af1cce6f8457a1df2e60ad'
  })
    .then(() => {
      res.redirect('/category')
    })
    .catch((_err) => {
      res.redirect('/category/add')
    })
})

const getCategoryList = asyncHandler(async (req, res) => {
  await Category.find({}).exec(function (err, cates) {
    if (err) throw err
    res.render('pages/category_list', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      categories: cates
    })
  })
})

const getCourseList = asyncHandler(async (req, res) => {
  const category = await Category.findOne({ _id: req.params.id }).exec()
  res.render('pages/course_list', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    category: category
  })
})

const getCourse = asyncHandler(async (req, res) => {
  await Course.findOne(req.query).exec(function (err, course) {
    if (err) throw err
    res.render('pages/course', { isAuthenticated: req.isAuthenticated(), avatar: req.cookies.avatar, course: course })
  })
})

const postDeleteCategory = asyncHandler(async (req, res) => {
  await Category.deleteOne({ _id: req.params.id })
  res.redirect('/category')
})

const postEditCategoryName = asyncHandler(async (req, res) => {
  const query = { _id: req.params.cate_id }
  await Category.findOneAndUpdate(query, { name: req.body.newCategoryName })
  res.redirect('/category')
})

export {
  getAddCategory,
  postAddCategory,
  getCategoryList,
  getCourseList,
  postDeleteCategory,
  getCourse,
  postEditCategoryName
}
