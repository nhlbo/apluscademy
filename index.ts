import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import { authRoute, homeRoute } from './src/routes'

const app = express()
const PORT = process.env.PORT || 3000
const MONGO_DB_URL = process.env.MONGO_DB_URL || ''

mongoose.connect(MONGO_DB_URL).then(() => console.log('Connected to the database.'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(homeRoute)
app.use(authRoute)
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}.`)
})
