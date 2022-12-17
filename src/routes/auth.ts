import express from 'express'

import * as authController from '../controllers/auth'

const router = express.Router()

router.route('/register').post(authController.postRegister)
router.route('/login').get(authController.getLogin)
router.route('/login/password').post(authController.postLoginPassword)

export { router as authRoute }
