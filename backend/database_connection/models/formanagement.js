const mongoose = require("mongoose");

// Define Schema for Image
const teaching = new mongoose.Schema({
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },

  title3: {
    type: String,
    required: true,
  }, 
  url: {
    type: String,
    required: true,
  },
});

// Create Model for Image
const For_Management = mongoose.model("For_Management", teaching);

module.exports = For_Management;
