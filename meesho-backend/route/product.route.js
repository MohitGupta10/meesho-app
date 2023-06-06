const express = require("express");
const router = express.Router();
const ProductController = require("../controller/product.controller");

router.post("/product", ProductController.ProductCreate);

router.get("/productlist", ProductController.ProductGetlist);

module.exports=router