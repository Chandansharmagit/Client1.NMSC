const mongoose = require('mongoose');

//implementing the mongoose to edit the massage from the prinicpal

const p_schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true
    }
})

//eporting the principal schema 

const pmassge = mongoose.model("Pmassage", p_schema);
module.exports = pmassge;