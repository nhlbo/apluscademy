import passport from 'passport'
import '../configs/passport'
import { asyncHandler } from '../middlewares/async'
import { IUser, User } from '../models/user'

const postRegister = asyncHandler(async (req, res) => {
  const user: IUser = req.body
  const newUser = await User.create(user)
  res.send('success ' + newUser.id)
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
    console.log('logout')
    if (err) return next(err)
    res.redirect('/')
  })
})

// const isAuthenticated = asyncHandler(async (req, res, next) => {
//   if (req.isAuthenticated()) return next()
//   res.redirect('/login')
// })

// const isNotAuthenticated = asyncHandler(async (req, res, next) => {
//   if (!req.isAuthenticated()) return next()
//   res.redirect('/')
// })

export { postRegister, getLogin, postLoginPassword, postLogout }
