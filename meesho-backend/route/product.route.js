const express = require("express");
const router = express.Router();
const ProductController = require("../controller/product.controller");

router.post("/product", ProductController.ProductCreate);

router.get("/productlist", ProductController.ProductGetlist);

router.patch("/productlist/:id", ProductController.ProductUpdate);

router.post("/login", ProductController.LoginCreate);

module.exports = router;
