const express = require('express')
const InstructorController = require("../controllers/instructorController")
const router = express.Router()

// Create User
router.post('/', InstructorController.createNewInstructor)
// Get User by ID
router.get('/:id_inst', InstructorController.getInstructorbyId)
// Update User
router.patch('/:id_inst', InstructorController.updateInstructorbyId)
// List User
router.get('/', InstructorController.getAllInstructors)
// Delete User
router.delete('/:id_inst', InstructorController.deleteInstructorbyId)

module.exports = router