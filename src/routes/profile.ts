import express from 'express'
import * as profileController from '../controllers/profile'

const router = express.Router()

router.route('/').get(profileController.getProfile)
router.route('/edit/avatar').post(profileController.updateAvatar)

router.route('/edit/name').get(profileController.getChangeName)
router.route('/edit/name').post(profileController.postChangeName)

router.route('/edit/password').get(profileController.getChangePassword)
router.route('/edit/password').post(profileController.postChangePassword)

export { router as profileRoute }
