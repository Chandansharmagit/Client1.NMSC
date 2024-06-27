const mongoose = require('mongoose');

// Define Schema for Image
const imageSchemaa = new mongoose.Schema({
    title1: {
        type: String,
        required:true,

    },
    title2: {
        type: String,
        required:true,


    },
  
    title3: {
        type: String,
        required:true,

    },
    url: {
        type: String,
        required: true,
    },
   


});

// Create Model for Image
const For_administrative = mongoose.model('For_administrative', imageSchemaa);

module.exports = For_administrative;
