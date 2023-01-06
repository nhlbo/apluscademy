import { asyncHandler } from '../middlewares/async'
import { Category } from '../models/category'
import { Course } from '../models/course'

const getHome = asyncHandler(async (req, res) => {
  await Category.find({}).exec(async function (err, categories) {
    if (err) throw err
    const categoriesResult = await Promise.all(
      categories.map(async (category) => {
        const courses = await Promise.all(
          category.courses.map((courseId) => {
            return Course.findById(courseId)
          })
        )
        const categoryName = category.name

        return { name: categoryName, courses, _id: category.id }
      })
    )
    console.log(categoriesResult)
    res.render('pages/index', {
      isAuthenticated: req.isAuthenticated(),
      avatar: req.cookies.avatar,
      categories: categoriesResult
    })
  })
})

export { getHome }
