const express = require("express"); // require the express package
const app = express(); // initialize your express app instance

const cors = require("cors");

app.use(cors()); // after you initialize your express app instance
require("dotenv").config();
const axios = require("axios"); // require the package
const mongoose = require("mongoose");
app.use(express.json());
const { getDatFromApi } = require("./controller/APiController");
const {
  postMethod,
  getFromPost,
  deleteMethod,
} = require("./controller/Curdoperation");
mongoose.connect("mongodb://localhost:27017/art", {
  useNewUrlParser: true,
});
app.get("/getDataAPI", getDatFromApi);
app.post("/postData", postMethod);
app.get("/getFromPost", getFromPost);
app.delete("/deletedata/:slug", deleteMethod);
app.get("/", (req, res) => {
  res.send("hello from test");
});
const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`listen to port ${PORT}`);
});
