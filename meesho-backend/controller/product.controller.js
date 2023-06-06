const productService = require("../service/productservice");
const ProductCreate = async (req, res) => {
  const productdata = req.body;
  const product = await productService.productcreate(productdata);
  return res.status(201).send(product);
};

const ProductGetlist = async (req, res) => {
  const product = await productService.productgetservice();
  return res.status(200).send(product);
};
const ProductUpdate = async (req, res) => {
  const id = req.params.id;
  const productsId = req.body;
  const updateproduct = await productService.productUpdatedservice(
    productsId,
    id
  );
  return res.status(201).send(updateproduct);
};

const LoginCreate = async (req, res) => {
  const { mobileNo, password } = req.body;
  const user = await productService.login(mobileNo, password);

  if (user) {
    return res.status(409).json({ meassage: "User already exit" });
  }
  return res.status(201).json({ messsage: "User succesfully login " });
  // try {
  //   const { mobileNo, password } = req.body;

  //   const user = Login.findOne({ mobileNo });
  //   if (user) {
  //     return res.status(409).json({ message: "User already exit " });
  //   }

  //   if (user.password !== password) {
  //     return res.status(401).json({ message: "Invalid password" });
  //   }
  //   return res.status(200).json({ message: "Login successful" });
  // } catch (err) {
  //   return res.status(500).json({ message: "Internal server error" });
  // }
};
module.exports = {
  ProductCreate,
  ProductGetlist,
  ProductUpdate,
  LoginCreate,
};
