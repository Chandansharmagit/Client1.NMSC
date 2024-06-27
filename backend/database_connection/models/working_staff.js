const mongoose = require('mongoose');

// Define Schema for Image
const imageSchema_w = new mongoose.Schema({
    title1: {
        type: String,
        required:true,

    },
  
 
    url: {
        type: String,
        required: true,
    },
   


});

// Create Model for Image
const Image_working_staff = mongoose.model('Image_working_staff', imageSchema_w);

module.exports = Image_working_staff;
