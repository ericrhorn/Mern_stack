const { request } = require("express");
const { model } = require("mongoose");
const Author = require("../models/author.model");

const createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => res.status(400).json(err));
};

const showAuthors = (req, res) => {
  Author.find({}).collation({locale: "en", strength: 2}).sort({authorName:1})
    .then((allAuthors) => res.json(allAuthors))
    .catch((err) => res.status(400).json(err));
};

const showOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params._id })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => res.status(400).json(err));
};

const updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) => res.status(400).json(err));
};

const deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  showAuthors,
  showOneAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
