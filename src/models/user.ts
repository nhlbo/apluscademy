import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

export interface AuthToken {
  accessToken: string
  kind: string
}

interface IUser extends mongoose.Document {
  name: string
  email: string
  password: string
  isVerified: boolean
  role: string
  createdAt: Date
  facebook: string
  google: string
  tokens: AuthToken[]
  profile: {
    name: string
    gender: string
    location: string
    website: string
    picture: string
  }
  ownedCourses: []
  authoredCourses: []
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
  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  },
  ownedCourses: [
    {
      course: { type: mongoose.Types.ObjectId, ref: 'Course' },
      chapterInfo: [
        { chapter: { type: mongoose.Types.ObjectId, ref: 'Chapter' }, timestamp: Number, completed: Boolean }
      ]
    }
  ],
  authoredCourses: { type: [mongoose.Types.ObjectId], ref: 'Course' }
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

userOTPVerificationSchema.pre('save', function (next) {
  this.createdAt = new Date()
  this.expiresAt = new Date(+new Date() + 2 * 60 * 1000)
  next()
})

const UserOTPVerification = mongoose.model('UserOTPVerification', userOTPVerificationSchema)
const User = mongoose.model('User', userSchema)

export { IUser, User, UserOTPVerification }
