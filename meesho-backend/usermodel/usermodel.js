const mongoose = require("mongoose");

const ProductItem = mongoose.Schema({
  id: { type: Number, required: true },
  imageurl: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: String, required: true },
  rating: { type: String, required: true },
  description: { type: String, required: true },
});

const LoginItem = mongoose.Schema({
  mobileNo: { type: String, required: true },
  password: { type: String, required: true },
});

const Product = mongoose.model("Product", ProductItem);

const Login = mongoose.model("Login", LoginItem);

const exportedSchemas = {
  Product,
  Login,
};
module.exports = exportedSchemas;
