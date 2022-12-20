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
  }
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

const User = mongoose.model('User', userSchema)

export { IUser, User }
