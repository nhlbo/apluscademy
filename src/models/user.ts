import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { generateAvatar } from '../utils/generator'

export interface AuthToken {
  accessToken: string
  kind: string
}

interface IUser extends mongoose.Document {
  name: string
  gender: string
  email: string
  password: string
  isVerified: boolean
  role: string
  createdAt: Date
  facebook: string
  google: string
  tokens: AuthToken[]
  picture: string
  ownedCourses: []
  authoredCourses: []
  about: string
  awards: []
  watchList: []
}

declare global {
  namespace Express {
    interface User extends IUser {}
  }
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    trim: true
  },
  gender: String,
  email: {
    type: String,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'],
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    minlength: [8, 'Password should be 8 character long'],
    select: false
  },
  isVerified: Boolean,
  role: {
    type: String,
    enum: ['student', 'lecturer', 'admin'],
    default: 'student'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  facebook: String,
  google: String,
  tokens: Array,
  picture: {
    type: String,
    default: generateAvatar()
  },
  ownedCourses: [
    {
      course: { type: mongoose.Types.ObjectId, ref: 'Course' }
    }
  ],
  authoredCourses: { type: [mongoose.Types.ObjectId], ref: 'Course' },
  about: { type: String, default: '' },
  awards: [
    {
      type: String
    }
  ],
  watchList: [
    {
      course: { type: mongoose.Types.ObjectId, ref: 'Course' }
    }
  ]
})

interface IUserOTPVerification extends mongoose.Document {
  userId: {
    type: mongoose.Types.ObjectId
    ref: 'User'
  }
  otp: string
  createdAt: Date
  expiresAt: Date
}

const userOTPVerificationSchema = new mongoose.Schema<IUserOTPVerification>({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    unique: true
  },
  otp: String,
  createdAt: Date,
  expiresAt: Date
})

userSchema.pre('validate', function (next) {
  let isValid = this.email || this.facebook || this.google
  return isValid ? next() : next(new Error('Email must not be empty.'))
})

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

userSchema.methods.checkPassword = async function (password: string, id: string) {
  const user = await User.findOne({ id }).select('password').exec()
  return await bcrypt.compare(password, user?.password!)
}

userOTPVerificationSchema.pre('save', async function (next) {
  console.log(this.otp)
  const unhashOtp = this.otp
  this.otp = await bcrypt.hash(unhashOtp, 10)
  this.createdAt = new Date()
  this.expiresAt = new Date(+new Date() + 2 * 60 * 1000)
  next()
})

const UserOTPVerification = mongoose.model('UserOTPVerification', userOTPVerificationSchema)
const User = mongoose.model('User', userSchema)

export { IUser, User, UserOTPVerification }
