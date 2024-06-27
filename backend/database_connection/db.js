const mongoose = require('mongoose');



const db = (process.env.databaseconnection)


mongoose.connect(db, {
    // useNewUrlParser: true,
    // // useCreateIndex: true,
    // useUnifiedTopology: true, 
    // // useFindAndModified: false
}).then(() => {
    console.log("database has connected successful")
}).catch((error) => {
    console.log(error + "failed to connect database")
})

module.exports = db;


//  mongodb+srv://chandansharma575757:S8hoZMQfpO17SN0f@cluster0.gy4tvha.mongodb.net/nepal_mod?retryWrites=true&w=majority&appName=Cluster0'