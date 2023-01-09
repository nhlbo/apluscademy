import { asyncHandler } from '../middlewares/async'
import { Chapter } from '../models/chapter'
import { Course } from '../models/course'
import { Review } from '../models/review'
import { User } from '../models/user'
import { getCategories } from '../utils/utils'

const getCourseCreation = asyncHandler(async (req, res, next) => {
  res.render('pages/course_creation', { isAuthenticated: req.isAuthenticated(), avatar: req.cookies.avatar })
  next()
})

const getAddCourse = asyncHandler(async (req, res) => {
  const categories = await getCategories()
  res.render('pages/add_course', { isAuthenticated: req.isAuthenticated(), avatar: req.cookies.avatar, categories })
})

const postAddCourse = asyncHandler(async (req, res, _next) => {
  const user = req.user
  await Course.create({
    lecturer: user?.id,
    title: req.body.title,
    shortDesc: req.body.shortDesc,
    longDesc: req.body.longDesc,
    basePrice: req.body.basePrice,
    dateLastUpdated: new Date(),
    category: req.body.category
  })
    .then(() => res.redirect('/course'))
    .catch((err) => {
      let msg: string = err
      if (err) req.flash('errors', msg)
      res.redirect('/course/add')
    })
})

const getEditCourse = asyncHandler(async (req, res) => {
  const courseId = req.params.id
  const [categories, course] = await Promise.all([getCategories(), Course.findById(courseId)])
  const chapters = await Promise.all(
    course!.chapters.map((chapterId) => {
      return Chapter.findById(chapterId)
    })
  )
  res.render('pages/edit_course', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    categories,
    course,
    chapters
  })
})

const postEditCourse = asyncHandler(async (req, res, _next) => {
  const files: any = req.files
  const chapterTitle = req.body.chapterTitle
  console.log(files)
  console.log(req.body)
  const videosInfo = JSON.parse(req.body.videosInfo)
  let chapters = []
  for (let i = 0, j = 0; i < videosInfo.length; i++) {
    const url = videosInfo[i] === '' ? files[j++].location : videosInfo[i]
    const title = chapterTitle[i]
    chapters.push({ url, title })
  }
  const chapterModel = await Promise.all(
    chapters.map(async (chapter) => {
      return await Chapter.create({ video: `https://${chapter.url}`, title: chapter.title })
    })
  )
  console.log(chapterModel)
  await Course.findOneAndUpdate({ _id: req.params!.id! }, { chapters: chapterModel })
  res.redirect('/course')
})

const getCourse = asyncHandler(async (req, res) => {
  const categoriesResult = await getCategories()
  const course = await Course.findOne({ _id: req.params.id })
  const lecturer = await User.findById(course?.lecturer)
  const reviewIds = course!.reviews
  const reviews = await Promise.all(reviewIds?.map(async (reviewId) => await Review.findById(reviewId)))
  const chapterIds = course!.chapters
  const chapters = await Promise.all(chapterIds?.map(async (chapterId) => await Chapter.findById(chapterId)))
  let totalStars = 0
  let avgStars = 0
  reviews.forEach(function (review) {
    totalStars += review?.ratingStars!
    avgStars = totalStars / reviews.length
  })
  let roundedAvgStars = Math.round(avgStars * 10) / 10

  res.render('pages/course', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    categories: categoriesResult,
    course: course,
    lecturer: lecturer,
    reviews: reviews,
    chapters: chapters,
    avgStars: roundedAvgStars
  })
})

export { getCourseCreation, postAddCourse, getAddCourse, postEditCourse, getEditCourse, getCourse }
