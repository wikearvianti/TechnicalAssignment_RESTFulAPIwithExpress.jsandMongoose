const express = require('express')

const CourseController = require("../controllers/courseController")

const router = express.Router()

// Create User
router.post('/', CourseController.createNewCourse)
// Get User by ID
router.get('/:id_course', CourseController.getCoursebyId)
// Update User
router.put('/:id_course', CourseController.updateCoursebyId)
// List User
router.get('/', CourseController.getAllCourses)
// Delete User
router.delete('/:id_course', CourseController.deleteCoursebyId)

module.exports = router