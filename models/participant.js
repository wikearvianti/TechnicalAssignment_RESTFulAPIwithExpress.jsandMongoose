const mongoose = require('mongoose')

var Schema = mongoose.Schema


// Create schemas
const participantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        maxlength: 500,
    },
    phone: {
        type: String,
        maxlength: 13,
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: "Courses",
    }]
})

const participantModel = mongoose.model('Participants', participantSchema)

module.exports = participantModel