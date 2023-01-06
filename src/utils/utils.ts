import { Category } from '../models/category'
import { Course } from '../models/course'

const getCategories = async () => {
  const categories = await Category.find({})
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
  return categoriesResult
}

export { getCategories }
