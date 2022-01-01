const InstructorModel = require('../models/instructor')

class InstructorController {

    static async createNewInstructor(req, res) {
        try {
            await InstructorModel.findOne({ name: req.body.name }).then((inst) => {
                if (inst) {
                    res.status(409).json({
                        message: 'instructor already exist'
                    })
                } else {
                    const newInstructor = new InstructorModel({
                        name: req.body.name,
                        dateOfBirth: req.body.dateOfBirth,
                        location: req.body.location
                    });

                    newInstructor.save()
                    return res.status(200).send({
                        message: 'instructor data created successfully',
                        data: newInstructor
                    });
                }
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({ err: error })
        }
    }

    static async getInstructorbyId(req, res) {
        InstructorModel.findById({ _id: req.params.id_inst }, (error, result) => {
            if (error) {
                return res.send({
                    message: 'no instructor found'
                })
            } else {
                res.status(200).send({
                    message: 'data retrieved',
                    data: result
                })
            }
        })
    }

    static async updateInstructorbyId(req, res) {
        InstructorModel.findByIdAndUpdate({ _id: req.params.id_inst }, {
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            location: req.body.location
        }, (error, result) => {
            if (error) {
                console.log(error)
                return res.send({
                    message: 'no instructur found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update data instructor success',
                    data: result
                })
            }
        })
    }

    static async getAllInstructors(req, res) {

        InstructorModel.find({}, (error, result) => {
            if (error)
                return res.send(error);

            res.json(result)
        })
    }

    static async deleteInstructorbyId(req, res) {
        InstructorModel.deleteOne({ _id: req.params.id_inst }, (error, result) => {
            if (error) {
                res.status(400).send({
                    message: 'no id found, delete action failed'
                })
            } else {
                res.status(200).send({
                    message: `delete data ${req.params.id_inst} successfully`
                })
            }
        })
    }

}


module.exports = InstructorController