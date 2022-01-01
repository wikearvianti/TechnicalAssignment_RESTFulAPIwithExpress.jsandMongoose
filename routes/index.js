const express = require('express')
const intructorRoutes = require('./instructorRouter')
const courseRoutes = require('./courseRouter')
const participantRoutes = require('./participantRouter')

const router = express.Router()

router.get('/ping', (req, res) => {
    const ready = {
        status: "server is ready"
    }

    res.status(200).send(ready)
})
router.use("/instructors", intructorRoutes)
router.use("/courses", courseRoutes)
router.use("/participants", participantRoutes)


module.exports = router