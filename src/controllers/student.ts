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

export { getStudentList }
