const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const auth = require("./database_connection/authentication/auth");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5010;
//requiring the database connectivity with the mongoose
const mongoose_connectivity = require("./database_connection/db");
const User = require("./database_connection/models/adminLogin");
//requring the another schema for the event title change in the code
const news_and_events = require("./database_connection/models/eventscheme");
const imageSliderdynamic = require("./database_connection/models/sliderschema");
const TeachingStaff = require("./database_connection/models/forteachingstaff");
const AdmMassage = require("./database_connection/models/admissionmassage");
const working_staffs = require("./database_connection/models/working_staff");
const Administrative_a = require("./database_connection/models/administrative");
const Management = require("./database_connection/models/formanagement");
const Videos = require("./database_connection/models/videos");
//importing the prinicap massage schema

const p_massage = require("./database_connection/models/principal_massage");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// const upload = require('multer')
const path = require("path");
const fs = require("file-system"); // Add this line to import the fs module
const cookie = require("cookies");
const jwt = require("jsonwebtoken");
const ImageModel = require("./database_connection/models/imageModel");
const Images_new = require("./database_connection/models/sliderd");
const ImageGallary = require("./database_connection/models/ImageGallary");
const bodyParser = require("body-parser");
const { appendFile } = require("fs/promises");

app.use("/images", express.static("photos"));

//naking the authentication for the user verified or not

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static("public"));
app.use(
  session({
    secret: "secret", //a sccret key to encrypt the data
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    }, //set the session cookie properties
  })
);
app.use(
  cors({
    origin: "*", // Allow requests from any origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow specified methods
    allowedHeaders: "Content-Type", // Allow specifided headers
  })
);

app.use(bodyParser.json());
// Middleware to verify JWT token

app.get("/results", auth, (req, res) => {
  res.redirect(`http://localhost:3000/result`);
});

app.get("/hello", (req, res) => {
  res.send("hello world");
});

//making the data saved to databse

// User registration route

// Configure multer for handling file uploads
const uploadDirectory = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

//making the if user sucesfull login then only show the result page otherwise failed to show the page in the databes with the daa

app.get("/result", auth, (req, res) => {
  res.redirect(`http://localhost:3000/result`);
});

// User registration route
app.post("/api/users", upload.single("image"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      req.body;

    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user object
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,

      image: {
        data: req.file ? fs.readFileSync(req.file.path) : null,
        contentType: req.file ? req.file.mimetype : null,
      },
    });

    const token = await newUser.generateAuthToken();
    console.log("the token part is : " + token);

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 600000),
      httpOnly: true,
    });

    //setting the token or storing the toekn in the localstorage for the authencation in the frontend in the react js
    // localStorage.setItem("token",token);

    console.log(`this is the token part ${req.cookies.jwt}`);

    await newUser.save();

    // Save user to database

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/loginUser", async (req, res) => {
  try {
    const images = await User.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

app.delete("/loginUser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedImage = await User.findByIdAndDelete(id);
    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.sendStatus(204); // No Content
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ message: "Failed to delete image" });
  }
});

//getting the datas after user sucessfull login and showing it into the dashboard for easy authenticaton for the clients based

app.get("/log_out", auth, async (req, res) => {
  try {
    // logout from all devices
    req.user.tokens = [];

    res.clearCookie("jwt");
    console.log("logout successful...");
    await req.user.save();
    res.render("index");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/userLogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email and password input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // If user is not found or passwords don't match, return error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate a JWT with user's id
    const token = jwt.sign(
      { userId: user.id },
      "thenameischanansharmaclassnepalsecondaryschoolthename", // Use environment variable for the secret
      { expiresIn: "1h" }
    );

    // Return success and token
    res.status(200).json({ message: "Success", token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//making the authorization in the by callin with backend to the frontend in the react j s

const storage_massage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload_massage = multer({ storage: storage_massage });

// Nodemailer configuration
const transporter_massage = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "utamsharma57@gmail.com",
    pass: "dbsq lvct gjep lowe",
  },
});

// Routes
app.post(
  "/api/send-email",
  upload_massage.single("image"),
  async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        dateOfBirth,
        gender,
        applyForClass,
        guardianName,
        guardianContactNumber,
        subject,
        message,
      } = req.body;

      // Save form data to MongoDB
      const student = new AdmMassage({
        firstName,
        lastName,
        email,
        dateOfBirth,
        gender,
        applyForClass,
        guardianName,
        guardianContactNumber,
        subject,
        message,
        image: req.file ? req.file.path : "", // Save image path
      });

      // Assuming AdmMassage is your Mongoose model
      await student.save();

      // Send email
      await transporter_massage.sendMail({
        from: "utamsharma57@gmail.com", // Update with your sender email address
        to: "chandansharma575757@gmail.com",
        subject: "New Registration Form Submitted",
        text: `A new registration form has been submitted:\n\n${JSON.stringify(
          req.body,
          null,
          2
        )}`,
        attachments: req.file
          ? [{ filename: req.file.originalname, path: req.file.path }]
          : [],
      });

      res.status(200).send("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error");
    }
  }
);

