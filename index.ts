import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import passport from 'passport'
import { authRoute, homeRoute } from './src/routes'

const app = express()
const PORT = process.env.PORT || 3000
const MONGO_DB_URL = process.env.MONGO_DB_URL || ''

mongoose.connect(MONGO_DB_URL).then(() => console.log('Connected to the database.'))
let SQLiteStore = require('connect-sqlite3')(session)

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore()
  })
)
app.use(passport.authenticate('session'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(homeRoute)
app.use(authRoute)
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}.`)
})
