import { asyncHandler } from '../middlewares/async'
import { getCategories } from '../utils/utils'
import { Course } from '../models/course'

const postSearchCourse = asyncHandler(async (req, res) => {
  const categoriesResult = await getCategories()
  const searchString = req.body.search
  await Course.find({ $text: { $search: searchString } }).exec(async function (err, courses) {
    if (err) throw err
    res.render('pages/course_search_list', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      categories: categoriesResult,
      searchString: searchString,
      courses: courses
    })
  })
})

export { postSearchCourse }
