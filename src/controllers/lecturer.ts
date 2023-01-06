import { asyncHandler } from '../middlewares/async'
import { User } from '../models/user'
import { Category } from '../models/category'
import { Course } from '../models/course'

const getLecturerList = asyncHandler(async (req, res) => {
  await User.find({ role: 'lecturer' }).exec(async function (err, lecturers) {
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
      res.render('pages/lecturer_list', {
        isAuthenticated: req.isAuthenticated(),
        avatar: req.cookies.avatar,
        categories: categoriesResult,
        lecturers: lecturers
      })
    })
  })
})

const getAddLecturer = asyncHandler(async (req, res) => {
  const categories = await Category.find({}).exec()
  res.render('pages/add_lecturer', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    categories: categories
  })
})

const postAddLecturer = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.lecturerEmail })
  if (!user) {
    const lecturer = await User.create({
      email: req.body.lecturerEmail,
      role: 'lecturer',
      'profile.name': req.body.lecturerName,
      isVerified: false,
      password: req.body.lecturerPassword
    })
    lecturer.save()
    res.redirect('/lecturer')
    return next()
  }
  res.redirect('/lecturer/add')
})

const postDeleteLecturer = asyncHandler(async (req, res) => {
  await User.deleteOne({ _id: req.params.id })
  res.redirect('/lecturer')
})

const getLecturer = asyncHandler(async (req, res) => {
  await User.findOne({ _id: req.params.id }).exec(async function (err, lecturer) {
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
      res.render('pages/lecturer', {
        isAuthenticated: req.isAuthenticated(),
        avatar: req.cookies.avatar,
        categories: categoriesResult,
        lecturer: lecturer
      })
    })
  })
})

export { getLecturerList, getAddLecturer, postAddLecturer, postDeleteLecturer, getLecturer }
