const mongoose = require('mongoose')

// Create schemas
const instructorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    location: {
        type: String
    }
})

const instructorModel = mongoose.model('Instructors', instructorSchema)

module.exports = instructorModel