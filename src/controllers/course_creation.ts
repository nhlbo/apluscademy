import { Course } from '../models/course'
import { asyncHandler } from '../middlewares/async'

const getCourseCreation = asyncHandler(async (req, res, next) => {
  res.render('pages/course_creation', { isAuthenticated: req.isAuthenticated(), avatar: req.cookies.avatar })
  next()
})

const getAddCourse = asyncHandler(async (req, res, next) => {
  res.render('pages/add_course', { isAuthenticated: req.isAuthenticated(), avatar: req.cookies.avatar })
  next()
})

const postAddCourse = asyncHandler(async (req, res, _next) => {
  // const files: any = req.files
  // console.log(files)
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

export { getCourseCreation, postAddCourse, getAddCourse }
