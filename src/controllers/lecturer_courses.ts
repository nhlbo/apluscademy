import { asyncHandler } from '../middlewares/async'
import { getCategories } from '../utils/utils'
import { Course } from '../models/course'
import { User } from '../models/user'

const getLecturerCourses = asyncHandler(async (req, res) => {
  const categoriesResult = await getCategories()
  const lecturerId = req.user!.id
  const user = await User.findById(lecturerId).exec()
  console.log(lecturerId)
  await Course.find({ lecturer: lecturerId }).exec(async function (err, courses) {
    if (err) throw err
    console.log(courses)
    res.render('pages/lecturer_courses', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      categories: categoriesResult,
      userName: user!.name,
      courses: courses
    })
  })
})

export { getLecturerCourses }
