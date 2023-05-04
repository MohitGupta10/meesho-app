const mongoose = require("mongoose");

const ProductItem = mongoose.Schema({
  id: { type: Number },
  imageurl: { type: String },
  brand: { type: String },
  price: { type: Number },
  discount: { type: Number },
  rating: { type: String },
  description: { type: String },
});

const Product = mongoose.model("Product", ProductItem);

module.exports = Product;
