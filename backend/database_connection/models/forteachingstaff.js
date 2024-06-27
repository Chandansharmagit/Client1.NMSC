const mongoose = require('mongoose');

// Define the schema for your image data
const teachingStaffSchema = new mongoose.Schema({
    title1: {
        type: String,
        required: true
    },
    title2: {
        type: String,
        required: true
    },
    paragraph: {
        type: String,
        required: true
    },
    title3: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// Create the model based on the schema
const TeachingStaff = mongoose.model('TeachingStaff', teachingStaffSchema);

module.exports = TeachingStaff;
