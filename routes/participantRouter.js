const express = require('express')

const ParticipantController = require("../controllers/participantController")

const router = express.Router()

// Create User
router.post('/', ParticipantController.createNewParticipant)
// Get User by ID
router.get('/:id_part', ParticipantController.getParticipantbyId)
// Update User
router.put('/:id_part', ParticipantController.updateParticipantbyId)
// List User
router.get('/', ParticipantController.getAllParticipants)
// Delete User
router.delete('/:id_part', ParticipantController.deleteParticipantbyId)

module.exports = router