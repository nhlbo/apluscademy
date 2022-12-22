import ejs from 'ejs'
import { NextFunction } from 'express'
import { MongoError } from 'mongodb'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
import passport from 'passport'
import '../configs/passport'
import { asyncHandler } from '../middlewares/async'
import { IUser, User, UserOTPVerification } from '../models/user'
import { generateOtp } from '../utils/generator'

const getRegister = asyncHandler(async (_, res) => {
  res.render('pages/signup')
})

const APLUSCADEMY_USERNAME = process.env.APLUSCADEMY_USERNAME!
const APLUSCADEMY_PASSWORD = process.env.APLUSCADEMY_PASSWORD!

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: APLUSCADEMY_USERNAME,
    pass: APLUSCADEMY_PASSWORD
  }
})

const sendOTPVerificationEmail = async (id: mongoose.Types.ObjectId, email: string, next: NextFunction) => {
  const otp = generateOtp()
  await UserOTPVerification.findOneAndUpdate(
    {
      userId: id
    },
    {
      userId: id,
      otp
    },
    { new: true, upsert: true }
  )
    .then((res) => {
      res.otp = otp
      res.save()
      ejs.renderFile('./src/views/pages/email_verification.ejs', { OTP: otp }, function (err, data) {
        if (err) {
          next(err)
        } else {
          transporter
            .sendMail({
              from: '"A⁺cademy" <apluscademy0@gmail.com>',
              to: email,
              subject: 'Email verification',
              text: '',
              html: data
            })
            .then((info) => console.log('Message sent: %s', info.messageId))
        }
      })
    })
    .catch((err) => next(err))
}

const postRegister = asyncHandler((req, res, next) => {
  if (req.body.password !== req.body['confirm-password']) {
    req.flash('errors', 'Password and confirm password do not match.')
    res.render('pages/signup')
    return next()
  }
  const user: IUser = req.body
  User.findOneAndUpdate({ email: user.email, isVerified: false }, user, {
    runValidators: true,
    new: true,
    upsert: true
  })
    .then(async (result) => {
      result.password = user.password
      await result.save()
      res.cookie('userEmail', user.email, { httpOnly: true })
      sendOTPVerificationEmail(result._id, user.email, next)
    })
    .then(() => res.redirect('/verify'))
    .catch((err) => {
      let msg: string = err
      if ((err as MongoError).code === 11000) {
        msg = 'This email has been signed up.'
      }
      req.flash('errors', msg)
      res.render('pages/signup')
    })
})

const getVerifyEmail = asyncHandler(async (_, res) => {
  res.render('pages/verify')
})

const postVerifyEmail = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.cookies.userEmail })
  console.log('user', user)
  if (!user) {
    req.flash('errors', 'Invaild email.')
    res.render('pages/verify')
    return next()
  }
  const userOTP = await UserOTPVerification.findOne({ userId: user!._id })
  if (userOTP!.expiresAt.getTime() < Date.now()) {
    req.flash('errors', 'The code has been expired.')
    res.render('pages/verify')
    return next()
  }
  if (userOTP!.otp !== req.body.otp) {
    req.flash('errors', 'Invalid code.')
    res.render('pages/verify')
    return next()
  }
  user!.isVerified = true
  user!.save()
  req.login(user, function (err) {
    if (err) {
      return next(err)
    }
    return res.redirect('/')
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

export {
  getRegister,
  postRegister,
  getVerifyEmail,
  postVerifyEmail,
  getLogin,
  postLoginPassword,
  postLogout,
  isAuthenticated,
  isNotAuthenticated
}
