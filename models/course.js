const mongoose = require('mongoose')

var Schema = mongoose.Schema

// Create schemas
const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        maxlength: 500,
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: "Instructors",
    },
    scheduleDateTime: {
        type: Date,
        required: true,
    }
})

const courseModel = mongoose.model('Courses', courseSchema)

module.exports = courseModel