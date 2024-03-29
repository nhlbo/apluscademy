import { asyncHandler } from '../middlewares/async'
import { Category } from '../models/category'
import { Course } from '../models/course'
import { Review } from '../models/review'
import { getCategories } from '../utils/utils'
import { User } from '../models/user'

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
  const categoriesResult = await getCategories()
  res.render('pages/add_category', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    categories: categoriesResult
  })
})

const getCategoryList = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user?.id)
  const categoriesResult = await getCategories()
  await Category.find({}).exec(async function (err, cates) {
    if (err) throw err
    res.render('pages/category_list', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      categories: categoriesResult,
      cates: cates,
      categoryImg: req.cookies.categoryImg,
      user: user
    })
  })
})

const getCourseList = asyncHandler(async (req, res) => {
  const categoriesResult = await getCategories()
  const user = await User.findById(req.user?.id)
  await Category.findOne({ _id: req.params.id }).exec(async function (err, cate) {
    if (err) throw err
    await Category.find({}).exec(async function (err, cates) {
      if (err) throw err
      if (!cate) throw err
      await Course.find({ category: cate.name }).exec(async function (err, courses) {
        if (err) throw err
        res.render('pages/course_list', {
          isAuthenticated: req.isAuthenticated(),
          avatar: req.cookies.avatar,
          categories: categoriesResult,
          cate: cate,
          courses: courses,
          cates: cates,
          user: user
        })
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

const postCollectFeedback = asyncHandler(async (req, res) => {
  const course = await Course.findById({ _id: req.params.id })
  const starRated = req.body.ratingStars
  const fb = await Review.create({ author: req.user?.id, ratingStars: starRated, feedback: req.body.courseFeedback })
  course!.reviews.push(fb.id)
  course!.save()
  res.redirect('/category' + req.url)
})

const postEditFeedback = asyncHandler(async (_req, _res) => {})

export {
  getAddCategory,
  postAddCategory,
  getCategoryList,
  getCourseList,
  postDeleteCategory,
  postEditCategoryName,
  postCollectFeedback,
  postEditFeedback
}
