import { asyncHandler } from '../middlewares/async'
import { User } from '../models/user'
import { getCategories } from '../utils/utils'

const getStudentList = asyncHandler(async (req, res) => {
  const categoriesResult = await getCategories()
  await User.find({ role: 'student' }).exec(function (err, students) {
    if (err) throw err
    res.render('pages/student_list', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      students: students,
      categories: categoriesResult
    })
  })
})

const postDeleteStudent = asyncHandler(async (req, res) => {
  await User.deleteOne({ _id: req.params.id })
  res.redirect('/student')
})

const getStudent = asyncHandler(async (req, res) => {
  const categoriesResult = await getCategories()
  await User.findOne({ _id: req.params.id }).exec(function (err, student) {
    if (err) throw err
    res.render('pages/student', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      student: student,
      categories: categoriesResult
    })
  })
})

export { getStudentList, postDeleteStudent, getStudent }
