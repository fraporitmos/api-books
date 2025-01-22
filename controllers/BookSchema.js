const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  editorial: String,
  description: String,
  price: Number,
  img: String,
  discount: Number,
  type: String,
});

module.exports = { BookSchema };
