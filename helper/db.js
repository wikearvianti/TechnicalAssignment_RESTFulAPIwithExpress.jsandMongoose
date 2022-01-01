const mongoose = require("mongoose")

async function connect_db(uri,option) {
    return mongoose.connect(uri,option)
}

module.exports  = {
    connect_db
}