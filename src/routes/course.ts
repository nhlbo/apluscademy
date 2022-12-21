import express from 'express'

const router = express.Router()

router.route('/').get((req, res) => {
  res.render('pages/course', { isAuthenticated: req.isAuthenticated() })
})

export { router as courseRoute }
