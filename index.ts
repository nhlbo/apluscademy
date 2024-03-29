import cookieParser from 'cookie-parser'
import express from 'express'
import flash from 'express-flash'
import session from 'express-session'
import mongoose from 'mongoose'
import passport from 'passport'
import {
  authRoute,
  categoryRoute,
  courseRoute,
  homeRoute,
  lecturerRoute,
  profileRoute,
  studentRoute,
  courseSearchRoute,
  lecturerCoursesRoute
} from './src/routes'

const app = express()
const PORT = process.env.PORT || 3000
const MONGO_DB_URL = process.env.MONGO_DB_URL || ''
const SESSION_SECRET = process.env.SESSION_SECRET || ''

mongoose.connect(MONGO_DB_URL).then(() => console.log('Connected to the database.'))
let SQLiteStore = require('connect-sqlite3')(session)

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore()
  })
)
app.use(passport.authenticate('session'))
app.use(flash())

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(homeRoute)
app.use(authRoute)

app.use('/profile', profileRoute)
app.use('/lecturer', lecturerRoute)
app.use('/category', categoryRoute)
app.use('/course', courseRoute)
app.use('/student', studentRoute)
app.use('/course_search', courseSearchRoute)
app.use('/lecturer_courses', lecturerCoursesRoute)

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}.`)
})