app.get("/api/send-email", async (req, res) => {
  try {
    const images = await AdmMassage.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

app.delete("/api/send-email/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedImage = await AdmMassage.findByIdAndDelete(id);
    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.sendStatus(204); // No Content
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ message: "Failed to delete image" });
  }
});

app.get("/chandan", auth, (req, res) => {
  res.send("server is running with chandan sharma");
});

app.get("/server", auth, (req, res) => {
  res.send("server is connected with the api in the cloud");
});

//creating the another email sender with the email transporter in the node js

//creating the another email sender with the email transporter in the node js
const transporterr = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "utamsharma57@gmail.com",
    pass: "dbsq lvct gjep lowe",
  },
});

app.post("/api/send-contact-form", (req, res) => {
  const {
    fname,

    ContactNumber,
    fmessage,
  } = req.body;

  const mailOptionss = {
    from: "you-email@gmail.com",
    to: "utamsharma57@gmail.com",
    subject: "new contact form",
    text: `
        Name : ${fname},
        
        Contact Number : ${ContactNumber}
        Massage : ${fmessage}
        
        `,
  };

  transporterr.sendMail(mailOptionss, (error, info) => {
    if (error) {
      res.status(500).send("error sending contact form");
    } else {
      res.status(200).send("contact form submitted sucess...");
    }
  });
});

const SECRET_KEY =
  process.env.SECRET_KEY ||
  "thenameischanansharmaclassnepalsecondaryschoolthename";

app.post("/NewPassword/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(token, SECRET_KEY);

    if (decoded.id !== id) {
      return res
        .status(400)
        .json({ message: "Token does not match the user ID" });
    }

    // Hash the new password
    const hash = await bcrypt.hash(password, 10);

    // Update the user's password
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { password: hash },
      { new: true }
    );

    if (updatedUser) {
      return res.status(200).json({ message: "Password updated successfully" });
    } else {
      return res.status(400).json({ message: "Error updating password" });
    }
  } catch (error) {
    console.error("Error updating password:", error);
    const errorMessage =
      error.name === "JsonWebTokenError"
        ? "Invalid or expired token"
        : "Failed to update password";
    return res.status(400).json({ message: errorMessage });
  }
});

// Create transporter using environment variables
const transporterrr = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "utamsharma57@gmail.com",
    pass: "dbsq lvct gjep lowe",
  },
});

const tokenMap = {};

