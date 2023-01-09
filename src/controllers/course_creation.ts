import { Course } from '../models/course'
import { asyncHandler } from '../middlewares/async'
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
    dateLastUpdated: new Date()
  })
    .then(() => res.redirect('/course'))
    .catch((err) => {
      let msg: string = err
      if (err) req.flash('errors', msg)
      res.redirect('/course/add')
    })
})

const getEditCourse = asyncHandler(async (req, res) => {
  const categories = await getCategories()
  res.render('pages/edit_course', { isAuthenticated: req.isAuthenticated(), avatar: req.cookies.avatar, categories })
})

const postEditCourse = asyncHandler(async (req, _res, _next) => {
  const files: any = req.files
  console.log(files)
  console.log(req)
})

export { getCourseCreation, postAddCourse, getAddCourse, postEditCourse, getEditCourse }
