const mongoose = require('mongoose');

const admMassageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
     
        lowercase: true,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
       
        required: true
    },
    applyForClass: {
        type: String,
        required: true
    },
    guardianName: {
        type: String,
        required: true
    },
    guardianContactNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    image: String // Store image URL
});

const AdmMassage = mongoose.model('AdmMassage', admMassageSchema);

module.exports = AdmMassage;
