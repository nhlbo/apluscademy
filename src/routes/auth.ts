import express from 'express'
import passport from 'passport'

import * as authController from '../controllers/auth'

const router = express.Router()

router.route('/register').post(authController.postRegister)
router.route('/login').get(authController.getLogin)
router.route('/login/password').post(authController.postLoginPassword)
router.route('/oauth2/redirect/facebook').get(passport.authenticate('facebook'))
router
  .route('/login/facebook/callback')
  .get(passport.authenticate('facebook', { failureRedirect: '/login' }), (_, res) => {
    res.redirect('/')
  })
router.route('/oauth2/redirect/google').get(passport.authenticate('google'))
router
  .route('/login/google/callback')
  .get(passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }), (_, res) => {
    res.redirect('/')
  })

router.route('/logout').post(authController.postLogout)

export { router as authRoute }
