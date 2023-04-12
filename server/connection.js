const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = mongoose
  .connect(process.env.MONGO_URI, {dbName: 'test'})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = connectDB;
