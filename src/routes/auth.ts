import express from 'express'
import passport from 'passport'

import * as authController from '../controllers/auth'

const router = express.Router()

router.route('/register').get(authController.isNotAuthenticated, authController.getRegister)
router.route('/register').post(authController.postRegister)
router.route('/verify').get(authController.isNotAuthenticated, authController.getVerifyEmail)
router.route('/verify').post(authController.isNotAuthenticated, authController.postVerifyEmail)
router.route('/login').get(authController.isNotAuthenticated, authController.getLogin)
router.route('/login/password').post(authController.postLoginPassword)
router.route('/logout').post(authController.postLogout)
router.route('/oauth2/redirect/facebook').get(passport.authenticate('facebook'))
router
  .route('/login/facebook/callback')
  .get(passport.authenticate('facebook', { failureRedirect: '/login' }), (_, res) => {
    res.redirect('/')
  })
router.route('/oauth2/redirect/google').get(passport.authenticate('google', { scope: ['profile'] }))
router
  .route('/login/google/callback')
  .get(passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }), (_, res) => {
    res.redirect('/')
  })

export { router as authRoute }
