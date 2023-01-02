import { asyncHandler } from '../middlewares/async'
import { Category } from '../models/category'
import { Course } from '../models/course'

const getAddCategory = asyncHandler(async (req, res) => {
  res.render('pages/add_category', { isAuthenticated: req.isAuthenticated() })
})

const postAddCategory = asyncHandler(async (req, res, _next) => {
  await Category.create({
    name: req.body.categoryName
    // courses: '63af1cce6f8457a1df2e60ad'
  })
    .then(() => {
      res.redirect('/category/view')
    })
    .catch((_err) => {
      res.redirect('/category/add')
    })
})

const getCategoryList = asyncHandler(async (req, res, _next) => {
  await Category.find({}).exec(function (err, cates) {
    if (err) throw err
    res.render('pages/category_list', { isAuthenticated: req.isAuthenticated(), categories: cates })
  })
})

const getCourseList = asyncHandler(async (req, res, _next) => {
  const category = await Category.findOne(req.query).exec()
  res.render('pages/course_list', { isAuthenticated: req.isAuthenticated(), category: category })

  // for (const course of category?.courses!) {
  //   const foundCourse = await Course.findOne(course).exec()
  //   console.log(foundCourse)
  // }
  // res.render('pages/course_list', { isAuthenticated: req.isAuthenticated() })
})

const getViewCourse = asyncHandler(async (req, res) => {
  await Course.findOne(req.query).exec(function (err, course) {
    if (err) throw err
    res.render('pages/course', { isAuthenticated: req.isAuthenticated(), course: course })
  })
})

const postDeleteCategory = asyncHandler(async (req, res) => {
  await Category.deleteOne(req.query)
  res.redirect('/category/view')
})

const postEditCategoryName = asyncHandler(async (req, res) => {
  const query = { _id: req.params.cate_id }
  await Category.findOneAndUpdate(query, { name: req.body.newCategoryName })
  res.redirect('/category/view')
})

export {
  getAddCategory,
  postAddCategory,
  getCategoryList,
  getCourseList,
  postDeleteCategory,
  getViewCourse,
  postEditCategoryName
}
