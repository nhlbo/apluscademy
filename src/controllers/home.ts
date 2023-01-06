import { asyncHandler } from '../middlewares/async'
import { getCategories } from '../utils/utils'

const getHome = asyncHandler(async (req, res) => {
  const categoriesResult = await getCategories()
  res.render('pages/index', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    categories: categoriesResult
  })
})

export { getHome }
