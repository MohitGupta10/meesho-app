const express = require("express");
// const exportedSchemas = require("../meesho-backend/usermodel/usermodel");
// const Product = exportedSchemas.Product;
// const Login = exportedSchemas.Login;
const connect = require("../meesho-backend/db/db");
const app = express();
const userRoute=require("./route/product.route")
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/",userRoute)
// app.post("/product", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     return res.status(200).send(product);
//   } catch (err) {
//     console.log({ message: err });
//   }
// });
// app.get("/productlist", async (req, res) => {
//   try {
//     const product = await Product.find();
//     return res.status(200).send(product);
//   } catch (err) {
//     console.log({ Meassage: err });
//   }
// });

// app.patch(`/productlist/:id`, async (req, res) => {
//   // console.log("id:", req.params.id);
//   const id = req.params.id;
//   console.log("id:",id)
//   try {
//     const newValue = {
//       id: req.body.id,
//       price: req.body.price,
//       description: req.body.description,
//     };

//     const updateOne = await Product.findByIdAndUpdate(
//       id,
//       {
//         id: newValue.id,
//         price: newValue.price,
//         description: newValue.description,
//       },
//       { new: true }
//     );
//     console.log(updateOne);
//     if (!updateOne) {
//       return res.status(404).send("Data not found");
//     }
//     res.send(updateOne);
//   } catch (err) {
//     console.log({ Meassage: err });
//   }
// });

// app.post("/login", (req, res) => {
//   const { mobileNo, password } = req.body;
//   console.log(req.body);
//   Login.findOne({ mobileNo: mobileNo }, (err, user) => {
//     if (user) {
//       res.send({ meassage: "User is Alreaddy login" });
//     } else {
//       const user = new Login({
//         mobileNo,
//         password,
//       });
//       user.save((err) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send({ meassage: "Successfully login " });
//         }
//       });
//     }
//   });
// });
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

const port = process.env.port || 5555;

app.listen(port, async () => {
  await connect();
  console.log("port is listening 5555");
});

// module.exports = app;
