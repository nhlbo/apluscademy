import express from 'express'
import * as profileController from '../controllers/profile'
import { upload } from '../utils/amazonS3'

const router = express.Router()

router.route('/').get(profileController.getProfile)
router.route('/edit/avatar').post(upload.single('file'), profileController.updateAvatar)

router.route('/edit/name').post(profileController.postChangeName)

router.route('/edit/password').post(profileController.postChangePassword)

router.route('/edit/email').post(profileController.postChangeEmail)

router.route('/verify').post(profileController.postVerifyOtp)

export { router as profileRoute }