app.post("/forgotpassword", (req, res) => {
  const { email } = req.body;

  // Validate email format
  if (!email || !isValidEmail(email)) {
    return res.status(400).send({ message: "Invalid email address" });
  }

  // Find user by email
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Email not found" });
      }

      // Generate and store reset token securely
      const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1d" });

      // Construct reset password URL
      const resetPasswordURL = `https://nepalmodelsecondaryschool.com/admin/panel/login/forgot-password-link/Createpassword/${user._id}/${token}`;

      // Email options
      const mailOptions = {
        from: "utamsharma575757@gmail.com",
        to: email,
        subject: "Password Reset",
        text:
          `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
          `Please click on the following link, or paste it into your browser to complete the process:\n\n` +
          resetPasswordURL +
          "\n\n" +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };

      // Send email
      transporterrr.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send("Failed to send email");
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).send("Email sent successfully (if email exists)");
        }
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal server error");
    });
});

// Function to validate email format
function isValidEmail(email) {
  // Implement your email validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  res.send("done");
});

const storagee = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadss = multer({ storage: storagee });

// Middleware to serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/events_change", upload.single("image"), async (req, res) => {
  try {
    const { title1, paragraph } = req.body;

    // Validate required fields (title1 and paragraph)
    if (!title1 || !paragraph) {
      return res
        .status(400)
        .json({ success: false, error: "Title and paragraph are required" });
    }

    const { filename } = req.file;
    const imageurl = "/uploads/" + filename;

    const newImage = new news_and_events({ title1, paragraph, url: imageurl });

    // Save with error handling
    await newImage.save();
    res.json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Fetch events
app.get("/events_change", async (req, res) => {
  try {
    const events = await news_and_events.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Failed to fetch events");
  }
});

// Delete event
app.delete("/events_change/:eventId", async (req, res) => {
  const { eventId } = req.params;
  try {
    const deletedEvent = await news_and_events.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }
    res.status(204).end(); // No content response for successful deletion
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).send("Failed to delete event");
  }
});

//implementing the put method to updatw the existing the datas and the images

// Endpoint to handle password updat

//editing the principal massage and fetching the data from the backend using the node js and ract js

const storage_e = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload_d = multer({ storage: storage_e });

app.post("/images/upload", upload_d.single("image"), async (req, res) => {
  try {
    const { title1, title2, title3, paragraph } = req.body;
    const { filename } = req.file;
    const imageurl = "/uploads/" + filename;
    const newImage = new ImageModel({
      title1,
      title2,
      title3,
      paragraph,
      url: imageurl,
    });
    await newImage.save();
    res.json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Fetch all images
app.get("/images", async (req, res) => {
  try {
    const images = await ImageModel.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

app.delete("/images/delete/:imageId", async (req, res) => {
  const { imageId } = req.params;
  try {
    const image = await ImageModel.findById(imageId);
    if (!image) {
      return res.status(404).send("Image not found");
    }
    await ImageModel.findByIdAndDelete(imageId);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).send("Error deleting image");
  }
});

// Multer Storage Configuration
const storag = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploa = multer({ storage: storag });

app.post(
  "/slider_change",
  uploa.fields([
    { name: "image", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { image, image1, image2, image3, image4 } = req.files;

      const newSliderChange = new imageSliderdynamic({
        imageUrl: image ? `/uploads/${image[0].filename}` : null,
        imageUrl1: image1 ? `/uploads/${image1[0].filename}` : null,
        imageUrl2: image2 ? `/uploads/${image2[0].filename}` : null,
        imageUrl3: image3 ? `/uploads/${image3[0].filename}` : null,
        imageUrl4: image4 ? `/uploads/${image4[0].filename}` : null,
      });

      const savedSliderChange = await newSliderChange.save();
      res.json(savedSliderChange);
    } catch (error) {
      console.error("Error saving slider change images:", error);
      res.status(500).send("Failed to save slider change images");
    }
  }
);

// Read operation: Get all Slider Change images
app.get("/slider_change", async (req, res) => {
  try {
    const sliderChanges = await imageSliderdynamic.find();
    res.json(sliderChanges);
  } catch (error) {
    console.error("Error fetching slider change images:", error);
    res.status(500).send("Failed to fetch slider change images");
  }
});

// Update operation: Update a Slider Change image by ID
app.put("/slider_change/:id", async (req, res) => {
  const { id } = req.params;
  const { imageUrl, imageUrl1, imageUrl2, imageUrl3, imageUrl4 } = req.body;

  try {
    const updatedSliderChange = await imageSliderdynamic.findByIdAndUpdate(
      id,
      {
        imageUrl,
        imageUrl1,
        imageUrl2,
        imageUrl3,
        imageUrl4,
      },
      { new: true }
    );

    res.json(updatedSliderChange);
  } catch (error) {
    console.error("Error updating slider change image:", error);
    res.status(500).send("Failed to update slider change image");
  }
});

// Delete operation: Delete a Slider Change image by ID
app.delete("/slider_change/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await imageSliderdynamic.findByIdAndDelete(id);
    res.send("Slider change image deleted successfully");
  } catch (error) {
    console.error("Error deleting slider change image:", error);
    res.status(500).send("Failed to delete slider change image");
  }
});

//making for the image gallary

const storageImagegallary = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImagegallary = multer({ storage: storageImagegallary });

app.post(
  "/Imagegallary",
  uploadImagegallary.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      const { image } = req.files;

      const newSliderChange = new ImageGallary({
        imageUrl: image ? `/uploads/${image[0].filename}` : null,
      });

      const savedSliderChange = await newSliderChange.save();
      res.json(savedSliderChange);
    } catch (error) {
      console.error("Error saving slider change images:", error);
      res.status(500).send("Failed to save slider change images");
    }
  }
);

// Read operation: Get all Slider Change images
app.get("/Imagegallary", async (req, res) => {
  try {
    const sliderChanges = await ImageGallary.find();
    res.json(sliderChanges);
  } catch (error) {
    console.error("Error fetching slider change images:", error);
    res.status(500).send("Failed to fetch slider change images");
  }
});

// Update operation: Update a Slider Change image by ID


// Delete operation: Delete a Slider Change image by ID
app.delete("/Imagegallary/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await ImageGallary.findByIdAndDelete(id);
    res.send("Slider change image deleted successfully");
  } catch (error) {
    console.error("Error deleting slider change image:", error);
    res.status(500).send("Failed to delete slider change image");
  }
});

//this code for the taching staff details with fully backend using the node js and react js developed by chandan sharma

const storage_ee = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload_dd = multer({ storage: storage_ee });

app.post("/calling", upload_dd.single("image"), async (req, res) => {
  try {
    const { title1, title2, title3, paragraph } = req.body;
    const { filename } = req.file;
    const imageurl = "/uploads/" + filename;
    const newImage = new TeachingStaff({
      title1,
      title2,
      title3,
      paragraph,
      url: imageurl,
    });
    await newImage.save();
    res.json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Fetch all images
app.get("/calling", async (req, res) => {
  try {
    const images = await TeachingStaff.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

app.delete("/calling/:imageId", async (req, res) => {
  const { imageId } = req.params;

  try {
    await TeachingStaff.findByIdAndDelete(imageId);
    res.send("Slider change image deleted successfully");
  } catch (error) {
    console.error("Error deleting slider change image:", error);
    res.status(500).send("Failed to delete slider change image");
  }
});

//making the data fetching from the frontend making the dynamic webiste for the client for the woking staff

const storage_eee = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload_ddd = multer({ storage: storage_eee });

app.post("/calling_w", upload_ddd.single("image"), async (req, res) => {
  try {
    const { title1 } = req.body;
    const { filename } = req.file;
    const imageurl = "/uploads/" + filename;
    const newImage = new working_staffs({ title1, url: imageurl });
    await newImage.save();
    res.json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Fetch all images
app.get("/calling_w", async (req, res) => {
  try {
    const images = await working_staffs.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

app.delete("/calling_w/:imageId", async (req, res) => {
  const { imageId } = req.params;

  try {
    await working_staffs.findByIdAndDelete(imageId);
    res.send("Slider change image deleted successfully");
  } catch (error) {
    console.error("Error deleting slider change image:", error);
    res.status(500).send("Failed to delete slider change image");
  }
});

//writing the code for admin contact changes in the backend

const storage_eeee = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload_dddd = multer({ storage: storage_eeee });

app.post("/admin", upload_dddd.single("image"), async (req, res) => {
  try {
    const { title1, title2, title3 } = req.body;
    const { filename } = req.file;
    const imageurl = "/uploads/" + filename;
    const newImage = new Administrative_a({
      title1,
      title2,
      title3,
      url: imageurl,
    });
    await newImage.save();
    res.json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Fetch all images
app.get("/admin", async (req, res) => {
  try {
    const images = await Administrative_a.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

app.delete("/admin/:imageId", async (req, res) => {
  const { imageId } = req.params;

  try {
    await Administrative_a.findByIdAndDelete(imageId);
    res.send("Slider change image deleted successfully");
  } catch (error) {
    console.error("Error deleting slider change image:", error);
    res.status(500).send("Failed to delete slider change image");
  }
});

//writing the backend code to fetch data from the react frontend

const storage_eeeee = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload_ddddd = multer({ storage: storage_eeeee });

app.post("/management", upload_ddddd.single("image"), async (req, res) => {
  try {
    const { title1, title2, title3 } = req.body;
    const { filename } = req.file;
    const imageurl = "/uploads/" + filename;
    const newImage = new Management({ title1, title2, title3, url: imageurl });
    await newImage.save();
    res.json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Fetch all images
app.get("/management", async (req, res) => {
  try {
    const images = await Management.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

app.delete("/management/:imageId", async (req, res) => {
  const { imageId } = req.params;

  try {
    await Management.findByIdAndDelete(imageId);
    res.send("Slider change image deleted successfully");
  } catch (error) {
    console.error("Error deleting slider change image:", error);
    res.status(500).send("Failed to delete slider change image");
  }
});

//making the api request to update the videos into the database with the help of node js and the react  js

const storage_videos = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploading_videos = multer({ storage: storage_videos });

app.post("/uploading", uploading_videos.single("video"), async (req, res) => {
  try {
    const { title, description } = req.body;

    const videoUrl = req.file.path;
    const video = new Videos({
      title,
      description,
      videoUrl,
    });

    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ message: "error sending the videos ", error });
  }
});

//gettng the vieos that are uploded at client server

app.get("/videos", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(400).json({ message: "error getting the vidoes ", error });
  }
});

app.delete("/videos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Videos.findByIdAndDelete(id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: "Error deleting video", error });
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
