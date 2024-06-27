const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({

    imageUrl: String,
    imageUrl1: String,
    imageUrl2: String,
    imageUrl3: String,
    imageUrl4: String



});


const imageSliderdynamic = mongoose.model('sliderschema', SliderSchema);
module.exports = imageSliderdynamic;