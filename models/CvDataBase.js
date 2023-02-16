const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const schema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  vacant: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const CvDataBase = mongoose.model("CvDataBase", schema);
module.exports = { CvDataBase };
