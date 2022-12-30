import { asyncHandler } from '../middlewares/async'
import { User } from '../models/user'

const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user!.id).exec()
  res.render('pages/profile', {
    userEmail: user!.email,
    userName: user!.profile.name,
    dateCreated: user!.createdAt,
    userRole: user!.role,
    isAuthenticated: req.isAuthenticated()
  })
})

const getChangeName = asyncHandler(async (req, res) => {
  res.render('pages/edit_name', { isAuthenticated: req.isAuthenticated() })
})

const postChangeName = asyncHandler(async (req, res) => {
  await User.findOneAndUpdate(req.user!.id, { 'profile.name': req.body.newName })
  res.redirect('/profile')
})

const getChangePassword = asyncHandler(async (req, res) => {
  res.render('pages/edit_password', { isAuthenticated: req.isAuthenticated() })
})

const postChangePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user!.id)
  const isMatchedPassword = await user?.schema.methods.checkPassword(req.body.currentPassword, req.user!.id)
  console.log(isMatchedPassword)
  if (!isMatchedPassword) {
    res.redirect('/profile')
    return next()
  }
  console.log('part 2')
  if (req.body.newPassword !== req.body['confirm-new-password']) {
    req.flash('errors', 'Password and confirm password do not match.')
    res.redirect('/profile')
    return next()
  }
  user!.password = req.body.newPassword
  user?.save()
  console.log('da doi mat khau')
  res.redirect('/profile')
})

export { getProfile, getChangeName, postChangeName, getChangePassword, postChangePassword }
