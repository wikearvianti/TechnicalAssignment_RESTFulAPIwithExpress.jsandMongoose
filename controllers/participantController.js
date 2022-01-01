const ParticipantModel = require('../models/participant')

class ParticipantController {

    static async createNewParticipant(req, res) {
        try {
            await ParticipantModel.findOne({ title: req.body.title }).then((participant) => {
                if (participant) {
                    res.status(409).json({
                        message: 'participant already exist'
                    })
                } else {
                    const newParticipant = new ParticipantModel({
                        name: req.body.name,
                        dateOfBirth: req.body.dateOfBirth,
                        email: req.body.email,
                        phone: req.body.phone,
                        courses: req.body.courses,
                    });

                    newParticipant.save()
                    return res.status(200).send({
                        message: 'participant data created successfully',
                        data: newParticipant
                    });
                }
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({ err: error })
        }
    }

    static async getParticipantbyId(req, res) {
        ParticipantModel.findById({ _id: req.params.id_part }, (error, result) => {
            if (error) {
                return res.send({
                    message: 'no participant found'
                })
            } else {
                res.status(200).send({
                    message: 'data retrieved',
                    data: result
                })
            }
        }).populate([
            "courses"
        ])
    }

    static async updateParticipantbyId(req, res) {
        ParticipantModel.findByIdAndUpdate({ _id: req.params.id_part }, {
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            email: req.body.email,
            phone: req.body.phone,
            courses: req.body.courses,
        }, (error, result) => {
            if (error) {
                console.log(error)
                return res.send({
                    message: 'no participant found, update action failed'
                })
            } else {
                res.status(200).send({
                    message: 'update data participant success',
                    data: req.body
                })
            }
        })
    }

    static async getAllParticipants(req, res) {

        ParticipantModel.find({}, (error, result) => {
            if (error)
                return res.send(error);

            res.json(result)
        }).populate([
            "courses"
        ])
    }

    static async deleteParticipantbyId(req, res) {
        ParticipantModel.deleteOne({ _id: req.params.id_part }, (error, result) => {
            if (error) {
                res.status(400).send({
                    message: 'no id found, delete action failed'
                })
            } else {
                res.status(200).send({
                    message: `delete data ${req.params.id_part} successfully`
                })
            }
        })
    }

}


module.exports = ParticipantController