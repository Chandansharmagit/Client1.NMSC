// const islogin = async (req, res, next) => {
//     try {
//         if (!req.session.user_id) {
//             return res.redirect('http://localhost:3000/admin/panel/login'); // Redirect to login page if user is not logged in
//         }
//     } catch (error) {
//         console.error("Error in islogin middleware:", error);
//         return res.status(500).send("Internal Server Error");
//     }
//     next(); // Move to the next middleware
// }

// const islogout = async (req, res, next) => {
//     try {
//         if (req.session.user_id) {
//             return res.redirect('http://localhost:3000/'); // Redirect to dashboard if user is already logged in
//         }
//     } catch (error) {
//         console.error("Error in islogout middleware:", error);
//         return res.status(500).send("Internal Server Error");
//     }
//     next(); // Move to the next middleware
// }

// module.exports = {
//     islogin,
//     islogout,
// }
