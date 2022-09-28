const mongoose = require('mongoose')

const studentschema = new mongoose.Schema({
    name : String,
    faculty : String,
    grades : [
        {
            profession : String,
            score : Number
        },
    ]
})

const model = mongoose.model('students',studentschema)

module.exports = model
