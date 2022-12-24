import { asyncHandler } from '../middlewares/async'

const getHome = asyncHandler(async (req, res) => {
  res.render('pages/index', { isAuthenticated: req.isAuthenticated() })
})

export { getHome }
