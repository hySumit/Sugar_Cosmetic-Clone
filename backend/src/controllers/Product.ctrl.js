const Product = require("../models/Product.model");

const getProducts = async (req, res) => {
    try {
        const Data = await Product.find(req.query);
        res.status(200).json({ Data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getProducts;
