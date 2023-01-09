import { asyncHandler } from '../middlewares/async'
import { getCategories } from '../utils/utils'
import { Course } from '../models/course'

const getHome = asyncHandler(async (req, res) => {
  const categoriesResult = await getCategories()
  const mostViewedCourses = await Course.find({}).limit(10).sort({ viewCount: -1 })
  const newestCourses = await Course.find({}).limit(10).sort({ dateCreated: -1 })
  res.render('pages/index', {
    isAuthenticated: req.isAuthenticated(),
    avatar: req.cookies.avatar,
    categories: categoriesResult,
    mostViewedCourses: mostViewedCourses,
    newestCourses: newestCourses
  })
})

export { getHome }
