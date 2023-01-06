import { asyncHandler } from '../middlewares/async'
import { Category } from '../models/category'
import { Course } from '../models/course'

const postAddCategory = asyncHandler(async (req, res, _next) => {
  const file: any = req.file
  const categoryImgURL = file?.location
  await Category.create({
    name: req.body.categoryName,
    image: categoryImgURL
    // courses: '63af1cce6f8457a1df2e60ad'
  })
    .then(() => {
      res.cookie('categoryImg', categoryImgURL, { httpOnly: true })
      res.redirect('/category')
    })
    .catch((_err) => {
      res.redirect('/category/add')
    })
})

const getAddCategory = asyncHandler(async (req, res) => {
  await Category.find({}).exec(function (err, categories) {
    if (err) throw err
    res.render('pages/add_category', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      categories: categories
    })
  })
})

const getCategoryList = asyncHandler(async (req, res) => {
  await Category.find({}).exec(async function (err, cates) {
    if (err) throw err
    await Category.find({}).exec(async function (err, categories) {
      if (err) throw err
      const categoriesResult = await Promise.all(
        categories.map(async (category) => {
          const courses = await Promise.all(
            category.courses.map((courseId) => {
              return Course.findById(courseId)
            })
          )
          const categoryName = category.name
          return { name: categoryName, courses }
        })
      )
      res.render('pages/category_list', {
        isAuthenticated: req.isAuthenticated(),
        avatar: req.cookies.avatar,
        categories: categoriesResult,
        cates: cates,
        categoryImg: req.cookies.categoryImg
      })
    })
  })
})

// const getCategory = asyncHandler(async(req, res) => {
//   res.render()
// })

const getCourseList = asyncHandler(async (req, res) => {
  await Category.findOne({ _id: req.params.id }).exec(async function (err, cate) {
    if (err) throw err
    await Category.find({}).exec(async function (err, cates) {
      if (err) throw err
      await Category.find({}).exec(async function (err, categories) {
        if (err) throw err
        const categoriesResult = await Promise.all(
          categories.map(async (category) => {
            const courses = await Promise.all(
              category.courses.map((courseId) => {
                return Course.findById(courseId)
              })
            )
            const categoryName = category.name
            return { name: categoryName, courses }
          })
        )
        res.render('pages/course_list', {
          isAuthenticated: req.isAuthenticated(),
          avatar: req.cookies.avatar,
          categories: categoriesResult,
          cate: cate,
          cates: cates
        })
      })
    })
  })
})

const getCourse = asyncHandler(async (req, res) => {
  await Course.findOne(req.query).exec(async function (err, course) {
    if (err) throw err
    await Category.find({}).exec(async function (err, categories) {
      if (err) throw err
      const categoriesResult = await Promise.all(
        categories.map(async (category) => {
          const courses = await Promise.all(
            category.courses.map((courseId) => {
              return Course.findById(courseId)
            })
          )
          const categoryName = category.name
          return { name: categoryName, courses }
        })
      )
      res.render('pages/course', {
        isAuthenticated: req.isAuthenticated(),
        avatar: req.cookies.avatar,
        categories: categoriesResult,
        course: course
      })
    })
  })
})

const postDeleteCategory = asyncHandler(async (req, res) => {
  await Category.deleteOne({ _id: req.params.id })
  res.redirect('/category')
})

const postEditCategoryName = asyncHandler(async (req, res) => {
  const query = { _id: req.params.id }
  await Category.findOneAndUpdate(query, { name: req.body.newCategoryName })
  res.redirect('/category/' + req.params.id)
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
