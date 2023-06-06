const exportedSchemas = require("../usermodel/usermodel");
const Product = exportedSchemas.Product;

const ProductCreate = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (err) {
    console.log({ message: err });
  }
};

const ProductGetlist = async (req,res) => {
  try {
    const product = await Product.find();
    return res.status(200).send(product);
  } catch (err) {
    console.log({ Meassage: err });
  }
};
module.exports = {
  ProductCreate,
  ProductGetlist,
};
