import bcrypt from 'bcrypt'
import passport from 'passport'
import passportFacebook from 'passport-facebook'
import passportGoogle from 'passport-google-oauth20'
import passportLocal from 'passport-local'
import { IUser, User } from '../models/user'

const LocalStrategy = passportLocal.Strategy
const FacebookStrategy = passportFacebook.Strategy
const GoogleStrategy = passportGoogle.Strategy

const CALLBACK_DOMAIN = process.env.CALLBACK_DOMAIN || ''

passport.use(
  new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, async (_req, email, password, cb) => {
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

const FACEBOOK_ID = process.env.FACEBOOK_ID!
const FACEBOOK_SECRET = process.env.FACEBOOK_SECRET!

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_ID,
      clientSecret: FACEBOOK_SECRET,
      callbackURL: `${CALLBACK_DOMAIN}/login/facebook/callback`,
      profileFields: ['email', 'displayName', 'gender'],
      passReqToCallback: true
    },
    (_req, _accessToken, _refreshToken, profile, done) => {
      User.findOne({ facebook: profile.id }, async (err: NativeError, existingUser: IUser) => {
        if (err) return done(err)
        if (existingUser) return done(null, existingUser)
        const email = profile.emails ? profile.emails[0] : null
        const user: IUser = (email !== null ? await User.findOne({ email }) : null) || new User()
        user.facebook = profile.id
        user.profile.name = profile.displayName!
        user.profile.gender = profile.gender!
        user.profile.picture = `https://graph.facebook.com/${profile.id}/picture?type=large`
        user.save((err) => {
          done(err, user)
        })
      })
    }
  )
)

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `${CALLBACK_DOMAIN}/login/google/callback`
    },
    (_accessToken, _refreshToken, profile, done) => {
      User.findOne({ google: profile.id }, async (err: NativeError, existingUser: IUser) => {
        if (err) {
          return done(err)
        }
        if (existingUser) {
          return done(null, existingUser)
        }
        const email = profile.emails ? profile.emails[0] : null
        const user: IUser = (email !== null ? await User.findOne({ email }) : null) || new User()
        user.google = profile.id
        user.profile.name = profile.displayName!
        user.profile.picture = profile.photos![0].value
        user.save((err) => {
          done(err, user)
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
