import express from 'express'

const router = express.Router()

router.route('/').get((_, res) => {
  res.render('pages/index')
})

export { router as homeRoute }
