const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/user");
const mongoose = require("mongoose");
dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("error"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("app is running now");
});
