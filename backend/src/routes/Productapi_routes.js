const express = require("express");
const get_product_router = express.Router();
const getProducts = require("../controllers/Product.ctrl");

get_product_router.get("/", getProducts);

module.exports = get_product_router;
