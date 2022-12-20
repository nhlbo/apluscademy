import bcrypt from 'bcrypt'
import passport from 'passport'
import passportFacebook from 'passport-facebook'
import passportLocal from 'passport-local'
import { IUser, User } from '../models/user'

const LocalStrategy = passportLocal.Strategy
const FacebookStrategy = passportFacebook.Strategy

passport.use(
  new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, async (req, email, password, cb) => {
    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      req.flash('errors', 'Incorrect username or password.')
      return cb(null, false, { message: 'Incorrect username or password.' })
    }
    const isPassword = await bcrypt.compare(password, user.password)
    if (!isPassword) {
      req.flash('errors', 'Incorrect username or password.')
      return cb(null, false, { message: 'Incorrect username or password.' })
    }
    return cb(null, user)
  })
)

const FACEBOOK_ID = process.env.FACEBOOK_ID || ''
const FACEBOOK_SECRET = process.env.FACEBOOK_SECRET || ''

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_ID,
      clientSecret: FACEBOOK_SECRET,
      callbackURL: '/login/facebook/callback',
      profileFields: ['email', 'displayName', 'profileUrl', 'gender'],
      passReqToCallback: true
    },
    (req, accessToken, _, profile, done) => {
      console.log('profile = ', profile)
      User.findOne({ facebook: profile.id }, (err: NativeError, existingUser: IUser) => {
        if (err) {
          return done(err)
        }
        if (existingUser) {
          return done(null, existingUser)
        }
        console.log('debug')
        console.log('profile = ', profile)
        console.log('profile.json = ', profile._json)
        const email = profile.emails ? profile.emails[0] : null
        User.findOne({ email }, (err: NativeError, existingEmailUser: IUser) => {
          if (err) {
            return done(err)
          }
          const user = existingEmailUser ? existingEmailUser : new User()
          user.facebook = profile.id
          user.tokens.push({ kind: 'facebook', accessToken })
          user.profile.name = profile.displayName!
          user.profile.gender = profile.gender!
          // user.profile.picture = `https://graph.facebook.com/${profile.id}/picture?type=large`
          user.profile.picture = profile.profileUrl!
          user.save((err) => {
            req.flash('info', 'Facebook account has been linked.')
            done(err, user)
          })
        })
      })
    }
  )
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
