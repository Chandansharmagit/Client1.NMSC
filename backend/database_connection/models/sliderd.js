// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  alt: {
    type: String
  }
});

const Image_new_data = mongoose.model('Image_for_slider', imageSchema);

module.exports = Image_new_data;
