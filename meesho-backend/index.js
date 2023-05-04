const express = require("express");
const Product = require("../meesho-backend/usermodel/usermodel");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/product",async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.status(201).send(product);
    } catch (err) {
      console.log({ message: err });
    }
  });
  app.get("/productlist",async(req,res)=>{
    try{
        const product=await Product.find().lean().exec(); 
        return res.status(200).send(product)
    }catch(err){
       console.log({Meassage:err})
    }
  })

module.exports = app;
