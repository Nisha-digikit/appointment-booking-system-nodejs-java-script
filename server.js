const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
// const { connect } = require("http2");

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error"));

app.use("/api/doctors", require("./routes/docRouts"));

app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/usersDoctors", require("./routes/userDocRoutes"));

app.listen(PORT, () => console.log(`Server started at ${PORT}...`));
