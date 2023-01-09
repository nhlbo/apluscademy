import { asyncHandler } from '../middlewares/async'
import { User, UserOTPVerification } from '../models/user'
import { getCategories } from '../utils/utils'
import mongoose from 'mongoose'
import { generateOtp } from '../utils/generator'
import ejs from 'ejs'
import { NextFunction } from 'express'
import '../configs/passport'
import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt'

const APLUSCADEMY_USERNAME = process.env.APLUSCADEMY_USERNAME!
const APLUSCADEMY_PASSWORD = process.env.APLUSCADEMY_PASSWORD!

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: APLUSCADEMY_USERNAME,
    pass: APLUSCADEMY_PASSWORD
  }
})

const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user!.id).exec()
  const categoriesResult = await getCategories()
  res.render('pages/profile', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    categories: categoriesResult,
    userEmail: user!.email,
    userName: user!.name,
    dateCreated: user!.createdAt,
    userRole: user!.role,
    isOtpVerify: false
  })
})

const updateAvatar = asyncHandler(async (req, res, _next) => {
  const file: any = req.file
  const avatarURL = file?.location
  await User.findOneAndUpdate(req.user!.id, { picture: avatarURL })
  res.cookie('avatar', avatarURL, { httpOnly: true })
  res.redirect('/profile')
})

const postChangeName = asyncHandler(async (req, res) => {
  await User.findOneAndUpdate(req.user!.id, { name: req.body.newName })
  res.redirect('/profile')
})

let NEW_EMAIL = ''
const postChangeEmail = asyncHandler(async (req, res, next) => {
  const categoriesResult = await getCategories()
  const user = await User.findById({ _id: req.user?.id })
  const isExistedEmail = await User.findOne({ email: req.body.newEmail }).exec()
  if (isExistedEmail) {
    req.flash('changeEmailFail', 'This email has been used.')
    res.redirect('/profile')
    next()
  }
  res.cookie('userEmail', req.body.newEmail, { httpOnly: true })
  sendOTPVerificationEmail(user?._id, req.body.newEmail, next)
  NEW_EMAIL = req.body.newEmail
  res.render('pages/profile', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    categories: categoriesResult,
    userEmail: user!.email,
    userName: user!.name,
    dateCreated: user!.createdAt,
    userRole: user!.role,
    isOtpVerify: true
  })
})

const postVerifyOtp = asyncHandler(async (req, res, _next) => {
  const sentOtp = req.body.newEmailOtp
  const user = await User.findById(req.user?.id)
  const otp = await UserOTPVerification.findOne({ userId: req.user?.id })
  const isOtp = await bcrypt.compare(sentOtp, otp!.otp)
  if (isOtp) {
    await user?.updateOne({ email: NEW_EMAIL })
    req.flash('changeEmailSuccess', 'Email changed successfully')
    res.redirect('/profile')
  } else {
    req.flash('changeEmailFail', 'Failed to change email. Try again.')
    res.redirect('/profile')
  }
})

const postChangePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user!.id)
  const isMatchedPassword = await user?.schema.methods.checkPassword(req.body.currentPassword, req.user!.id)
  if (!isMatchedPassword) {
    req.flash('errors', 'Wrong password.')
    res.redirect('/profile#password-form-location')
    return next()
  }
  if (req.body.currentPassword == req.body.newPassword) {
    req.flash('errors', 'New password can not be the same as the old one.')
    res.redirect('/profile#password-form-location')
    return next()
  }
  if (req.body.newPassword !== req.body['confirm-new-password']) {
    req.flash('errors', 'Password and confirm password do not match.')
    res.redirect('/profile#password-form-location')
    return next()
  }
  user!.password = req.body.newPassword
  user?.save()
  req.flash('successStatus', 'Password changed!')
  res.redirect('/profile#password-form-location')
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

export {
  getProfile,
  updateAvatar,
  postChangeName,
  postChangePassword,
  postChangeEmail,
  sendOTPVerificationEmail,
  postVerifyOtp
}
