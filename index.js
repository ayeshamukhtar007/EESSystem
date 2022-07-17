const express = require("express");
const app = express();
var logger = require('morgan');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const cameraRoute = require("./routes/camera");
const serviceRoute = require("./routes/service");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const alertRoute = require("./routes/alert");

const cors = require("cors");
const { response } = require("express");
dotenv.config();
app.use(logger('dev'));
mongoose
  .connect("mongodb+srv://FYP:fyp@cluster0.38nw6.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.get("/", (req,res)=>{
  let response="hello";
  res.status(200).json(response);
});
app.use("/api/auth", authRoute);
// app.use("/api/camera", cameraRoute);
// app.use("/api/admin", adminRoute);
// app.use("/api/user", userRoute);
// app.use("/api/alert", alertRoute);
// app.use("/api/service", serviceRoute);
// app.listen(process.env.PORT || 5000, () => {
//     console.log("Backend server is running!");
//   });
module.exports = app;