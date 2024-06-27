const jwt = require("jsonwebtoken");

const User = require("../models/adminLogin");


const auth = async (req, res, next) => {
    try {
        //requesting token with cookies 
        const token = req.cookies.jwt;
        //varifying the token 
        const verification = jwt.verify(token, "thenameischanansharmaclassnepalsecondaryschoolthename",{ expiresIn: '1m' });
        //consoling the verification
       // console.log(verification);

        //matching the user id with verification 
        const username = await User.findOne({ _id: verification._id });
        //consoling the username in the console 
        //console.log(username);

        //now requesting token from the user
        req.token = token;
        req.user = username;
        next();

    } catch (error) {
        

        res.redirect('https://nepalmodelsecondaryschool.com/admin/panel/login')

    }
}

module.exports = auth;