import bcrypt from 'bcrypt'
import passport from 'passport'
import { Strategy } from 'passport-local'
import { asyncHandler } from '../middlewares/async'
import { IUser, User } from '../models/user'

const postRegister = asyncHandler(async (req, res) => {
  const user: IUser = req.body
  const newUser = await User.create(user)
  res.send('sucess ' + newUser.id)
})

const getLogin = asyncHandler(async (_, res) => {
  res.render('pages/login')
})

passport.use(
  new Strategy({ usernameField: 'email' }, async function verify(email, password, cb) {
    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      return cb(null, false, { message: 'Incorrect username or password.' })
    }
    const isPassword = await bcrypt.compare(password, user.password)
    if (!isPassword) {
      return cb(null, false, { message: 'Incorrect username or password.' })
    }
    return cb(null, user)
  })
)

passport.serializeUser(function (user: Express.User, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.email })
  })
})

passport.deserializeUser(function (user: Express.User, cb) {
  process.nextTick(function () {
    return cb(null, user)
  })
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

export { postRegister, getLogin, postLoginPassword, postLogout }
