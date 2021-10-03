const { model } = require("mongoose");
const Product = require("../models/product.model");

const showProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json({product: allProducts}))
        .catch((err) => res.json({ message: "uh oh", error: err }));
};

const newProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json({ product: newProduct }))
        .catch((err) => res.json({ message: "uh oh", error: err }));
};

module.exports = {
    showProducts,
    newProduct,
}

