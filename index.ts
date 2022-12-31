import cookieParser from 'cookie-parser'
import express from 'express'
import flash from 'express-flash'
import session from 'express-session'
import mongoose from 'mongoose'
import passport from 'passport'
import flash from 'express-flash'
import cookieParser from 'cookie-parser'
<<<<<<< HEAD
import { authRoute, homeRoute, courseRoute, profileRoute, lecturerRoute } from './src/routes'
=======
import { authRoute, homeRoute, courseRoute, profileRoute, CategoryRoute } from './src/routes'
>>>>>>> c0cf458 (feat: add category)

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
app.use('/course', courseRoute)
app.use('/profile', profileRoute)
<<<<<<< HEAD
app.use('/lecturer', lecturerRoute)
=======
app.use('/category', CategoryRoute)
>>>>>>> c0cf458 (feat: add category)

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}.`)
})
