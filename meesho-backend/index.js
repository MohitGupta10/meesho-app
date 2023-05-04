const express = require("express");
const Product = require("../meesho-backend/usermodel/usermodel");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (err) {
    console.log({ message: err });
  }
});
app.get("/productlist", async (req, res) => {
  try {
    const product = await Product.find()
    return res.status(200).send(product);
  } catch (err) {
    console.log({ Meassage: err });
  }
});
// app.delete("/:_id", async (req, res) => {
//   const product = await Product.findById(req.params._id);
//   return res.status(202).send(product);
// });
// app.get("/delete", async (req, res) => {
//   try {
//     const user = await Product.findById(req.params.id).lean().exec();
//     return res.status(200).send(user);
//   } catch (err) {
//     return res.status(400).send(err);
//   }
// });

module.exports = app;
