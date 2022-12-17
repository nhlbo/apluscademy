import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser {
  name: string
  email: string
  password: string
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email'],
    unique: true
  },
  password: {
    type: String,
    minlength: [8, 'Password should be 8 character long'],
    required: [true, 'Please add a password'],
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
