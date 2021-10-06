const { request } = require("express");
const { model } = require("mongoose");
const Product = require("../models/product.model");

const newProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json({ product: newProduct }))
        .catch((err) => res.json({ message: "uh oh cant make a new product", error: err }));
};

const showProducts = (req, res) => {
    Product.find({})
        .then((allProducts) => res.json(allProducts))
        .catch((err) => res.json({ message: "uh oh cant show products", error: err }));
};

const showOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => res.json({ message: "uh oh... cant show a product", error: err }));
};

const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({ message: "Something went wrong with edit", error: err }));
};

const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(result => res.json(result))
        .catch(err => res.json({ message: "Something went wrong with delete", error: err }));
};

module.exports = {
    showProducts,
    showOneProduct,
    newProduct,
    updateProduct,
    deleteProduct,
}

