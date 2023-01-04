import { asyncHandler } from '../middlewares/async'
import { User } from '../models/user'

const getStudentList = asyncHandler(async (req, res) => {
  await User.find({ role: 'student' }).exec(function (err, students) {
    if (err) throw err
    res.render('pages/student_list', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      students: students
    })
  })
})

const postDeleteStudent = asyncHandler(async (req, res) => {
  await User.deleteOne({ _id: req.params.id })
  res.redirect('/student')
})

const getStudent = asyncHandler(async (req, res) => {
  await User.findOne({ _id: req.params.id }).exec(function (err, student) {
    if (err) throw err
    res.render('pages/student', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      student: student
    })
  })
})

export { getStudentList, postDeleteStudent, getStudent }
