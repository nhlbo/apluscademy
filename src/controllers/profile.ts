//import { NextFunction } from 'express'
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
  const user = await User.findOneAndUpdate(req.user!.id, { 'profile.name': req.body.newName })
  // user!.password = "123456789"
  // user?.save()
  console.log(user)
  res.redirect('/profile')
})

const getChangePassword = asyncHandler(async (req, res) => {
  res.render('pages/edit_password', { isAuthenticated: req.isAuthenticated() })
})

const postChangePassword = asyncHandler(async (req, res, next) => {
  console.log(req.body.newPassword)
  console.log(req.body['confirm-new-password'])
  if (req.body.newPassword !== req.body['confirm-new-password']) {
    req.flash('errors', 'Password and confirm password do not match.')
    res.render('pages/edit_password', { isAuthenticated: req.isAuthenticated() })
    return next()
  }
  const user = await User.findById(req.user!.id)
  user!.password = req.body.newPassword
  user?.save()
  console.log(user)
  res.redirect('/profile')
})

export { getProfile, getChangeName, postChangeName, getChangePassword, postChangePassword }
