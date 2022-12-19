import express from 'express'

const router = express.Router()

router.route('/').get((req, res) => {
  res.render('pages/index', { isAuthenticated: req.isAuthenticated() })
})

export { router as homeRoute }
