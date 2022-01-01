const CourseModel = require('../models/course')

class CourseController {

    static async createNewCourse(req, res) {
        try {
            await CourseModel.findOne({ title: req.body.title }).then((course) => {
                if (course) {
                    res.status(409).json({
                        message: 'course already exist'
                    })
                } else {
                    const newCourse = new CourseModel({
                        title: req.body.title,
                        description: req.body.description,
                        instructor: req.body.instructor,
                        scheduleDateTime: req.body.scheduleDateTime
                    });

                    newCourse.save()
                    return res.status(200).send({
                        message: 'course data created successfully',
                        data: newCourse
                    });
                }
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({ err: error })
        }
    }

    static async getCoursebyId(req, res) {
        CourseModel.findById({ _id: req.params.id_course }, (error, result) => {
            if (error) {
                return res.send({
                    message: 'no course found'
                })
            } else {
                res.status(200).send({
                    message: 'data retrieved',
                    data: result
                })
            }
        }).populate([
            "instructor",
        ])
    }

    static async updateCoursebyId(req, res) {
        CourseModel.findByIdAndUpdate({ _id: req.params.id_course }, {
            title: req.body.title,
            description: req.body.description,
            instructor: req.body.instructor,
            scheduleDateTime: req.body.scheduleDateTime
        }, (error, result) => {
            if (error) {
                console.log(error)
                return res.send({
                    message: 'no course found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update data course success',
                    data: req.body
                })
            }
        })
    }

    static async getAllCourses(req, res) {

        CourseModel.find({}, (error, result) => {
            if (error)
                return res.send(error);

            res.json(result)
        }).populate([
            "instructor"
        ])
    }

    static async deleteCoursebyId(req, res) {
        CourseModel.deleteOne({ _id: req.params.id_course }, (error, result) => {
            if (error) {
                res.status(400).send({
                    message: 'no id found, delete action failed'
                })
            } else {
                res.status(200).send({
                    message: `delete data ${req.params.id_course} successfully`
                })
            }
        })
    }

}


module.exports = CourseController