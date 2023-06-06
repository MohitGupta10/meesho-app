const exportedSchemas = require("../usermodel/usermodel");

const Product = exportedSchemas.Product;

const Login = exportedSchemas.Login;
const productcreate = async (productdata) => {
  const product = await Product.create(productdata);
  if (product) {
    return product;
  } else {
    console.log("Data not created ");
  }
};
const productgetservice = async () => {
  const product = await Product.find();
  return product;
};

const productUpdatedservice = async (productsId, id) => {
  // console.log(id);
  const newValue = {
    id: productsId.id,
    price: productsId.price,
    description: productsId.description,
    imageurl: productsId.imageurl,
    discount: productsId.discount,
    brand: productsId.brand,
    rating: productsId.rating,
  };
  //   console.log(newValue.price);
  const updateproduct = await Product.findByIdAndUpdate(
    id,
    {
      id: newValue.id,
      price: newValue.price,
      description: newValue.description,
      imageurl: newValue.imageurl,
      discount: newValue.discount,
      brand: newValue.brand,
      rating: newValue.rating,
    },
    { new: true }
  );
  if (!updateproduct) {
    return res.status(404).send("Data not found");
  }
  return updateproduct;
};

const login = async (mobileNo, password) => {
  //   console.log(mobileNo, password);
  const user = await Login.findOne({ mobileNo });
};
module.exports = {
  productcreate,
  productgetservice,
  productUpdatedservice,
  login,
};
