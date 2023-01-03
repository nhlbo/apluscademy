import { asyncHandler } from '../middlewares/async'
import { User } from '../models/user'

const getLecturerList = asyncHandler(async (req, res) => {
  await User.find({ role: 'lecturer' }).exec(function (err, lecturers) {
    if (err) throw err
    res.render('pages/lecturer_list', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      lecturers: lecturers
    })
  })
})

const getAddLecturer = asyncHandler(async (req, res) => {
  res.render('pages/add_lecturer', { isAuthenticated: req.isAuthenticated(), avatar: req.cookies.avatar })
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
  await User.findOne({ _id: req.params.id }).exec(function (err, lecturer) {
    if (err) throw err
    res.render('pages/lecturer', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      lecturer: lecturer
    })
  })
})

export { getLecturerList, getAddLecturer, postAddLecturer, postDeleteLecturer, getLecturer }
