const mongoose = require('mongoose');
const db = require("./db_connection")
const productSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: Object,
});

module.exports = mongoose.model('Product', productSchema);
