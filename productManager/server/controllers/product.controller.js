const { request } = require("express");
const { model } = require("mongoose");
const Product = require("../models/product.model");

const newProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json({ product: newProduct }))
        .catch((err) => res.json({ message: "uh oh", error: err }));
};

const showProducts = (req, res) => {
    Product.find({})
        .then((allProducts) => res.json(allProducts))
        .catch((err) => res.json({ message: "uh oh", error: err }));
};

// const showProducts = (req, res) => {
//     Product.find({})
//         .then((allProducts) => res.json({product: allProducts}))
//         .catch((err) => res.json({ message: "uh oh", error: err }));
// };

const showOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => res.json({ message: "uh oh", error: err }));
};

module.exports = {
    showProducts,
    showOneProduct,
    newProduct,
}

