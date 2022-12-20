import { MongoError } from 'mongodb'
import passport from 'passport'
import '../configs/passport'
import { asyncHandler } from '../middlewares/async'
import { IUser, User } from '../models/user'

const getRegister = asyncHandler(async (_, res) => {
  res.render('pages/signup')
})

const postRegister = asyncHandler((req, res) => {
  const user: IUser = req.body
  User.create(user)
    .then(() => res.redirect('/'))
    .catch((err) => {
      let msg: string = err
      if ((err as MongoError).code === 11000) {
        msg = 'This email has been signed up.'
      } else if (req.body.password !== req.body['confirm-password']) {
        msg = 'Password and confirm password do not match.'
      }
      req.flash('errors', msg)
      res.render('pages/signup')
    })
})

const getLogin = asyncHandler(async (_, res) => {
  res.render('pages/login')
})

const postLoginPassword = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
})

const postLogout = asyncHandler(async (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err)
    res.redirect('/')
  })
})

const isAuthenticated = asyncHandler(async (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/login')
})

const isNotAuthenticated = asyncHandler(async (req, res, next) => {
  if (!req.isAuthenticated()) return next()
  res.redirect('/')
})

export { getRegister, postRegister, getLogin, postLoginPassword, postLogout, isAuthenticated, isNotAuthenticated }
